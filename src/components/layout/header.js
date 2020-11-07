import React from "react";

export default function header() {
  return (
    <header style={headerStyle}>
      <h1>TODO List</h1>
    </header>
  );
}

const headerStyle = {
  background: "#333",
  color: "#fff",
  padding: "10px",
  textAlign: "center",
};

// const linkStyle = {
//   color: "white",
//   textDecoration: "underline",
// };
