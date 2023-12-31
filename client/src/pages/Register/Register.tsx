import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UIForm } from "../../components/UIForm";
import { RegisterWraper } from "../../css/Auth/AuthPageStyle";
import { registerData, registerErrors } from "../../data/constans/authInputs";
import { registerAPI } from "../../api/api";
import { toast } from "react-toastify";
export const Register = () => {
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    // async request which may result error
    try {
      const res = await registerAPI({ data });
      if (res?.user) {
        toast.success(res.msg);
        return navigate("/login");
      }
    } catch (e) {
      console.log(e);
      toast.error(
        `Something is wrong:${e?.response?.data?.error ?? e?.message} `
      );
      console.log(e);
      // handle your error
    }
  };
  return (
    <RegisterWraper>
      <UIForm
        title={"Register"}
        onSubmit={onSubmit}
        inputData={registerData}
        errorsData={registerErrors}
      />
      <div className="btn-container">
        <p className="btn-desc">
          Are you have account?
          <Link to={"/login"}>Login</Link>`
        </p>
      </div>
    </RegisterWraper>
  );
};
