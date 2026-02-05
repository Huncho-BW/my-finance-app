import React from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import PieChartIcon from "@mui/icons-material/PieChart";
import RequestQuoteIcon from "@mui/icons-material/RequestQuote";
import ReceiptTwoToneIcon from "@mui/icons-material/ReceiptTwoTone";

export default function Siderbar() {
  const navigate = useNavigate();
  const location = useLocation().pathname;

  const links = [
    {
      name: "Overviews",
      path: "/",
      icon: <HomeIcon />,
    },
    {
      name: "Transaction",
      path: "/transaction",
      icon: <SwapVertIcon />,
    },
    {
      name: "Budget",
      path: "/Budget",
      icon: <PieChartIcon />,
    },
    {
      name: "Pots",
      path: "/pots",
      icon: <RequestQuoteIcon />,
    },
    {
      name: "Recurring Bills",
      path: "/recurring",
      icon: <ReceiptTwoToneIcon />,
    },
  ];
  return (
    <div className="slideHeader">
      <ul className="phoSiz">
        {links.map((el, index) => (
          <li className=" " key={index} onClick={() => navigate(el.path)}>
            {location === el.path ? (
              <div className="slidebar isActive  ">
                {React.cloneElement(el.icon, { sx: { color: "#277C78" } })}
                <aside className="phHidden text-[#201F24] lg:text-[16px] md:text-[12px] font-[700]  ">
                  {el.name}
                </aside>
              </div>
            ) : (
              <div className="slidebar nav">
                {React.cloneElement(el.icon, {
                  className: "icon",
                  sx: { color: "#B3B3B3" },
                })}
                <aside className="phHidden text-[#B3B3B3] lg:text-[16px] md:text-[12px] font-[700]  ">
                  {el.name}
                </aside>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
