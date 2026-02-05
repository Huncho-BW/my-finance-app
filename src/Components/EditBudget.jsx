import React, { useState, useEffect, use } from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import dataJson from "../../data.json";
export default function EditBudget({ onClose, budgetId }) {
  const colors = [
    { name: "Green", hex: "#008080" },
    { name: "Yellow", hex: "#FFDAB9" },
    { name: "Cyan", hex: "#00FFFF" },
    { name: "Navy", hex: "#000080" },
    { name: "Red", hex: "#FF0000" },
    { name: "Purple", hex: "#800080" },
    { name: "Turquoise", hex: "#40E0D0" },
    { name: "Brown", hex: "#A52A2A" },
    { name: "Magenta", hex: "#FF00FF" },
    { name: "Blue", hex: "#0000FF" },
    { name: "Navy Grey", hex: "#6C7B8B" },
    { name: "Army Green", hex: "#4B5320" },
    { name: "Pink", hex: "#FFC0CB" },
    { name: "Gold", hex: "#FFD700" },
    { name: "Orange", hex: "#FFA500" },
  ];
  const [action, setAction] = useState(false);
  const [actionTwo, setActionTwo] = useState(false);
  const [color, setColor] = useState(colors[0]);
  const [cate, setCate] = useState("");
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(true);
  const [dataList, setDataList] = useState(null);
  const [currentData, setCurrentData] = useState("");
  const [data, setdata] = useState(dataJson.budgets);

  useEffect(() => {
    fetch("/data.json");

    const currentBudget = data.find((b) => b.category === budgetId);
    if (currentBudget) {
      setCate(currentBudget.category);

      setAmount(currentBudget.maximum);
    }
    setLoading(false);
  }, [budgetId]);

  console.log("add Bud", data);

  function handleSubmit() {
    onClose();
  }

  return (
    <div className="addBud">
      <div className="flex justify-between">
        <h1 className="font-[700] text-[32px]">Edits Budget</h1>
        <button onClick={() => onClose()}>
          <CancelIcon />
        </button>
      </div>

      <div className="mt-[20px]">
        <p>
          Choose a category to set a spending budget. These categories can help
          you monitor spending.
        </p>
      </div>

      <div className="editBorderInput">
        <div>
          <label className="font-[700] text-[12px] text-[#696868]">
            Budget Category{" "}
          </label>
          <div className="borderInput">
            <button
              onClick={() => setAction(true)}
              className="flex justify-between w-full pl-[20px] pr-[20px] pt-[12px] pb-[12px]"
            >
              {cate} <ArrowDropDownIcon />
            </button>
          </div>
          {action && (
            <ul className="bg-[#FFFFFF]">
              {data.map((item, i) => {
                return (
                  <li
                    key={i}
                    onClick={() => {
                      setCate(item.category);

                      setAction(false);
                    }}
                  >
                    {item.category}
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        <div className="mt-[16px]">
          <label className="font-[700] text-[12px] text-[#696868]">
            Maximum Spend
          </label>
          <div className="borderInput relative flex p-[20px] ">
            <span className=" absolute justify-center items-center top-[25%] flex  ">
              $
            </span>
            <input
              className="outline-none absolute  top-[25%] left-[45px]  "
              type="text"
              onChange={(e) => setAmount(e.target.value)}
              value={amount}
              placeholder="e.g. 2000"
            />
          </div>
        </div>
        <div className="mt-[16px]">
          <label className="font-[700] text-[12px] text-[#696868]">Theme</label>
          <div className=" borderInput flex items-center ">
            <button
              onClick={() => setActionTwo(true)}
              className="flex items-center gap-[16px] p-[20px] "
            >
              <div
                style={{ backgroundColor: color.hex }}
                className={`  w-[16px] h-[16px] rounded-full  `}
              ></div>
              <p className=" font-[400px] text-[14px] whitespace-nowrap">
                {color.name}
              </p>
            </button>
          </div>

          {actionTwo && (
            <ul className=" relative mt-[16px] colorBoder">
              {colors.map((items, i) => (
                <li
                  key={i}
                  className="flex items-center justify-between p-[20px] "
                  onClick={() => {
                    setColor(items);
                    setActionTwo(false);
                  }}
                >
                  <div className="flex items-center gap-[16px] relative gap-[12px]">
                    <div
                      className=" rounded-full  w-[16px] h-[16px] rounded-full "
                      style={{ backgroundColor: items.hex }}
                    ></div>
                    <span className=" font-[400px] text-[14px] whitespace-nowrap">
                      {items.name}
                    </span>
                  </div>

                  {items.name === color.name && (
                    <div>
                      <CheckCircleOutlineIcon sx={{ color: "green" }} />
                    </div>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="borderInputSaved bg-[#201F24] mt-[20px] flex-col justify-items-center ">
          <button
            onClick={handleSubmit}
            className="  text-[#FFFFFF] text-center  "
          >
            Save Change
          </button>
        </div>
      </div>
    </div>
  );
}
