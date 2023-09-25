import { useState } from "react";
import "./MeterTap.css";
import IndirectWaterUse from "./IndirectWaterUse";
import { useLocation } from "react-router";
import { useNavigate } from "react-router";

const Metertap = () => {
  const navigate = useNavigate();

  const [costPerMonth, setCostPerMonth] = useState();
  const [meterTapBill, setMeterTapBill] = useState("");
  const [indirectWaterUse, setIndirectWaterUse] = useState();
  const { state } = useLocation();
  const [waterFootPrint, setWaterFootPrint] = useState();

  if (meterTapBill === "no") {
    navigate("/noMeterTap");
  }
  const handleDataFromChild = (data) => {
    setIndirectWaterUse(data);
    console.log("setIndirectWaterUse", indirectWaterUse);
    console.log("waterbill", (costPerMonth * 75 * 12) / state.houseHoldMember);
    if (indirectWaterUse) {
      setWaterFootPrint(
        indirectWaterUse + (costPerMonth * 75 * 12) / state.houseHoldMember
      );
    }
  };

  return (
    <div className="meter-tap-wrapper">
      <label>Do you know anything about water Bills?</label>
      <select onChange={(e) => setMeterTapBill(e.target.value)}>
        <option>Select</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>

      {meterTapBill === "yes" && (
        <>
          <input
            placeholder="On average how much do yoy pay per month?"
            type="number"
            onChange={(e) => setCostPerMonth(e.target.value)}
          />
          <IndirectWaterUse onDataFromChild={handleDataFromChild} />
          {waterFootPrint && (
            <div>The Total water foot print is {waterFootPrint}</div>
          )}
        </>
      )}
    </div>
  );
};

export default Metertap;
