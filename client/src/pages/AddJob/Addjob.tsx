import React from "react";
import { AddJobWrapper } from "../../css/AddJob/AddJob";
import { UIForm } from "../../components/UIForm";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { addJobData, addJobErrors } from "../../data/constans/add-job";
import { AddJobAPI } from "../../api/api";

export const Addjob = () => {
  const onSubmit = async (data: object) => {
    try {
      await AddJobAPI({ data });
      toast.success("Job offer has been created");
    } catch (e) {
      console.log(e);
      toast.error(
        `Something is wrong:${e?.response?.data?.error ?? e?.message} `
      );
      // handle your error
    }
  };
  return (
    <AddJobWrapper>
      <div className="addJob-header">
        <div>
          <UIForm
            bgColor="transparent"
            title={"Add job"}
            onSubmit={onSubmit}
            inputData={addJobData}
            errorsData={addJobErrors}
          />
        </div>
      </div>
    </AddJobWrapper>
  );
};
