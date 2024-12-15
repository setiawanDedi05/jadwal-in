import { User } from "lucide-react";
import React from "react";
import Card from "./Card";

export default function PersonCard({ img, name, description, isSelect }) {
  return (
    <Card>
      {img ? (
        <img
          src={img}
          alt={name}
          className="size-[50px] rounded-full object-cover"
        />
      ) : (
        <div className="size-[50px] flex rounded-full bg-red-100 items-center justify-center overflow-hidden border-4 border-slate-900">
          <User className="size-[46px]" />
        </div>
      )}
      <div className="flex flex-col">
        <span className="text-xl font-bold">{name}</span>
        <span className="text-sm text-muted">{description}</span>
      </div>
      <input className="ml-auto" type="radio" checked={isSelect} />
    </Card>
  );
}
