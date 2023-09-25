import React, { useState } from "react";
import "./DirectWaterUse.css";

const DirectWaterUse = ({ onDataFromIndoorChild }) => {
  const [personalHygeneMin, setPersonalHygeneMin] = useState();
  const [personalHygeneTapFlow, setPersonalHygeneTapFlow] = useState("");
  const [toiletery, setToiletery] = useState("");
  const [waterTapMinCooking, setWaterTapMinCooking] = useState();
  const [waterTapCookingFlow, setWaterTapCookingFlow] = useState("");
  const [waterTapDiswashingMin, setWaterTapDisWashingMin] = useState();
  const [waterTapDishwashingFlow, setWaterTapDishWashinFlow] = useState("");
  const [laundrySystem, setLaundrySystem] = useState("");
  const [washingMachineCapacity, setWashingMachineCapacity] = useState();
  const [laundryTime, setLaundryTime] = useState();
  const [tapFlowForLaundry, setTapFlowForLaundry] = useState("");
  const [timeForLaundryTap, setTimeForLaundryTap] = useState();

  const [indoorDirectWaterConsumption, setIndoorDirectWaterConsumption] =
    useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    let waterFlowLevel = 0;
    let toileteryFlow = 0;
    let cookingFlow = 0;
    let dishWashingFlow = 0;
    let laundryWater = 0;
    if (personalHygeneTapFlow === "high") {
      waterFlowLevel = 4.5;
    } else if (personalHygeneTapFlow === "medium") {
      waterFlowLevel = 2.25;
    } else if (personalHygeneTapFlow === "low") {
      waterFlowLevel = 1.5;
    }
    if (toiletery === "single") {
      toileteryFlow = 3.125 * 11;
    } else if (toiletery === "dualHalf") {
      toileteryFlow = 4.5 * 3;
    } else if (toiletery === "dualFull") {
      toileteryFlow = 6 * 3.125;
    }
    if (waterTapCookingFlow === "high") {
      cookingFlow = 4.5;
    } else if (waterTapCookingFlow === "medium") {
      cookingFlow = 2.25;
    } else if (waterTapCookingFlow === "low") {
      cookingFlow = 1.5;
    }
    if (waterTapDishwashingFlow === "high") {
      dishWashingFlow = 4.5;
    } else if (waterTapDishwashingFlow === "medium") {
      dishWashingFlow = 2.25;
    } else if (waterTapDishwashingFlow === "low") {
      dishWashingFlow = 1.5;
    }
    if (laundrySystem === "washinMachine") {
      console.log("washing machine", washingMachineCapacity, laundryTime, 12.5);
      laundryWater = washingMachineCapacity * laundryTime * 12.5;
    } else {
      if (tapFlowForLaundry === "high") {
        laundryWater = timeForLaundryTap * laundryTime * 4.5;
        console.log("washing machine high", timeForLaundryTap, laundryTime);
      } else if (tapFlowForLaundry === "medium") {
        laundryWater = timeForLaundryTap * laundryTime * 2.25;
      } else if (tapFlowForLaundry === "low") {
        laundryWater = timeForLaundryTap * laundryTime * 1.5;
      }
    }
    console.log(
      "indirect water",
      personalHygeneMin,
      waterFlowLevel,
      toileteryFlow,
      waterTapMinCooking,
      cookingFlow,
      waterTapDiswashingMin,
      dishWashingFlow,
      laundryWater
    );

    setIndoorDirectWaterConsumption(
      personalHygeneMin * waterFlowLevel +
        toileteryFlow +
        waterTapMinCooking * cookingFlow +
        waterTapDiswashingMin * dishWashingFlow +
        laundryWater
    );
    //console.log("indoordirectwater", indoorDirectWaterConsumption);

    onDataFromIndoorChild(indoorDirectWaterConsumption);
  };

  return (
    <>
      <h2>Direct Water Indoor Use</h2>
      <from className="direct-water-use-form">
        <input
          type="number"
          onChange={(e) => setPersonalHygeneMin(e.target.value)}
          placeholder="On an average how long do you run your tap on for all personal hygine purpose in a day?"
        />
        <label>How would like to keep your tap flow?</label>
        <select onChange={(e) => setPersonalHygeneTapFlow(e.target.value)}>
          <option>Choose water system</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
        <label>What Kind of Flush do you prefer?</label>
        <select onChange={(e) => setToiletery(e.target.value)}>
          <option>Choose water system</option>
          <option value="single">Single Flush</option>
          <option value="dualHalf">Dual Half Flush</option>
          <option value="dualFull">Dual Full Flush</option>
        </select>
        <input
          type="number"
          onChange={(e) => setWaterTapMinCooking(e.target.value)}
          placeholder="On an average how long do you run your tap on  in a day while cooking?"
        />
        <label>How would you like to keep your tap flow?</label>
        <select onChange={(e) => setWaterTapCookingFlow(e.target.value)}>
          <option>Choose water system</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
        <input
          type="number"
          onChange={(e) => setWaterTapDisWashingMin(e.target.value)}
          placeholder="On an average how long do you run your tap on  in a day while washing dishes?"
        />
        <label>How would like to keep your tap flow?</label>
        <select onChange={(e) => setWaterTapDishWashinFlow(e.target.value)}>
          <option>Choose water system</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
        <label>What kind of laundry system do you have?</label>
        <select onChange={(e) => setLaundrySystem(e.target.value)}>
          <option>Choose laundry system</option>
          <option value="washinMachine">Washing machine</option>
          <option value="tapwater">Tap Water</option>
        </select>
        {laundrySystem === "washinMachine" && (
          <>
            <input
              placeholder="What is the capacity of the Washing Machine?"
              type="number"
              onChange={(e) => setWashingMachineCapacity(e.target.value)}
            />
          </>
        )}
        {laundrySystem === "tapwater" && (
          <>
            <input
              placeholder="How long do you run your tap?"
              type="number"
              onChange={(e) => setTimeForLaundryTap(e.target.value)}
            />
            <select onChange={(e) => setTapFlowForLaundry(e.target.value)}>
              <option>Choose water System</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </>
        )}
        <input
          placeholder="How many time do you run laundry?"
          type="number"
          onChange={(e) => setLaundryTime(e.target.value)}
        />
        <button onClick={handleSubmit}>
          Calculate Direct water footprint.
        </button>
      </from>
    </>
  );
};

export default DirectWaterUse;
