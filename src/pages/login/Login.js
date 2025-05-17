import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../store/slices/authSlice';
import { useNavigate } from 'react-router-dom';
import AuthForm from '../../components/AuthForm';
import Loading from '../../components/loading/Loading';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loading = useSelector((state) => state.auth.loading);

  const fields = [
    { name: 'email', type: 'email', placeholder: 'Enter email', required: true },
    { name: 'password', type: 'password', placeholder: 'Enter password', required: true },
  ];

  const handleLogin = (formData) => {
    dispatch(login(formData));
  };

  return (
    <div className="login-container">
      <h1 className="hotel-name">Dubai Restaurant</h1>
      <div className="login-box">
        <h2>Login</h2>
        <AuthForm
          fields={fields}
          onSubmit={handleLogin}
          submitLabel="Login"
          loading={loading}
          switchLabel="Sign Up"
          onSwitch={() => navigate('/signup')}
        />
      </div>
    </div>
  );
}
