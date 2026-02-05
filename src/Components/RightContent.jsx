import React, { useEffect, useState } from "react";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { useNavigate } from "react-router-dom";
import dataJson from "../../data.json";
export default function RightContent() {
  const location = useNavigate();
  const [data, setdata] = useState(dataJson.budgets);

  if (!data) return <p>Loading</p>;
  return (
    <div className="gapses">
      <section>
        <div className="rightBox    lg:p-[32px] lg:gap-[20px]  ">
          <div className="flex mb-[20px]   justify-between">
            <h1 className="w-[43] font-bold text-[20px] h-[24px]">Budgets</h1>

            <button
              onClick={() => location("/Budget")}
              className="font-[400] text-[14px] text-[#696868] seeAll"
            >
              See Details <ArrowRightIcon />
            </button>
          </div>
          <div className=" parRightBorder  ">
            <div className="chart relative  ">
              <div className="pie absolute inset-0 "></div>
              <div className="shape-one  absolute inset-0 "></div>
              <div className="shape-two  absolute inset-0"></div>

              <div className=" relative  w-full h-full flex flex-col a  justify-center items-center b">
                <h1 className="font-[700] text-[32px] text-[#201F24]">$338</h1>
                <h1 className="font-[400] text-[12px]">of $975 limit</h1>
              </div>
            </div>

            <div className="flex flex-col gap-[16px] rightBoderChild">
              {data.map((item, index) => (
                <div className="flex " key={index}>
                  <div className={`savingFin bg-[${item.theme}]`}></div>
                  <div className="pl-[16px]">
                    <h1 className="font-[400] text-[12px] text-[#696868]">
                      {item.category}
                    </h1>
                    <h1 className="font-[700] text-[14px] text-[bold] text-[#201F24]">
                      ${item.maximum}
                    </h1>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="">
        <div className="rightBoxTwo p-[32px]">
          <div className="flex mb-2   justify-between">
            <h1
              className="w-[43] whitespace-nowrap
 font-bold text-[20px] h-[24px]"
            >
              Recurring bills
            </h1>

            <button
              onClick={() => location("/pots")}
              className="font-[400] text-[14px] text-[#696868] seeAll"
            >
              See Details <ArrowRightIcon />
            </button>
          </div>
          <div className="mt-[32px]  flex flex-col gap-[12px]">
            <div className="rightBoxBorder flex  justify-between pt-[20px] pr-[16px] pl-[16px] pb-[20px]">
              <h1 className="font-[400] text-[14px] text-[#696868]">
                Paid Bills
              </h1>
              <h1 className="font-[700] text-[14px] text-[#201F24] text-[bold]">
                $190.00
              </h1>
            </div>
            <div className="rightBoxBorder flex  justify-between pt-[20px] pr-[16px] pl-[16px] pb-[20px]">
              <h1 className="font-[400] text-[14px] text-[#696868]">
                Total Upcoming
              </h1>
              <h1 className="font-[700] text-[14px] text-[#201F24] text-[bold]">
                $194.98
              </h1>
            </div>
            <div className="rightBoxBorder flex  justify-between pt-[20px] pr-[16px] pl-[16px] pb-[20px]">
              <h1 className="font-[400] text-[14px] text-[#696868]">
                Due Soon
              </h1>
              <h1 className="font-[700] text-[14px] text-[#201F24] text-[bold]">
                $59.98
              </h1>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
