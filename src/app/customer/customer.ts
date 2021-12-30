import { Phones } from './phones';
import { Address } from './address';
export interface Customer {
  id: number;
  cpf: string;
  name: string;
  address: Address;
  phones: Phones;
  firstPhone: string;
  secondPhone: string;
  cep: string;
  street: string;
  number: string;
  district: string;
  city: string,
  state: string,
  complement: string,
  defaulter: boolean;
  createDate: Date;
  updateDate: Date;
}
