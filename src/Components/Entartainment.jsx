import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import EditBudget from "./EditBudget";
import Delete from "./delete";
import dataJson from "../../data.json";

export default function Entain() {
  const [data, setdata] = useState(dataJson.budgets);
  const [tran, setTran] = useState(dataJson.transactions);

  const [open, setOpen] = useState(null);
  const [action, setAction] = useState(null);
  const [actionTwo, setActionTwo] = useState(null);

  const navigate = useNavigate();
  const option = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  if (!data) return <p>Loading</p>;

  let target = ["Entertainment", "Bills", "Dining Out", "Personal Care"];

  let getBudget = data.map((item) => item);
  console.log("this is my budget", getBudget);
  let getCat = target.flatMap((cat) =>
    tran.filter((item) => item.category === cat).slice(0, 3),
  );

  console.log(" my filtter categories", getCat);

  const allData = [...getBudget, ...getCat];
  console.log("all data gain :", allData);
  return (
    <div>
      {getBudget.map((item, i) => (
        <div className="Entain">
          <div key={i}>
            <div className="flex justify-between ">
              <div className="flex justify-between  ">
                <div className={`EntainBord bg-[${item.theme}]`}></div>
                <h1 className="ml-[16px] font-[700] text-[20px]">
                  {item.category}
                </h1>
              </div>

              <div className="relative">
                <button
                  onClick={() => {
                    setOpen(open === i ? null : i);
                  }}
                >
                  <MoreHorizIcon />
                </button>
                {open === i && (
                  <ul className="absolute  dropDwonBudget">
                    <li
                      onClick={() => {
                        setAction(i);
                        setOpen(false);
                      }}
                    >
                      Edit Budget
                    </li>

                    <li
                      className="text-[red] whitespace-nowrap "
                      onClick={() => {
                        setActionTwo(i);
                        setOpen(false);
                      }}
                    >
                      Delete Budget
                    </li>
                  </ul>
                )}
              </div>

              {action === i && (
                <div className="model_layers">
                  <div className="model">
                    <EditBudget
                      budgetId={item.category}
                      currentBudget={item}
                      onClose={() => setAction(false)}
                    />
                  </div>
                </div>
              )}

              {actionTwo === i && (
                <div className="model_layers">
                  <div className="model">
                    <Delete onClose={() => setActionTwo(false)} />
                  </div>
                </div>
              )}
            </div>

            <div className="mt-[16px] ">
              <h1 className=" text-[#696868] font-[400]">
                maximun of {item.maximum}
              </h1>
              <div className=" barTwo  mt-[16px]  ">
                <div className=" "> </div>
              </div>
              <div className="flex mt-[32px]   ">
                <div className="spent">
                  <div className="spentBor"></div>
                  <div>
                    <p className="pb-[4px] font-[400] text-[12px] text-[#696868]">
                      Spent
                    </p>
                    <h1 className="font-[700] text-[14px] text-[#201F24]">
                      $15.00
                    </h1>
                  </div>
                </div>
                <div className="saved">
                  <div className="savedBor"></div>
                  <div>
                    <p className="pb-[4px] font-[400] text-[12px] text-[#696868]">
                      Remaining
                    </p>
                    <h1 className="font-[700] text-[14px] text-[#201F24]">
                      $35.00
                    </h1>
                  </div>
                </div>
              </div>
            </div>

            <div className="lastSpend">
              <div className="flex mb-2 items-center  justify-between">
                <h1 className="w-[43] font-[700] text-[16px] h-[24px] ">
                  Latest Spending
                </h1>
                <button className="font-[400] text-[14px] text-#696868">
                  See All
                </button>
              </div>
              <div className="lg:p-[20px] md:p-[20px]   ">
                {tran
                  .filter((t) => t.category === item.category)
                  .slice(0, 3)
                  .map((t, i) => (
                    <li key={i} className="list-none  ">
                      <div className="flex   justify-between">
                        <div className="flex  md:justify-between md:gap-[10px] lg:gap-[10px] lg:justify-between">
                          <img
                            className=" hidImg w-[40px] h-[40px] rounded-full"
                            src={t.avatar}
                          />
                          <h1 className="font-[700] text-[12px] pad  ">
                            {t.name}
                          </h1>
                        </div>

                        <div className=" flex-col justify-end gap-[4px] ">
                          <h1
                            className={`font-[700] text-[12px]  pb-[4px] text-right ${
                              t.amount > 0 ? "text-[#277C78]" : "text-[#201F24]"
                            }`}
                          >
                            {`$${t.amount.toLocaleString("en-US")}`.replace(
                              /^(\$-)/,
                              "-$",
                            )}
                          </h1>

                          <h1
                            className=" whitespace-nowrap
                            font-[400] text-[12px] text-[#696868] text-left"
                          >
                            {new Date(t.date).toLocaleDateString(
                              "en-GB",
                              option,
                            )}
                          </h1>
                        </div>
                      </div>
                      <div className="mb-[12px] mt-[12px] line"></div>
                    </li>
                  ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
