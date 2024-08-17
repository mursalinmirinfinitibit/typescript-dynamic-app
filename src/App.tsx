// src/App.tsx
import React, { useState } from 'react';
import { DataObject, DisplayProps } from './components/display/types';
import Display from './components/display/Display';

const App: React.FC = () => {
  const [productObject, setProductObject] = useState<DataObject>({
    stockQuantity: 50,
    productName: "Wireless Mouse",
    isOnSale: true
  });
  const [productList, setProductList ] = useState<string[]>(['Gaming Headset','Portable Charger','Webcam','Smartphone Holder']);
  const [dailySales, SetDailySales] = useState<number[]>([120, 150, 135, 200]);
  const [address, setAddress] = useState<string>('123 Main Street, Faridpur, Bangladesh');
  const [totalSale, setTotalSale] = useState<number>(6500000);

  const handleUpdate = (updatedData: Partial<DisplayProps>) => {

    if (updatedData.productObject) setProductObject(updatedData.productObject);
    if (updatedData.productList) setProductList(updatedData.productList);
    if (updatedData.dailySales) SetDailySales(updatedData.dailySales);
    if (updatedData.address !== undefined) setAddress(updatedData.address);
    if (updatedData.totalSale !== undefined) setTotalSale(updatedData.totalSale);
  };

  return (
    <div>
      <h1 className='text-center text-xl font-medium mt-2'>Information Preview</h1>
      <Display
        productObject={productObject}
        productList={productList}
        dailySales={dailySales}
        address={address}
        totalSale={totalSale}
        onUpdate={handleUpdate}
      />
    </div>
  );
};

export default App;
