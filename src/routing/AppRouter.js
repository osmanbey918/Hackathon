import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { auth, db } from '../config/fireBaseConfig'; // Import db and auth correctly
import { onAuthStateChanged } from 'firebase/auth'; // Firebase modular auth functions
import { doc, getDoc } from 'firebase/firestore'; // Correct Firestore imports

// Protected Route Component
import ProtectedRoute from './ProtectedRoute';
import Navbar from '../components/navbar/Navbar';
import Signup from '../pages/signup/SignUp';
import Login from '../pages/login/Login';
import MenuPage from '../pages/menu/MenuPage';
import About from '../pages/about/About';

const AppRouter = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  // Listen for auth state changes
//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, async (authUser) => {
//       setUser(authUser);
//       setLoading(false);

//       if (authUser) {
//         // Get user document using new modular API
//         const userDocRef = doc(db, 'users', authUser.uid); // Use doc() for documents
//         const userDocSnap = await getDoc(userDocRef); // Use getDoc() to fetch the document

//         if (userDocSnap.exists()) {
//           const userData = userDocSnap.data();
//           setIsAdmin(userData.role === 'admin');
//         }
//       }
//     });

//     return () => unsubscribe(); // Clean up the listener on component unmount
//   }, []);

//   if (loading) return <div>Loading...</div>;

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Public Routes */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        
        {/* Private Routes */}
        <Route path="/menupage" element={<ProtectedRoute element={<MenuPage />} />} />

        {/* Admin Protected Route */}
        <Route path="/admin/dashboard" element={<ProtectedRoute element={<About />} isAdminRoute={isAdmin} />} />

        {/* Default route */}
        <Route path="*" element={<Navigate to="/menupage" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
