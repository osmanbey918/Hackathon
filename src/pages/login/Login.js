import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../store/slices/authSlice';
import { useNavigate } from 'react-router-dom';
import Loading from '../../components/loading/Loading';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loading = useSelector((state) => state.auth.loading);

  const handleLogin = () => {
    const user = {
      email,
      password,
    };
    dispatch(login(user));
  };

  return (
    <div className="login-container">
      <h1 className="hotel-name">Dubai Restaurant</h1>
      <div className="login-box">
        <h2>Login</h2>
        <button onClick={() => navigate('/signup')} className="l-btn">
          Sign Up
        </button>
        <input
          type="email"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
          className="input-field"
        />
        <input
          type="password"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
          className="input-field"
        />
        <button onClick={handleLogin} className="login-button">
          Login
        </button>
        {loading && <Loading />}
      </div>
    </div>
  );
}
