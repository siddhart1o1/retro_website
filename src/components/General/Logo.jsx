import React from "react";
import { Link } from "react-router-dom";

export default function Logo({ size }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link
        style={{
          fontSize: size,
          fontWeight: "bold",
          color: "inherit",
          textDecoration: "none",
        }}
        to="/"
      >
        RETRO
      </Link>
    </div>
  );
}
