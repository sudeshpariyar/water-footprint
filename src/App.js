import { useState } from "react";
import "./App.css";
import GeneralInfo from "./components/GeneralInfo";
import Metertap from "./components/Metertap";
import NoTapMeter from "./components/NoTapMeter";

function App() {
  const [name, setName] = useState("");
  const [state, setState] = useState("");
  const [houseHoldMember, setHouseHoldMember] = useState();
  const [knowWaterFootPrint, setKnowWaterFootPrint] = useState("yes");
  const [waterSystem, setWaterSystem] = useState("");
  const [meterTapBill, setMeterTapBill] = useState("");
  const [costPerMonth, setCostPerMonth] = useState();
  const [totalWaterConsumptions, setTotalWaterConsumptions] = useState();

  //notapmeter
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (costPerMonth) {
      setTotalWaterConsumptions((costPerMonth * 75 * 12) / houseHoldMember);
    }
    if (waterSystem === "noMeterTap" || meterTapBill === "no") {
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
        laundryWater = washingMachineCapacity * laundryTime * 12.5;
      } else {
        if (tapFlowForLaundry === "high")
          laundryWater = timeForLaundryTap * laundryTime * 4.5;
        else if (tapFlowForLaundry === "medium")
          laundryWater = timeForLaundryTap * laundryTime * 2.25;
        else if (tapFlowForLaundry === "low")
          laundryWater = timeForLaundryTap * laundryTime * 1.5;
      }
      console.log(
        "personal hygene:",
        personalHygeneMin,
        "waterflow:",
        waterFlowLevel,
        "toiletryFlow",
        toileteryFlow,
        "watertapmincooking:",
        waterTapMinCooking,
        "cookingflow:",
        cookingFlow,
        "watertapdishwashingflow:",
        waterTapDishwashingFlow,
        "dishwashingflow:",
        dishWashingFlow,
        "laundrywater",
        laundryWater
      );
      setTotalWaterConsumptions(
        personalHygeneMin * waterFlowLevel +
          toileteryFlow +
          waterTapMinCooking * cookingFlow +
          waterTapDiswashingMin * dishWashingFlow +
          laundryWater
      );
    }
  };

  return (
    <div className="app">
      <span className="header-title">Water footprint caluclator.</span>
      <div>General Info</div>
      <form onSubmit={handleSubmit}>
        <GeneralInfo
          name={name}
          state={state}
          houseHoldMember={houseHoldMember}
          setName={setName}
          setState={setState}
          setHouseHoldMember={setHouseHoldMember}
        />
        <label>Do you know anything about water footprint?</label>
        <select onChange={(e) => setKnowWaterFootPrint(e.target.value)}>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        {knowWaterFootPrint === "no" && (
          <span>
            Water footprint is an environmental indicator that measures the
            volume of fresh water (in litres or cubic metres) used throughout
            the entire production chain of a consumer item or service.
          </span>
        )}
        <label>What kind of water system do you have at your residence?</label>
        <select onChange={(e) => setWaterSystem(e.target.value)}>
          <option>Choose water system</option>
          <option value="meterTap">Metered Tap</option>
          <option value="noMeterTap">No-metered Tap</option>
          <option value="bucketWaterSystem">Bucket Water System</option>
        </select>
        {waterSystem === "meterTap" && (
          <Metertap
            setMeterTapBill={setMeterTapBill}
            meterTapBill={meterTapBill}
            setCostPerMonth={setCostPerMonth}
          />
        )}
        {(waterSystem === "noMeterTap" || meterTapBill === "no") && (
          <NoTapMeter
            setPersonalHygeneMin={setPersonalHygeneMin}
            setPersonalHygeneTapFlow={setPersonalHygeneTapFlow}
            setToiletery={setToiletery}
            setWaterTapMinCooking={setWaterTapMinCooking}
            setWaterTapCookingFlow={setWaterTapCookingFlow}
            setWaterTapDisWashingMin={setWaterTapDisWashingMin}
            setWaterTapDishWashinFlow={setWaterTapDishWashinFlow}
            setLaundrySystem={setLaundrySystem}
            laundrySystem={laundrySystem}
            setWashingMachineCapacity={setWashingMachineCapacity}
            setLaundryTime={setLaundryTime}
            setTapFlowForLaundry={setTapFlowForLaundry}
            setTimeForLaundryTap={setTimeForLaundryTap}
          />
        )}
        {waterSystem === "bucketWaterSystem" && <>This is bucket system</>}
        <button type="submit">Submit</button>
        {totalWaterConsumptions && (
          <>
            {name} your water Consumptio per year is {totalWaterConsumptions}{" "}
            liters.
          </>
        )}
      </form>
    </div>
  );
}

export default App;
