import React, { useState } from "react";

const BucketIndoor = ({ handleIndoorBucketUse }) => {
  const [personalHygine, setPersonalHygine] = useState();
  const [toiletryUse, setToiletryUse] = useState();
  const [cookingUse, setCookingUse] = useState();
  const [dishWashingUse, setDishWashingUse] = useState();
  const [laundryUse, setLaundryUse] = useState();

  let total = 0;

  const handleIndoorSubmit = (e) => {
    e.preventDefault();
    total =
      (+personalHygine + +toiletryUse + +cookingUse + +dishWashingUse) * 365 +
      +laundryUse * 52;
    handleIndoorBucketUse(total);
  };
  return (
    <div>
      <h3>Bucket Indoor</h3>
      <form>
        <input
          placeholder="On an average how many bucket of water do you use  for all personal hygine purpose in a day?"
          type="number"
          onChange={(e) => setPersonalHygine(e.target.value)}
        />
        <input
          placeholder="On an average how many bucket of water do you use  for Toiletry purpose in a day?"
          type="number"
          onChange={(e) => setToiletryUse(e.target.value)}
        />
        <input
          placeholder="On an average how many bucket of water do you use  for cooking purpose in a day?"
          type="number"
          onChange={(e) => setCookingUse(e.target.value)}
        />
        <input
          placeholder="On an average how many bucket of water do you use  for dishwashing purpose in a day?"
          type="number"
          onChange={(e) => setDishWashingUse(e.target.value)}
        />
        <input
          placeholder="On an average how many bucket of water do you use  for Laundry purpose in a week?"
          type="number"
          onChange={(e) => setLaundryUse(e.target.value)}
        />
        <button onClick={handleIndoorSubmit}>Out Door Bucket system</button>
      </form>
    </div>
  );
};

export default BucketIndoor;
