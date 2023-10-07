import React, { useState } from "react";
import "./IndirectWaterUse.css";
import { useLocation, useNavigate } from "react-router";

const IndirectWaterUse = ({ onDataFromChild }) => {
  const [knowElectricityBill, setKnowElectricityBill] = useState("");
  const [electricityBill, setElectricityBill] = useState();
  const [averageElectricityBill, setAverageElectricityBill] = useState();
  const [cylinderUse, setCylinderUSe] = useState();
  const [fireWood, setFireWood] = useState();
  const { state } = useLocation();

  const navigate = useNavigate();

  const [totalWaterFootPrintEnergy, setTotalWaterFootPrintEnergy] = useState();

  let costFromElectricity;
  let footprintFromGas;
  let footPrintFromFirewood;
  let houseHoldMembership = state.state.houseHoldMember;

  if (knowElectricityBill === "yes") {
    costFromElectricity = (electricityBill * 31.83 * 12) / houseHoldMembership;
  } else if (knowElectricityBill === "no") {
    costFromElectricity =
      (averageElectricityBill * 31.83 * 12) / houseHoldMembership;
  }

  if (cylinderUse) {
    footprintFromGas = (cylinderUse * 78.384) / houseHoldMembership;
  }
  if (fireWood) {
    footPrintFromFirewood = (fireWood * 365 * 119.6) / houseHoldMembership;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    let total = costFromElectricity + footprintFromGas + footPrintFromFirewood;
    setTotalWaterFootPrintEnergy(total);
  };
  if (totalWaterFootPrintEnergy > 0) {
    navigate("/dietry", { state: { state, totalWaterFootPrintEnergy } });
  }

  return (
    <div className="indirect-water-use-wrapper">
      <h2>Indirect Water Use</h2>
      <form onSubmit={handleSubmit}>
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
            placeholder="Please use the average bill paid in Nepal?(NRS 280)"
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
          placeholder="On avegare in a day how long do you use firewood in a day?(Hour)"
          type="number"
          onChange={(e) => setFireWood(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {totalWaterFootPrintEnergy && (
        <div>
          Total Water Footprint for Energy : {totalWaterFootPrintEnergy}L
        </div>
      )}
    </div>
  );
};

export default IndirectWaterUse;
