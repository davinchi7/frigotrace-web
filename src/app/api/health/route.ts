import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export function GET() {
  const body = {
    ok: true,
    service: "frigotrace-web",
    nodeEnv: process.env.NODE_ENV ?? "development",
    timestamp: new Date().toISOString(),
  };

  return NextResponse.json(body, {
    status: 200,
    headers: { "Cache-Control": "no-store" },
  });
}