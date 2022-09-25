import React from "react";

export default function Logo({ size }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <span
        style={{
          fontSize: size,
          fontWeight: "bold",
        }}
      >
        LOGO
      </span>
    </div>
  );
}
