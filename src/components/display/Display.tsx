import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { DataObject, DisplayProps } from "./types";

const Display: React.FC<DisplayProps> = ({
  productObject,
  productList,
  dailySales,
  address,
  totalSale,
  onUpdate,
}) => {
  const handleObjectChange = (field: keyof DataObject, value: any) => {
    onUpdate({ productObject: { ...productObject, [field]: value } });
  };

  const handleArrayChange = (
    arrayName: "productList" | "dailySales",
    value: any[]
  ) => {
    onUpdate({ [arrayName]: value });
  };

  return (
    <div className="p-5">
      {/* Top Section: Display Values */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 mb-5 gap-4">
        {/* product info */}
        <div className="border p-4 shadow">
          <h3 className="text-lg font-medium border-b pb-2">
            Best Selling Product
          </h3>
          <div className="mt-2">
            <h5 className="text-base font-medium text-gray-700 py-1">
              Product Name: {productObject?.productName}
            </h5>
            <p className="text-base font-medium text-gray-700 py-1">
              Stock Quantity: {productObject?.stockQuantity}
            </p>
            <p className="text-base font-medium text-gray-700 py-1">
              Is On Sale: {productObject?.isOnSale ? "true" : "false"}
            </p>
          </div>
        </div>

        {/* Available product list */}
        <div className="border p-4 shadow">
          <h3 className="text-lg font-medium border-b pb-2">
            Available Product List
          </h3>
          <ul className="list-disc px-4 mt-2">
            {productList?.map((product, indx) => (
              <li className="py-1" key={indx}>
                {product}
              </li>
            ))}
          </ul>
        </div>
        {/* Recent days sales */}
        <div className="border p-4 shadow">
          <h3 className="text-lg font-medium border-b pb-2">
            Recent {dailySales?.length} days Sales
          </h3>
          <ul className="list-disc px-4 mt-2">
            {dailySales?.map((sale, indx) => (
              <li className="py-1" key={indx}>
                {sale}
              </li>
            ))}
          </ul>
        </div>
        {/* address  */}
        <div className="border p-4 shadow">
          <h3 className="text-lg font-medium border-b pb-2">Address</h3>
          <p className="mt-2">{address}</p>
        </div>
        {/* total revenue */}
        <div className="border p-4 shadow">
          <h3 className="text-lg font-medium border-b pb-2">Total Revenue</h3>
          <p className="mt-2">{totalSale}</p>
        </div>
      </div>
      <hr />
      {/* forms */}
      <div className="">
        <h2 className="text-center text-xl mt-2 font-semibold">Forms Inputs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 mb-5 gap-4 mt-5">
          {/* product info */}
          <div className="border p-4">
            <h3 className="text-base text-center font-medium border-b pb-2">
              Best Selling Product Form
            </h3>
            <div className="mt-2">
              <div>
                <label className="text-sm" htmlFor="">
                  Product Name
                </label>
                <input
                  onChange={(e) =>
                    handleObjectChange("productName", e.target.value)
                  }
                  value={productObject?.productName}
                  className="border border-gray-400 w-full p-1 rounded text-sm outline-none"
                  type="text"
                />
              </div>
              <div className="mt-2.5">
                <label className="text-sm" htmlFor="">
                  Stock Quantity
                </label>
                <input
                  onChange={(e) =>
                    handleObjectChange(
                      "stockQuantity",
                      parseInt(e.target.value)
                    )
                  }
                  value={productObject?.stockQuantity}
                  className="border border-gray-400 w-full p-1 rounded text-sm outline-none"
                  type="number"
                />
              </div>
              <div className="mt-2.5">
                <label className="text-sm" htmlFor="">
                  Is On Sale
                </label>
                <input
                  checked={productObject?.isOnSale}
                  onChange={(e) =>
                    handleObjectChange("isOnSale", e.target.checked)
                  }
                  className="scale-150 ml-5 mt-2"
                  type="checkbox"
                  name=""
                  id=""
                />
              </div>
            </div>
          </div>

          {/* Available product list */}
          <div className="border p-4">
            <h3 className="text-base text-center font-medium border-b pb-2 mb-4">
              Available Product List Form
            </h3>
            {productList?.map((product, indx) => (
              <div key={indx} className="flex items-center gap-2 mb-3">
                <input
                  className="border border-gray-400 w-full p-1 rounded text-sm outline-none "
                  value={product}
                  type="text"
                  onChange={(e) =>
                    handleArrayChange(
                      "productList",
                      productList.map((s, i) =>
                        i === indx ? e.target.value : s
                      )
                    )
                  }
                />
                <RiDeleteBin6Line
                  onClick={() =>
                    handleArrayChange(
                      "productList",
                      productList.filter((_, i) => i !== indx)
                    )
                  }
                  className="text-lg cursor-pointer"
                />
              </div>
            ))}
            <button
              onClick={() =>
                handleArrayChange("productList", [...productList, ""])
              }
              className="border px-3 py-1 font-medium rounded-md shadow-md"
            >
              Add New
            </button>
          </div>
          {/* Recent days sales */}
          <div className="border p-4">
            <h3 className="text-base font-medium border-b pb-2 mb-3">
              Recent {dailySales?.length} days Sales Form
            </h3>
            {dailySales?.map((sale, indx) => (
              <div key={indx} className="flex items-center gap-2 mb-3">
                <input
                  className="border border-gray-400 w-full p-1 rounded text-sm outline-none "
                  value={sale}
                  type="number"
                  onChange={(e) =>
                    handleArrayChange(
                      "dailySales",
                      dailySales.map((s, i) =>
                        i === indx ? e.target.value : s
                      )
                    )
                  }
                />
                <RiDeleteBin6Line onClick={() =>
                    handleArrayChange(
                      "dailySales",
                      dailySales.filter((_, i) => i !== indx)
                    )
                  } className="text-lg cursor-pointer" />
              </div>
            ))}
            <button onClick={() =>
                handleArrayChange("dailySales", [...dailySales, ""])
              } className="border px-3 py-1 font-medium rounded-md shadow-md">
              Add New
            </button>
          </div>

          <div className="border p-4">
            <h3 className="text-lg font-medium border-b pb-2">Address Form</h3>
            <div>
              <label className="text-sm" htmlFor="">
                Address
              </label>
              <textarea
                className="border border-gray-400 w-full p-1 rounded text-sm outline-none resize-none"
                value={address}
                name=""
                id=""
                onChange={(e) => onUpdate({ address: e.target.value })}
              ></textarea>
            </div>
          </div>
          <div className="border p-4">
            <h3 className="text-lg font-medium border-b pb-2">
              Total Revenue Form
            </h3>
            <div className="mt-2.5">
              <label className="text-sm" htmlFor="">
                Total revenue
              </label>
              <input
                value={totalSale}
                className="border border-gray-400 w-full p-1 rounded text-sm outline-none"
                type="number"
                onChange={(e) => onUpdate({ totalSale: parseInt(e.target.value) })}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Display;
