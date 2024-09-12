import React, { useEffect, useState } from "react";
import "./bussiness.scss";
import logo from "../../assets/images/logo.png";
import { GiEarthAsiaOceania } from "react-icons/gi";
import bussinessImage from "../../assets/images/bussinessImage.png";
import { LiaFlagUsaSolid } from "react-icons/lia";
import { UseSelector } from "react-redux";
import { signUp } from "../../redux/slices/signupSlice";
export default function BussinessSignup() {
  const [bookingDomain, setBookingDomain] = useState<string>("booking");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBookingDomain(e.target.value);

    if(e.target.id==='email'){
      console.log(e.target.value);
    }
    console.log("hello");
  };


  useEffect(() => {
    gsap.to('.bussiness-image',{
      z:0,
      delay:2,
      duration:2,
      opacity:1
    })

    gsap.to('.bussiness-show',{
      z:0,
      delay:1.3,
      opacity:1
    })
  
    gsap.to('.bussiness-box',{
      z:0,
      delay:1,
      opacity:1
    })

    gsap.to(".left",{
      z:0,
      stagger: 0.1 ,
      delay:1,
      opacity:1

    })

    
  }, [])
  
  

  return (
    <div className="bussiness-sign-up">
      <div className="main-heading">
        <img src={logo} />
        <h2>BookWare</h2>
      </div>

      <div className="progress-bar">
        
      </div>
      <h2 className="prgress-bar-heading">Let's create your account</h2>
      <div className="form-container">
        <div className="left">
          <div className="industry flex-col-class">
            <label className="input-label">
              Please select your industry:<span>*</span>
            </label>
            <input placeholder="Select" className="input-style-sign-up" />
          </div>
          <div className="business-name flex-col-class">
            <label className="input-label">
              Your Business name<span>*</span>
            </label>
            <input
              onChange={handleChange}
              placeholder="Your Business name"
              className="input-style-sign-up"
            />
          </div>
          <div className="booking-domain flex-col-class">
            <label className="input-label">
              Your Booking Domain<span>*</span>
            </label>
            <input
              onChange={handleChange}
              placeholder="https://bookingdomain.com"
              className="input-style-sign-up"
              type="text"
            />
          </div>

          <div className="phone flex-col-class">
            <label className="input-label">Phone number</label>
            <div className="phone-input">
              <div className="icons"><LiaFlagUsaSolid /></div>
              <input className="input-style-sign-up" type="text" />
            </div>
          </div>


          <button className="continue-sign-up">Continue</button>
        </div>
        <div className="right">
          <div className="bussiness-box">
            <div className="bussiness-show">
              <GiEarthAsiaOceania />
              <p>https://{bookingDomain}.bookware.com</p>
            </div>
            <img className="bussiness-image" src={bussinessImage} />
          </div>

          {/* <div className="bussiness-description">
                <p>Ease of use. Stellar customer support. Integrates with your calendar. Automatic reminders. It’s got everything you might need”</p>
                <div className="profile"><img/><h3>Abhishek kumar mehto</h3></div>
            </div> */}
        </div>
      </div>
    </div>
  );
}
