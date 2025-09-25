// src/components/UserTable.tsx

import React, { useState } from 'react';
import type { User } from '../types/user';
import { Link } from 'react-router-dom';

interface UserTableProps {
  users: User[];
}

const UserTable: React.FC<UserTableProps> = ({ users }) => {
  const [search, setSearch] = useState('');
  const [sortField, setSortField] = useState<'name' | 'username'>('name');
  const [sortAsc, setSortAsc] = useState(true);

  const filtered = users
    .filter((u) =>
      `${u.name} ${u.username}`.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      const va = sortField === 'name' ? a.name : a.username;
      const vb = sortField === 'name' ? b.name : b.username;
      return sortAsc ? va.localeCompare(vb) : vb.localeCompare(va);
    });

  const toggleSortField = (field: 'name' | 'username') => {
    if (field === sortField) {
      setSortAsc(!sortAsc);
    } else {
      setSortField(field);
      setSortAsc(true);
    }
  };

  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-4">
        <input
          type="text"
          placeholder="Search by name or username"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-300 px-3 py-2 rounded w-full md:w-1/2"
        />
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 shadow-md rounded">
          <thead>
            <tr className="bg-gray-100 text-left text-sm font-semibold text-gray-700">
              <th
                className="px-4 py-2 cursor-pointer"
                onClick={() => toggleSortField('name')}
              >
                Name {sortField === 'name' ? (sortAsc ? '↑' : '↓') : ''}
              </th>
              <th
                className="px-4 py-2 cursor-pointer"
                onClick={() => toggleSortField('username')}
              >
                Username {sortField === 'username' ? (sortAsc ? '↑' : '↓') : ''}
              </th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">City</th>
              <th className="px-4 py-2">Company</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((user) => (
              <tr
                key={user.id}
                className="border-t border-gray-200 hover:bg-gray-50 text-sm"
              >
                <td className="px-4 py-2 text-blue-600 underline">
                  <Link to={`/user/${user.id}`} state={{ user }}>
                    {user.name}
                  </Link>
                </td>
                <td className="px-4 py-2">{user.username}</td>
                <td className="px-4 py-2">{user.email}</td>
                <td className="px-4 py-2">{user.address.city}</td>
                <td className="px-4 py-2">{user.company.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;
