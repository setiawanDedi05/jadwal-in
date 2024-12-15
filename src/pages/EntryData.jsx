import React from "react";
import Card from "../components/Card";
import Person from "../assets/img/person.png";
import { X } from "lucide-react";
import image from '../assets/img/profile.png'

export default function EntryData() {
  return (
    <div className="flex flex-col px-[16px] grow">
      <Card className="flex-col !items-start pt-[10px] !pb-[31px] px-[12px]">
        <div className="py-[6px] px-[12px] bg-success rounded-xl">
          <span className="text-white">Вы записаны</span>
        </div>

        <div className="flex flex-col mt-[25px]">
          <h2 className="text-xl font-bold">Четверг, в 16:00</h2>
          <h3>11:00 - 12:00</h3>
        </div>

        <div className="flex gap-[18px] mt-[16px]">
          <img
            src={Person}
            alt={"Жуманов Меирлен"}
            className="size-[50px] rounded-full object-cover"
          />
          <div className="flex flex-col">
            <span className="text-xl font-bold">Жуманов Меирлен</span>
            <span className="text-sm text-muted">Барбер</span>
          </div>
        </div>
      </Card>
      <div className="mt-[16px] flex gap-[16px] justify-center items-center mt-[24px]">
        <div className="flex flex-col gap-[16px] justify-center items-center">
          <div className="rounded-full bg-error size-[54px] flex justify-center items-center text-white">
            <X />
          </div>
          <span>Отменит</span>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center my-auto">
        <img src={image} className="size-[145px] border-4 rounded-full border-slate-900" />
        <h2 className="mt-[31px] text-xl font-bold">Barbershop Trend</h2>
        <span className="mt-[9px] text-sm text-muted">Алиханова 37 /1</span>
        <span className="mt-[10px]">+7 (771)  787 89 89</span>
      </div>
    </div>
  );
}
