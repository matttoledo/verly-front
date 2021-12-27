export interface Customer {
  id: number;
  cpf: string;
  name: string;
  address: string;
  phones: string;
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
