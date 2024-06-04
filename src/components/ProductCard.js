import React from "react";

import { AiOutlineDelete } from "react-icons/ai";
import { VscEdit } from "react-icons/vsc";
import { MdCurrencyRupee } from "react-icons/md";

const ProductCard = ({ product }) => {
  return (
    <div>
      <div id="imageSection" className=" w-full h-36 lg:h-40">
        <img
          className="h-full w-full object-cover object-center"
          src={product.imageUrl}
          alt="img"
        />
      </div>
      <div id="DetailsSection" className="px-2 py-2 bg-white">
        <div className="flex gap-1 text-[11px] font-semibold">
          <div className="border border-amber-500 px-0.5 flex gap-1 items-center rounded-sm">
            <div
              id="color"
              className="rounded-full h-1.5 w-1.5 bg-amber-500"
            ></div>
            <span>Mustard Yellow</span>
          </div>
          <div className="border rounded-sm px-0.5">Multiplier : 5</div>
        </div>
        <div className="my-2">
          <p className="text-xs text-gray-500">Item Name</p>
          <h2 className="font-semibold leading-snug">{product.name}</h2>
        </div>

        <div className="my-2">
          <p className="text-xs text-gray-500">Design number</p>
          <p className="font-semibold text-sm">{product.designNumber}</p>
        </div>

        <div className="flex gap-2 text-xs my-2">
          <div className="bg-gray-200 px-1 font-bold rounded-sm">XL</div>
          <div className="bg-gray-200 px-1 font-bold rounded-sm">
            Instock : {product.inStock}
          </div>
        </div>

        <div className="flex gap-3 my-2">
          <p className="font-bold flex gap-0.5 items-center">
            <MdCurrencyRupee />
            {product.newPrice}
          </p>
          <p className="text-gray-400 line-through flex gap-0.5 items-center">
            <MdCurrencyRupee />
            {product.oldPrice}
          </p>
        </div>

        <div className="flex gap-2">
          <button className="px-1.5 py-1 border cursor-pointer duration-200 hover:bg-gray-300">
            <AiOutlineDelete />
          </button>
          <div className="bg-gray-200 flex-1 flex px-2 text-xs items-center font-bold">
            <div className="flex-1 flex items-center gap-1 lg:gap-2 py-1">
              <p>{product.size}</p>
              <p className="bg-white py-0.5 px-1 rounded-full">+5 More</p>
            </div>
            <button className="border-l p-1.5 border-gray-300 cursor-pointer">
              <VscEdit />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
