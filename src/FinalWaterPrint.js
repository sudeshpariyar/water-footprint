import React from "react";
import { useLocation } from "react-router";

const FinalWaterPrint = () => {
  const { state } = useLocation();

  let shopping = state.shoppingPrint;
  let transport = state.state.transportFootPrint;
  let dietry = state.state.state.totalWaterFootPrintDietry;

  let energy = state.state.state.state.totalWaterFootPrintEnergy;
  let direct = state.state.state.state.state.directWaterBill;
  let inDirect = shopping + transport + dietry + energy;
  let total;
  if (shopping && transport && dietry && energy && direct) {
    total = Math.round(
      (shopping + transport + dietry + energy + direct) / 1000
    ).toFixed(2);
  }

  return (
    <>
      <h3>Final Water Footprint</h3>
      <br />
      <label>Shopping Water Footprint</label>: {state.shoppingPrint}
      <br />
      <label>Transport Water Footprint</label>:{state.state.transportFootPrint}
      <br />
      <label>Dietry Water Footprint</label>:{" "}
      {state.state.state.totalWaterFootPrintDietry}
      <br />
      <label>Energy Water Footprint</label>:{" "}
      {state.state.state.state.totalWaterFootPrintEnergy}
      <br />
      <br />
      <label>Indirect water Footprint:</label> {inDirect}
      <br />
      <label>Direct Water Footprint</label>:{" "}
      {state.state.state.state.state.directWaterBill}
      <br />
      {total && <h3>Total water footprint : {total}</h3>}
    </>
  );
};

export default FinalWaterPrint;
