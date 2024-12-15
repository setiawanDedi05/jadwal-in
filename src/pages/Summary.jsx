import React from "react";
import Card from "../components/Card";
import Person from "../assets/img/person.png";
import { CheckIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

export default function Summary() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col px-[16px] grow pb-[39px]">
      <Card>
        <img
          src={Person}
          alt={"Жуманов Меирлен"}
          className="size-[50px] rounded-full object-cover"
        />
        <div className="flex flex-col">
          <span className="text-xl font-bold">Жуманов Меирлен</span>
          <span className="text-sm text-muted">Барбер</span>
        </div>
      </Card>

      <div className="flex flex-col my-5 justify-center items-center">
        <h2 className="text-muted font-bold self-start">Услуги</h2>
        <Card>
          <div className="flex flex-col">
            <span className="text-xl font-bold">Мужская стрижка</span>
            <span className="text-md text-success font-bold">8 000 ₸</span>
          </div>
          <div className="size-[30px] text-white bg-primary ml-auto rounded-full flex justify-center items-center">
            <CheckIcon />
          </div>
        </Card>
        <Card>
          <div className="flex flex-col">
            <span className="text-xl font-bold">Детская стрижка</span>
            <span className="text-md text-success font-bold">8 000 ₸</span>
          </div>
          <div className="size-[30px] text-white bg-primary ml-auto rounded-full flex justify-center items-center">
            <CheckIcon />
          </div>
        </Card>
        <span className="font-normal">
          ИТОГО: <span className="font-bold">16 000 ₸</span>
        </span>
      </div>

      <div className="flex flex-col my-[20px] justify-center items-center gap-[16px]">
        <h2 className="font-bold self-start">Личные данные</h2>
        <hr className="border-1 w-full mt-5" />
        <div className="self-start">
          <span>Имя</span>
          <Card>
            <span>Караганды</span>
          </Card>
        </div>
        <div className="self-start">
          <span>Номер телефона</span>
          <Card>
            <span>+7 (771) 787 89 89</span>
          </Card>
        </div>
        <div className="self-start">
          <span>Комментарий к записи</span>
          <Card>
            <span>Спасибо</span>
          </Card>
        </div>
      </div>

      <div className="mt-auto flex flex-col justify-center items-center gap-[16px]">
        <Button
          onClick={() => {
            navigate("/entry-data");
          }}
        >
          Далее
        </Button>
      </div>
    </div>
  );
}
