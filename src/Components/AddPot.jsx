import React from "react";
import { useState, useEffect } from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

export default function AddPots({ pot, setPot, onClose }) {
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

  const [amount, setAmount] = useState("");
  const [actionTwo, setActionTwo] = useState(false);
  const [color, setColor] = useState(colors[0]);
  const [name, setName] = useState("");

  const Max_Chart = 30;
  const leftChart = Max_Chart - name.length;

  function hundleSubmit() {
    const newPot = {
      name: name,
      target: Number(amount),
      theme: color.hex,
    };

    setPot([...pot, newPot]);
    onClose();
  }

  return (
    <div className="editBorder">
      <div className="flex justify-between">
        <h1 className="font-[700] text-[32px]">Add New pots</h1>
        <button onClick={() => onClose()}>
          <CancelIcon />
        </button>
      </div>

      <div className="mt-[20px]">
        <p>
          Create a pot to set savings targets. These can help keep you on track
          as you save for special purchases.
        </p>
      </div>

      <div className="editBorderInput">
        <div>
          <label className="font-[700] text-[12px] text-[#696868]">
            pot Name
          </label>
          <div className="borderInput">
            <input
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              className="outline-none p-[20px]"
              type="text"
              placeholder="E.g Rainy Day"
            />
          </div>
          <div className="flex-col justify-items-end">
            <p className="font-[400] text-[12px]">
              {leftChart} characters left
            </p>
          </div>
        </div>

        <div className="mt-[16px]">
          <label className="font-[700] text-[12px] text-[#696868]">
            Target
          </label>
          <div className="borderInput relative flex p-[20px] ">
            <span className=" absolute justify-center items-center top-[25%] flex  ">
              $
            </span>
            <input
              className="outline-none absolute  top-[25%] left-[45px]  "
              type="number"
              onChange={(e) => setAmount(e.target.value)}
              value={amount}
              placeholder="e.g. 2000"
            />
          </div>
        </div>
        <div className="mt-[16px]">
          <label className="font-[700] text-[12px] text-[#696868]">Theme</label>
          <div className="relative borderInput items-center  flex relative">
            <button
              onClick={() => setActionTwo(!actionTwo)}
              className="flex items-center gap-[16px] p-[20px]  relative"
            >
              <div
                style={{ backgroundColor: color.hex }}
                className={`  w-[16px] h-[16px] rounded-full  `}
              ></div>
              <p className=" ">{color.name}</p>
            </button>
          </div>

          {actionTwo && (
            <ul className=" relative mt-[16px] colorBoder">
              {colors.map((items, i) => (
                <li
                  key={i}
                  className="flex justify-between items-center p-[20px] "
                  onClick={() => {
                    setColor(items);
                    setActionTwo(false);
                  }}
                >
                  <div className="flex gap-[12px] items-center">
                    <div
                      className="w-4 h-4 rounded-full "
                      style={{ backgroundColor: items.hex }}
                    ></div>
                    <span>{items.name}</span>
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

        <div className="borderInputSaved bg-[#201F24] mt-[20px] flex-col justify-items-center   ">
          <button
            className="  text-[#FFFFFF] text-center  "
            onClick={hundleSubmit}
          >
            Add pots
          </button>
        </div>
      </div>
    </div>
  );
}
