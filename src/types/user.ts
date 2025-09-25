
// src/types/User.ts

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  // geo omitted for simplicity
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}
