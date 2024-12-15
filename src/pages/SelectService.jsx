import { CheckIcon } from "lucide-react";
import Card from "../components/Card";
import { Tab, Tabs } from "../components/Tabs";
import Button from "../components/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const tabs = [
  {
    label: "Стрижки и укладки",
    id: 1,
  },
  {
    label: "Уход за бородой",
    id: 2,
  },
  {
    label: "Уход за усами",
    id: 3,
  },
];

export default function ServicesPage() {
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();
  const [services, setServices] = useState([
    {
      id: 1,
      tabId: 1,
      service: "Мужская стрижка",
      price: "8 000 ₸",
      isSelect: false,
    },
    {
      id: 2,
      tabId: 1,
      service: "Детская стрижка",
      price: "8 000 ₸",
      isSelect: false,
    },
    {
      id: 3,
      tabId: 1,
      service: "Мужская стрижка",
      price: "8 000 ₸",
      isSelect: false,
    },
    {
      id: 4,
      tabId: 2,
      service: "Мужская стрижка",
      price: "8 000 ₸",
      isSelect: false,
    },
    {
      id: 5,
      tabId: 2,
      service: "Детская стрижка",
      price: "8 000 ₸",
      isSelect: false,
    },
    {
      id: 6,
      tabId: 2,
      service: "Мужская стрижка",
      price: "8 000 ₸",
      isSelect: false,
    },
    {
      id: 7,
      tabId: 3,
      service: "Мужская стрижка",
      price: "8 000 ₸",
      isSelect: false,
    },
    {
      id: 8,
      tabId: 3,
      service: "Детская стрижка",
      price: "8 000 ₸",
      isSelect: false,
    },
    {
      id: 9,
      tabId: 3,
      service: "Мужская стрижка",
      price: "8 000 ₸",
      isSelect: false,
    },
  ]);

  return (
    <div className="px-[21px] h-full grow flex flex-col pb-[39px]">
      <Tabs>
        {tabs.map(({ label, id: tabId }) => {
          return (
            <Tab label={label} key={tabId} className="w-[300px]">
              <div className="py-[25px]">
                <h2 className="text-xs text-muted font-medium mb-2">{label}</h2>
                <div className="flex flex-col gap-[16px]">
                  {services
                    .filter((el) => el.tabId === tabId)
                    .map(({ service, id, isSelect, price }) => {
                      return (
                        <Card
                          className="cursor-pointer"
                          key={id}
                          onClick={() => {
                            setServices((prevState) => {
                              const updatedServices = [...prevState];
                              const index = updatedServices.findIndex(
                                (el) => el.id === id
                              );
                              updatedServices[index].isSelect = !isSelect;
                              if (isSelect) {
                                setTotal((prev) => {
                                  return prev - 1;
                                });
                              } else {
                                setTotal((prev) => {
                                  return prev + 1;
                                });
                              }
                              return updatedServices;
                            });
                          }}
                        >
                          <div className="flex flex-col">
                            <span className="text-[18px] font-bold">
                              {service}
                            </span>
                            <span className="text-[18px] font-bold text-success">
                              {price}
                            </span>
                          </div>
                          {isSelect ? (
                            <div className="size-[30px] text-white bg-primary ml-auto rounded-full flex justify-center items-center">
                              <CheckIcon />
                            </div>
                          ) : (
                            <div className="size-[30px] text-white bg-white border-2 border-primary ml-auto rounded-full flex justify-center items-center"></div>
                          )}
                        </Card>
                      );
                    })}
                </div>
              </div>
            </Tab>
          );
        })}
      </Tabs>

      <div className="mt-auto flex flex-col justify-center items-center gap-[16px]">
        {total < 1 ? (
          <span className="font-bold text-[16px]">
            Тидак Ада Сервис Ян Ди Пилих
          </span>
        ) : (
          <span className="font-bold text-[16px]">Выбрано {total} услуги</span>
        )}
        <Button
          onClick={() => {
            navigate("/time");
          }}
        >
          Далее
        </Button>
      </div>
    </div>
  );
}
