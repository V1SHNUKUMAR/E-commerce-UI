import React from "react";
import { FiHome } from "react-icons/fi";
import ProductCard from "./ProductCard";
import { FiUsers } from "react-icons/fi";
import { FaRupeeSign } from "react-icons/fa";
import { RiDiscountPercentLine } from "react-icons/ri";
import { BsSearch } from "react-icons/bs";
import { IoGrid } from "react-icons/io5";
import { PiSidebarSimpleBold } from "react-icons/pi";
import { TbArticle, TbZoomScan } from "react-icons/tb";
import { IoIosAdd } from "react-icons/io";
import { GrSettingsOption } from "react-icons/gr";

const Homepage = () => {
  const productsList = [
    {
      id: 1,
      name: "Mens white check Shirt regular fit",
      designNumber: "DN098234839",
      inStock: 100,
      newPrice: 799.67,
      oldPrice: 1250.67,
      size: "XL",
      imageUrl:
        "https://images.bewakoof.com/t1080/men-s-blue-dope-bear-graphic-printed-oversized-t-shirt-547532-1715257612-1.jpg",
    },
    {
      id: 2,
      name: "Mens white check Shirt regular fit",
      designNumber: "DN098234839",
      inStock: 100,
      newPrice: 799.67,
      oldPrice: 1250.67,
      size: "XL",
      imageUrl:
        "https://images.bewakoof.com/t1080/men-s-blue-dope-bear-graphic-printed-oversized-t-shirt-547532-1715257612-1.jpg",
    },
    {
      id: 3,
      name: "Mens white check Shirt regular fit",
      designNumber: "DN098234839",
      inStock: 100,
      newPrice: 799.67,
      oldPrice: 1250.67,
      size: "XL",
      imageUrl:
        "https://images.bewakoof.com/t1080/men-s-blue-dope-bear-graphic-printed-oversized-t-shirt-547532-1715257612-1.jpg",
    },
    {
      id: 4,
      name: "Mens white check Shirt regular fit",
      designNumber: "DN098234839",
      inStock: 100,
      newPrice: 799.67,
      oldPrice: 1250.67,
      size: "XL",
      imageUrl:
        "https://images.bewakoof.com/t1080/men-s-blue-dope-bear-graphic-printed-oversized-t-shirt-547532-1715257612-1.jpg",
    },
    {
      id: 5,
      name: "Mens white check Shirt regular fit",
      designNumber: "DN098234839",
      inStock: 100,
      newPrice: 799.67,
      oldPrice: 1250.67,
      size: "XL",
      imageUrl:
        "https://images.bewakoof.com/t1080/men-s-blue-dope-bear-graphic-printed-oversized-t-shirt-547532-1715257612-1.jpg",
    },
    {
      id: 6,
      name: "Mens white check Shirt regular fit",
      designNumber: "DN098234839",
      inStock: 100,
      newPrice: 799.67,
      oldPrice: 1250.67,
      size: "XL",
      imageUrl:
        "https://images.bewakoof.com/t1080/men-s-blue-dope-bear-graphic-printed-oversized-t-shirt-547532-1715257612-1.jpg",
    },
    {
      id: 7,
      name: "Mens white check Shirt regular fit",
      designNumber: "DN098234839",
      inStock: 100,
      newPrice: 799.67,
      oldPrice: 1250.67,
      size: "XL",
      imageUrl:
        "https://images.bewakoof.com/t1080/men-s-blue-dope-bear-graphic-printed-oversized-t-shirt-547532-1715257612-1.jpg",
    },
    {
      id: 8,
      name: "Mens white check Shirt regular fit",
      designNumber: "DN098234839",
      inStock: 100,
      newPrice: 799.67,
      oldPrice: 1250.67,
      size: "XL",
      imageUrl:
        "https://images.bewakoof.com/t1080/men-s-blue-dope-bear-graphic-printed-oversized-t-shirt-547532-1715257612-1.jpg",
    },
    {
      id: 9,
      name: "Mens white check Shirt regular fit",
      designNumber: "DN098234839",
      inStock: 100,
      newPrice: 799.67,
      oldPrice: 1250.67,
      size: "XL",
      imageUrl:
        "https://images.bewakoof.com/t1080/men-s-blue-dope-bear-graphic-printed-oversized-t-shirt-547532-1715257612-1.jpg",
    },
  ];

  return (
    <div>
      <div className="flex gap-3 justify-between items-center w-full bg-white px-3 py-2.5 text-sm text-gray-500 font-semibold">
        <div className="flex items-center gap-3">
          <div className="flex gap-2 items-center hover:text-black duration-200 cursor-pointer">
            <FiHome />
            <span>Home</span>
          </div>
          <span> / </span>
          <select className="p-1 rounded-lg border cursor-pointer">
            <option value="Sales order">Option 1</option>
            <option value="option 1">Option 2</option>
            <option value="option 1">Option 3</option>
          </select>
          <span> / </span>
          <p className="text-gray-600 font-bold">Product Catalogue</p>
        </div>
        <div className="w-full fixed bottom-3 left-0 lg:static lg:w-fit px-3 lg:px-0">
          <button className="w-full bg-indigo-500 text-white font-semibold px-5 py-5 lg:py-2 hover:bg-indigo-700 duration-200 rounded-lg lg:rounded-none">
            PLACE ORDER
          </button>
        </div>
      </div>
      <div className="flex space-x-3 px-3 pt-3 pb-10">
        <div className="w-full" id="firstDiv">
          <div className="hidden lg:flex gap-3 mb-3">
            <div className="w-full bg-white px-3 py-2 flex justify-between gap-10">
              <div className="flex items-center gap-3">
                <div className="flex items-center border px-2 py-1.5">
                  <BsSearch size={15} />
                  <input
                    type="search"
                    name="search"
                    id="search"
                    className="border-none outline-none px-2 text-sm flex-1 lg:min-w-24"
                    placeholder="Search Products"
                  />
                </div>
                <div>
                  <button className="bg-black text-white  p-1.5">
                    <IoGrid size={20} />
                  </button>
                  <button className="bg-gray-100 p-1.5 hover:bg-black hover:text-white">
                    <TbArticle size={20} />
                  </button>
                  <button className="bg-gray-100 p-1.5 hover:bg-black hover:text-white">
                    <PiSidebarSimpleBold size={20} />
                  </button>
                </div>
              </div>

              <div className="flex gap-2 items-center text-gray-500 font-semibold text-sm">
                <button
                  className="border px-2 py-1.5 hover:bg-gray-200 duration-200
                "
                >
                  Add Remarks
                </button>
                <button
                  className="border px-2 py-1.5 hover:bg-gray-200 duration-200
                "
                >
                  Show by : <span className="font-bold">Sizes</span>
                </button>
                <button
                  className="border px-2 py-1 hover:bg-gray-200 duration-200
                "
                >
                  <IoIosAdd size={25} />
                </button>
              </div>
            </div>
            <div className="w-[50%] bg-white flex items-center">
              <div className="flex-1 flex items-center justify-between gap-1 py-2 px-2">
                <div className="text-gray-400 flex items-center gap-1 text-sm">
                  <TbZoomScan size={25} />
                  Scan Product by...
                </div>
                <select className="bg-gray-100 font-semibold px-1.5 py-1">
                  <option value="Design No">Design No</option>
                  <option value="Design No">Option 2</option>
                  <option value="Design No">Option 3</option>
                </select>
              </div>
              <button className="border-l px-4 h-full duration-200 hover:bg-gray-200">
                <GrSettingsOption size={20} />
              </button>
            </div>
          </div>
          <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 lg:gap-3">
            {productsList.map((obj, index) => (
              <ProductCard product={obj} />
            ))}
          </div>
        </div>
        <div
          id="SecondDiv"
          className="h-2/3 overflow-y-auto sticky top-16 left-3 z-30 w-full max-w-none xl:max-w-60 bg-white hidden lg:block divide-y-2 p-3"
        >
          <div className="py-2 space-y-3 pb-4">
            <div className="flex gap-3 bg-gray-100 py-1.5 px-3">
              <FiUsers size={20} />
              <div>
                <p className="text-xs text-gray-500">Customer</p>
                <p className="font-bold">SRG India Pvt ltd.</p>
              </div>
            </div>
            <div className="flex gap-3 bg-gray-100 py-1.5 px-3">
              <FiUsers size={20} />
              <div>
                <p className="text-xs text-gray-500">Delivery location</p>
                <p className="font-bold">SRG India Pvt ltd.</p>
              </div>
            </div>
            <div className="flex gap-3 bg-gray-100 py-1.5 px-3">
              <FiUsers size={20} />
              <div>
                <p className="text-xs text-gray-500">Dispatch location</p>
                <p className="font-bold">SRG India Pvt ltd.</p>
              </div>
            </div>
            <button className="py-1 font-bold text-gray-500 w-full bg-gray-100">
              Show More
            </button>
          </div>
          <div className="py-2 space-y-3 text-gray-400 text-sm">
            <h2 className="font-bold text-black text-base">SUMMARY</h2>
            <p className="font-bold text-black text-base bg-gray-100">
              #SO_DRAFT_00000017_2024
            </p>
            <div className="flex justify-between gap-2">
              <p>Total Quantity</p>
              <p className=" font-semibold">21</p>
            </div>
            <div className="flex justify-between gap-2">
              <p>Total Items</p>
              <p className=" font-semibold">7</p>
            </div>
            <div className="flex justify-between gap-2">
              <p>Order Quantity</p>
              <p className=" font-semibold">21</p>
            </div>
            <div className="px-3 py-1.5 bg-gray-100 flex items-center justify-between text-black">
              <div className="font-semibold">Total Bag Price</div>
              <div className="flex items-center gap-1 font-bold">
                <FaRupeeSign />
                23031.808
              </div>
            </div>
          </div>
          <div className="py-2 space-y-3 text-gray-400 text-sm">
            <h2 className="font-bold text-black text-base">SUMMARY</h2>
            <div className="flex justify-between gap-2">
              <p>IGST</p>
              <p className=" font-semibold flex gap-1">
                <FaRupeeSign />
                21
              </p>
            </div>
            <div className="flex justify-between gap-2">
              <p>CGST</p>
              <p className=" font-semibold flex gap-1">
                <FaRupeeSign />7
              </p>
            </div>
            <div className="flex justify-between gap-2">
              <p>SGST</p>
              <p className=" font-semibold flex gap-1">
                <FaRupeeSign />7
              </p>
            </div>
            <div className="flex justify-between gap-2">
              <p>CESS</p>
              <p className=" font-semibold flex gap-1">
                <FaRupeeSign />7
              </p>
            </div>
            <div className="px-3 py-1.5 bg-gray-100 text-green-600 font-semibold flex items-center justify-between">
              <div className="flex items-center gap-1">
                <RiDiscountPercentLine size={20} />
                Discount
              </div>

              <div className="flex items-center gap-1 font-bold">
                <FaRupeeSign />
                690.00
              </div>
            </div>
            <div className="px-3 py-1.5 bg-gray-100 flex items-center justify-between text-black">
              <div className="font-semibold">Total Amount</div>
              <div className="flex items-center gap-1 font-bold">
                <FaRupeeSign />
                23031.808
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
