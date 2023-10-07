import React from "react";
import { PieChart } from "react-minimal-pie-chart";
import { useLocation } from "react-router";
import "./FinalWaterPrint.css";

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
    <div className="final-waterprint-wrapper">
      <div>
        <h3>Final Water Footprint</h3>
        <br />
        <label>Shopping Water Footprint</label>: {state.shoppingPrint}
        <br />
        <label>Transport Water Footprint</label>:
        {state.state.transportFootPrint}
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
      </div>
      <div className="chart-wrapper">
        <h3>Total Water Footprint</h3>
        <PieChart
          animate={true}
          lineWidth={20}
          paddingAngle={18}
          rounded
          data={[
            {
              title: `In Direct Footprint ${Math.round(
                (inDirect / (total * 1000)) * 100
              ).toFixed(2)}%`,
              value: inDirect,
              color: "#E38627",
            },
            {
              title: `Direct Footprint ${Math.round(
                (direct / (total * 1000)) * 100
              ).toFixed(2)}%`,
              value: direct,
              color: "#C13C37",
            },
          ]}
        />
        <div className="label">
          <div className="label-wrapper">
            <div>Indirect</div>
            <div className="inDirect-chart"></div>
          </div>
          <div className="label-wrapper">
            <div>Direct</div>
            <div className="direct-chart"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalWaterPrint;
