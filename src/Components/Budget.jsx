import React, { use, useState } from "react";
import SummarySpend from "./SummarySpend";
import Entain from "./Entartainment";
import AddBudget from "./AddBudget";

import dataJson from "../../data.json";
export default function Budget() {
  const [action, setAction] = useState(null);
  const [budget, setBudget] = useState(dataJson.budgets);
  return (
    <div className="p-[40px]  bg-[#F8F4F0]">
      <div className="flex justify-between ">
        <h1 className="font-[700] text-[32px]">budget</h1>
        <button onClick={() => setAction("AddnewBudget")} className="budAddBor">
          + Add New Budget
        </button>

        {action === "AddnewBudget" && (
          <div className="model_layers">
            <div className="model">
              <AddBudget
                budget={budget}
                setBudget={setBudget}
                onClose={() => setAction(false)}
              />
            </div>
          </div>
        )}
      </div>
      <div className="  budDisplay mt-[32px] ">
        <div>
          <SummarySpend />
        </div>
        <div>
          <Entain setBudget={setBudget} budget={budget} />
        </div>
      </div>
    </div>
  );
}
