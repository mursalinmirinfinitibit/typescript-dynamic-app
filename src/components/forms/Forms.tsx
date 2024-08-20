import React from "react";
import { DataObject } from "../types";
import ProductForm from "./shared/productForm/ProductForm";
import ProductListForm from "./shared/productListForm/ProductListForm";
import SalesAndAddressForm from "./shared/salesAndAddressForm/SalesAndAddressForm";

interface FormsProps {
  productObject: DataObject;
  productList: string[];
  dailySales: number[];
  address: string;
  totalSale: number;
  onUpdate: (updatedData: Partial<FormsProps>) => void;
}

const Forms: React.FC<FormsProps> = ({
  productObject,
  productList,
  dailySales,
  address,
  totalSale,
  onUpdate,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 mb-5 gap-4 mt-5">
      <ProductForm productObject={productObject} onUpdate={onUpdate} />
      <ProductListForm productList={productList} onUpdate={onUpdate} />
      <SalesAndAddressForm
        dailySales={dailySales}
        address={address}
        totalSale={totalSale}
        onUpdate={onUpdate}
      />
    </div>
  );
};

export default Forms;