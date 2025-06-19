import React from "react";

export const ReviewRow = ({ label, value }) => {
  return (
    <p>
      <strong>{label}:</strong> {value}
    </p>
  );
};
