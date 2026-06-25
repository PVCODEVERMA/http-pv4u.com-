"use client";
import React, { useState } from "react";

export default function BookDemo({ onOpen }: { onOpen?: () => void } = {}) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", phone: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Try to POST to an api route if present, otherwise just simulate success
    try {
      await fetch("/api/book-demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setSuccess(true);
    } catch (err) {
      // If there's no backend, fallback to console and still show success state
      // This keeps the UI usable while integrating a backend later.
      // eslint-disable-next-line no-console
      console.warn("Book demo submit (fallback):", form, err);
      setSuccess(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => {
          onOpen?.();
          setOpen(true);
        }}
        className="bg-primary hover:bg-primary-hover text-white px-4 py-2 rounded-full font-medium text-sm transition-all"
      >
        Book a Demo
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="fixed inset-0 bg-black/50" onClick={() => setOpen(false)} />

          <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-2xl mx-4 p-6 z-10">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold">Book a demo</h3>
                <p className="text-sm text-gray-500 mt-1">Tell us a little about your needs — we'll reach out to schedule.</p>
              </div>
              <button
                aria-label="Close"
                onClick={() => setOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
            </div>

            <div className="mt-4">
              {success ? (
                <div className="text-center py-8">
                  <p className="text-green-600 font-semibold">Thanks — we'll contact you shortly to schedule.</p>
                  <button
                    onClick={() => {
                      setOpen(false);
                      setSuccess(false);
                      setForm({ name: "", email: "", company: "", phone: "", message: "" });
                    }}
                    className="mt-4 bg-primary text-white px-4 py-2 rounded-full"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label className="text-sm font-medium">Full name</label>
                    <input name="name" value={form.name} onChange={handleChange} required className="mt-1 w-full border border-gray-200 rounded-md px-3 py-2" />
                  </div>

                  <div>
                    <label className="text-sm font-medium">Work email</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange} required className="mt-1 w-full border border-gray-200 rounded-md px-3 py-2" />
                  </div>

                  <div>
                    <label className="text-sm font-medium">Company</label>
                    <input name="company" value={form.company} onChange={handleChange} className="mt-1 w-full border border-gray-200 rounded-md px-3 py-2" />
                  </div>

                  <div>
                    <label className="text-sm font-medium">Phone</label>
                    <input name="phone" value={form.phone} onChange={handleChange} className="mt-1 w-full border border-gray-200 rounded-md px-3 py-2" />
                  </div>

                  <div className="md:col-span-2">
                    <label className="text-sm font-medium">Brief message</label>
                    <textarea name="message" value={form.message} onChange={handleChange} rows={4} className="mt-1 w-full border border-gray-200 rounded-md px-3 py-2" />
                  </div>

                  <div className="md:col-span-2 flex items-center justify-end gap-3 mt-2">
                    <button type="button" onClick={() => setOpen(false)} className="px-4 py-2 rounded-full border border-gray-200 text-sm">Cancel</button>
                    <button type="submit" disabled={loading} className="bg-primary text-white px-4 py-2 rounded-full text-sm">
                      {loading ? "Sending..." : "Request Demo"}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
