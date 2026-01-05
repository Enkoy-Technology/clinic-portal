import { NextRequest, NextResponse } from "next/server";

const API_BASE_URL = "https://demo-oxua.onrender.com/api";

// Increase timeout for this route (in seconds)
// Netlify allows up to 26 seconds for free tier, 60 seconds for pro
export const maxDuration = 60;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const targetUrl = `${API_BASE_URL}/messages/create/`;
    console.log("🔍 Messages API Proxy - Forwarding to:", targetUrl);
    console.log("🔍 Messages API Proxy received body:", JSON.stringify(body, null, 2));

    // Create AbortController for timeout (50 seconds to be safe)
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 50000);

    try {
      const response = await fetch(targetUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          // Forward authorization header if present
          ...(request.headers.get("authorization") && {
            Authorization: request.headers.get("authorization") || "",
          }),
          // Forward CSRF token if present
          ...(request.headers.get("x-csrf-token") && {
            "X-CSRFTOKEN": request.headers.get("x-csrf-token") || "",
          }),
        },
        body: JSON.stringify(body),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      const data = await response.json();

      if (!response.ok) {
        return NextResponse.json(data, { status: response.status });
      }

      return NextResponse.json(data, { status: response.status });
    } catch (fetchError: any) {
      clearTimeout(timeoutId);
      if (fetchError.name === 'AbortError') {
        console.error("Messages API Proxy Error: Request timeout");
        return NextResponse.json(
          { error: "Request timeout", message: "The external API took too long to respond. Please try again." },
          { status: 504 }
        );
      }
      throw fetchError;
    }
  } catch (error: any) {
    console.error("Messages API Proxy Error:", error);
    return NextResponse.json(
      { error: "Internal server error", message: error.message },
      { status: 500 }
    );
  }
}

