import React, { useState } from "react";
import { useNavigate } from "react-router";
import "./GeneralInfo.css";

const GeneralInfo = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [state, setState] = useState("");
  const [houseHoldMember, setHouseHoldMember] = useState();
  const [knowWaterFootPrint, setKnowWaterFootPrint] = useState("yes");
  const [waterSystem, setWaterSystem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    switch (waterSystem) {
      case "meterTap":
        navigate("/meterTap", { state: { name, houseHoldMember } });
        break;
      case "noMeterTap":
        navigate("/noMeterTap");
        break;
      case "bucketWaterSystem":
        navigate("/bucketWaterSystem");
        break;
      default:
    }
  };

  return (
    <>
      <h3>General Info</h3>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="State"
          onChange={(e) => setState(e.target.value)}
        />
        <input
          type="number"
          placeholder="Number of household member?"
          onChange={(e) => setHouseHoldMember(e.target.value)}
        />
        <label>What kind of water system do you have at your residence?</label>
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
        <select onChange={(e) => setWaterSystem(e.target.value)}>
          <option>Choose water system</option>
          <option value="meterTap">Metered Tap</option>
          <option value="noMeterTap">No-metered Tap</option>
          <option value="bucketWaterSystem">Bucket Water System</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
export default GeneralInfo;
