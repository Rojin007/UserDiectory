import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
// import { fetchUsers } from '../api/userApi';

// // ...

// useEffect(() => {
//   const load = async () => {
//     try {
//       const data = await fetchUsers();
//       setUsers(data);
//     } catch (err) {
//       setError('Failed to load users.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   load();
// }, []);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
