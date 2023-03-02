import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { loginUser, userLogOut } from "../store/slices/useInfo.slice";
import "./styles/Login.css";

const Login = () => {
  const { register, handleSubmit, reset } = useForm();

  const {
    token,
    user: { firstName, lastName },
  } = useSelector((store) => store.userInfo);
  // console.log(token);
  // console.log(user, firstName);

  const dispatch = useDispatch();

  const submit = (data) => {
    // console.log(data);
    dispatch(loginUser(data));
    reset({
      email: "",
      password: "",
    });
  };

  const handleLogOut = () => {
    dispatch(userLogOut());
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
              <i className="bx bx-envelope"></i>john@gmail.com{" "}
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
              className="login-form__input"
              type="text"
              {...register("email")}
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
