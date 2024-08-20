import React from "react";
import { DisplayProps } from "../types";
import DisplayValues from "../displayValues/DisplayValues";
import Forms from "../forms/Forms";

const Display: React.FC<DisplayProps> = ({
  productObject,
  productList,
  dailySales,
  address,
  totalSale,
  onUpdate,
}) => {
  return (
    <div className="p-5">
      <DisplayValues
        productObject={productObject}
        productList={productList}
        dailySales={dailySales}
        address={address}
        totalSale={totalSale}
      />
      <hr />
      <h2 className="text-center text-xl mt-2 font-semibold">Forms Inputs</h2>
      <Forms
        productObject={productObject}
        productList={productList}
        dailySales={dailySales}
        address={address}
        totalSale={totalSale}
        onUpdate={onUpdate}
      />
    </div>
  );
};

export default Display;