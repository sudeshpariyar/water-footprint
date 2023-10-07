import React, { useState } from "react";
import "./OutdoorWaterUse.css";

const OutdoorWaterUse = ({ onDataFromOutdoorChild }) => {
  const [waterCleaning, setWaterCleaning] = useState();
  const [vehicleCleaning, setVehicleCleaning] = useState();
  const [gardening, setGardening] = useState();
  const [miscellaneous, setMiscellaneous] = useState();
  const [outDoorWaterUse, setOutDoorWaterUse] = useState();

  let waterCleaningPrint;
  let vehicleCleaningPrint;
  let gardeningPrint;
  let miscellaneousPrint;
  let weeks = 52.17;

  if (waterCleaning) waterCleaningPrint = waterCleaning * weeks;
  if (vehicleCleaning) vehicleCleaningPrint = vehicleCleaning * weeks;
  if (gardening) gardeningPrint = gardening * weeks;
  if (miscellaneous) miscellaneousPrint = miscellaneous * weeks;

  const handleSubmit = (e) => {
    e.preventDefault();
    let total;
    total =
      waterCleaningPrint +
      vehicleCleaningPrint +
      gardeningPrint +
      miscellaneousPrint;

    if (total) {
      setOutDoorWaterUse(total);
      onDataFromOutdoorChild(outDoorWaterUse);
    }
  };

  return (
    <>
      <h3>Outdoor Water Use (Per Week)</h3>
      <form
        className="outdoor-direct-water-consumption"
        onSubmit={handleSubmit}
      >
        <input
          placeholder="On an average how may liters of water do you use for cleaning (inside and outside)?"
          type="number"
          onChange={(e) => setWaterCleaning(e.target.value)}
        />
        <input
          placeholder="How many litres of water do you use for vehicle cleaning?"
          type="number"
          onChange={(e) => setVehicleCleaning(e.target.value)}
        />
        <input
          placeholder="On average how many litres of water do you use for gardening purposes?"
          type="number"
          onChange={(e) => setGardening(e.target.value)}
        />
        <input
          placeholder="For miscellaneous activities, how many litres of water do you use? (Swimming pool, aquarium, other)"
          type="number"
          onChange={(e) => setMiscellaneous(e.target.value)}
        />
        <button type="submit">Calculate outdoor water use</button>
      </form>
    </>
  );
};

export default OutdoorWaterUse;
