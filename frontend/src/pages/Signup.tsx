import React, { useEffect, useState } from "react";
import "../style/Signup.scss";
import ContainerLabel from "../components/Containerlabel";
import { Link } from "react-router-dom";
import signupLogo from "../assets/images/image_wrapper-B0BcvrsB.webp";
import logo from "../assets/images/logo.png";
import gsap from "gsap";
interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}
export default function Signup() {
  let [form, setForm] = useState<FormState>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isSubmit, setIsSubmit] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [isloading, setIsLoading] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    form = { ...form, [e.target.id]: e.target.value };
    setForm(form);
  };

  useEffect(() => {
   
  gsap.to(".title",{rotate:0,duration:2,delay:0,opacity:1});
  gsap.to("#book",{color:'#4083F2',x:120,duration:2,delay:1,opacity:1});
  gsap.to('#ing',{opacity:0,delay:1,duration:2});
  gsap.to('#soft',{opacity:0,delay:1,duration:2});
  gsap.to("#ware",{x:-120,duration:2,delay:1,opacity:1});

  

  }, [])
  
 
  return (
    <div className="sections">
      <div className="section1">
        <div className="heading-title">
          <img src={logo} />
          <h2>Bookware</h2>
        </div>


        <div className="title">
          <div  className="booking">
            <h1 id="book">Book</h1>
            <h1 id="ing">ing</h1>
          </div>
          <div className="software">
            <h1 id="soft" >Soft</h1>
            <h1 id="ware">ware</h1>
          </div>
        </div>




        <div className="description"></div>

        <img src={signupLogo} />
      </div>
      <div className="section2">
        <h1>Choose how you want to sign up</h1>
        <div className="social-signup"></div>
        <div className="auth-barrier"></div>
        <form className="signup-account-wrapper">
          <div className="name-section">
            <ContainerLabel
              hintText="First Name"
              label="First Name"
              handleChange={handleChange}
            />
            <ContainerLabel
              hintText="Last Name"
              label="Last Name"
              handleChange={handleChange}
            />
          </div>
          <ContainerLabel
            hintText="Email"
            label="Email"
            handleChange={handleChange}
          />
          <ContainerLabel
            hintText="Password"
            label="Password"
            handleChange={handleChange}
          />
          <button>Continue</button>
          <button className="google-sign">Google++</button>
        </form>
        <h3>
          Already have an account <Link to="/">Log In</Link>
        </h3>
      </div>
    </div>
  );
}
