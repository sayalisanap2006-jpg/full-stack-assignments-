import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const API = "http://localhost:5000/api/items";

function ReportItem() {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [form, setForm] = useState({ title: "", description: "", type: "Found", location: "", contact: "" });

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setMessage("");
    try {
      const response = await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Failed to post review.");
      navigate("/items", { state: { message: "Review posted successfully!" } });
    } catch (error) {
      setMessage(error.message || "Unable to connect to database.");
    }
  }

  return (
    <main className="card">
      <h2>Add a Food Review</h2>
      {message && <p className="message">{message}</p>}
      <form onSubmit={handleSubmit}>
        <label>Dish & Restaurant Name</label>
        <input name="title" value={form.title} onChange={handleChange} placeholder="e.g. Spicy Misal at Sadhana" required />

        <label>Your Review</label>
        <textarea name="description" value={form.description} onChange={handleChange} placeholder="How did it taste? Was it worth it?" required />

        <label>Category</label>
        <select name="type" value={form.type} onChange={handleChange}>
          <option value="Found">Veg</option>
          <option value="Lost">Non-Veg</option>
        </select>

        <label>Neighborhood / Street</label>
        <input name="location" value={form.location} onChange={handleChange} placeholder="e.g. College Road" required />

        <label>Price / Rating Out of 10</label>
        <input name="contact" value={form.contact} onChange={handleChange} placeholder="e.g. ₹150 | 9/10" required />

        <button type="submit">Post Review</button>
      </form>
      <p style={{marginTop: "20px"}}><Link to="/">Back to Home</Link></p>
    </main>
  );
}

export default ReportItem;