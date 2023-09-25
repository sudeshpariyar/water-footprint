import React, { useState } from "react";

const Dietry = ({ handleDietrySubmitData }) => {
  const [vegetable, setVegetable] = useState();
  const [fruit, setFruit] = useState();
  const [grains, setGrains] = useState();
  const [oil, setOil] = useState();
  const [pulses, setPulses] = useState();
  const [cereals, setCereals] = useState();
  const [nuts, setNuts] = useState();
  const [goats, setGoats] = useState();
  const [chicken, setChicken] = useState();
  const [pork, setPork] = useState();
  const [milk, setMilk] = useState();
  const [butter, setButter] = useState();
  const [egg, setEgg] = useState();
  let total;

  const handleDietrySubmit = (e) => {
    e.preventDefault();
    total =
      vegetable * 322 * 52 +
      fruit * 962 * 52 +
      grains * 2729.2 * 12 +
      oil * 2483 * 12 +
      pulses * 4055 * 12 +
      cereals * 1644 * 12 +
      nuts * 9063 * 12 +
      goats * 8763 * 12 +
      chicken * 4325 * 12 +
      pork * 5988 * 12 +
      milk * 1020 * 12 +
      butter * 5553 * 12 +
      egg * 3265 * 12;
    handleDietrySubmitData(total);
  };
  return (
    <div>
      <h3>Dietry</h3>
      <form>
        <input
          placeholder="How many Kilograms of Vegetable do you buy on weekly basis?"
          type="number"
          onChange={(e) => setVegetable(e.target.value)}
        />
        <input
          placeholder="How many Kilograms of Fruits do you buy on weekly basis?"
          type="number"
          onChange={(e) => setFruit(e.target.value)}
        />
        <h3>Agricultural Product</h3>
        <label>
          How many Kilograms of food (listed below) do you buy on monthly basis?
        </label>
        <input
          type="number"
          onChange={(e) => setGrains(e.target.value)}
          placeholder="Grains: Maize,Paddy,Wheat,Millet, Barley"
        />
        <input
          type="number"
          onChange={(e) => setOil(e.target.value)}
          placeholder="Oil Seed"
        />
        <input
          type="number"
          onChange={(e) => setPulses(e.target.value)}
          placeholder="Pulses"
        />
        <input
          type="number"
          onChange={(e) => setCereals(e.target.value)}
          placeholder="Cereals"
        />
        <input
          type="number"
          onChange={(e) => setNuts(e.target.value)}
          placeholder="Nuts"
        />
        <h3>Animal Products</h3>
        <label>
          How many Kilograms of Meat (listed below) do you buy on Monthley
          basis?
        </label>
        <input
          type="number"
          onChange={(e) => setGoats(e.target.value)}
          placeholder="Goat"
        />
        <input
          type="number"
          onChange={(e) => setChicken(e.target.value)}
          placeholder="Chicken"
        />
        <input
          type="number"
          onChange={(e) => setPork(e.target.value)}
          placeholder="Pork"
        />
        <input
          type="number"
          onChange={(e) => setMilk(e.target.value)}
          placeholder="Milk"
        />
        <input
          type="number"
          onChange={(e) => setButter(e.target.value)}
          placeholder="Butter"
        />
        <input
          type="number"
          onChange={(e) => setEgg(e.target.value)}
          placeholder="Egg"
        />
        <button onClick={handleDietrySubmit}>calculate Dietry </button>
      </form>
    </div>
  );
};

export default Dietry;
