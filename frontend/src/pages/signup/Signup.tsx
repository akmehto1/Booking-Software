import React, { useEffect, useState } from "react";
import './Signup.scss'
import ContainerLabel from "../../components/Containerlabel";
import { Link, useNavigate } from "react-router-dom";
import signupLogo from "../../assets/images/image_wrapper-B0BcvrsB.webp";
import logo from "../../assets/images/logo.png";
import gsap from "gsap";
import { FaEye } from "react-icons/fa";
import googleLogo from '../../assets/images/googleLogo.png';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { signUpSave } from "../../redux/slices/signupSlice";

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export default function Signup() {

  const dispatch = useDispatch()
  const navigate=useNavigate();
 


  let [form, setForm] = useState<FormState>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleNavigate=()=>{
    dispatch(signUpSave(form))
    navigate('/bussines-signup')
    console.log("bussiness");


  }
  const [isSubmit, setIsSubmit] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [isloading, setIsLoading] = useState<boolean>(false);
  const [passwordStrength, setPasswordStrength] = useState<number>(-1);
  const [currentPasswordClass, setCurrentPasswordClass] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.id === "password") {
      console.log("password");
      const regexWeak = new RegExp("^(?=.*[a-zA-Z0-9]).{1,7}$");
      const regexStrong = new RegExp("^(?=.*[a-zA-Z])(?=.*\\d).{8,}$");
      const regexStrongest = new RegExp(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*()_+{}:;<>,.?~\\-=\\[\\]\\\\|]).{8,}$"
      );

      const password = e.target.value;

      if (password.length === 0) {
        setPasswordStrength(-1);
        return;
      }
      // Assume this is inside an event handler for input change.

      if (regexStrongest.test(password)) {
        setPasswordStrength(4);
        form = { ...form, [e.target.id]: e.target.value };
        setForm(form);
      } else if (regexStrong.test(password)) {
        setPasswordStrength(3);
        form = { ...form, [e.target.id]: e.target.value };
        setForm(form);
      }else if (regexWeak.test(password)) {
        setCurrentPasswordClass("bg-s");
        setPasswordStrength(1);
      } else {
        setCurrentPasswordClass("");
        setPasswordStrength(1); // For passwords that don't meet any criteria.
      }

      return;
    }

    form = { ...form, [e.target.id]: e.target.value };
    setForm(form);
    console.log(form);
  };

  useEffect(() => {
    gsap.to(".title", { rotate: 0, duration: 2, delay: 0, opacity: 1 });
    gsap.to("#book", {
      color: "#4083F2",
      x:100,
      duration: 2.0,
      delay: 1,
      opacity: 1,
    });
    gsap.to("#ing", { opacity: 0, delay: 1, duration: 2 });
    gsap.to("#soft", { opacity: 0, delay: 1, duration: 2 });
    gsap.to("#ware", { x: -160, duration: 1.3, delay: 1, opacity: 1 });
    // gsap.to(".password-strength", { x: -160, duration: 1.3, delay: 1, opacity: 1 });
    
  }, []);

  return (
    <div className="sections">
      <div className="section1">
        <div className="heading-title">
          <img src={logo} />
          <h2>Bookware</h2>
        </div>

        <div className="title">
          <div className="booking">
            <h1 id="book">Book</h1>
            <h1 id="ing">ing</h1>
          </div>
          <div className="software">
            <h1 id="soft">Soft</h1>
            <h1 id="ware">ware</h1>
          </div>
        </div>

        <div className="description">
          <p>Book smarter </p>
          <p>Reservations at your fingertips</p>
        </div>

        <img className="main-logo" src={signupLogo} />
      </div>
      <div className="section2">
        <h1>Signup with Email and <img src={googleLogo} /></h1>
        <div className="social-signup"></div>
        <div className="auth-barrier"></div>
        <form className="signup-account-wrapper">
          <div className="name-section">
            <ContainerLabel
              hintText="First Name"
              label="First Name"
               id="firstName"
              handleChange={handleChange}
            />
            <ContainerLabel
              hintText="Last Name"
              label="Last Name"
               id="lastName"
              handleChange={handleChange}
            />
          </div>
          <ContainerLabel
            hintText="Email"
            label="Email"
            id="email"
            handleChange={handleChange}
          />
          <div className="password-box">
            <label>Password</label>
            <div className="password">
              <input
                id="password"
                onChange={handleChange}
                placeholder="Password"
              />
              <div className="password-icon">
                <FaEye className="icon" />
              </div>
            </div>
            <div className="password-strength">
              <div className="meter">
                <div
                  className={`${
                    passwordStrength === 1
                      ? "bg-red"
                      : passwordStrength === 2
                      ? "bg-pale-green"
                      : passwordStrength === 3
                      ? "bg-green"
                      : passwordStrength === 4
                      ? "bg-green"
                      : ""
                  }`}
                ></div>
                <div
                  className={`${
                    passwordStrength === 1
                      ? "bg-s"
                      : passwordStrength === 2
                      ? "bg-pale-green"
                      : passwordStrength === 3
                      ? "bg-green"
                      : passwordStrength === 4
                      ? "bg-green"
                      : ""
                  }`}
                ></div>
                <div
                  className={`${
                    passwordStrength === 1
                      ? "bg-s"
                      : passwordStrength === 2
                      ? "bg-s"
                      : passwordStrength === 3
                      ? "bg-green"
                      : passwordStrength === 4
                      ? "bg-green"
                      : ""
                  }`}
                ></div>
                <div
                  className={`${
                    passwordStrength === 1
                      ? "bg-s"
                      : passwordStrength === 2
                      ? "bg-s"
                      : passwordStrength === 3
                      ? "bg-s"
                      : passwordStrength === 4
                      ? "bg-green"
                      : ""
                  }`}
                ></div>
              </div>
            </div>
          </div>

          <button onClick={handleNavigate}>Continue</button>
          <button className="google-sign">Google++</button>
        </form>
        <h3>
          Already have an account <Link to="/">Log In</Link>
        </h3>
      </div>
    </div>
  );
}
