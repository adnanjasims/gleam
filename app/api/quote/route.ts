import { NextResponse } from "next/server";

const QUOTE_EMAIL = "gleampayments@gmail.com";
const FORMSUBMIT_URL = `https://formsubmit.co/ajax/${QUOTE_EMAIL}`;

type QuoteBody = {
  name?: unknown;
  phone?: unknown;
  email?: unknown;
  address?: unknown;
  services?: unknown;
  pricingPlan?: unknown;
  details?: unknown;
};

function asTrimmedString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  let body: QuoteBody;
  try {
    body = (await request.json()) as QuoteBody;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const name = asTrimmedString(body.name);
  const phone = asTrimmedString(body.phone);
  const email = asTrimmedString(body.email);
  const address = asTrimmedString(body.address);
  const pricingPlan = asTrimmedString(body.pricingPlan);
  const details = asTrimmedString(body.details);
  const services = Array.isArray(body.services)
    ? body.services
        .filter((s): s is string => typeof s === "string")
        .map((s) => s.trim())
        .filter(Boolean)
    : [];

  if (!name || !phone || !email || !address || !pricingPlan || services.length === 0) {
    return NextResponse.json(
      { error: "Missing required quote fields." },
      { status: 400 },
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "Please provide a valid email address." },
      { status: 400 },
    );
  }

  const message = [
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Email: ${email}`,
    `Address: ${address}`,
    `Services: ${services.join(", ")}`,
    `Pricing plan: ${pricingPlan}`,
    `Details: ${details || "(none)"}`,
  ].join("\n");

  try {
    const formsubmitRes = await fetch(FORMSUBMIT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        address,
        services: services.join(", "),
        pricingPlan,
        details: details || "(none)",
        message,
        _subject: `GleamCo quote request from ${name}`,
        _replyto: email,
        _template: "table",
        _honey: "",
      }),
    });

    if (!formsubmitRes.ok) {
      const errText = await formsubmitRes.text().catch(() => "");
      console.error("FormSubmit error:", formsubmitRes.status, errText);
      return NextResponse.json(
        { error: "Unable to send quote request right now." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Quote submit failed:", err);
    return NextResponse.json(
      { error: "Unable to send quote request right now." },
      { status: 502 },
    );
  }
}
