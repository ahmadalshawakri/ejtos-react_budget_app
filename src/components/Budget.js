import React, { useContext, useRef } from "react";
import { AppContext } from "../context/AppContext";
const Budget = () => {
  const budgetRef = useRef("");
  const { budget } = useContext(AppContext);
  const { dispatch } = useContext(AppContext);

  const changeBudget = (event) => {
    const edidtedBudget = +event.target.value;
    dispatch({
      type: "SET_BUDGET",
      payload: edidtedBudget,
    });
  };

  return (
    <div className="alert alert-secondary">
      <span>Budget: £</span>
      <input
        type="number"
        step={10}
        max={20000}
        onChange={changeBudget}
        value={budget}
      />
    </div>
  );
};
export default Budget;
