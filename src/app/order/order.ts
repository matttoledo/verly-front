export interface Order {
  id: number;
  customerId: number;
  products: string;
  createDate: Date;
  updateDate: Date;
  deliveryDate: Date;
  price: number;
  cost: number;
  profit: number;
  paid:number;
  debt: number;
  status: string;
}
