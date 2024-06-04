import React, { useState } from "react";
import HomeIcon from "../icons/HomeIcon";
import CatalogueIcon from "../icons/CatalogueIcon";
import CartIcon from "../icons/CartIcon";
import CalendarIcon from "../icons/CalendarIcon";
import TruckIcon from "../icons/TruckIcon";
import PackageIcon from "../icons/PackageIcon";
import DatabaseIcon from "../icons/DatabaseIcon";
import UsersIcon from "../icons/UsersIcon";
import InvoiceIcon from "../icons/InvoiceIcon";
import ReportsIcon from "../icons/ReportsIcon";
import AnalyticsIcon from "../icons/AnalyticsIcon";

import { RxCross2 } from "react-icons/rx";

const Sidebar = ({ isSideBarOpen, setIsSideBarOpen }) => {
  const [selectedOption, setSelectedOption] = useState(1);

  const options = [
    {
      id: 1,
      icon: (
        <>
          <div className="lg:hidden">
            <HomeIcon
              color={selectedOption === 1 ? "#5a67d8" : "#707494"}
              size={5}
            />
          </div>
          <div className="hidden lg:block">
            <HomeIcon
              color={selectedOption === 1 ? "#5a67d8" : "#707494"}
              size={-5}
            />
          </div>
        </>
      ),
      label: "Home",
    },
    {
      id: 2,
      icon: (
        <>
          <div className="lg:hidden">
            <CatalogueIcon
              color={selectedOption === 2 ? "#5a67d8" : "#707494"}
              size={5}
            />
          </div>
          <div className="hidden lg:block">
            <CatalogueIcon
              color={selectedOption === 2 ? "#5a67d8" : "#707494"}
              size={-5}
            />
          </div>
        </>
      ),
      label: "Catalogue",
    },
    {
      id: 3,
      icon: (
        <>
          <div className="lg:hidden">
            <CartIcon
              color={selectedOption === 3 ? "#5a67d8" : "#707494"}
              size={5}
            />
          </div>
          <div className="hidden lg:block">
            <CartIcon
              color={selectedOption === 3 ? "#5a67d8" : "#707494"}
              size={-5}
            />
          </div>
        </>
      ),
      label: "Cart",
    },
    {
      id: 4,
      icon: (
        <>
          <div className="lg:hidden">
            <CalendarIcon
              color={selectedOption === 4 ? "#5a67d8" : "#707494"}
              size={5}
            />
          </div>
          <div className="hidden lg:block">
            <CalendarIcon
              color={selectedOption === 4 ? "#5a67d8" : "#707494"}
              size={-5}
            />
          </div>
        </>
      ),
      label: "Calendar",
    },
    {
      id: 5,
      icon: (
        <>
          <div className="lg:hidden">
            <TruckIcon
              color={selectedOption === 5 ? "#5a67d8" : "#707494"}
              size={5}
            />
          </div>
          <div className="hidden lg:block">
            <TruckIcon
              color={selectedOption === 5 ? "#5a67d8" : "#707494"}
              size={-5}
            />
          </div>
        </>
      ),
      label: "Shipping",
    },
    {
      id: 6,
      icon: (
        <>
          <div className="lg:hidden">
            <PackageIcon
              color={selectedOption === 6 ? "#5a67d8" : "#707494"}
              size={5}
            />
          </div>
          <div className="hidden lg:block">
            <PackageIcon
              color={selectedOption === 6 ? "#5a67d8" : "#707494"}
              size={-5}
            />
          </div>
        </>
      ),
      label: "Package",
    },
    {
      id: 7,
      icon: (
        <>
          <div className="lg:hidden">
            <DatabaseIcon
              color={selectedOption === 7 ? "#5a67d8" : "#707494"}
              size={5}
            />
          </div>
          <div className="hidden lg:block">
            <DatabaseIcon
              color={selectedOption === 7 ? "#5a67d8" : "#707494"}
              size={-5}
            />
          </div>
        </>
      ),
      label: "History",
    },
    {
      id: 8,
      icon: (
        <>
          <div className="lg:hidden">
            <UsersIcon
              color={selectedOption === 8 ? "#5a67d8" : "#707494"}
              size={5}
            />
          </div>
          <div className="hidden lg:block">
            <UsersIcon
              color={selectedOption === 8 ? "#5a67d8" : "#707494"}
              size={-5}
            />
          </div>
        </>
      ),
      label: "Customers",
    },
    {
      id: 9,
      icon: (
        <>
          <div className="lg:hidden">
            <InvoiceIcon
              color={selectedOption === 9 ? "#5a67d8" : "#707494"}
              size={5}
            />
          </div>
          <div className="hidden lg:block">
            <InvoiceIcon
              color={selectedOption === 9 ? "#5a67d8" : "#707494"}
              size={-5}
            />
          </div>
        </>
      ),
      label: "Invoice",
    },
    {
      id: 10,
      icon: (
        <>
          <div className="lg:hidden">
            <ReportsIcon
              color={selectedOption === 10 ? "#5a67d8" : "#707494"}
              size={5}
            />
          </div>
          <div className="hidden lg:block">
            <ReportsIcon
              color={selectedOption === 10 ? "#5a67d8" : "#707494"}
              size={-5}
            />
          </div>
        </>
      ),
      label: "Reports",
    },
    {
      id: 11,
      icon: (
        <>
          <div className="lg:hidden">
            <AnalyticsIcon
              color={selectedOption === 11 ? "#5a67d8" : "#707494"}
              size={5}
            />
          </div>
          <div className="hidden lg:block">
            <AnalyticsIcon
              color={selectedOption === 11 ? "#5a67d8" : "#707494"}
              size={-5}
            />
          </div>
        </>
      ),
      label: "Analytics",
    },
  ];

  return (
    <div
      className={`bg-white h-screen overflow-y-auto py-1 px-5 lg:px-2 lg:py-0 z-50 w-full lg:w-fit fixed lg:sticky top-0 lg:translate-x-0 left-0 flex flex-col gap-5 duration-300
      ${isSideBarOpen ? "translate-x-0" : "-translate-x-full"}
      `}
    >
      <div className="flex justify-between items-center gap-2 my-5 mb-2 lg:mt-3">
        <div className="w-full max-w-12 lg:max-w-10 h-auto">
          <img
            className="h-full w-full object-contain object-center"
            src="/brandLogo.svg"
            alt="brandLogo"
          />
        </div>
        <button className="lg:hidden" onClick={() => setIsSideBarOpen(false)}>
          <RxCross2 size={40} />
        </button>
      </div>
      <div>
        {options.map((option, index) => (
          <button
            className={`w-full flex gap-7 items-center px-3 py-3 rounded-lg ${
              selectedOption === index + 1 ? "bg-indigo-100/75" : ""
            }`}
            onClick={() => setSelectedOption(option.id)}
            key={index}
          >
            {option.icon}{" "}
            <span
              className={`text-lg lg:hidden ${
                selectedOption === index + 1
                  ? "text-indigo-600 font-semibold"
                  : "text-zinc-600"
              }`}
            >
              {option.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
