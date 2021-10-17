export interface Order {
  id: number;
  products: string;
  createDate: Date;
  updateDate: Date;
  deliveryDate: Date;
  amount: number;
  cost: number;
  profit: number;
  debt: number;
  status: string;
}
