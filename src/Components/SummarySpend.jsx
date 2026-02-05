import React from "react";
import { useState, useEffect } from "react";
import dataJson from "../../data.json";
export default function SummarySpend() {
  const [data, setdata] = useState(dataJson.budgets);

  if (!data) return <p>Loading</p>;
  return (
    <div className="bg-[white] lg:flex lg:flex-col  sumLay p-[32px]">
      <div className="BudBorder   ">
        <div className=" chart relative   ">
          <div className="pie absolute inset-0 "></div>
          <div className="shape-one  absolute inset-0 "></div>
          <div className="shape-two  absolute inset-0"></div>

          <div className=" relative  w-full h-full flex flex-col   justify-center items-center ">
            <h1 className="font-[700] text-[32px] text-[#201F24]">$338</h1>
            <h1 className="font-[400] text-[12px]">of $975 limit</h1>
          </div>
        </div>
      </div>

      <div className="  sumDisplay ">
        <h1>Spending Summary</h1>

        <div className="mt-[24px] flex-col flex gap-[16px] ">
          {data.map((item, index) => (
            <div className="flex   justify-between " key={index}>
              <div className={`savingFine bg-[${item.theme}]`}></div>
              <div className="pl-[16px] flex justify-between w-full">
                <div>
                  <h1 className="font-[400] text-[12px] text-[#696868]">
                    {item.category}
                  </h1>
                </div>

                <div>
                  <p className="font-[700] text-[14px] text-[bold] text-[#201F24]">
                    ${item.maximum}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
