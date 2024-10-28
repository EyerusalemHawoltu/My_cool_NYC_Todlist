// src/components/LibraryDropdown.js
import React from "react";

const libraries = [
    { name: "Bobst Library", coordinates: "-73.9970,40.7295" },
    { name: "Avery Fisher Center (in Bobst Library)", coordinates: "-73.9971,40.7296" },
    { name: "Bern Dibner Library (NYU Tandon)", coordinates: "-73.9844,40.6942" },
    { name: "Institute of Fine Arts Library", coordinates: "-73.9625,40.7762" },
    { name: "Courant Institute of Mathematical Sciences Library", coordinates: "-73.9968,40.7291" },
    { name: "Law Library", coordinates: "-73.9983,40.7303" },
    { name: "Jack Brause Library (SPS)", coordinates: "-73.9820,40.7544" },
    { name: "Meyer Building Library", coordinates: "-73.9950,40.7290" },
    { name: "NYU Health Sciences Library", coordinates: "-73.9767,40.7426" },
    { name: "New York Public Library (Main Branch)", coordinates: "-73.9822,40.7532" },
    { name: "Brooklyn Public Library - Central Library", coordinates: "-73.9715,40.6729" },
    { name: "Queens Library - Central Library", coordinates: "-73.7937,40.7078" },
    { name: "Jefferson Market Library - NYPL", coordinates: "-74.0014,40.7346" },
    { name: "Science, Industry, and Business Library (SIBL)", coordinates: "-73.9826,40.7494" },
    { name: "St. George Library Center - Staten Island", coordinates: "-74.0766,40.6437" },
    { name: "Bronx Library Center", coordinates: "-73.8895,40.8634" },
    { name: "Chatham Square Library - NYPL", coordinates: "-73.9966,40.7135" },
    { name: "Mid-Manhattan Library - NYPL", coordinates: "-73.9803,40.7528" },
];

const LibraryDropdown = ({ onSelect }) => {
  return (
    <div style={{ position: "absolute", right: "20px", top: "20px" }}>
      <label htmlFor="libraryDropdown">Choose a Library to get your coordinates:</label>
      <select
        id="libraryDropdown"
        onChange={(e) => onSelect(e.target.value)}
        style={{ marginLeft: "10px", padding: "5px" }}
      >
        <option value="">Select a Library</option>
        {libraries.map((library, index) => (
          <option key={index} value={library.coordinates}>
            {library.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LibraryDropdown;
