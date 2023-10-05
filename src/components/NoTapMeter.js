import React, { useState } from "react";

import "./NoTapMeter.css";
import DirectWaterUse from "./DirectWaterUse";
import OutdoorWaterUse from "./OutdoorWaterUse";
import { useNavigate } from "react-router";

const NoTapMeter = () => {
  const [indoorWaterUse, setIndoorWaterUse] = useState();
  const [outDoorWaterUse, setOutDoorUse] = useState();
  const [totalDirectWaterUsed, setTotalDirectWaterUsed] = useState();
  const navigate = useNavigate();

  const handleIndoorDataFromChild = (data) => {
    setIndoorWaterUse(data);
  };

  const handleOutDoorDataFromChild = (data) => {
    setOutDoorUse(data);
    setTotalDirectWaterUsed(indoorWaterUse + outDoorWaterUse);
  };
  if (totalDirectWaterUsed) {
    let directWaterBill = totalDirectWaterUsed;
    navigate("/indirectwateruse", { state: { directWaterBill } });
  }

  return (
    <div className="no-metered-tap">
      <DirectWaterUse onDataFromIndoorChild={handleIndoorDataFromChild} />
      {indoorWaterUse && (
        <>
          <div>Indirect Water Consumption {indoorWaterUse}</div>
          <OutdoorWaterUse
            onDataFromOutdoorChild={handleOutDoorDataFromChild}
          />
        </>
      )}

      {totalDirectWaterUsed && (
        <div> Total water used {totalDirectWaterUsed}</div>
      )}
    </div>
  );
};

export default NoTapMeter;
