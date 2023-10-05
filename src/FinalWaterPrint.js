import React from "react";
import { useLocation } from "react-router";

const FinalWaterPrint = () => {
  const { state } = useLocation();
  let shopping = state.shoppingPrint;
  let transport = state.state.transportFootPrint;
  let dietry = state.state.state.totalWaterFootPrintDietry;
  let energy = state.state.state.state.totalWaterFootPrintEnergy;
  let direct = state.state.state.state.state.directWaterBill;
  let total;
  if (shopping && transport && dietry && energy && direct) {
    total = shopping + transport + dietry + energy + direct;
  }

  return (
    <>
      <label>Final Water Print</label>
      <br />
      <label>Shopping Print</label>: {state.shoppingPrint}
      <br />
      <label>Transport Foot Print</label>:{state.state.transportFootPrint}
      <br />
      <label>Dietry</label>:{state.state.state.totalWaterFootPrintDietry}
      <br />
      <label>Energy</label>: {state.state.state.state.totalWaterFootPrintEnergy}
      <br />
      <label>Direct Water bill</label>:
      {state.state.state.state.state.directWaterBill}
      <br />
      {total && <h3>Total water footprint : {total}</h3>}
    </>
  );
};

export default FinalWaterPrint;
