import styles from './Tariff.module.css'
import Card from './TariffCard.jsx'
import { useEffect, useState } from "react";

export default function Tariff() {
  const [tariff, setTariff] = useState([]);
  const [tariffIndex, setTariffIndex] = useState(0);

  useEffect(() => {
    const fetchTariff = async () => {
      const items = [
        { id: 1, color: "blue", tariff: 300, speed: 10 },
        { id: 2, color: "green", tariff: 450, speed: 50 },
        { id: 3, color: "red", tariff: 550, speed: 100 },
        { id: 4, color: "black", tariff: 1000, speed: 200 }
      ];

      setTariff(items);
    };
    fetchTariff();
  }, []);

  const handleNext = () => {
    setTariffIndex((tariffIndex + 1) % tariff.length);
  };

  const handlePrevious = () => {
    setTariffIndex((tariffIndex - 1 + tariff.length) % tariff.length);
  };

  if (tariff.length === 0) return <div>Загрузка...</div>;

  const currentTariff = tariff[tariffIndex];

  return (
    <main>
      <div className={styles.cardNext}>
        <button onClick={handlePrevious}>Предыдущий</button>
        <section className={styles.cardList} onClick={handleNext}>
          <Card key={currentTariff.id} color={currentTariff.color} tariff={currentTariff.tariff} speed={currentTariff.speed} />
        </section>
        <button onClick={handleNext}>Следующий</button>
      </div>
    </main>
  );
}