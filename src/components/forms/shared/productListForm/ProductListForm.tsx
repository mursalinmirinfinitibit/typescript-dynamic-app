import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import SectionContainer from "../../../sectionContainer/SectionContainer";

interface ProductListFormProps {
  productList: string[];
  onUpdate: (updatedData: Partial<{ productList: string[] }>) => void;
}

const ProductListForm: React.FC<ProductListFormProps> = ({
  productList,
  onUpdate,
}) => {
  const handleArrayChange = (value: string[]) => {
    onUpdate({ productList: value });
  };

  return (
    <SectionContainer title="Available Product List Form">
      {productList?.map((product, indx) => (
        <div key={indx} className="flex items-center gap-2 mb-3">
          <input
            className="border border-gray-400 w-full p-1 rounded text-sm outline-none"
            value={product}
            type="text"
            onChange={(e) =>
              handleArrayChange(
                productList.map((s, i) => (i === indx ? e.target.value : s))
              )
            }
          />
          <RiDeleteBin6Line
            onClick={() =>
              handleArrayChange(
                productList.filter((_, i) => i !== indx)
              )
            }
            className="text-lg cursor-pointer"
          />
        </div>
      ))}
      <button
        onClick={() => handleArrayChange([...productList, ""])}
        className="border px-3 py-1 font-medium rounded-md shadow-md"
      >
        Add New
      </button>
    </SectionContainer>
  );
};

export default ProductListForm;