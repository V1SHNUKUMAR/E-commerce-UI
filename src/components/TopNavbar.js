import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineHelpOutline } from "react-icons/md";
import { LuUpload } from "react-icons/lu";
import { ImFileText2 } from "react-icons/im";
import { RiNotificationLine } from "react-icons/ri";
import { FaRegUserCircle } from "react-icons/fa";
import { HiMiniBars3 } from "react-icons/hi2";
import { IoMdArrowDropdown } from "react-icons/io";
import { BsCommand } from "react-icons/bs";

const TopNavbar = ({ isSideBarOpen, setIsSideBarOpen }) => {
  return (
    <div className="z-40 border-b bg-white sticky top-0 left-0 flex px-3 py-2 justify-between items-center">
      <div className="flex gap-4 lg:hidden">
        <button onClick={() => setIsSideBarOpen(true)}>
          <HiMiniBars3 size={30} />
        </button>

        <div className="max-w-14 h-auto">
          <img
            className="h-full w-full object-contain object-center"
            src="/brandLogo.svg"
            alt="brandLogo"
          />
        </div>
      </div>
      <div className="hidden border lg:flex px-2 py-1.5 items-center">
        <IoSearchOutline size={18} color="gray" />
        <input
          type="search"
          name="search"
          id="search"
          className="border-none outline-none px-2 text-sm flex-1 lg:min-w-60"
          placeholder="Search POs, ASNs, & pages etc"
        />
        <div className="flex gap-1 items-center text-gray-500 bg-gray-100 px-2 font-semibold py-1 rounded-sm text-xs">
          <div className="flex items-center">
            <BsCommand /> <span>+ K</span>
          </div>
          <span> / </span>
          <div className="flex items-center">
            <BsCommand /> <span>+ Shift + K</span>
          </div>
        </div>
      </div>
      <ul className="flex gap-4 lg:gap-8">
        <li className="py-2 lg:hidden">
          <IoSearchOutline size={25} color="#67768E" />
        </li>
        <li className="py-2">
          <>
            <div className="lg:hidden">
              <MdOutlineHelpOutline size={25} color="#67768E" />
            </div>
            <div className="hidden lg:block">
              <MdOutlineHelpOutline size={20} color="#67768E" />
            </div>
          </>
        </li>
        <li className="py-2">
          <>
            <div className="lg:hidden">
              <LuUpload size={25} color="#67768E" />
            </div>
            <div className="hidden lg:block">
              <LuUpload size={20} color="#67768E" />
            </div>
          </>
        </li>
        <li className="py-2 relative">
          <span className="py-0.5 px-1 lg:py-0 rounded-md bg-indigo-600 text-white text-xs lg:text-[10px] absolute top-0 -right-2">
            20
          </span>
          <>
            <div className="lg:hidden">
              <ImFileText2 size={25} color="#67768E" />
            </div>
            <div className="hidden lg:block">
              <ImFileText2 size={20} color="#67768E" />
            </div>
          </>
        </li>
        <li className="py-2 relative">
          <span className="py-0.5 px-1 lg:py-0 rounded-md bg-indigo-600 text-white text-xs lg:text-[10px] absolute top-0 -right-2">
            16
          </span>
          <>
            <div className="lg:hidden">
              <RiNotificationLine size={25} color="#67768E" />
            </div>
            <div className="hidden lg:block">
              <RiNotificationLine size={20} color="#67768E" />
            </div>
          </>
        </li>

        <li className="flex gap-3 items-center">
          <div className="h-7 lg:h-4 w-[2px] bg-gray-300 rounded-full"></div>
          <button className="flex gap-3 items-center">
            <div className="p-2 lg:p-1.5 bg-gray-600 rounded-lg flex gap-3">
              <>
                <div className="lg:hidden">
                  <FaRegUserCircle size={25} color="white" />
                </div>
                <div className="hidden lg:block">
                  <FaRegUserCircle size={20} color="white" />
                </div>
              </>
            </div>
            <div className="hidden lg:block text-start">
              <p className="font-semibold">Vmart-Procurement Team</p>
              <p className="text-xs">Ashish kumar Singla</p>
            </div>
            <IoMdArrowDropdown className="hidden lg:block" />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default TopNavbar;
