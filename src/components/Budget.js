import React, { useContext, useRef } from "react";
import { AppContext } from "../context/AppContext";
const Budget = () => {
  const budgetRef = useRef("");
  const { budget, currency } = useContext(AppContext);
  const { dispatch } = useContext(AppContext);

  const changeBudget = (event) => {
    const edidtedBudget = +event.target.value;
    dispatch({
      type: "SET_BUDGET",
      payload: edidtedBudget,
    });
  };

  return (
    <div
      className="alert alert-secondary"
      style={{ maxWidth: "14rem", padding: "0.4rem" }}
    >
      <span>Budget: {currency}</span>
      <input
        type="number"
        step={10}
        max={20000}
        onChange={changeBudget}
        value={budget}
        style={{ maxWidth: "6rem" }}
      />
    </div>
  );
};
export default Budget;
