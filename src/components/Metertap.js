import { useState } from "react";
import "./MeterTap.css";
import { useLocation } from "react-router";
import { useNavigate } from "react-router";

const Metertap = () => {
  const navigate = useNavigate();

  const [costPerMonth, setCostPerMonth] = useState();
  const [meterTapBill, setMeterTapBill] = useState("");
  const { state } = useLocation();

  if (meterTapBill === "no") {
    navigate("/noMeterTap");
  }

  const handlePayPerMonth = (e) => {
    e.preventDefault();
    let directWaterBill = (costPerMonth * 75 * 12) / state.houseHoldMember;
    navigate("/indirectwateruse", { state: { state, directWaterBill } });
  };

  return (
    <div className="meter-tap-wrapper">
      {state && (
        <div>
          Name: {state.name} Hosehold Members: {state.houseHoldMember}
        </div>
      )}
      <label>Do you know your water bills?</label>
      <select onChange={(e) => setMeterTapBill(e.target.value)}>
        <option>Select</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>

      {meterTapBill === "yes" && (
        <>
          <form onSubmit={handlePayPerMonth}>
            <input
              placeholder="On average how much do yoy pay per month?"
              type="number"
              onChange={(e) => setCostPerMonth(e.target.value)}
            />
            <button type="submit">Submit</button>
          </form>
        </>
      )}
    </div>
  );
};

export default Metertap;
