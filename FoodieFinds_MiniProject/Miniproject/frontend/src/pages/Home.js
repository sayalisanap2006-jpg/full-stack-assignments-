import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="card home" style={{textAlign: "center"}}>
      <h2>Discover Local Flavors</h2>
      <p style={{fontSize: "18px", color: "#4a5568", marginBottom: "30px"}}>
        Drop a review for your favorite cafe dish, or browse recommendations from other foodies around the city.
      </p>
      <Link className="button" to="/report">Review a Dish</Link>
      <Link className="button" style={{background: "#dd6b20"}} to="/items">Browse Food Feed</Link>
    </main>
  );
}

export default Home;