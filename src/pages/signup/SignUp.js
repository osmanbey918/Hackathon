import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../store/slices/authSlice";
import { useNavigate } from 'react-router-dom';
import AuthForm from '../../components/AuthForm';
import Loading from "../../components/loading/Loading";


export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");

  const loading = useSelector((state) => state.auth.loading);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fields = [
    { name: 'email', type: 'text', placeholder: 'Enter email', required: true },
    { name: 'password', type: 'password', placeholder: 'Enter password', required: true },
    { name: 'name', type: 'text', placeholder: 'Enter name', required: true },
    { name: 'phone', type: 'text', placeholder: 'Enter phone number', required: true },
    { name: 'address', type: 'text', placeholder: 'Enter address', required: true },
    { name: 'gender', type: 'radio', options: [
      { label: 'Male', value: 'male' },
      { label: 'Female', value: 'female' }
    ], required: true, className: 'gender-section' },
  ];

  const handleSignup = async (formData) => {
    try {
      await dispatch(signup(formData)).unwrap();
      navigate('/login');
    } catch (error) {
      console.error('Signup failed:', error);
    }
  };

  return (
    <div className="signup-container">
      <h1 className="hotel-name">Dubai Restaurant</h1>
      <div className="signup-box">
        <h2>Signup</h2>
        <AuthForm
          fields={fields}
          onSubmit={handleSignup}
          submitLabel="Signup"
          loading={loading}
          switchLabel="Login"
          onSwitch={() => navigate('/login')}
        />
      </div>
    </div>
  );
}
