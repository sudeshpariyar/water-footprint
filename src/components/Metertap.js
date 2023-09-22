import NoTapMeter from "./NoTapMeter";

const Metertap = ({ setMeterTapBill, meterTapBill, setCostPerMonth }) => {
  return (
    <>
      <label>Do you know anything about water Bills?</label>
      <select onChange={(e) => setMeterTapBill(e.target.value)}>
        <option>Select</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>

      {meterTapBill === "yes" && (
        <>
          <input
            placeholder="On average how much do yoy pay per month?"
            type="number"
            onChange={(e) => setCostPerMonth(e.target.value)}
          />
        </>
      )}
    </>
  );
};

export default Metertap;
