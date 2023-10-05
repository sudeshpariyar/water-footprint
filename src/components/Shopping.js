import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";

const Shopping = () => {
  const [cloth, setCloth] = useState();
  const [shoes, setShoes] = useState();
  const [laptop, setLaptop] = useState();
  const [mobile, setMobile] = useState();
  const [book, setBook] = useState();
  const [shoppingPrint, setShoppingPrint] = useState();
  const { state } = useLocation();
  const navigate = useNavigate();

  let clothPrint;
  let shoesPrint;
  let laptopPrint;
  let mobilePrint;
  let bookPrint;

  if (cloth) clothPrint = cloth * 7773;
  if (shoes) shoesPrint = shoes * 8000;
  if (laptop) laptopPrint = (laptop * 190000 * 1) / 8;
  if (mobile) mobilePrint = mobile * 12760;
  if (book) bookPrint = book * 250;

  const handleSubmit = (e) => {
    e.preventDefault();
    let total = clothPrint + shoesPrint + laptopPrint + mobilePrint + bookPrint;
    setShoppingPrint(total);
  };

  if (shoppingPrint > 0) {
    navigate("/finalWaterprint", { state: { state, shoppingPrint } });
  }

  return (
    <div>
      <h3>Shopping</h3>
      <form onSubmit={handleSubmit}>
        <label>How often do you buy the below listed item in a year?</label>
        <input
          placeholder="Clothing?"
          type="number"
          onChange={(e) => setCloth(e.target.value)}
        />
        <input
          placeholder="Shoes?"
          type="number"
          onChange={(e) => setShoes(e.target.value)}
        />
        <input
          placeholder="Laptop?"
          type="number"
          onChange={(e) => setLaptop(e.target.value)}
        />
        <input
          placeholder="Mobile?"
          type="number"
          onChange={(e) => setMobile(e.target.value)}
        />
        <input
          placeholder="Book?"
          type="number"
          onChange={(e) => setBook(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Shopping;
