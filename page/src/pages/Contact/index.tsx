import React, { useState } from "react";
import "./style.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form verileri:", formData);
    alert("Mesajınız kaydedildi (sadece frontend).");
    setFormData({ name: "", email: "", message: "" }); // formu sıfırla
  };

  return (
    <div className="page-container">
      <div className="contact-infos"></div>
      <div className="contact-container">
        <form onSubmit={handleSubmit} className="contact-form">
          <label>
            <h1>Full Name</h1>{" "}
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            <h1>Email</h1>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            <h1>Message</h1>
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </label>

          <button type="submit">Gönder</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
