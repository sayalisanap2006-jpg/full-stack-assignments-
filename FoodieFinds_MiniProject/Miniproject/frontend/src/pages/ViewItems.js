import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const API = "http://localhost:5000/api/items";

function ViewItems() {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");
  const [message, setMessage] = useState("");
  const location = useLocation();

  async function getItems(searchText = "") {
    try {
      const response = await fetch(`${API}?search=${encodeURIComponent(searchText)}`);
      if (!response.ok) throw new Error("Could not load feed.");
      setItems(await response.json());
    } catch (error) {
      setMessage("Unable to connect to database.");
    }
  }

  useEffect(() => { getItems(); }, []);
  useEffect(() => {
    if (location.state?.message) {
      setMessage(location.state.message);
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  async function markReturned(id) {
    try {
      const response = await fetch(`${API}/${id}`, { method: "PATCH" });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Update failed.");
      await getItems(search);
      setMessage("Marked as 'Must Try'!");
    } catch (error) { setMessage(error.message); }
  }

  async function deleteItem(id) {
    if (!window.confirm("Delete this review?")) return;
    try {
      const response = await fetch(`${API}/${id}`, { method: "DELETE" });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Delete failed.");
      await getItems(search);
      setMessage("Review removed.");
    } catch (error) { setMessage(error.message); }
  }

  return (
    <main className="card">
      <h2>Local Food Feed</h2>
      {message && <p className="message">{message}</p>}
      
      <input value={search} onChange={(e) => { setSearch(e.target.value); getItems(e.target.value); }} placeholder="Search for a dish or cafe..." style={{marginBottom: "25px", fontSize: "16px"}}/>

      {items.length === 0 ? <p>No reviews yet. Be the first!</p> : (
        items.map((item) => (
          <div className="item" key={item._id}>
            <h3>{item.title}</h3>
            <p><strong>Category:</strong> {item.type === "Found" ? "🟢 Veg" : "🔴 Non-Veg"}</p>
            <p><strong>Review:</strong> {item.description}</p>
            <p><strong>Area:</strong> {item.location}</p>
            <p><strong>Price & Rating:</strong> {item.contact}</p>
            
            {item.status === "Open" ? (
              <button style={{background: "#dd6b20"}} onClick={() => markReturned(item._id)}>⭐ Mark as 'Must Try'</button>
            ) : (
              <p style={{color: "#38a169", fontWeight: "bold"}}>✅ Highly Recommended!</p>
            )}

            <button className="delete" onClick={() => deleteItem(item._id)}>Delete</button>
          </div>
        ))
      )}
      
      <br/>
      <Link className="button" to="/report">Write Another Review</Link>
      <p style={{marginTop: "20px"}}><Link to="/">Back to Home</Link></p>
    </main>
  );
}

export default ViewItems;