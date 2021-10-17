export interface Customer {
  id: string;
  cpf: string;
  name: string;
  address:string;
  phone: string;
  defaulter: boolean;
  createDate: Date;
  updateDate: Date;
  customerId: number;
}
