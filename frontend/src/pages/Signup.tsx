import React, { useState } from "react";
import '../style/Signup.scss'
import ContainerLabel from "../components/Containerlabel";
import { Link } from "react-router-dom";

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

  return (
      <div className="sections">
        <div className="section1">hello</div>
        <div className="section2">
          <h1>Choose how you want to sign up</h1>
          <div className="social-signup"></div>
          <div className="auth-barrier"></div>
          <form className="signup-account-wrapper">
             <div className="name-section">
              <ContainerLabel  hintText="First Name" label="First Name"  handleChange={handleChange} />
              <ContainerLabel  hintText="Last Name" label="Last Name" handleChange={handleChange} />
             </div>
             <ContainerLabel hintText="Email" label="Email"  handleChange={handleChange} />
             <ContainerLabel  hintText="Password" label="Password" handleChange={handleChange} />
            <button>Continue</button>
            <button className="google-sign">Google++</button>
          </form>
          <h3>Already have an account <Link to="/">LogIn</Link></h3>
        </div>
      </div>
  );
}
