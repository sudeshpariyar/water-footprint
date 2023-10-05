import "./App.css";
import BucketWaterSystem from "./components/BucketWaterSystem";
import Dietry from "./components/Dietry";
import GeneralInfo from "./components/GeneralInfo";
import IndirectWaterUse from "./components/IndirectWaterUse";
import Metertap from "./components/Metertap";
import NoTapMeter from "./components/NoTapMeter";
import { Route, Routes } from "react-router-dom";
import Transport from "./components/Transport";
import Shopping from "./components/Shopping";
import FinalWaterPrint from "./FinalWaterPrint";

function App() {
  return (
    <>
      <div className="app">
        <h1 className="header-title">Water footprint calculator.</h1>
        <Routes>
          <Route path="/" element={<GeneralInfo />} />
          <Route path="/meterTap" element={<Metertap />} />
          <Route path="/indirectwateruse" element={<IndirectWaterUse />} />
          <Route path="/dietry" element={<Dietry />} />
          <Route path="/transport" element={<Transport />} />
          <Route path="/shopping" element={<Shopping />} />
          <Route path="/noMeterTap" element={<NoTapMeter />} />
          <Route path="/finalWaterprint" element={<FinalWaterPrint />} />
          <Route path="/bucketWaterSystem" element={<BucketWaterSystem />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
