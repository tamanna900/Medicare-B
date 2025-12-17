import React, { useState } from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import EmailIcon from '@mui/icons-material/Email';
import './loginform.css';
import { Link, useNavigate } from 'react-router-dom';
import stethImg from "../assets/stethoscope.jpg";

const DoctorLoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [error, setError] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validator()) {
      console.log("Doctor logged in successfully");

      // ⭐ Redirect to doctor dashboard
      navigate("/doctor-dashboard");

      setEmail("");
      setPassword("");
      setError({});
    }
  };

  // Validation Logic
  const validator = () => {
    let isValid = true;
    let error = {};

    if (!email) {
      error.email = "Email is required";
      isValid = false;
    } else if (!/^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      error.email = "Email must be valid";
      isValid = false;
    }

    if (!password) {
      error.password = "Password is required";
      isValid = false;
    } else if (password.length < 7) {
      error.password = "Password must be greater than 7 characters";
      isValid = false;
    } else if (!/(?=.*[A-Z])/.test(password)) {
      error.password = "Must contain at least one uppercase letter";
      isValid = false;
    } else if (!/(?=.*[0-9])/.test(password)) {
      error.password = "Must contain at least one number";
      isValid = false;
    } else if (!/(?=.*[!@#$%^&*])/.test(password)) {
      error.password = "Must contain a special character (!@#$%^&*)";
      isValid = false;
    }

    setError(error);
    return isValid;
  };

  return (
    <div className="login_container">
      <div className="login_container_box">

        <div className="login_image_box">
          <img
            src={stethImg} 
            className="w-32 h-32 rounded-full object-cover mb-4"
            alt="doctor"
          />
        </div>

        <div className="form_container">
          <form className="formcontainer_box">
            <h2 className="login_heading">Doctor Login</h2>
            <p style={{ fontSize: "0.85rem", color: "#555", marginBottom: "1rem" }}>
              Secure access for authorized doctors only.
            </p>

            <div className="loginform_input">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter doctor email"
                className="form_input"
              />
              <div className="identifier_icon">
                <EmailIcon style={{ fontSize: "18px" }} />
              </div>
              {error.email && <div className="paraerr">{error.email}</div>}
            </div>

            <div className="loginform_input">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="form_input"
              />

              <div className="identifier_icon">
                {showPassword ? (
                  <VisibilityIcon
                    style={{ fontSize: "20px" }}
                    onClick={() => setShowPassword(!showPassword)}
                  />
                ) : (
                  <VisibilityOffIcon
                    style={{ fontSize: "20px" }}
                    onClick={() => setShowPassword(!showPassword)}
                  />
                )}
              </div>
              {error.password && <div className="paraerr">{error.password}</div>}
            </div>

            <div className="secondarybtn_container">
              <button
                type="submit"
                onClick={handleSubmit}
                className="secondary_btn"
              >
                Login as Doctor
              </button>
            </div>

            <div className="login_box">
              <div className="login_icon">
                <FacebookIcon />
                <TwitterIcon />
                <GoogleIcon />
              </div>

              <div className="signup_link">
                <Link to="/signup"> Not a doctor? Go to User Login</Link>
              </div>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default DoctorLoginForm;
