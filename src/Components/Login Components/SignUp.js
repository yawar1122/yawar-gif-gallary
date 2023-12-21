import React, { useState } from "react";
import toast, { ToastBar } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import firebase from "../../Firebase Authentication/FirebaseConfig";
import Spinner from "../Spinner";

function SignUp({setIsLoggedIn}) {
  const navigate = useNavigate();
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [loading, setLoading] = useState(false);

  const [singUpForm, setSingUpForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const changeHandler = (event) => {
    setSingUpForm((prevData) => {
      return {
        ...prevData,
        [event.target.name]: event.target.value,
      };
    });
  };
  const submitHandler = async (e) => {
    e.preventDefault();

    if (singUpForm.firstName === "") {
      toast.error("Enter Your First Name");
      return;
    }
    if (singUpForm.lastName === "") {
      toast.error("Enter Your Last Name");
      return;
    }
    if (singUpForm.email === "") {
      toast.error("Enter Your Email ID");
      return;
    }
    if (singUpForm.password === "") {
      toast.error("Enter Password");
      return;
    }
    if (singUpForm.confirmPassword === "") {
      toast.error("Enter Cofirm Password");
      return;
    }

    if (
      singUpForm.password.length < 6 ||
      singUpForm.confirmPassword.length < 6 ||
      singUpForm.password !== singUpForm.confirmPassword
    ) {
      toast.error("Passwrod Do Not Match");
      return;
    }

    // firebasee account creation
    setLoading(true);
    try {
      const user = await firebase
        .auth()
        .createUserWithEmailAndPassword(singUpForm.email, singUpForm.password);
      if (user) {
        toast.success("Account Created Successfully");
      }
      navigate("/home");
    } catch (e) {
      for (let key in singUpForm) {
        singUpForm[key] = "";
      }
      toast.error("This Email Address is already in use.. ");
    }
    setLoading(false);
    setIsLoggedIn(true)
  };

  return (
    <div className="px-[50px] ">
      {loading ? (
        <Spinner />
      ) : (
        <form
          onSubmit={submitHandler}
          className="flex flex-col gap-4 text-slate-950"
        >
          {/* first Name & Last Name INPUT  */}
          <div className="flex w-full gap-2">
            <label>
              <p className="">
                First Name <span className="text-red-500">*</span>
              </p>
              <input
                type="text"
                name="firstName"
                placeholder="Mohammad"
                value={singUpForm.firstName}
                onChange={changeHandler}
                className="w-full h-12 px-4 rounded-md"
              />
            </label>
            <label>
              <p>
                Last Name <span className="text-red-500">*</span>
              </p>
              <input
                type="text"
                name="lastName"
                placeholder="Yawar"
                value={singUpForm.lastName}
                onChange={changeHandler}
                className="w-full h-12 px-4 rounded-md"
              />
            </label>
          </div>

          {/* email */}
          <label>
            <p>
              Email ID <span className="text-red-500">*</span>
            </p>
            <input
              type="email"
              name="email"
              placeholder="yawar7081@gmail.com"
              value={singUpForm.email}
              onChange={changeHandler}
              className="w-[350px] h-12 px-4 rounded-md"
            />
          </label>

          {/* password & confirm Password */}
          <div className="flex gap-2">
            {/* password */}
            <label className="relative">
              <p>
                Password <span className="text-red-500">*</span>
              </p>
              <input
                type={showPassword1 ? "text" : "password"}
                name="password"
                placeholder="Atlest 6 Char"
                value={singUpForm.password}
                onChange={changeHandler}
                className="w-full h-12 px-4 rounded-md text-sm"
              />
              <span
                onClick={() => setShowPassword1(!showPassword1)}
                className=" absolute bottom-3 bg-white text-sm right-1 font-semibold  text-blue-500 cursor-pointer "
              >
                {showPassword1 ? "Hide" : "Show"}
              </span>
            </label>

            {/* confirm passwrod */}
            <label className="relative">
              <p>
                Confrim Password <span className="text-red-500">*</span>
              </p>
              <input
                type={showPassword2 ? "text" : "password"}
                name="confirmPassword"
                placeholder="Atlest 6 Char"
                value={singUpForm.confirmPassword}
                onChange={changeHandler}
                className="w-full h-12 px-4 rounded-md text-sm"
              />
              <span
                onClick={() => setShowPassword2(!showPassword2)}
                className="absolute bottom-3 bg-white text-sm right-1 font-semibold  text-blue-500 cursor-pointer"
              >
                {showPassword2 ? "Hide" : "Show"}
              </span>
            </label>
          </div>

          {/* sign up button */}
          <button
            className="w-[350px] h-12 px-4 bg-blue-600 text-white rounded-md transition-all duration-200  hover:bg-blue-700 "
            
          >
            Sign Up
          </button>
        </form>
      )}
    </div>
  );
}

export default SignUp;
