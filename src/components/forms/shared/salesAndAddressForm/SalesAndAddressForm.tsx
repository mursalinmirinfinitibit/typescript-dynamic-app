import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import SectionContainer from "../../../sectionContainer/SectionContainer";
interface SalesAndAddressFormProps {
  dailySales: number[];
  address: string;
  totalSale: number;
  onUpdate: (updatedData: Partial<SalesAndAddressFormProps>) => void;
}
const SalesAndAddressForm: React.FC<SalesAndAddressFormProps> = ({
  dailySales,
  address,
  totalSale,
  onUpdate,
}) => {
  const handleArrayChange = (value: number[]) => {
    onUpdate({ dailySales: value });
  };

  return (
    <>
      <SectionContainer title={`Recent ${dailySales?.length} Days Sales Form`}>
        {dailySales?.map((sale, indx) => (
          <div key={indx} className="flex items-center gap-2 mb-3">
            <input
              className="border border-gray-400 w-full p-1 rounded text-sm outline-none"
              value={sale}
              type="number"
              onChange={(e) =>
                handleArrayChange(
                  dailySales.map((s, i) =>
                    i === indx ? parseInt(e.target.value) : s
                  )
                )
              }
            />
            <RiDeleteBin6Line
              onClick={() =>
                handleArrayChange(dailySales.filter((_, i) => i !== indx))
              }
              className="text-lg cursor-pointer"
            />
          </div>
        ))}
        <button
          onClick={() => handleArrayChange([...dailySales, 0])}
          className="border px-3 py-1 font-medium rounded-md shadow-md"
        >
          Add New
        </button>
      </SectionContainer>
      <SectionContainer title="Address Form">
        <label className="text-sm" htmlFor="address">
          Address
        </label>
        <textarea
          id="address"
          className="border border-gray-400 w-full p-1 rounded text-sm outline-none resize-none"
          value={address}
          onChange={(e) => onUpdate({ address: e.target.value })}
          rows={4}
        ></textarea>
      </SectionContainer>
      <SectionContainer title="Total Revenue Form">
        <label className="text-sm" htmlFor="totalSale">
          Total Revenue
        </label>
        <input
          id="totalSale"
          value={totalSale}
          className="border border-gray-400 w-full p-1 rounded text-sm outline-none"
          type="number"
          onChange={(e) => onUpdate({ totalSale: parseInt(e.target.value) })}
        />
      </SectionContainer>
    </>
  );
};
export default SalesAndAddressForm;
