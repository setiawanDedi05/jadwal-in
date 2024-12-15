import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
export default function SelectTime() {
  const [value, onChange] = useState(new Date());
  const navigate = useNavigate();
  const [selectedTime, setSelectedTime] = useState(1);
  const times = {
    Утро: [
      {
        id: 1,
        name: "09:00",
        value: 9,
      },
      {
        id: 2,
        name: "10:00",
        value: 10,
      },
      {
        id: 3,
        name: "11:00",
        value: 11,
      },
    ],
    День: [
      {
        id: 4,
        name: "12:00",
        value: 12,
      },
    ],
  };
  return (
    <div className="flex flex-col items-center justify-center grow pb-[39px]">
      <Calendar onChange={onChange} locale="en-EN" value={value} />
      <div className="mt-16 w-full p-[16px]">
        {Object.keys(times).map((key) => {
          return (
            <div key={key} className="mt-[10px]">
              <span>{key}</span>
              <div className="flex mt-[22px] gap-[19px]">
                {times[key].map((time) => (
                  <div
                    key={time.id}
                    className={`${
                      selectedTime === time.id ? "bg-primary" : "bg-secondary"
                    } py-[6.5px] px-[16.5px] rounded-rounded-button text-sm font-bold text-white cursor-pointer`}
                    onClick={() => setSelectedTime(time.id)}
                  >
                    {time.name}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-auto flex flex-col justify-center items-center gap-[16px]">
        <Button
          onClick={() => {
            navigate("/summary");
          }}
        >
          Далее
        </Button>
      </div>
    </div>
  );
}
