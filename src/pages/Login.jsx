import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { loginUser, userLogOut } from "../store/slices/useInfo.slice";
import "./styles/Login.css";
import Swal from "sweetalert2";

const Login = () => {
  const regexEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const {
    token,
    user: { firstName, lastName },
  } = useSelector((store) => store.userInfo);
  // console.log(token);
  // console.log(user, firstName);

  const dispatch = useDispatch();

  const submit = async (data) => {
    try {
      await dispatch(loginUser(data));
      reset({
        email: "",
        password: "",
      });
    } catch (error) {
      if (error.response && error.response.status === 400) {
        showAlert("error", "Usuario o clave incorrecta");
      } else {
        showAlert("error", "Usuario o clave incorrecta");
      }
    }
  };

  const handleLogOut = () => {
    dispatch(userLogOut());
  };

  const showAlert = (type, message) => {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: type,
      title: message,
    });
  };

  return (
    <main className="login">
      {token ? (
        <section className="login__logged__container">
          <i className="login__logged__icon bx bxs-user-circle"></i>
          <h3 className="login__logged__name">
            {firstName} {lastName}
          </h3>
          <button className="login__logged__btn" onClick={handleLogOut}>
            Log out
          </button>
        </section>
      ) : (
        <form className="login-form__container" onSubmit={handleSubmit(submit)}>
          <h3 className="login-form__title">
            Welcome! Enter your email and password to continue{" "}
          </h3>
          <div className="login-form__containerTest">
            <h4 className="login-form__titleTest">Text data</h4>
            <div className="login-form__emailTest">
              <i className="bx bx-envelope"></i>john@gmail.com
            </div>
            <div className="login-form__passwordTest">
              <i className="bx bx-lock-alt"></i>john1234
            </div>
          </div>

          <div className="login-form__divInfo">
            <label className="login-form__label" htmlFor="">
              Email
            </label>
            <input
              className={`login-form__input ${
                errors.email ? "input__error " : ""
              }`}
              type="text"
              {...register("email", {
                required: "This email is requerid",
                maxLength: {
                  value: 150,
                  message: "email is too long",
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
              Password
            </label>
            <input
              className={`login-form__input ${
                errors.password ? " input__error" : ""
              }`}
              type="password"
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
          <button className="login-form__btn">Login</button>
          <p className="login-form__footerText">
            Don't have an account?
            <span>
              <Link to="/signup"> Sign Up</Link>
            </span>
          </p>
        </form>
      )}
    </main>
  );
};

export default Login;
