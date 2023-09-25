import React, { useState } from "react";
import "./IndirectWaterUse.css";
import Dietry from "./Dietry";

const IndirectWaterUse = ({ onDataFromChild }) => {
  const [knowElectricityBill, setKnowElectricityBill] = useState("");
  const [electricityBill, setElectricityBill] = useState();
  const [averageElectricityBill, setAverageElectricityBill] = useState();
  const [cylinderUse, setCylinderUSe] = useState();
  const [fireWood, setFireWood] = useState();

  const [totalDietrySubmit, setTotalDietrySubmit] = useState();

  let costFromElectricity;
  if (knowElectricityBill === "yes") {
    costFromElectricity = (electricityBill / 8.48) * 12;
  } else if (knowElectricityBill === "no") {
    costFromElectricity = (averageElectricityBill / 8.48) * 12;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(costFromElectricity, cylinderUse, fireWood);
    const test =
      costFromElectricity +
      cylinderUse * 78.384 +
      fireWood * 138 +
      totalDietrySubmit;
    onDataFromChild(test);
  };
  const handleDietrySubmitData = (data) => {
    if (data) {
      setTotalDietrySubmit(data);
      console.log("this is the end", totalDietrySubmit);
    }
  };

  return (
    <div className="indirect-water-use-wrapper">
      <h2>Indirect Water Use</h2>
      <form>
        <label>Do you know your electricity bill?</label>
        <select onChange={(e) => setKnowElectricityBill(e.target.value)}>
          <option>Choose option</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        {knowElectricityBill === "yes" && (
          <input
            placeholder="On average how much do you pay per month?"
            type="number"
            onChange={(e) => setElectricityBill(e.target.value)}
          />
        )}
        {knowElectricityBill === "no" && (
          <input
            placeholder="Please use the average bill paid in Nepal?"
            type="number"
            onChange={(e) => setAverageElectricityBill(e.target.value)}
          />
        )}
        <input
          placeholder="How many LPG cylinders do you use in a year?"
          type="number"
          onChange={(e) => setCylinderUSe(e.target.value)}
        />
        <input
          placeholder="On avegare in a day how long do you use a firewoo?(hour)"
          type="number"
          onChange={(e) => setFireWood(e.target.value)}
        />
        <Dietry handleDietrySubmitData={handleDietrySubmitData} />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default IndirectWaterUse;
