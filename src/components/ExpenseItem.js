import React, { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import { AppContext } from "../context/AppContext";

const ExpenseItem = (props) => {
  const { dispatch } = useContext(AppContext);



  const increaseAllocation = (name) => {
    const expense = {
      name: name,
      cost: 10,
    };

    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });
  };

    const decreaseAllocation = (name) => {
      const expense = {
        name: name,
        cost: 10,
      };

      dispatch({
        type: "RED_EXPENSE",
        payload: expense,
      });
    };

  return (
    <tr>
      <td>{props.name}</td>
      <td>${props.cost}</td>
      <td>
        <button
          className="btn btn-primary"
          onClick={(event) => increaseAllocation(props.name)}
        >
          +
        </button>
      </td>
      <td>
        <button
          className="btn btn-secondary"
          onClick={(event) => decreaseAllocation(props.name)}
        >
          -
        </button>
      </td>
    </tr>
  );
};

export default ExpenseItem;
