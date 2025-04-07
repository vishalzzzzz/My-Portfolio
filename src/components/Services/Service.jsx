// ServiceCenter.jsx
import React, { useState } from "react"
import './Service.css'

export default function ServiceCenter() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking Request:", form);
    alert("Your request has been submitted!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section  id="Service" className="section"style={{ padding: "2rem", maxWidth: "700px", margin: "auto" }}>
      <h1>
         My Services
      </h1>

      <div class="service-title">
        <h3>Our Services</h3>
        <ul>
          <li>Furniture Repair & Restoration</li>
          <li>Custom Upholstery</li>
          <li>Home Delivery & Installation</li>
          <li>Annual Maintenance Plans</li>
          <div class="more">
            <p>Read More</p>
          </div>

        </ul>
      </div>

      <div class="service-request">
        <h3 >Request a Service</h3>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <input
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Describe your service request..."
            value={form.message}
            onChange={handleChange}
            required
          />
          <button  type="submit" style={{ padding: "0.75rem", backgroundColor: "#333", color: "#fff",  border: "none", borderRadius: "5px" , cursor: "pointer" ,  }}>
            <div class="vishal" >Submit Request</div>
          </button>
        </form>
      </div>
    </section>
  );
}
