import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { auth, db } from '../config/fireBaseConfig'; // Import Firebase Auth and db
import { onAuthStateChanged } from 'firebase/auth'; // Firebase Auth State Listener

const ProtectedRoute = ({ element, isAdminRoute }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
//       if (currentUser) {
//         setUser(currentUser);

//         // Check if the user is an admin
//         const userDoc = await db.collection('users').doc(currentUser.uid).get();
//         setIsAdmin(userDoc.data().role === 'admin');
//       } else {
//         setUser(null);
//         setIsAdmin(false);
//       }

//       setLoading(false); // Set loading to false once auth state is checked
//     });

//     // Clean up listener when component unmounts
//     return () => unsubscribe();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>; // Show loading while checking auth status
//   }

  if (!user) {
    // Redirect to login if the user is not authenticated
    return <Navigate to="/login" />;
  }

  if (isAdminRoute && !isAdmin) {
    // Redirect to login if it's an admin route and the user is not an admin
    return <Navigate to="/login" />;
  }

  return element; // Return the element (protected route) if the user is authenticated
};

export default ProtectedRoute;
