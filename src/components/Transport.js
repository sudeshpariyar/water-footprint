import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";

const Transport = () => {
  const [privateVehicle, setPrivateVehicle] = useState();
  const [publicVehicle, setPublicVehicle] = useState();
  const [publicFreight, setPublicFreight] = useState();
  const [domesticFlight, setDomesticFlight] = useState();
  const [internationalFlight, setInternationalFlight] = useState();
  const [transportFootPrint, setTransportFootPrint] = useState();

  const navigate = useNavigate();
  const { state } = useLocation();

  let privateVehiclePrint;
  let publicVehiclePrint;
  let publicFreightPrint;
  let domesticFlightPrint;
  let internationalFlightPrint;

  if (privateVehicle) privateVehiclePrint = privateVehicle * 0.055;
  if (publicVehicle) publicVehiclePrint = publicVehicle * 0.013;
  if (publicFreight) publicFreightPrint = publicFreight * 0.66;
  if (domesticFlight) domesticFlightPrint = domesticFlight * 0.375 * 500;
  if (internationalFlight)
    internationalFlightPrint = internationalFlight * 5000 * 0.23;

  const handleSubmit = (e) => {
    let total =
      privateVehiclePrint +
      publicVehiclePrint +
      publicFreightPrint +
      domesticFlightPrint +
      internationalFlightPrint;
    e.preventDefault();
    setTransportFootPrint(total);
  };

  if (transportFootPrint > 0) {
    navigate("/shopping", { state: { state, transportFootPrint } });
  }

  return (
    <div>
      <h3>Transport</h3>
      <form onSubmit={handleSubmit}>
        <label>
          How many Kilometer do you travel in a week from listed below?
        </label>
        <input
          placeholder="Private passenger(Two-wheelers,cars)"
          type="number"
          onChange={(e) => setPrivateVehicle(e.target.value)}
        />
        <input
          placeholder="Public passenger(Jeep or taxi, microbus, minibus and bus)"
          type="number"
          onChange={(e) => setPublicVehicle(e.target.value)}
        />
        <input
          placeholder="Public freight(Pickup, minitruck and trucks, Tractors)"
          type="number"
          onChange={(e) => setPublicFreight(e.target.value)}
        />
        <input
          placeholder="How many Domestic flights do you take per year?"
          type="number"
          onChange={(e) => setDomesticFlight(e.target.value)}
        />
        <input
          placeholder="How many International flights do you take per year?"
          type="number"
          onChange={(e) => setInternationalFlight(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Transport;
