import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import firebase from '../../Firebase Authentication/FirebaseConfig';
import Spinner from "../Spinner";

function SignIn({setIsLoggedIn}) {
  const navigate = useNavigate();
  const [loading,setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);


  const [signInForm, setSignInForm] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (event) => {
    setSignInForm((prevData) => {
      return {
        ...prevData,
        [event.target.name]: event.target.value,
      };
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();


    if(signInForm.email===""){
        toast.error("Enter the Email ID");
        return;
    }
    if(signInForm.password===""){
        toast.error("Enter Your Password")
        return;
    }

    setLoading(true);
    try {
      const user = await firebase.auth().signInWithEmailAndPassword(signInForm.email,signInForm.password);
      if(user){
        toast.success("Sign In Successfully");
      }
      setIsLoggedIn(true)
      navigate("/home");
    } catch (e) {
        for(let key in signInForm){
            signInForm[key] = "";
        }
        toast.error("Enter the Valid UserID and Password");
    }
    setLoading(false);
  };

  return (
    <div className=" flex flex-col justify-center items-center gap-2 ">
      
      {
        loading 
        ? <Spinner/>
        :<form
        onSubmit={submitHandler}
        className="flex flex-col justify-center items-center gap-5"
      >
        <label>
          <p>
            Email <sup className="text-red-500">*</sup>
          </p>
          <input
            type="email"
            name="email"
            value={signInForm.email}
            onChange={changeHandler}
            placeholder="Enter Your Email Id"
            className="w-[350px] h-12 px-4 rounded-md"
          />
        </label>

        <label className="relative ">
          <p>
            Password <sup className="text-red-500">*</sup>
          </p>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={signInForm.password}
            onChange={changeHandler}
            placeholder="Enter  Your Password"
            className="w-[350px] h-12 px-4 rounded-md"
          />

          <span
            onClick={() => setShowPassword(!showPassword)}
            className=" absolute bottom-3 text-sm right-2 font-semibold  text-blue-500 cursor-pointer"
          >
            {showPassword ? "Hide" : "Show"}
          </span>
        </label>

        <button className="w-[350px] h-12 mt-2 px-4 bg-blue-600 text-white rounded-md transition-all duration-200  hover:bg-blue-700 "
        >
          Sign In
        </button>
      </form>
      }
      
    </div>
  );
}

export default SignIn;
