import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

//Code to import Budget.js
import Budget from "./components/Budget";
import Remaining from "./components/Remaining";
import ExpenseTotal from "./components/ExpenseTotal";
import ExpenseItem from "./components/ExpenseItem";
import ExpenseList from "./components/ExpenseList";
import AllocationForm from "./components/AllocationForm";

// Add code to import the other components here under

import { AppProvider } from "./context/AppContext";

const App = () => {
  return (
    <AppProvider>
      <div className="container">
        <h1 className="mt-3">Company's Budget Allocation</h1>
        <div className="row mt-3">
             {" "}
          {
            // Budget component
            <div className="col-sm">
              <Budget />
            </div>
          }
             {" "}
          {
            //Remaining component
            <div className="col-sm">
              <Remaining />
            </div>
          }
             {" "}
          {
            //ExpenseTotal component
            <div className="col-sm">
              <ExpenseTotal />
            </div>
          }
        </div>
        <h2 className="mt-3">Allocation</h2>   {" "}
        {
          // ExpenseList component
          <div className="col-sm">
            <ExpenseList />
          </div>
        }
        <div class="flex-shrink-0 dropdown mb-5">
          <a
            href="#"
            class="d-block link-body-emphasis text-decoration-none dropdown-toggle show"
            className="btn btn-primary"
            data-bs-toggle="dropdown"
            aria-expanded="true"
          >
            Currency
          </a>
          <ul
            class="dropdown-menu text-small shadow show"
            data-popper-placement="bottom-end"
          >
            <li>
              <a class="dropdown-item" href="#">
                £ Pounds
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                $ Dollars
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                € Euro
              </a>
            </li>

            <li>
              <a class="dropdown-item" href="#">
                ₹ Ruppee
              </a>
            </li>
          </ul>
        </div>
            <h2 className="mt-3">Change Allocation</h2>   {" "}
        {
          // AllocationForm component
          <div className="col-sm">
            <AllocationForm />
          </div>
        }
      </div>
    </AppProvider>
  );
};
export default App;
