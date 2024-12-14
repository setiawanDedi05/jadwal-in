import { Tab, Tabs } from "../components/tabs";

export default function ServicesPage() {
  const services = [
    {
      label: "Стрижки и укладки",
      value: 1,
    },
    {
      label: "Уход за бородой",
      value: 2,
    },
  ];

  return (
    <div>
      <Tabs>
        {services.map(({ label }) => {
          return (
            <Tab label={label}>
              <div className="py-4">
                <h2 className="text-lg font-medium mb-2">{label}</h2>
              </div>
            </Tab>
          );
        })}
      </Tabs>
    </div>
  );
}
