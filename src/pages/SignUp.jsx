import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { signup } from "../store/slices/useInfo.slice";

const SignUp = () => {
  const dispatch = useDispatch();

  const submit = (data) => {
    // console.log(data);
    dispatch(signup(data));
    reset({
      email: "",
      firstName: "",
      lastName: "",
      password: "",
      phone: "",
    });
  };

  const { register, handleSubmit, reset } = useForm();
  return (
    <main className="login">
      <form className="login-form__container" onSubmit={handleSubmit(submit)}>
        <div className="login-form__divInfo">
          <h3 className="login-form__title">Sign Up</h3>

          <label className="login-form__label" htmlFor="">
            Email
          </label>
          <input
            required
            className="login-form__input"
            type="email"
            {...register("email")}
          />
        </div>

        <div className="login-form__divInfo">
          <label className="login-form__label" htmlFor="">
            First Name
          </label>
          <input
            required
            className="login-form__input"
            type="text"
            {...register("firstName")}
          />
        </div>

        <div className="login-form__divInfo">
          <label className="login-form__label" htmlFor="">
            Last Name
          </label>
          <input
            required
            className="login-form__input"
            type="text"
            {...register("lastName")}
          />
        </div>

        <div className="login-form__divInfo">
          <label className="login-form__label" htmlFor="">
            Password
          </label>
          <input
            className="login-form__input"
            type="password"
            {...register("password")}
          />
        </div>

        <div className="login-form__divInfo">
          <label className="login-form__label" htmlFor="">
            Phone (10 characters)
          </label>
          <input
            required
            className="login-form__input"
            type="number"
            {...register("phone")}
          />
        </div>

        <button className="login-form__btn">Sign up</button>
        <p className="login-form__footerText">
          Already have an account?
          <span>
            <Link to="/login"> Login</Link>
          </span>
        </p>
      </form>
    </main>
  );
};

export default SignUp;
