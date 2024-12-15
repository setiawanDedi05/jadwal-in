import { ArrowLeft } from "lucide-react";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Header() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const title = {
    "/services": "Выберите услугу",
    "/time": "Выберите время",
    "/summary": "Детали записи",
    "/entry-data": "Ваши записи",
  };
  return (
    <div className="flex py-[22px] px-[16px]">
      <ArrowLeft className="size-6 cursor-pointer" onClick={() => navigate(-1)} />
      <h2 className="text-md font-bold mx-auto">{title[pathname]}</h2>
    </div>
  );
}
