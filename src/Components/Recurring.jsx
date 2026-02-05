import React from "react";
import ReceiptTwoToneIcon from "@mui/icons-material/ReceiptTwoTone";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import ReportGmailerrorredOutlinedIcon from "@mui/icons-material/ReportGmailerrorredOutlined";
import CancelIcon from "@mui/icons-material/Cancel";
import SortIcon from "@mui/icons-material/Sort";
import FilterListAltIcon from "@mui/icons-material/FilterListAlt";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useState, useEffect } from "react";
import dataJson from "../../data.json";
export default function RecurringBill() {
  const [data, setdata] = useState(dataJson.transactions);
  const [searchQuery, setSearchQuery] = useState("");
  const [select, setSelected] = useState("Latest");
  const [open, setOpen] = useState(false);

  if (!data) return <p>loading</p>;
  const options = {
    day: "2-digit",
  };
  let recurringData = data.filter((item) => {
    if (item.recurring === true) {
      const querySearch = item.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

      return querySearch;
    }
  });
  console.log("my sorted value", recurringData);

  let sorted = [...recurringData].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);

    const monthA = dateA.getMonth();
    const monthB = dateB.getMonth();

    console.log("this is month B ", dateB);
    const dayA = dateA.getDay();
    const dayB = dateB.getDay();

    if (select === "Latest") {
      if (monthB !== monthA) {
        return monthB - monthA;
      } else {
        return dateB - dateA;
      }
    }

    if (select === "Oldest") {
      if (monthB !== monthA) {
        return monthA - monthB;
      } else {
        return dateA.getDate() - dateB.getDate();
      }
    }

    if (select === "A to Z") {
      return a.name.localeCompare(b.name);
    }

    if (select === "Z to A") {
      return b.name.localeCompare(a.name);
    }

    if (select === "Highest") return b.amount - a.amount;
    if (select === "Lowest") return a.amount - b.amount;

    return 0;
  });

  const uniqueDate = [
    ...new Map(sorted.map((item) => [item.name, item])).values(),
  ];

  console.log("sorted decending date ", uniqueDate);

  return (
    <div className=" padRec  ">
      <section className="header">
        <h1 className=" tracHeading"> Recurring</h1>
      </section>

      <div className="recLayout">
        <section className="secondHeader">
          <div className="md:flex lg:flex-col">
            <div className="RecBorder">
              <div>
                <ReceiptTwoToneIcon
                  sx={{
                    fontSize: "40px",
                    color: "#ffffff", // Or simply "white"
                  }}
                />
              </div>
              <div className=" md:flex-col  ">
                <p className="text-[#FFFFFF] text-[14px] font-[400]">
                  Total Bills
                </p>
                <h1 className="text-[white] font-[700] text-[32px]">$384.98</h1>
              </div>
            </div>
            <div className="RecBorderB">
              <div className="mb-[20px]">
                <h1 className="font-[700] text-[14px]">Summary</h1>
              </div>

              <div className="flex  flex-col">
                <div className="flex justify-between">
                  <h1 className="font-[400] text-[12px] text-[#696868]">
                    paid Bills
                  </h1>
                  <h1 className="font-[400] text-[12px]">4 ($190.00)</h1>
                </div>
                <div className="bord"></div>
                <div className="flex mt-[16px] justify-between">
                  <h1 className="font-[400] text-[12px] text-[#696868]">
                    Total Upcoming
                  </h1>
                  <h1 className="font-[400] text-[12px]">4 ($194.98)</h1>
                </div>
                <div className="bord"></div>
                <div className="flex mt-[16px]   justify-between">
                  <h1 className="font-[400] text-[12px] text-[#C94736]">
                    Due Soon
                  </h1>
                  <h1 className="font-[400] text-[12px] text-[#C94736]">
                    2 ($59.98)
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="secondeHeaderB">
          <div className=" flex inputBord  justify-between ">
            <div className="input flex justify-between">
              <input
                className="focus:outline-none relative"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search bills"
              />
              {searchQuery.length === 0 ? (
                <div className=" searchBut">
                  <SearchOutlinedIcon />
                </div>
              ) : (
                <button
                  onClick={() => setSearchQuery("")}
                  className="searchBut  text-gray-400 hover:text-black"
                >
                  <CancelIcon />
                </button>
              )}
            </div>

            <div className=" flex  sortIco ">
              <label className="recHidden pt-[12px] pb-[12px] ">Sort By</label>
              <div className="sortButton   pt-[12px] pb-[12px] pr-[16px] pl-[20px] ml-[12px]  relative ">
                <button onClick={() => setOpen(!open)}>
                  <span className="hidLabel ">
                    {select}
                    <ArrowDropDownIcon
                      sx={{
                        transition: "0.3s ease-in-out",
                        transform: open ? "rotate(0deg)" : "rotate(180deg)",
                      }}
                    />
                  </span>
                  <span className="mdHidLabel lgHidLabel">
                    <SortIcon sx={{ color: "#696868", fontSize: "24px" }} />
                  </span>
                </button>
                {open && (
                  <ul className="absolute dropDwon ">
                    {[
                      "Latest",
                      "Oldest",
                      "A to Z",
                      "Z to A",
                      "Highest",
                      "Lowest",
                    ].map((item, index) => (
                      <li
                        key={index}
                        onClick={() => {
                          setSelected(item);
                          setOpen(!open);
                        }}
                      >
                        {item}
                        <div className="sortBorder"></div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>

          <div className="p-[16px]  ">
            <ul className="flex gap-[32px]  pt-[12px] pb-[12px] justify-between recHidden ">
              <div className=" w-[319px] h-[18px]">
                <li className=" text-left font-[400] text-[12px] text-[#696868] ">
                  Bill Title
                </li>
              </div>

              <div className=" flex gap-[32px]  ">
                <div className=" w-[120px] h-[18px]">
                  <li className=" font-[400] text-[12px] text-[#696868] ">
                    Due Date
                  </li>
                </div>
                <div className=" w-[100px] h-[18px]">
                  <li className=" font-[400] text-right text-[12px] text-[#696868] ">
                    Amount
                  </li>
                </div>
              </div>
            </ul>

            <ul className="p-[16px]">
              {uniqueDate.length > 0 ? (
                uniqueDate.map((item, index) => (
                  <div key={index} className="gap-[32px]">
                    <li className=" recDisplay justify-between">
                      <div className="  flex gap-[16px]">
                        <img
                          className="w-[32px] h-[32px] rounded-full"
                          src={item.avatar}
                          alt=""
                        />
                        <h1 className="font-[700] text-[14px] text-[#201F24]">
                          {item.name}
                        </h1>
                      </div>

                      <div className="flex  gap-[32px] ">
                        <div className="w-[120px] h-[18px]">
                          <h1 className="font-[400] text-[12px] text-[#696868] ">
                            monthly-
                            {new Date(item.date).toLocaleDateString(
                              "en-GB",
                              options,
                            )}
                            {!Number.isInteger(item.amount) ? (
                              <ReportGmailerrorredOutlinedIcon
                                sx={{
                                  color: "white",
                                  backgroundColor: "#C94736",
                                  fontSize: "16px",
                                  marginLeft: "8px",
                                }}
                              />
                            ) : (
                              <CheckCircleOutlineOutlinedIcon
                                sx={{
                                  color: "white",
                                  backgroundColor: "#277C78",
                                  fontSize: "16px",
                                  marginLeft: "8px",
                                }}
                              />
                            )}
                          </h1>
                        </div>
                        <div className="w-[100px] h-[18px]">
                          <h1
                            className={`text-right font-[700] text-[14px] ${
                              !Number.isInteger(item.amount)
                                ? "text-[#C94736]"
                                : "text-[#201F24]"
                            } `}
                          >
                            $
                            {`${item.amount.toLocaleString("en-US")}`.replace(
                              /^(\-)/,
                              "",
                            )}
                          </h1>
                        </div>
                      </div>
                    </li>
                    <div className="sm:w-[303px] sm:w-full border-b-1 mt-[20px] mb-[20px] "></div>
                  </div>
                ))
              ) : (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                  <div className="bg-gray-100 p-6 rounded-full mb-4">
                    <SearchOutlinedIcon
                      sx={{ fontSize: 48, color: "#696868" }}
                    />
                  </div>
                  <h2 className="text-xl font-bold text-[#201F24]">
                    No results found
                  </h2>
                  <p className="text-[#696868] mt-2">
                    We couldn't find anything matching "{searchQuery}"
                  </p>

                  {/* CLEAR SEARCH BUTTON */}
                  <button
                    onClick={() => {
                      setSearchQuery("");
                    }}
                    className="mt-6 px-6 py-2 bg-[#201F24] text-white rounded-lg hover:bg-opacity-80 transition-all"
                  >
                    Clear all filters
                  </button>
                </div>
              )}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
