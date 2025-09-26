// src/pages/Home.tsx
import React, { useEffect, useState } from "react";
import type { User } from "../types/user";
import { fetchUsers } from "../api/userApi";
import UserTable from "../components/userTable";
import { motion } from "framer-motion";

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
        setError("Failed to fetch users.");
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-black text-gray-400 animate-pulse">
        <div className="w-24 h-24 rounded-full bg-gray-700 mb-4" />
        <div className="h-6 bg-gray-700 rounded w-2/3 mb-2" />
        <div className="h-4 bg-gray-700 rounded w-1/2 mb-1" />
        <div className="h-4 bg-gray-700 rounded w-1/3" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
        <p className="p-6 text-center text-red-400 bg-gray-800/70 rounded-lg border border-red-500 shadow-lg">
          {error}
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-gray-100 p-6 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-5xl bg-gray-800/70 backdrop-blur-lg border border-gray-700 shadow-2xl rounded-2xl p-6"
      >
        <h1 className="text-2xl font-bold text-indigo-400 mb-6 text-center">
          👥 User List
        </h1>
         <motion.div
                  initial={{ x: 30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="mt-8 p-4 bg-gray-700/50 rounded-lg border border-gray-600"
                >
                  <h3 className="text-lg font-semibold text-indigo-300 mb-2">User Directory</h3>
                   <UserTable users={users} />
                </motion.div>
       
      </motion.div>
    </div>
  );


};

export default Home;

