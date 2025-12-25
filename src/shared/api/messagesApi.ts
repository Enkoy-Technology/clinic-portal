const API_BASE_URL = "https://ff-gng8.onrender.com/api";

export interface CreateMessageRequest {
  name: string;
  phone_number: string;
  message: string;
}

export interface CreateMessageResponse {
  message?: string;
  [key: string]: any;
}

export interface CreateMessageError {
  message: string;
  [key: string]: any;
}

/**
 * Normalizes phone number input by removing non-digits
 * and handling Ethiopian country code
 */
export function normalizeETPhone(input: string): string {
  const digits = input.replace(/[^\d]/g, "");
  const local = digits.startsWith("251") ? digits.slice(3) : digits;
  return local;
}

/**
 * Formats phone number with country code
 */
export function formatPhoneWithCountryCode(phone: string, countryCode: string = "+251"): string {
  const normalized = normalizeETPhone(phone);
  return countryCode + normalized;
}

/**
 * Creates a message/contact request
 */
export async function createMessage(
  data: Omit<CreateMessageRequest, "phone_number"> & { phone: string }
): Promise<CreateMessageResponse> {
  const fullPhoneNumber = formatPhoneWithCountryCode(data.phone);

  const payload: CreateMessageRequest = {
    name: data.name.trim(),
    phone_number: fullPhoneNumber,
    message: data.message.trim(),
  };

  const response = await fetch(`${API_BASE_URL}/messages/create/`, {
    method: "POST",
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorData: CreateMessageError = await response.json().catch(() => ({
      message: "Failed to send message",
    }));
    throw new Error(errorData.message || "Failed to send message");
  }

  return response.json();
}

