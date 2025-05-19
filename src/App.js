import './App.css';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCurrentUser } from './store/slices/authSlice';
import Routing from './routing/Routing';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);
  return (
    <div className='hotel'>
      <Routing />
    </div>
  );
}

export default App;