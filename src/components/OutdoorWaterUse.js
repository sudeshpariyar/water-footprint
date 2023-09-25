import React, { useState } from "react";
import "./OutdoorWaterUse.css";

const OutdoorWaterUse = ({ onDataFromOutdoorChild }) => {
  const [waterCleaning, setWaterCleaning] = useState();
  const [vehicleCleaning, setVehicleCleaning] = useState();
  const [gardening, setGardening] = useState();
  const [miscellaneous, setMiscellaneous] = useState();
  const [outDoorWaterUse, setOutDoorWaterUse] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    let total;
    total =
      (waterCleaning + vehicleCleaning + gardening + miscellaneous) * 52.17;
    if (total) {
      setOutDoorWaterUse(total);
      onDataFromOutdoorChild(outDoorWaterUse);
    }
  };

  return (
    <>
      <h3>Direct Water consumption for Outdoor</h3>
      <form className="outdoor-direct-water-consumption">
        <input
          placeholder="On an average how may liters of water do you use for cleaning per week(inside and outside)?"
          type="number"
          onChange={(e) => setWaterCleaning(e.target.value)}
        />
        <input
          placeholder="How many litres of water do you use for vehicle cleaning per week?"
          type="number"
          onChange={(e) => setVehicleCleaning(e.target.value)}
        />
        <input
          placeholder="On average how many litres of water do you use for gardening purposes per week?"
          type="number"
          onChange={(e) => setGardening(e.target.value)}
        />
        <input
          placeholder="For miscellaneous activities, how many litres of water do you use per week? (Swimming pool, aquarium, other)"
          type="number"
          onChange={(e) => setMiscellaneous(e.target.value)}
        />
        <button onClick={handleSubmit}>Calculate outdoor water use</button>
      </form>
    </>
  );
};

export default OutdoorWaterUse;
