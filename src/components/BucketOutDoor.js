import React, { useState } from "react";

const BucketOutDoor = ({ handleOutDoorBucketUse }) => {
  const [cleaning, setCleaning] = useState();
  const [vehicleCleaning, setVehicleCleaning] = useState();
  const [gardening, setGardening] = useState();
  const [miscellaneous, setMiscellaneous] = useState();

  let waterCleaningPrint;
  let vehicleCleaningPrint;
  let gardeningPrint;
  let miscellaneousPrint;

  let weeks = 52.17;

  if (cleaning) waterCleaningPrint = cleaning * weeks;
  if (vehicleCleaning) vehicleCleaningPrint = vehicleCleaning * weeks;
  if (gardening) gardeningPrint = gardening * weeks;
  if (miscellaneous) miscellaneousPrint = miscellaneous * weeks;

  const handleOutDoorSubmit = (e) => {
    e.preventDefault();
    let total;
    total =
      waterCleaningPrint +
      vehicleCleaningPrint +
      gardeningPrint +
      miscellaneousPrint;

    if (total > 0) {
      handleOutDoorBucketUse(total);
    }
  };
  return (
    <div>
      <h3>BucketOutDoor</h3>
      <form>
        <input
          type="number"
          placeholder="On an average how many bucket of water do you use for cleaning in a week (inside and outside)?"
          onChange={(e) => setCleaning(e.target.value)}
        />
        <input
          type="number"
          placeholder="If you have the vehicle, how many bucket of water do you use for vehicle cleaning in a week?"
          onChange={(e) => setVehicleCleaning(e.target.value)}
        />
        <input
          type="number"
          placeholder="On average how many bucket of water do you use for gardening purposes in a week?"
          onChange={(e) => setGardening(e.target.value)}
        />
        <input
          type="number"
          placeholder="For miscellaneous activities, how many bucket of water do you use in a weel? (Swimming pool, aquarium, other)"
          onChange={(e) => setMiscellaneous(e.target.value)}
        />
        <button onClick={handleOutDoorSubmit}>Out Door Bucket system</button>
      </form>
    </div>
  );
};

export default BucketOutDoor;
