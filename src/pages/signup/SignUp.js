import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../store/slices/authSlice";
import { useNavigate } from 'react-router-dom';
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

  const handleSignup = async (e) => {
    e.preventDefault();
    const user = { email, password, name, phone, address, gender };

    try {
      await dispatch(signup(user)).unwrap();
      navigate('/login');
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };

  return (
    <div className="signup-container">
      <h1 className="hotel-name">Dubai Restaurant</h1>
      <div className="signup-box">
        <h2>Signup</h2>
        <button onClick={() => navigate('/login')} className="l-btn">Login</button>
        <form onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-field"
            required
          />
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field"
            required
          />
          <input
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input-field"
            required
          />
          <input
            type="text"
            placeholder="Enter phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="input-field"
            required
          />
          <input
            type="text"
            placeholder="Enter address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="input-field"
            required
          />
          <div className="gender-section">
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                onChange={() => setGender('male')}
                required
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                onChange={() => setGender('female')}
                required
              />
              Female
            </label>
          </div>
          <button type="submit" className="signup-button">Signup</button>
          {loading && <Loading />}
        </form>
      </div>
    </div>
  );
}
