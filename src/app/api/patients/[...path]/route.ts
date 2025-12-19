import { NextRequest, NextResponse } from "next/server";

const API_BASE_URL = "https://ff-gng8.onrender.com/api";

export async function POST(
  request: NextRequest,
  { params }: { params: { path: string[] } }
) {
  try {
    const path = params.path.join("/");
    const body = await request.json();

    console.log("🔍 API Proxy received body:", JSON.stringify(body, null, 2));

    const response = await fetch(`${API_BASE_URL}/patients/${path}/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(data, { status: response.status });
    }

    return NextResponse.json(data, { status: response.status });
  } catch (error: any) {
    console.error("API Proxy Error:", error);
    return NextResponse.json(
      { error: "Internal server error", message: error.message },
      { status: 500 }
    );
  }
}

