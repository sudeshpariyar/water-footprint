import React, { useState } from "react";

import "./NoTapMeter.css";
import DirectWaterUse from "./DirectWaterUse";
import OutdoorWaterUse from "./OutdoorWaterUse";
import IndirectWaterUse from "./IndirectWaterUse";

const NoTapMeter = () => {
  const [indoorWaterUse, setIndoorWaterUse] = useState();
  const [outDoorWaterUse, setOutDoorUse] = useState();
  const [totalDirectWaterUsed, setTotalDirectWaterUsed] = useState();
  const [waterFootPrint, setWaterFootPrint] = useState();

  const handleIndoorDataFromChild = (data) => {
    setIndoorWaterUse(data);
    console.log("indoorDataFromChild", indoorWaterUse);
  };

  const handleOutDoorDataFromChild = (data) => {
    setOutDoorUse(data);
    setTotalDirectWaterUsed(indoorWaterUse + outDoorWaterUse);
  };
  const handleDataFromIndirectChild = (data) => {
    setWaterFootPrint(totalDirectWaterUsed + data);
  };
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
      <IndirectWaterUse onDataFromChild={handleDataFromIndirectChild} />
      {waterFootPrint && (
        <div>Total water foot print for not metered is {waterFootPrint}</div>
      )}
    </div>
  );
};

export default NoTapMeter;
