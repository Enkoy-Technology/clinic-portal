import { NextRequest, NextResponse } from "next/server";

const API_BASE_URL = "https://demo-oxua.onrender.com/api";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    console.log("🔍 Feedback API Proxy received body:", JSON.stringify(body, null, 2));

    const response = await fetch(`${API_BASE_URL}/messages/feedback/create/`, {
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
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(data, { status: response.status });
    }

    return NextResponse.json(data, { status: response.status });
  } catch (error: any) {
    console.error("Feedback API Proxy Error:", error);
    return NextResponse.json(
      { error: "Internal server error", message: error.message },
      { status: 500 }
    );
  }
}



