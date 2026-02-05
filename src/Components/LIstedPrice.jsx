import React, { useEffect, useState } from "react";
import AttachMoneySharpIcon from "@mui/icons-material/AttachMoneySharp";
import dataJson from "../../data.json";
export default function ListedPrice() {
  const [data, setData] = useState(dataJson);

  if (!data) return <p>loding ...</p>;
  return (
    <div className="box-par  ">
      <div className="boxForSal   bg-[#201F24]">
        <div className="flex-col sm:flex-wrap  p-[24px]  text-justify">
          <p className="text-white boxCur ">current balance</p>
          <div>
            <p className="text-white boxCurFra ">
              {" "}
              ${data.balance.current.toLocaleString("en-US")}
            </p>
          </div>
        </div>
      </div>
      <div className="boxForSal bg-[#FFFFFF]">
        <div className=" flex-col  p-[24px]   text-justify">
          <p className="text-[#696868] boxCur ">current Income</p>
          <div>
            <p className="text-[#201F24] boxCurFra ">
              ${data.balance.income.toLocaleString("en-US")}
            </p>
          </div>
        </div>
      </div>
      <div className=" boxForSal bg-[#FFFFFF]">
        <div className=" flex-col  p-[24px]   text-justify">
          <p className="text-[#696868] boxCur ">current expenses</p>
          <div>
            {" "}
            <p className="text-[#201F24] boxCurFra ">
              ${data.balance.expenses.toLocaleString("en-US")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
