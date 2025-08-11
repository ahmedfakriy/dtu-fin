import React, { useState } from "react";

export function ContactUs() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("تم إرسال رسالتك بنجاح ✅");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <main style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
      <h1>اتصل بنا</h1>
      <p>يسعدنا تواصلك معنا لأي استفسارات أو اقتراحات.</p>

      <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
        <div style={{ marginBottom: "10px" }}>
          <label>الاسم</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px", borderRadius: "5px" }}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>البريد الإلكتروني</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px", borderRadius: "5px" }}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>الرسالة</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows="5"
            required
            style={{ width: "100%", padding: "8px", borderRadius: "5px" }}
          ></textarea>
        </div>

        <button
          type="submit"
          style={{
            background: "#2563eb",
            color: "white",
            padding: "10px 20px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          إرسال
        </button>
      </form>

      <div style={{ marginTop: "30px" }}>
        <h2>معلومات التواصل</h2>
        <p>📞 +201023099469</p>
        <p>📧 ahmedfakriy010230@gmail.com</p>
        <p>
          🌐 <a href="https://dtu-fin-4ztd.vercel.app/">موقعنا الإلكتروني</a>
        </p>
      </div>
    </main>
  );
}
