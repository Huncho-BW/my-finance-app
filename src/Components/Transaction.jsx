import React from "react";
import { useState, useEffect } from "react";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import CancelIcon from "@mui/icons-material/Cancel";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import SortIcon from "@mui/icons-material/Sort";
import FilterListAltIcon from "@mui/icons-material/FilterListAlt";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Slider from "@mui/material/Slider";
import dataJson from "../../data.json";
export default function Transaction() {
  const [data, setdata] = useState(dataJson.transactions);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [open, setOpen] = useState(false);
  const [openCat, setOpenCat] = useState(false);
  const [select, setSelected] = useState("Latest");
  const [currentTransacValue, setTransactionValue] =
    useState("All Transaction");
  const option = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  if (!data) return <p>loading</p>;

  const filterData = data.filter((item) => {
    const querySearch = item.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const forCategory =
      currentTransacValue === "All Transaction" ||
      item.category === currentTransacValue;
    return querySearch && forCategory;
  });

  const sorrtedData = [...filterData].sort((a, b) => {
    if (select === "Latest") return new Date(b.date) - new Date(a.date);
    if (select === "Oldest") return new Date(a.date) - new Date(b.date);
    if (select === "A to Z") return a.name.localeCompare(b.name);
    if (select === "Z to A") return b.name.localeCompare(a.name);
    if (select === "Highest") return b.amount - a.amount;
    if (select === "Lowest") return a.amount - b.amount;
    return 0;
  });

  let item = sorrtedData.length;
  let itemPerPage = 10;
  let totalPage = Math.ceil(item / itemPerPage);
  const start = (currentPage - 1) * itemPerPage;
  const end = start + itemPerPage;
  const pagnatedData = sorrtedData.slice(start, end);

  async function showPage(page) {
    let targetPage = page;
    if (targetPage < 1) targetPage = 1;
    if (targetPage > totalPage) targetPage = totalPage;

    setCurrentPage(targetPage);
  }

  function nextPage() {
    showPage(currentPage + 1);
  }
  function prevPage() {
    showPage(currentPage - 1);
  }
  function currPage() {
    showPage(currentPage);
  }

  const unique = [
    "All Transaction",
    ...new Set(
      data.map((item) => {
        return item.category;
      }),
    ),
  ];

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, currentTransacValue]);

  console.log("our search option ", filterData);

  return (
    <section className="   parSection    ">
      <div>
        <h1 className=" tracHeading"> Transcation </h1>
      </div>
      <div className="mt-[32px] chilBack overflow-hidden  bg-[white]  ">
        <div className="  flex inputBord  justify-between">
          <div className="input flex justify-between">
            <input
              className="focus:outline-none relative "
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              type="text"
              placeholder="search Transaction"
            />

            {searchQuery.length === 0 ? (
              <div className="searchBut">
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

          <div className=" flex sortIcon  md:gap-[24px] lg:gap-[24px]">
            <div className=" flex">
              <label className="hidLabel pt-[12px] pb-[12px]">SortBy</label>
              <div className="sortButton   ">
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
                    <FilterListAltIcon />
                  </span>
                </button>
                {open && (
                  <ul className="absolute dropDwon">
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

            <div className=" flex">
              <label className="hidLabel  pt-[12px] pb-[12px]">Category</label>
              <div className="catButton relative ">
                <button onClick={() => setOpenCat(!openCat)}>
                  <span className="hidLabel">
                    {currentTransacValue}{" "}
                    <ArrowDropDownIcon
                      sx={{
                        transition: "0.3s ease-in-out",
                        transform: openCat ? "rotate(0deg)" : "rotate(180deg)",
                      }}
                    />
                  </span>

                  <span className="mdHidLabel lgHidLabel">
                    <SortIcon />
                  </span>
                </button>
                {openCat && (
                  <ul className=" absolute dropDwon">
                    {unique.map((item, index) => (
                      <li
                        key={index}
                        onClick={() => {
                          setTransactionValue(item);
                          setOpen(!openCat);
                        }}
                      >
                        {item}
                        <div className="filterBorder"></div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="  mt-[24px] flex justify-between  listBord hidLabel  ">
          <div className="w-[428px] h-[18px] ">
            <h1 className=" font-[400] text-[12px] text-[#696868]">
              Recipient / Sender
            </h1>
          </div>
          <div className="w-[120px] h-[18px] ">
            <h1 className=" font-[400] text-[12px] text-[#696868]">Category</h1>
          </div>
          <div className="w-[120px] h-[18px] ">
            <h1 className=" font-[400] text-[12px] text-[#696868]">
              Transaction Date
            </h1>
          </div>
          <div className="w-[200px]  h-[18px]">
            <h1 className=" text-right font-[400] text-[12px] text-[#696868]">
              Amount
            </h1>
          </div>
        </div>
        <div className=" listBordTwo mt-[24px] ">
          {pagnatedData.length > 0 ? (
            pagnatedData.map((dat, index) => (
              <li key={index} className=" list-none ">
                <div className=" flex tranHad justify-between  ">
                  <div className="flex w-[428px]    gap-[10px] ">
                    <img
                      className=" w-[40px] h-[40px] rounded-full "
                      src={`${dat.avatar}`}
                      alt=""
                    />
                    <h1 className="  font-[700] text-[14px] pad ">
                      {dat.name}
                    </h1>
                  </div>

                  <div className=" tranHid w-[120px] h-[18px] ">
                    <h1 className="    font-[400] text-[12px] text-[#696868]">
                      {dat.category}
                    </h1>
                  </div>

                  <div className=" hidLabel w-[120px] h-[18px] ">
                    <h1 className="  font-[400] text-[12px] text-[#696868]">
                      {new Date(dat.date).toLocaleDateString("en-GB", option)}
                    </h1>
                  </div>

                  <div className=" hidLabel w-[200px]  h-[18px]">
                    <h1
                      className={` text-right  font-[700] text-[14px] ${
                        dat.amount > 0 ? "text-[#277C78]" : "text-[#201F24]"
                      }`}
                    >
                      {`$${dat.amount.toLocaleString("en-US")}`.replace(
                        /^(\$-)/,
                        "-$",
                      )}
                    </h1>
                  </div>
                </div>

                <div className="sm:flex-col mdHidLabel lgHidLabel">
                  <h1
                    className={` text-right  font-[700] text-[14px] ${
                      dat.amount > 0 ? "text-[#277C78]" : "text-[#201F24]"
                    }`}
                  >
                    {`$${dat.amount.toLocaleString("en-US")}`.replace(
                      /^(\$-)/,
                      "-$",
                    )}
                  </h1>

                  <h1 className=" text-right  font-[400] text-[12px] text-[#696868]">
                    {new Date(dat.date).toLocaleDateString("en-GB", option)}
                  </h1>
                </div>
                <div className="mb-[20px] mt-[20px] line"></div>
              </li>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="bg-gray-100 p-6 rounded-full mb-4">
                <SearchOutlinedIcon sx={{ fontSize: 48, color: "#696868" }} />
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
                  setTransactionValue("All Transaction");
                }}
                className="mt-6 px-6 py-2 bg-[#201F24] text-white rounded-lg hover:bg-opacity-80 transition-all"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>

      <div className=" p-[10px] buttonbord bg-[white]  ">
        <div className="flex justify-between">
          <div className=" flex  ">
            <button className="prevBorder flex" onClick={prevPage}>
              <div className="">
                <ArrowLeftIcon />
              </div>
              <p className="hidLabel"> prev</p>
            </button>
          </div>
          {}
          <div className="flex gap-[8px] ">
            {Array.from({ length: totalPage }, (_, i) => i + 1).map(
              (pagenumber) => (
                <button
                  onClick={() => setCurrentPage(pagenumber)}
                  style={{
                    backgroundColor:
                      currentPage === pagenumber ? "black " : "   ",
                    color: currentPage === pagenumber ? "white " : "  ",
                  }}
                  className="pageBorder "
                  key={pagenumber}
                >
                  {pagenumber}
                </button>
              ),
            )}
          </div>
          <div className="">
            <button className="prevBorder flex" onClick={nextPage}>
              <p className="hidLabel">next</p>
              <div>
                <ArrowRightIcon />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
