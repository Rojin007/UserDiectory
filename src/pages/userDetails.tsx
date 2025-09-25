// src/pages/UserDetail.tsx
import React, { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import type { User } from "../types/user";
import { fetchUserById } from "../api/userApi";
import { motion } from "framer-motion";

const UserDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const stateUser = (location.state as { user?: User })?.user;
    if (stateUser) {
      setUser(stateUser);
      setLoading(false);
    } else {
      const load = async () => {
        try {
          if (!id) throw new Error("No user id");
          const userData = await fetchUserById(parseInt(id));
          setUser(userData);
        } catch (err) {
          console.error(err);
          setError("Failed to load user data.");
        } finally {
          setLoading(false);
        }
      };
      load();
    }
  }, [id, location.state]);

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

  if (error) return <div className="p-6 text-center text-red-400">{error}</div>;
  if (!user) return <div className="p-6 text-center text-gray-400">User not found.</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-gray-100 p-6 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-3xl bg-gray-800/70 backdrop-blur-lg border border-gray-700 shadow-2xl rounded-2xl p-6"
      >
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-sm text-indigo-400 hover:text-indigo-300 transition-colors mb-6"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </button>

        {/* Header Section */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-6"
        >
          <div className="w-20 h-20 bg-indigo-600/80 text-white flex items-center justify-center rounded-full text-3xl font-bold uppercase shadow-lg shadow-indigo-500/40">
            {user.name.charAt(0)}
          </div>
          <div>
            <h2 className="text-2xl font-semibold">{user.name}</h2>
            <p className="text-sm text-gray-400">@{user.username}</p>
          </div>
        </motion.div>

        {/* Info Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <p className="text-sm font-medium text-gray-400">Email</p>
            <p className="text-gray-200">{user.email}</p>
          </div>

          <div>
            <p className="text-sm font-medium text-gray-400">Phone</p>
            <p className="text-gray-200">{user.phone}</p>
          </div>

          <div>
            <p className="text-sm font-medium text-gray-400">Website</p>
            <a
              href={`https://${user.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-indigo-300 underline"
            >
              {user.website}
            </a>
          </div>
        </div>

        {/* Address */}
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-8 p-4 bg-gray-700/50 rounded-lg border border-gray-600"
        >
          <h3 className="text-lg font-semibold text-indigo-300 mb-2">📍 Address</h3>
          <p>
            {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}
          </p>
        </motion.div>

        {/* Company */}
        <motion.div
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-6 p-4 bg-indigo-900/40 rounded-lg border border-indigo-800"
        >
          <h3 className="text-lg font-semibold text-indigo-300 mb-2">🏢 Company</h3>
          <p className="text-gray-100 font-medium">{user.company.name}</p>
          <p className="italic text-gray-300">"{user.company.catchPhrase}"</p>
          <p className="text-gray-400">{user.company.bs}</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default UserDetail;
