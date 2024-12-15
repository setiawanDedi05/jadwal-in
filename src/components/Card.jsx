import React from "react";

export default function Card({ children, className, onClick }) {
  return (
    <div
      className={`flex gap-2 items-center w-full min-w-[300px] min-h-[74px] px-[10px] py-3 bg-card-background rounded-rounded-card ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
