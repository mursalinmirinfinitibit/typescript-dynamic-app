import React from "react";
import { DataObject } from "../../../types";
import SectionContainer from "../../../sectionContainer/SectionContainer";

interface ProductFormProps {
  productObject: DataObject;
  onUpdate: (updatedData: Partial<{ productObject: DataObject }>) => void;
}

const ProductForm: React.FC<ProductFormProps> = ({ productObject, onUpdate }) => {
  const handleObjectChange = (field: keyof DataObject, value: number | string | boolean) => {
    onUpdate({ productObject: { ...productObject, [field]: value } });
  };

  return (
    <SectionContainer title="Best Selling Product Form">
      <div>
        <label className="text-sm" htmlFor="productName">
          Product Name
        </label>
        <input
          id="productName"
          onChange={(e) => handleObjectChange("productName", e.target.value)}
          value={productObject?.productName}
          className="border border-gray-400 w-full p-1 rounded text-sm outline-none"
          type="text"
        />
      </div>
      <div className="mt-2.5">
        <label className="text-sm" htmlFor="stockQuantity">
          Stock Quantity
        </label>
        <input
          id="stockQuantity"
          onChange={(e) =>
            handleObjectChange("stockQuantity", parseInt(e.target.value))
          }
          value={productObject?.stockQuantity}
          className="border border-gray-400 w-full p-1 rounded text-sm outline-none"
          type="number"
        />
      </div>
      <div className="mt-2.5 flex items-center">
        <label className="text-sm mr-2" htmlFor="isOnSale">
          Is On Sale
        </label>
        <input
          id="isOnSale"
          checked={productObject?.isOnSale}
          onChange={(e) => handleObjectChange("isOnSale", e.target.checked)}
          className="scale-150"
          type="checkbox"
        />
      </div>
    </SectionContainer>
  );
};

export default ProductForm;