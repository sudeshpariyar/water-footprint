import "./App.css";
import BucketWaterSystem from "./components/BucketWaterSystem";
import GeneralInfo from "./components/GeneralInfo";
import Metertap from "./components/Metertap";
import NoTapMeter from "./components/NoTapMeter";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div className="app">
        <div className="header-title">Water footprint caluclator.</div>
        <Routes>
          <Route path="/" element={<GeneralInfo />} />
          <Route path="/meterTap" element={<Metertap />} />
          <Route path="/noMeterTap" element={<NoTapMeter />} />
          <Route path="/bucketWaterSystem" element={<BucketWaterSystem />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
