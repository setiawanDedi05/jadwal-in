import React from "react";

export default function Button({ onClick, className, children }) {
  return (
    <button
      className={`w-[238px] h-[62px] rounded-rounded-button bg-primary text-center text-white font-bold mt-auto ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
