import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

import "../App.css";

const CurrencyForm = (props) => {
  const { dispatch } = useContext(AppContext);

  const changeCurrencyHandler = (event) => {
    console.log(event.target.value);
    dispatch({
      type: "CHG_CURRENCY",
      payload: event.target.value,
    });
  };

  return (
    <div
      className="alert alert-success"
      style={{ maxWidth: "14rem", padding: "0.4rem", marginLeft: "1rem" }}
    >
      <span>Currency </span>
      <select onChange={changeCurrencyHandler} className={"currencyDropDown"}>
        <option value="£" name="Pound">
          £ Pound
        </option>
        <option value="$" name="dollar">
          $ Dollar
        </option>
        <option value="€" name="euro">
          € Euro
        </option>
        <option value="₹" name="ruppee">
          ₹ Ruppee
        </option>
      </select>
    </div>
  );
};

export default CurrencyForm;
