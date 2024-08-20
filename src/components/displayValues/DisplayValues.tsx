import React from "react";
import { DataObject } from "../types";
import SectionContainer from "../sectionContainer/SectionContainer";
interface DisplayValuesProps {
  productObject: DataObject;
  productList: string[];
  dailySales: number[];
  address: string;
  totalSale: number;
}

const DisplayValues: React.FC<DisplayValuesProps> = ({
  productObject,
  productList,
  dailySales,
  address,
  totalSale,
}) => (
  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 mb-5 gap-4">
    <SectionContainer title="Best Selling Product">
      <h5 className="text-base font-medium text-gray-700 py-1">
        Product Name: {productObject?.productName}
      </h5>
      <p className="text-base font-medium text-gray-700 py-1">
        Stock Quantity: {productObject?.stockQuantity}
      </p>
      <p className="text-base font-medium text-gray-700 py-1">
        Is On Sale: {productObject?.isOnSale ? "true" : "false"}
      </p>
    </SectionContainer>

    <SectionContainer title="Available Product List">
      <ul className="list-disc px-4 mt-2">
        {productList?.map((product, indx) => (
          <li className="py-1" key={indx}>
            {product}
          </li>
        ))}
      </ul>
    </SectionContainer>

    <SectionContainer title={`Recent ${dailySales?.length} Days Sales`}>
      <ul className="list-disc px-4 mt-2">
        {dailySales?.map((sale, indx) => (
          <li className="py-1" key={indx}>
            {sale}
          </li>
        ))}
      </ul>
    </SectionContainer>

    <SectionContainer title="Address">
      <p>{address}</p>
    </SectionContainer>

    <SectionContainer title="Total Revenue">
      <p>{totalSale}</p>
    </SectionContainer>
  </div>
);

export default DisplayValues;