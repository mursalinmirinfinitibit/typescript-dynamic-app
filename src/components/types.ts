export interface DataObject {
  stockQuantity: number;
  productName: string;
  isOnSale: boolean;
}

export interface DisplayProps {
  productObject: DataObject;
  productList: string[];
  dailySales: number[];
  address: string;
  totalSale: number;
  onUpdate: (updatedData: Partial<DisplayProps>) => void;
}
