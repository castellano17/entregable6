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

  const regexEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  console.log(errors);
  return (
    <main className="login">
      <form className="login-form__container" onSubmit={handleSubmit(submit)}>
        <div className="login-form__divInfo">
          <h3 className="login-form__title">Sign Up</h3>

          <label className="login-form__label" htmlFor="">
            Email
          </label>
          <input
            className={`login-form__input ${
              errors.email ? "input__error" : ""
            }`}
            type="email"
            {...register("email", {
              required: "This is field is requerid",
              maxLength: {
                value: 150,
                message: "Email is too long",
              },
              pattern: {
                value: regexEmail,
                message: "Thi is not a valid email",
              },
            })}
          />
          {errors.email && (
            <p className="login-form__error">{errors.email.message} </p>
          )}
        </div>

        <div className="login-form__divInfo">
          <label className="login-form__label" htmlFor="">
            First Name
          </label>
          <input
            className={`login-form__input ${
              errors.firstName ? " input__error" : ""
            }`}
            type="text"
            {...register("firstName", {
              required: "This is field is requerid",
              maxLength: {
                value: 25,
                message: "Text is too long",
              },
            })}
          />
          {errors.firstName && (
            <p className="login-form__error">{errors.firstName.message} </p>
          )}
        </div>

        <div className="login-form__divInfo">
          <label className="login-form__label" htmlFor="">
            Last Name
          </label>
          <input
            className={`login-form__input ${
              errors.lastName ? " input__error" : ""
            }`}
            type="text"
            {...register("lastName", {
              required: "This is field is requerid",
              maxLength: {
                value: 25,
                message: "Text is too long",
              },
            })}
          />
          {errors.lastName && (
            <p className="login-form__error">{errors.lastName.message} </p>
          )}
        </div>

        <div className="login-form__divInfo">
          <label className="login-form__label" htmlFor="">
            Password
          </label>
          <input
            className={`login-form__input ${
              errors.password ? " input__error" : ""
            }`}
            type="text"
            {...register("password", {
              required: "This is field is requerid",
              minLength: {
                value: 8,
                message: "Minimum 8 digit password ",
              },
              maxLength: {
                value: 50,
                message: "Text is too long",
              },
            })}
          />
          {errors.password && (
            <p className="login-form__error">{errors.password.message} </p>
          )}
        </div>

        <div className="login-form__divInfo">
          <label className="login-form__label" htmlFor="">
            Phone (10 characters)
          </label>
          <input
            className={`login-form__input ${
              errors.phone ? " input__error" : ""
            }`}
            type="number"
            {...register("phone", {
              required: "This is field is requerid",
              minLength: {
                value: 10,
                message: "Minimum 10 digit phone number ",
              },
              maxLength: {
                value: 25,
                message: "Telephone maximum 25 digits",
              },
            })}
          />
          {errors.phone && (
            <p className="login-form__error">{errors.phone.message} </p>
          )}
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
