import { Phone } from './phone';
import { Address } from './address';
export class Customer {
  id!: number;
  cpf!: string;
  name!: string;
  address!: Address;
  phone!: Phone;
  firstPhone!: string;
  secondPhone!: string;
  cep!: string;
  // localidade: string;
  // number: string;
  // district: string;
  // city: string,
  // state: string,
  // complement: string,
  defaulter!: boolean;
  createDate!: Date;
  updateDate!: Date;
}
