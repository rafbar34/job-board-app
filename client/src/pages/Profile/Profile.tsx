import React from "react";
import { UIForm } from "../../components/UIForm";
import { toast } from "react-toastify";
import { EditProfileAPI } from "../../api/api";
import { editData, editErrors } from "../../data/constans/editInputs";
import { useNavigate } from "react-router-dom";

export const Profile = () => {
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    // async request which may result error
    try {
      const res = await EditProfileAPI({ data });
      console.log(res);
      if (res?.msg) {
        toast.success(res.msg);
        navigate("/dashboard");
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
    <div>
      <UIForm
        title={"Profile"}
        onSubmit={onSubmit}
        bgColor="grey"
        inputData={editData}
        errorsData={editErrors}
      />
    </div>
  );
};
