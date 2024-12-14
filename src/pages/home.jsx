import React from "react";
import ProfileImage from "../assets/img/profile.png";
import PersonCard from "../components/personCard";
import Person from "../assets/img/person.png";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
    const navigate = useNavigate()
  return (
    <div className="w-full h-[100vh] bg-white flex flex-col items-center pt-9 px-4 pb-9">
      <img
        src={ProfileImage}
        alt="profile"
        className="border-4 border-slate-900 rounded-full"
      />
      <h2 className="text-xl mt-8">Barbershop Trend</h2>
      <span className="text-muted">Алиханова 37 /1</span>

      <div className="flex flex-col gap-3 w-full px-">
        <PersonCard name="Любой мастер" isSelect={true} />
        <PersonCard img={Person} name="Жуманов Меирлен" description="Барбер" />
        <PersonCard img={Person} name="Любой мастер" />
      </div>

      <button className="w-[238px] h-[62px] rounded-rounded-button bg-primary text-center text-white font-bold mt-auto" onClick={() => navigate('/services')}>
        Далее
      </button>
    </div>
  );
}
