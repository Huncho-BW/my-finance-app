import React from "react";
import ListedPrice from "./LIstedPrice";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";
export default function OverView() {
  return (
    <div className="flex flex-col justify-center              content-center p-[40px] gap-[20px]  bg-grey-900 heading bg-[#F8F4F0] overViewWidth ">
      <div className=" ">
        <h1 className="font-sans    ">Overview</h1>
      </div>
      <div>
        <ListedPrice />
      </div>

      <div className="lg:grid lg:grid-cols-[1fr_1fr]  lg:min-h-screen sm:flex-col gap-[20px]  md:flex md:flex-col sm:gap-[20px] md:gap-[20px]    md:gap-[20px]  ">
        <section>
          <LeftContent />
        </section>

        <section className="">
          <RightContent />
        </section>
      </div>
    </div>
  );
}
