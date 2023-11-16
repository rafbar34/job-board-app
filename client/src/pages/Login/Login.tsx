import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UIForm } from "../../components/UIForm";
import { RegisterWraper } from "../../css/Auth/AuthPageStyle";
import { LoginAPI } from "../../api/api";
import { loginData, loginErrors } from "../../data/constans/authInputs";
import { toast } from "react-toastify";
import { useCookies } from "react-cookie";

export const Login = () => {
  const [cookies, setCookie] = useCookies(["token"]);

  const navigate = useNavigate();
  const onSubmit = async (data: object) => {
    try {
      const res = await LoginAPI({ data });
      if (res?.token) {
        // Cookie.set('token', res?.token, { expires: 100000})
        setCookie("token", res?.token, {
          expires: new Date(
            new Date().getFullYear(),
            new Date().getMonth(),
            new Date().getDate() + 1
          ),
        });
        toast.success(res.msg);
        return navigate("/dashboard");
      }
    } catch (e) {
      toast.error(
        `Something is wrong:${e?.response?.data?.error ?? e?.message} `
      );
      // handle your error
    }
  };
  useEffect(() => {
    if (cookies.token) {
      navigate("/dashboard");
    }
  }, [cookies]);

  return (
    <RegisterWraper>
      <UIForm
        title={"Login"}
        onSubmit={onSubmit}
        inputData={loginData}
        errorsData={loginErrors}
      />
      <div className="btn-container">
        <p className="btn-desc">
          Are you want create account?
          <Link to={"/register"}>Register</Link>`
        </p>
      </div>
      <div className="btn-container">
        <p className="btn-desc">
          Are you want create account?
          <Link to={"/register"}>Explore app</Link>`
        </p>
      </div>
    </RegisterWraper>
  );
};
