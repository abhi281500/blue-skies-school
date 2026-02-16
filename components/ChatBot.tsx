"use client";

import { useState } from "react";

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);

  const replies = [
    {
      q: "Admission Information",
      a: "Admissions are open for Nursery to Class VIII for session 2026–27.",
    },
    {
      q: "Classes Offered",
      a: "We offer Nursery, LKG, UKG and Classes I to VIII (CBSE curriculum).",
    },
    {
      q: "Contact Details",
      a: "📞 Call: +91 8882165021\n📍 Pipra Purani Chowk, East Champaran",
    },
    {
      q: "Location",
      a: "Blue Skies School is located at Pipra Purani Chowk, East Champaran (Bihar).",
    },
  ];

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-blue-700 text-white px-4 py-3 rounded-full shadow-lg z-50"
      >
        💬 Enquiry
      </button>

      {/* Chat Box */}
      {open && (
        <div className="fixed bottom-20 right-6 w-80 bg-white rounded-xl shadow-xl z-50 border">
          <div className="bg-blue-700 text-white px-4 py-3 rounded-t-xl">
            Blue Skies School
          </div>

          <div className="p-4 space-y-3 text-sm">
            {step === 0 && (
              <>
                <p>👋 Hello! How can we help you?</p>

                {replies.map((item, i) => (
                  <button
                    key={i}
                    onClick={() => setStep(i + 1)}
                    className="w-full text-left border px-3 py-2 rounded hover:bg-blue-50"
                  >
                    {item.q}
                  </button>
                ))}

                <a
                  href="https://wa.me/918448606683"
                  target="_blank"
                  className="block text-center bg-green-600 text-white py-2 rounded"
                >
                  WhatsApp Admission
                </a>
              </>
            )}

            {step > 0 && (
              <>
                <p className="bg-gray-100 p-2 rounded whitespace-pre-line">
                  {replies[step - 1].a}
                </p>

                <button
                  onClick={() => setStep(0)}
                  className="text-blue-600 text-sm underline"
                >
                  ← Back
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
