import React from "react";
import { AddJobWrapper } from "../../css/AddJob/AddJob";
import { UIForm } from "../../components/UIForm";
import { toast } from "react-toastify";
import { addJobData, addJobErrors } from "../../data/constans/add-job";
import { AddJobAPI } from "../../api/api";
import { useCookies } from "react-cookie";

export const Addjob = () => {
  const [cookies, setCookie] = useCookies(["token"]);
  console.log(cookies);
  const onSubmit = async (data: object) => {
    try {
      await AddJobAPI({ data, token: cookies.token });
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
