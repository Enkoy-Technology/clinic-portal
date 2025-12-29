export interface CreateFeedbackRequest {
  fullname: string;
  feedback: string;
  star: number;
}

export interface CreateFeedbackResponse {
  message?: string;
  [key: string]: any;
}

export interface CreateFeedbackError {
  message: string;
  [key: string]: any;
}

export interface FeedbackItem {
  id: number;
  fullname: string;
  feedback: string;
  star: number;
  is_visible: boolean;
  created_at: string;
  updated_at: string;
}

export interface FetchFeedbackResponse {
  links: {
    next: string | null;
    previous: string | null;
  };
  count: number;
  results: FeedbackItem[];
  page_size: number;
  current_page: number;
  total_pages: number;
}

/**
 * Creates a feedback submission
 * Uses Next.js API route proxy to avoid CORS issues
 */
export async function createFeedback(
  data: CreateFeedbackRequest,
  authToken?: string,
  csrfToken?: string
): Promise<CreateFeedbackResponse> {
  const headers: HeadersInit = {
    accept: "application/json",
    "Content-Type": "application/json",
  };

  // Add authorization header if token is provided
  if (authToken) {
    headers["Authorization"] = `JWT ${authToken}`;
  }

  // Add CSRF token if provided
  if (csrfToken) {
    headers["X-CSRFTOKEN"] = csrfToken;
  }

  const payload: CreateFeedbackRequest = {
    fullname: data.fullname.trim(),
    feedback: data.feedback.trim(),
    star: data.star,
  };

  // Use local API route proxy to avoid CORS issues
  const response = await fetch("/api/messages/feedback/create", {
    method: "POST",
    headers,
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorData: CreateFeedbackError = await response.json().catch(() => ({
      message: "Failed to submit feedback",
    }));
    throw new Error(errorData.message || "Failed to submit feedback");
  }

  return response.json();
}

/**
 * Fetches visible feedback from the API
 * Uses Next.js API route proxy to avoid CORS issues
 */
export async function fetchFeedback(
  authToken?: string
): Promise<FetchFeedbackResponse> {
  const headers: HeadersInit = {
    accept: "application/json",
  };

  // Add authorization header if token is provided
  if (authToken) {
    headers["Authorization"] = `JWT ${authToken}`;
  }

  // Use local API route proxy to avoid CORS issues
  const response = await fetch("/api/messages/feedback/list?is_visible=true", {
    method: "GET",
    headers,
  });

  if (!response.ok) {
    const errorData: CreateFeedbackError = await response.json().catch(() => ({
      message: "Failed to fetch feedback",
    }));
    throw new Error(errorData.message || "Failed to fetch feedback");
  }

  return response.json();
}

