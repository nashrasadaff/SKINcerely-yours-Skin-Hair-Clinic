"use client";

import { useActionState } from "react";
import { submitBooking, type BookingState } from "@/app/actions";
import { ArrowRight, WhatsApp } from "./Icons";
import { waLink } from "@/lib/clinic";

const initial: BookingState = { status: "idle", message: "" };

export default function BookingForm() {
  const [state, formAction, pending] = useActionState(submitBooking, initial);

  return (
    <form action={formAction}>
      {/* honeypot — hidden from humans, bots fill it */}
      <input type="text" name="company" autoComplete="off" tabIndex={-1} aria-hidden="true" style={{ position: "absolute", left: -9999, width: 1, height: 1, opacity: 0 }} />

      <div className="form-row">
        <div className="field">
          <label htmlFor="f-name">Your name</label>
          <input id="f-name" name="name" type="text" autoComplete="name" placeholder="Your name" required />
        </div>
        <div className="field">
          <label htmlFor="f-phone">Phone</label>
          <input id="f-phone" name="phone" type="tel" autoComplete="tel" placeholder="+91 9XXXX XXXXX" required />
        </div>
      </div>
      <div className="field">
        <label htmlFor="f-email">Email</label>
        <input id="f-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" />
      </div>
      <div className="field">
        <label htmlFor="f-service">What can we help with?</label>
        <select id="f-service" name="service">
          <option>Acne &amp; acne-scar treatment</option>
          <option>Pigmentation &amp; melasma</option>
          <option>Anti-ageing, botox &amp; fillers</option>
          <option>Laser hair reduction</option>
          <option>Hair fall &amp; PRP therapy</option>
          <option>Hair transplant consultation</option>
          <option>Dermatosurgery &amp; minor OT</option>
          <option>Not sure yet — please advise</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="f-msg">Anything we should know?</label>
        <textarea id="f-msg" name="message" placeholder="Current products, past treatments, preferred days…" />
      </div>
      <button className="btn btn-primary" type="submit" style={{ width: "100%" }} disabled={pending}>
        {pending ? "Sending…" : "Book an Appointment"}
        <ArrowRight />
      </button>
      <a className="btn btn-terra" style={{ width: "100%", marginTop: ".6rem" }} href={waLink()} target="_blank" rel="noopener">
        <WhatsApp size={16} />
        Or book instantly on WhatsApp
      </a>

      {state.status !== "idle" && (
        <p
          className="form-note"
          role="status"
          style={{
            marginTop: ".8rem",
            padding: ".7rem 1rem",
            borderRadius: "var(--r-sm)",
            fontWeight: 600,
            background:
              state.status === "success"
                ? "rgba(167,193,168,.35)"
                : state.status === "demo"
                  ? "rgba(240,217,205,.55)"
                  : "rgba(201,123,90,.18)",
            color: "var(--sage-ink)",
          }}
        >
          {state.message}
        </p>
      )}

      <p className="form-note">We reply Mon–Sat within one working day. Your details are never shared.</p>
    </form>
  );
}
