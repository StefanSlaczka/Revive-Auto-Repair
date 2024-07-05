import React, { useState } from "react";
import "../Style/Navbar.css";

function Navbar() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    // Implement your search logic here, e.g., redirect or filter results
    console.log("Searching for:", searchTerm);
    // Example: Redirect to search results page
    // window.location.href = `/search?q=${searchTerm}`;
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="Navbar">
      <h1>Revive Auto Repair</h1>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default Navbar;
