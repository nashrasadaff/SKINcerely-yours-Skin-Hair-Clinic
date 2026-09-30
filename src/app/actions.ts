"use server";

import { getSupabase } from "@/lib/supabase";

export type BookingState = {
  status: "idle" | "success" | "error" | "demo";
  message: string;
};

const SERVICES = [
  "Acne & acne-scar treatment",
  "Pigmentation & melasma",
  "Anti-ageing, botox & fillers",
  "Laser hair reduction",
  "Hair fall & PRP therapy",
  "Hair transplant consultation",
  "Not sure yet — please advise",
];

export async function submitBooking(
  _prev: BookingState,
  formData: FormData,
): Promise<BookingState> {
  const name = String(formData.get("name") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const service = String(formData.get("service") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  // Honeypot — bots fill this, humans don't see it.
  if (String(formData.get("company") ?? "").trim()) {
    return { status: "success", message: "Thank you! We'll call you back within one working day." };
  }

  if (!name || !phone) {
    return { status: "error", message: "Please fill in your name and phone number." };
  }

  const supabase = getSupabase();
  if (!supabase) {
    // Supabase not configured — demo mode so the UI still completes.
    console.warn("[booking] Supabase env vars missing; request not persisted:", { name, phone, service });
    return {
      status: "demo",
      message: `Thanks, ${name}! Supabase isn't configured yet, so this request wasn't saved — add the env vars and try again. You can also reach us on WhatsApp.`,
    };
  }

  const { error } = await supabase.from("appointments").insert({
    name,
    phone,
    email: email || null,
    service: SERVICES.includes(service) ? service : service || null,
    message: message || null,
  });

  if (error) {
    console.error("[booking] insert failed:", error.message);
    return { status: "error", message: "Something went wrong saving your request — please WhatsApp us instead." };
  }

  return {
    status: "success",
    message: `Thank you, ${name}! We'll call you back within one working day to confirm your appointment.`,
  };
}
