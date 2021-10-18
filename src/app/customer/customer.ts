export interface Customer {
  id: number;
  cpf: string;
  name: string;
  address: string;
  phone: string;
  defaulter: boolean;
  createDate: Date;
  updateDate: Date;
  customerId: number;
}
