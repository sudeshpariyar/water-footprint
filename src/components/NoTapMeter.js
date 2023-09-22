import React, { useState } from "react";
import "./NoTapMeter.css";
const NoTapMeter = ({
  setPersonalHygeneMin,
  setPersonalHygeneTapFlow,
  setToiletery,
  setWaterTapMinCooking,
  setWaterTapCookingFlow,
  setWaterTapDisWashingMin,
  setWaterTapDishWashinFlow,
  setLaundrySystem,
  laundrySystem,
  setWashingMachineCapacity,
  setLaundryTime,
  setTapFlowForLaundry,
  setTimeForLaundryTap,
}) => {
  const [pipeline, setPipeline] = useState("");
  // const [personalHygeneMin, setPersonalHygeneMin] = useState();
  // const [personalHygeneTapFlow, setPersonalHygeneTapFlow] = useState("");
  // const [toiletery, setToiletery] = useState("");
  // const [waterTapMinCooking, setWaterTapMinCooking] = useState();
  // const [waterTapCookingFlow, setWaterTapCookingFlow] = useState("");
  // const [waterTapDiswashingMin, setWaterTapDisWashingMin] = useState();
  // const [waterTapDishwashingFlow, setWaterTapDishWashinFlow] = useState("");
  // const [laundrySystem, setLaundrySystem] = useState("");
  // const [washingMachineCapacity, setWashingMachineCapacity] = useState();
  //const [laundryTime, setLaundryTime] = useState();
  // const [tapFlowForLaundry, setTapFlowForLaundry] = useState("");

  return (
    <div className="no-metered-tap">
      <label>Choose pipeline type?</label>
      <select onChange={(e) => setPipeline(e.target.value)}>
        <option>Choose water system</option>
        <option value="indoor">Indoor</option>
        <option value="outdoor">Outdoor</option>
      </select>
      {pipeline === "indoor" && (
        <>
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
          <label>How would like to keep your tap flow?</label>
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
          <label>What kind of laundry sysem do you have?</label>
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
        </>
      )}
      {pipeline === "outdoor" && <>This is outdoor</>}
    </div>
  );
};

export default NoTapMeter;
