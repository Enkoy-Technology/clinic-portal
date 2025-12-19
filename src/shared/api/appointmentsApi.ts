"use client";

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_BASE_URL = "/api";

export interface CreatePatientWithAppointmentRequest {
  profile: {
    user: {
      email: string;
      password: string;
      first_name: string;
      last_name: string;
    };
    role: "PATIENT";
    phone_number: string;
  };
  address: {
    city: string;
    state: string;
    street: string;
    postal_code: string;
    country: number;
  };
  age: number;
  dob: string; // YYYY-MM-DD
  gender: "MALE" | "FEMALE" | "OTHER";
  patient_status: "PENDING" | "ACTIVE" | "INACTIVE";
  telegram_username?: string;
  note?: string;
  profile_picture?: string;
  branch?: number;
  doctor?: number;
  service?: number;
  scheduled_date: string; // YYYY-MM-DD
  start_time: string; // HH:MM:SS
  end_time: string; // HH:MM:SS
  appointment_status: "SCHEDULED" | "CONFIRMED" | "COMPLETED" | "CANCELLED";
  reason?: string;
  notes?: string;
}

export interface CreatePatientWithAppointmentResponse {
  patient: any;
  appointment: any;
  message: string;
}

export const appointmentsApi = createApi({
  reducerPath: "appointmentsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");
      headers.set("Accept", "application/json");
      return headers;
    },
  }),
  tagTypes: ["Appointments"],
  endpoints: (builder) => ({
    createPatientWithAppointment: builder.mutation<
      CreatePatientWithAppointmentResponse,
      CreatePatientWithAppointmentRequest
    >({
      query: (data) => ({
        url: "/patients/create-with-appointment",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Appointments"],
    }),
  }),
});

export const { useCreatePatientWithAppointmentMutation } = appointmentsApi;

