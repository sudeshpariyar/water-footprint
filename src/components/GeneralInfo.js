import React from "react";

const GeneralInfo = ({
  name,
  state,
  houseHoldMember,
  setName,
  setState,
  setHouseHoldMember,
}) => {
  return (
    <>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="State"
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
      <input
        type="number"
        placeholder="Number of household member?"
        value={houseHoldMember}
        onChange={(e) => setHouseHoldMember(e.target.value)}
      />
    </>
  );
};
export default GeneralInfo;
