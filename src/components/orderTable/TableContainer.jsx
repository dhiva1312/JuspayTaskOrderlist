import React, { useState } from "react";
import "../orderTable/tableContainer.css";
import { CiCalendar } from "react-icons/ci";

import contactImage1 from '../../assets/Contacts/contactImage1.png';
import contactImage2 from '../../assets/Contacts/contactImage2.png';
import contactImage3 from '../../assets/Contacts/contactImage3.png';
import contactImage4 from '../../assets/Contacts/contactImage4.png';
import contactImage5 from '../../assets/Contacts/contactImage5.png';
import contactImage6 from '../../assets/Contacts/contactImage6.png';
const TableContainer = () => {
  const headers = ["OrderId", "User Profile", "Project", "Address","Date","Status"];

  const rows = [
  ["#CM9801", "Natali Craig", "Landing Page", "Meadow Lane Oakland", "Just Now", "In Progress"],
  ["#CM9802", "Kate Morrison", "CRM Admin", "Larry Son Francisco", "A Minute Ago", "Pending"],
  ["#CM9803", "Robert Fox", "Ecommerce App", "New Jersey City", "Yesterday", "Approved"],
  ["#CM9804", "Cameron Williamson", "Dashboard UI", "Bagwell Avenue Ocala", "Feb 2, 2023", "In Progress"],
  ["#CM9805", "Jenny Wilson", "Mobile App", "Santa Ana California", "Feb 1, 2023", "Pending"],
  ["#CM9806", "Kristin Watson", "Portfolio Site", "Houston Heights", "Jan 30, 2023", "Approved"],
  ["#CM9807", "Devon Lane", "Booking System", "Phoenix Arizona", "Jan 28, 2023", "In Progress"],
  ["#CM9808", "Ronald Richards", "Inventory Tracker", "Chicago Illinois", "Jan 25, 2023", "Pending"],
  ["#CM9809", "Courtney Henry", "Analytics Dashboard", "Seattle Washington", "Jan 20, 2023", "Approved"],
//   ["#CM9810", "Leslie Alexander", "HR Portal", "Austin Texas", "Jan 18, 2023", "In Progress"]
];

const profileImages = [
    contactImage1,
    contactImage2,
    contactImage3,
    contactImage4,
    contactImage5,
    contactImage1,
    contactImage2,
    contactImage3,
    contactImage6
  ];


  // state for selected row IDs
  const [selected, setSelected] = useState([]);

  // toggle one row
  const toggleSelect = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  // toggle all rows
  const toggleSelectAll = () => {
    if (selected.length === rows.length) {
      setSelected([]); // unselect all
    } else {
      setSelected(rows.map((row) => row[0])); // select all by id
    }
  };

  return (
    <div className="table-container">
      <div className="table-body">
        <table className="table table-dark" >
          <thead>
            <tr>
              {/* checkbox column header */}
              <th>
                <input
                  type="checkbox"
                  checked={selected.length === rows.length}
                  onChange={toggleSelectAll}
                />
              </th>
              {headers.map((h, i) => (
                <th key={i} scope="col">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i}>
                {/* row checkbox */}
                <td>
                  <input
                    type="checkbox"
                    checked={selected.includes(row[0])}
                    onChange={() => toggleSelect(row[0])}
                  />
                </td>
                {/* row data */}
                 {row.map((col, j) =>
                  j === 0 ? (
                    <td key={j} className="order-id-cell">{col}</td>
                  ) : j === 1 ? ( // ✅ User Profile column
                    <td key={j} className="user-cell">
                      <img src={profileImages[i]} alt={col} className="user-img " />
                      <span>{col}</span>
                    </td>
                  ) : j === 4 ? ( // ✅ Date column
                    <td key={j} className="date-cell">
                      <CiCalendar size={15} className="date-icon" />
                      {col}
                    </td>
                  ) : j === 5 ? ( // ✅ Status column
    <td key={j} className="status-cell">
      <span className={`status-dot ${col.toLowerCase().replace(' ', '-')}`}></span>
      <span>{col}</span>
    </td>
  ) :(
                    <td key={j}>{col}</td>
                  )
                )}

              </tr>
            ))}
          </tbody>
        </table>
      </div>

      
    </div>
  );
};

export default TableContainer;
