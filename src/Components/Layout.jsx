import React from "react";
import Logo from "./Logo";
import Siderbar from "./Slidebar";
import { Outlet } from "react-router-dom";
export default function Layout() {
  // not Layouts
  return (
    <div className="  ">
      {/* Sidebar gets a fixed width and dark background */}

      <div className=" lg:grid lg:display lg:grid-cols-[300px_1fr] lg:min-h-screen lg:w-full  layoutDisplay  ">
        <aside className=" slidebarOne ">
          <section className="  lg:fixed lg:z-50 lg:top-0 lg:left-0 lg:w-[250px] lg:h-full  bg-[#201F24] lg:p-1 layoutDisplay  slidebarOne   ">
            <div>
              <div className="phHidden phHidd">
                <Logo />
              </div>
              <Siderbar />
            </div>
          </section>
        </aside>

        <section className="bg-[#F8F4F0] h-full main min-h-screen">
          <Outlet />
        </section>
      </div>
    </div>
  );
}
