import React, { useState } from "react";
import "./BucketWaterSystem.css";
import BucketIndoor from "./BucketIndoor";
import BucketOutDoor from "./BucketOutDoor";
const BucketWaterSystem = () => {
  const [bucketSize, setBucketSize] = useState();
  const [indoorBucketUse, setIndoorBucketUse] = useState();
  const [outDoorBucketUse, setOutDoorBucketUse] = useState();
  const [totalBucketWater, setTotalBucketWater] = useState();

  const handleIndoorBucketUse = (data) => {
    if (data) {
      setIndoorBucketUse(data * bucketSize);
    }
  };
  const handleOutDoorBucketUse = (data) => {
    if (data) {
      setOutDoorBucketUse(data * bucketSize);
      setTotalBucketWater(+indoorBucketUse + +outDoorBucketUse);
    }
  };

  return (
    <div className="bucket-water-system-wrapper">
      <h2>Bucket System</h2>
      <input
        placeholder="What is the standard size of the bucket you use at your residence?"
        type="number"
        onChange={(e) => setBucketSize(e.target.value)}
      />
      <BucketIndoor handleIndoorBucketUse={handleIndoorBucketUse} />
      {indoorBucketUse && (
        <BucketOutDoor handleOutDoorBucketUse={handleOutDoorBucketUse} />
      )}
      {totalBucketWater && (
        <>The total water foot print is {totalBucketWater}</>
      )}
    </div>
  );
};

export default BucketWaterSystem;
