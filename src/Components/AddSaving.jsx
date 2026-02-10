import React from "react";
import { useState, useEffect } from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import dataJson from "../../data.json";
export default function AddSaving({ onClose, savIngId }) {
  const [amount, setAmount] = useState("");

  const [target, setTarget] = useState("");
  const [total, setTotals] = useState("");
  const [theme, setTheme] = useState("");
  const [loading, setLoading] = useState(true);
  const [data, setdata] = useState(dataJson.pots);

  useEffect(() => {
    const currentSaving = data.find((n) => n.name === savIngId);

    if (currentSaving) {
      setTarget(currentSaving.target);
      setTotals(currentSaving.total);
      setTheme(currentSaving.theme);
    }
    setLoading(false);
  }, [savIngId]);

  if (!data) return <p>loading</p>;
  const currentAmount = Math.min(Math.ceil((total / target) * 100), 100);
  const newAmount = Number(total) + Number(amount);
  const newlyAdded = Math.min(Math.ceil((newAmount / target) * 100), 100);
  const fletTo = amount ? Math.max(0, newlyAdded - currentAmount) : 0;

  console.log("my curr ", currentAmount);
  console.log("my new amount ", fletTo);

  function handleSubmit() {
    onClose();
  }

  return (
    <div className="withDraw ">
      <div className="flex justify-between">
        <h1 className="font-[700] text-[32px]">Add to ‘Savings’</h1>
        <button onClick={() => onClose()}>
          <CancelIcon />
        </button>
      </div>

      <div className="mt-[20px]">
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus
          hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet.
        </p>
      </div>

      <div className="mt-[30px]">
        <div className="flex  justify-between">
          <p className="font-[400] text-[14px] text-[#696868]">New Amount</p>
          <h1 className="font-[700] text-[32px] text-[#201F24]">
            ${newAmount}
          </h1>
        </div>
      </div>
      <div className="mt-[20px]">
        <div className="barOne  flex items-center bg-[#F8F4F0] overflow-hidden    bg-[#F8F4F0]  ">
          <div
            className=" h-full shrink-0 grow-0   "
            style={{
              backgroundColor: theme,
              width: `${currentAmount}%`,
            }}
          ></div>

          {fletTo > 0 && <div className="w-[2px] bg-white h-full shrink-0" />}

          <div
            className=" h-full  shrink-0 grow-0  "
            style={{
              backgroundColor: "green",
              width: `${fletTo}%`,
            }}
          ></div>
        </div>

        <div className=" flex justify-between mt-[13px]">
          <p className="text-[#696868] font-[700] text-[12px] text-[#696868]">
            {newlyAdded}
          </p>
          <p className="text-[#696868] font-[700] text-[12px] text-[#696868]">
            {target}
          </p>
        </div>
      </div>

      <div>
        <label className="font-[700] text-[12px] text-[#696868]">Target </label>
        <div className="borderInput relative flex p-[20px] ">
          <span className=" absolute justify-center items-center top-[25%] flex  ">
            $
          </span>
          <input
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
            className="outline-none absolute  top-[25%] left-[45px]  "
            type="text"
            placeholder="e.g. 2000"
          />
        </div>
      </div>
      <div className="borderInputSaved bg-[#201F24] mt-[20px] flex-col justify-items-center ">
        <button
          onClick={handleSubmit}
          className="  text-[#FFFFFF] text-center  "
        >
          Confirm Addition
        </button>
      </div>
    </div>
  );
}
