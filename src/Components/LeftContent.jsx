import React, { useEffect, useState } from "react";
import RequestQuoteIcon from "@mui/icons-material/RequestQuote";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { useNavigate } from "react-router-dom";
import dataJson from "../../data.json";
export default function LeftContent() {
  const location = useNavigate();
  const [data, setdata] = useState(dataJson.transactions);
  const option = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  if (!data) return <p>loading</p>;

  return (
    <div className="flex flex-col gap-[20px]">
      <section className="overflow-hidden  ">
        <div className="leftBox   flex flex-col  ">
          <div className="flex  justify-between">
            <h1 className="w-[43] h-[24px] font-[700] text-[20px] ">Pots</h1>
            <button
              onClick={() => location("/pots")}
              className="font-[400] text-[14px]  seeAll "
            >
              See Details <ArrowRightIcon />
            </button>
          </div>
          <div className=" mt-[20px] lg:flex md:flex md:gap-[20px] md:justify-between  ">
            <div className="dollarBox       ">
              <div className="p-[16px]  ">
                <RequestQuoteIcon />
              </div>
              <div className="   ">
                <h1 className="  text-[#696868] font-[400] text-[14px]">
                  TotalSaving
                </h1>
                <h1 className="  font-[700] text-[32px]">$159</h1>
              </div>
            </div>
            <div className="dollarBoxTwo grid grid-cols-2 ">
              <div className="flex dollarBoxTwoChild ">
                <div className="savingFin bg-[#277C78]"> </div>
                <div className="  ml-[16px] ">
                  <div className="">
                    <h1 className="text-[#696868] font-[400] text-[12px]">
                      Saving
                    </h1>
                    <h1 className="text-[#201F24] font-[700] text-[14px]">
                      $159
                    </h1>
                  </div>
                </div>
              </div>
              <div className="flex dollarBoxTwoChild ">
                <div className="savingFin bg-[#82C9D7]"> </div>
                <div className=" items-center justify-center ml-[16px]  ">
                  <div>
                    <h1 className="text-[#696868] font-[400] text-[12px]">
                      Gift
                    </h1>
                    <h1 className="text-[#201F24] font-[700] text-[14px]">
                      $40
                    </h1>
                  </div>
                </div>
              </div>
              <div className="flex dollarBoxTwoChild  ">
                <div className="savingFin bg-[#626070]"> </div>
                <div className="  ml-[16px]  ">
                  <div>
                    <h1 className="text-[#696868] font-[400] text-[12px]">
                      Concert Ticket
                    </h1>
                    <h1 className="text-[#201F24] font-[700] text-[14px]">
                      $110
                    </h1>
                  </div>
                </div>
              </div>
              <div className="flex dollarBoxTwoChild">
                <div className="savingFin bg-[#F2CDAC]"> </div>
                <div className="   ml-[16px]  ">
                  <div>
                    <h1 className="text-[#696868] font-[400] text-[12px]">
                      New Laptop
                    </h1>
                    <h1 className="text-[#201F24] font-[700] text-[14px]">
                      $10
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="">
        <div className="leftBoxTwo  ">
          <div className="flex    justify-between ">
            <h1 className="w-[43]   h-[24px]  font-[700] text-[20px]">
              Transactions
            </h1>

            <button
              onClick={() => location("/transaction")}
              className="font-[400] text-[14px] text-[#696868] seeAll"
            >
              View All <ArrowRightIcon />
            </button>
          </div>

          <div className="   listTrac ">
            {data.map((dat, index) => (
              <li className="overflow-hidden " key={index}>
                <div className="flex justify-between ">
                  <div className="tranGap ">
                    <img
                      className="imgListTrac "
                      src={`${dat.avatar}`}
                      alt=""
                    />
                    <h1 className="font-[700] text-[14px] pad ">{dat.name}</h1>
                  </div>

                  <div className="justify-end gap-[8px] flex-col ">
                    <h1
                      className={`font-[700] text-[14px] ${
                        dat.amount > 0 ? "text-[#277C78]" : "text-[#201F24]"
                      }`}
                    >
                      {`$${dat.amount.toLocaleString("en-US")}`.replace(
                        /^(\$-)/,
                        "-$",
                      )}
                    </h1>

                    <h1 className="font-[400] text-[12px] text-[#696868]">
                      {new Date(dat.date).toLocaleDateString("en-GB", option)}
                    </h1>
                  </div>
                </div>
                <div className="mb-[20px] mt-[20px] line"></div>
              </li>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
