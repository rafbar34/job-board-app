import React from "react";
import { AddJobWrapper } from "../../css/AddJob/AddJob";
import { UIForm } from "../../components/UIForm";
import { toast } from "react-toastify";
import { addJobData, addJobErrors } from "../../data/constans/add-job";
import { AddJobAPI, EditJobAPI } from "../../api/api";
import { useCookies } from "react-cookie";
import { useLocation, useParams } from "react-router-dom";

export const Addjob = () => {
  const [cookies, setCookie] = useCookies(["token"]);
  const { status, id } = useParams();
  const { state } = useLocation();
  console.log(status, id, state.job);
  const onSubmit = async (data: object) => {
    if (status === "add") {
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
    } else {
      try {
        await EditJobAPI({ data, token: cookies.token });
        toast.success("Job offer has been Updated");
      } catch (e) {
        console.log(e);
        toast.error(
          `Something is wrong:${e?.response?.data?.error ?? e?.message} `
        );
        // handle your error
      }
    }
  };

  return (
    <AddJobWrapper>
      <div className="addJob-header">
        <div>
          <UIForm
            bgColor="transparent"
            title={status === "add" ? "Add job" : "Edit job"}
            onSubmit={onSubmit}
            inputData={addJobData}
            errorsData={addJobErrors}
            defaultValue={status === "edit" && state.job}
          />
        </div>
      </div>
    </AddJobWrapper>
  );
};
