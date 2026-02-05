import React from "react";
import { useState, useEffect } from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import DeletePots from "./DeletePot";
import AddSaving from "./AddSaving";
import Withdral from "./WithDraw";
import AddPots from "./AddPot";

import EditPot from "./EditPot";
import dataJson from "../../data.json";
export default function Pots() {
  const [data, setdata] = useState(dataJson.pots);
  const [action, setAction] = useState(null);
  const [actionTwo, setActionTwo] = useState(false);
  const [actionThree, setActionThree] = useState(null);
  const [actionFour, setActionFour] = useState(null);
  const [actionFiv, setActionFiv] = useState(null);
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  if (!data) return <p>loading</p>;

  const fletTo = data.flatMap((item) => ({
    ...item,
    perntage: Math.ceil((item.total / item.target) * 100),
  }));

  console.log(" this is the percantage of port ", fletTo);
  return (
    <div className="p-[40px] bg-[#F8F4F0] ">
      <section className="firstSec">
        <div className="flex justify-between ">
          <h1 className="font-[700] text-[32px]">Pots</h1>
          <button onClick={() => setAction(true)} className="budAddBor">
            + Add New Port
          </button>

          {action && (
            <div className="model_layers">
              <div className="model">
                <AddPots onClose={() => setAction(false)} />
              </div>
            </div>
          )}
        </div>
      </section>

      <div className="potLayout mt-[20px] ">
        {fletTo.map((item, i) => (
          <section key={i} className="secondSec">
            <div className="flex items-center pt-[4px] pb-[4px]  justify-between">
              <div className="flex items-center gap-[16px] relative ">
                <div
                  className="EntainBord   "
                  style={{ backgroundColor: item.theme }}
                ></div>
                <h1 className="font-[700] text-[20px] text-[#201F24]  whitespace-nowrap pt-[4px] pb-[4px]">
                  {item.name}
                </h1>
              </div>
              <div className="relative">
                <button
                  className="relative"
                  onClick={() => {
                    setActionTwo(actionTwo === i ? null : i);
                  }}
                >
                  <MoreHorizIcon />
                </button>
                {actionTwo === i && (
                  <ul className="absolute dropDwonBudget">
                    <li
                      onClick={() => {
                        setOpenEdit(i);
                        setActionTwo(false);
                      }}
                    >
                      Edit Pots
                    </li>

                    <li
                      onClick={() => {
                        setOpenDelete(i);
                        setActionTwo(false);
                      }}
                      className="text-[red]"
                    >
                      Delete Pots
                    </li>
                  </ul>
                )}

                {openEdit === i && (
                  <div className="model_layers">
                    <div className="model">
                      <EditPot
                        potsId={item.name}
                        onClose={() => setOpenEdit(false)}
                      />
                    </div>
                  </div>
                )}

                {openDelete === i && (
                  <div className="model_layers">
                    <div className="model">
                      <DeletePots onClose={() => setOpenDelete(false)} />
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="mt-[30px]">
              <div className="flex  justify-between">
                <p className="font-[400] text-[14px] text-[#696868]">
                  Total Saved
                </p>
                <h1 className="font-[700] text-[32px] text-[#201F24]">
                  ${item.total}
                </h1>
              </div>
            </div>
            <div className="mt-[16px]">
              <div className="barOne">
                <div
                  className={"barTwo "}
                  style={{
                    width: `${item.perntage}% `,
                    backgroundColor: item.theme,
                  }}
                >
                  {" "}
                </div>
              </div>
            </div>

            <div className=" flex justify-between mt-[13px]">
              <p className="text-[#696868] font-[700] text-[12px] text-[#696868]">
                {item.perntage}
              </p>
              <p className="text-[#696868] font-[700] text-[12px] text-[#696868]">
                Target of ${item.target}
              </p>
            </div>

            <div className="mt-[32px]">
              <div className="flex gap-[16px]">
                <button
                  onClick={() => {
                    setActionTwo(false);
                    setActionThree(item.name);
                  }}
                  className="potButton"
                >
                  +Add Money
                </button>

                {actionThree === item.name && (
                  <div className="model_layers">
                    <div className="model">
                      <AddSaving
                        savIngId={item.name}
                        onClose={() => setActionThree(false)}
                      />
                    </div>
                  </div>
                )}
                <button
                  onClick={() => {
                    setActionTwo(false);
                    setActionFour(item.name);
                  }}
                  className="potButton"
                >
                  Withdrawel Money
                </button>

                {actionFour === item.name && (
                  <div className="model_layers">
                    <div className="model">
                      <Withdral
                        withdrawId={item.name}
                        onClose={() => setActionFour(false)}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
