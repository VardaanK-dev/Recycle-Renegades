import { NextResponse } from "next/server";

interface FeedbackPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function sanitize(input: string): string {
  return input.replace(/[<>]/g, "").trim().slice(0, 2000);
}

function validate(payload: Record<string, unknown>): { field: string; error: string } | null {
  if (typeof payload.name !== "string" || payload.name.trim().length < 2) {
    return { field: "name", error: "Name must be at least 2 characters." };
  }
  if (typeof payload.email !== "string" || !emailPattern.test(payload.email.trim())) {
    return { field: "email", error: "A valid email address is required." };
  }
  if (typeof payload.subject !== "string" || payload.subject.trim().length < 3) {
    return { field: "subject", error: "Subject must be at least 3 characters." };
  }
  if (typeof payload.message !== "string" || payload.message.trim().length < 10) {
    return { field: "message", error: "Message must be at least 10 characters." };
  }
  return null;
}

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get("content-type") ?? "";
    if (!contentType.includes("application/json")) {
      return NextResponse.json(
        { error: "Unsupported media type." },
        { status: 415 },
      );
    }

    const body = (await request.json()) as Record<string, unknown>;

    if (body === null || typeof body !== "object") {
      return NextResponse.json(
        { error: "Invalid request body." },
        { status: 400 },
      );
    }

    if (
      typeof body._honey === "string" &&
      body._honey.trim().length > 0
    ) {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    const invalid = validate(body);
    if (invalid) {
      return NextResponse.json(
        { error: "Validation failed.", field: invalid.field, message: invalid.error },
        { status: 422 },
      );
    }

    const payload: FeedbackPayload = {
      name: sanitize(body.name as string),
      email: sanitize(body.email as string),
      subject: sanitize(body.subject as string),
      message: sanitize(body.message as string),
    };

    const endpoint =
      process.env.FEEDBACK_FORM_ENDPOINT ?? process.env.CONTACT_FORM_ENDPOINT;

    if (!endpoint) {
      console.error(
        "Feedback endpoint error: FEEDBACK_FORM_ENDPOINT (or CONTACT_FORM_ENDPOINT) is not configured.",
      );
      return NextResponse.json(
        { error: "Feedback delivery is not configured." },
        { status: 503 },
      );
    }

    const forwarded = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!forwarded.ok) {
      return NextResponse.json(
        { error: "Failed to deliver message." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    console.error("Feedback endpoint error:", error);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 },
    );
  }
}