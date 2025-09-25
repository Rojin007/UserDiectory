// src/pages/Home.tsx

import React, { useEffect, useState } from 'react';
import type { User } from '../types/user';
import { fetchUsers } from '../api/userApi';
import UserTable from '../components/userTable';

const Home: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetchUsers();
        setUsers(data);
      } catch (err) {
        console.error(err);
        setError('Failed to fetch users.');
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  if (loading) {
    return <div>Loading users...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }

  return <UserTable users={users} />;
};

export default Home;
