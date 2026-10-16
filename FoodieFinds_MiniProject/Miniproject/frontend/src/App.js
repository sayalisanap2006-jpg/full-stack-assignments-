import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import ReportItem from "./pages/ReportItem";
import ViewItems from "./pages/ViewItems";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <header className="foodie-header">
        <h1>🍕 Foodie Finds Tracker</h1>
      </header>
      <nav className="foodie-nav">
        <Link to="/">Home</Link>
        <Link to="/report">Review a Dish</Link>
        <Link to="/items">Explore Menu</Link>
      </nav>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/report" element={<ReportItem />} />
          <Route path="/items" element={<ViewItems />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;