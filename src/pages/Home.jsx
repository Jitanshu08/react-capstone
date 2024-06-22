import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const [data, setData] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
    checkbox: false,
  });
  const navigate = useNavigate();
  const handleInput = (e) => {
    setData({
      ...data,
      [e.target.name]:
        e.target.name === "checkbox" ? e.target.checked : e.target.value,
    });
  };
  const [errors, setErrors] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
    checkbox: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = {};
    if (!data.name || data.name.trim() === "") {
      errors.name = "Name is required";
    }
    if (!data.username || data.username.trim() === "") {
      errors.username = "userName is required";
    }
    if (!data.email || data.email.trim() === "") {
      errors.email = "email is required";
    }
    if (!data.mobile || data.email.trim() === "") {
      errors.mobile = "Mobile is required";
    }
    if (!data.checkbox) {
      errors.checkbox = "checkbox is required";
    }
    setErrors(errors);
    if (Object.keys(errors).length > 0) return;
    else {
      alert("Form has been submitteed successfully");
      localStorage.setItem("userData", JSON.stringify(data));
      setData({
        name: "",
        username: "",
        email: "",
        mobile: "",
        checkbox: false,
      });
      navigate("/movieSelection");
    }
  };

  return (
    <div className="container">
      <style>
        {`
    @import url('https://fonts.googleapis.com/css2?family=Single+Day&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Single+Day&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
    .title {
      font-family: 'Single Day';
    }
    .subtitle, form, input, label, span{
    font-family: 'DM Sans';
    }
    .overlay-text, .terms{
    font-family: 'Roboto';
    
    }
    .overlay-text{
    font-weight: 900;
    }
    

  `}
      </style>
      <div className="image-container" style={{ position: "relative" }}>
        <img src="src\assets\images\image 13.png" alt="" />
        <div className="overlay-text">Discover new things on Superapp</div>
      </div>
      <div className="form-container">
        <div className="title">Super app</div>
        <p className="subtitle"> Create your new account</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={data.name}
            onChange={handleInput}
          />
          <span style={{ color: "red" }}>{errors.name}</span>
          <input
            type="text"
            name="username"
            placeholder="UserName"
            value={data.username}
            onChange={handleInput}
          />
          <span style={{ color: "red" }}>{errors.username}</span>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={data.email}
            onChange={handleInput}
          />
          <span style={{ color: "red" }}>{errors.email}</span>
          <input
            type="number"
            name="mobile"
            placeholder="Mobile"
            value={data.mobile}
            onChange={handleInput}
          />
          <span style={{ color: "red" }}>{errors.mobile}</span>
          <div>
            <input
              type="checkbox"
              name="checkbox"
              id="checkbox"
              checked={data.checkbox}
              onChange={handleInput}
            />
            <label htmlFor="checkbox">
              Share my registration data with Superapp
            </label>
          </div>
          <span style={{ color: "red" }}>{errors.checkbox}</span>
          <button type="submit">SIGN UP</button>
          <p className="terms">
            By clicking on Sign up. you agree to Superapp Terms and Conditions
            of Use
            <br /> <br />
            To learn more about how Superapp collects, uses, shares and protects
            your personal data please head Superapp Privacy Policy
          </p>
        </form>
      </div>
    </div>
  );
}
