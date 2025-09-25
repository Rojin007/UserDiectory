// src/api/userApi.ts

import axios from 'axios';
import type { User } from '../types/user';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const fetchUsers = async (): Promise<User[]> => {
  const resp = await axios.get<User[]>(`${BASE_URL}/users`);
  return resp.data;
};

export const fetchUserById = async (id: number): Promise<User> => {
  const resp = await axios.get<User>(`${BASE_URL}/users/${id}`);
  return resp.data;
};
