"use client";

import { useState } from "react";

export default function AdmissionPage() {
  const [form, setForm] = useState({
    studentName: "",
    className: "",
    parentName: "",
    mobile: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    // 🔴 BASIC VALIDATION
    if (!form.studentName || !form.parentName) {
      alert("Student Name and Parent Name are required");
      return;
    }

    if (!/^[6-9]\d{9}$/.test(form.mobile)) {
      alert("Enter a valid 10-digit mobile number");
      return;
    }

    const whatsappNumber = "918448606683"; // school number

    const text = `
Admission Enquiry:
Student Name: ${form.studentName}
Class: ${form.className}
Parent Name: ${form.parentName}
Mobile: +91${form.mobile}
Message: ${form.message}
    `;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      text
    )}`;
    window.open(url, "_blank");
  };

  return (
    <div className="max-w-3xl mx-auto mt-12 px-4">
      <h1 className="text-3xl font-bold mb-6">Admission Enquiry</h1>

      <p className="text-gray-600 mb-4">
        Fill the form below and we will contact you shortly.
      </p>

      <div className="bg-gray-100 p-6 rounded shadow space-y-4">
        <input
          type="text"
          name="studentName"
          placeholder="Student Name *"
          className="w-full p-3 border rounded"
          onChange={handleChange}
        />

        <input
          type="text"
          name="className"
          placeholder="Class Applying For (Nursery - VIII)"
          className="w-full p-3 border rounded"
          onChange={handleChange}
        />

        <input
          type="text"
          name="parentName"
          placeholder="Parent Name *"
          className="w-full p-3 border rounded"
          onChange={handleChange}
        />

        {/* Mobile with +91 fixed */}
        <div className="flex">
          <span className="px-3 flex items-center bg-gray-200 border border-r-0 rounded-l">
            +91
          </span>
          <input
            type="tel"
            name="mobile"
            placeholder="10-digit Mobile Number *"
            className="w-full p-3 border rounded-r"
            maxLength={10}
            onChange={handleChange}
          />
        </div>

        <textarea
          name="message"
          placeholder="Any message (optional)"
          className="w-full p-3 border rounded"
          rows={4}
          onChange={handleChange}
        />

        <button
          onClick={handleSubmit}
          className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700"
        >
          Submit via WhatsApp
        </button>
      </div>
    </div>
  );
}
