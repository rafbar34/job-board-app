import React from "react";
import { AddJobWrapper } from "../../css/AddJob/AddJob";
import { UIForm } from "../../components/UIForm";
import { toast } from "react-toastify";
import { addJobData, addJobErrors } from "../../data/constans/add-job";
import { AddJobAPI, EditJobAPI } from "../../api/api";
import { useCookies } from "react-cookie";
import { useLocation, useParams } from "react-router-dom";
import { useMutation, useQueryClient } from "react-query";

export const Addjob = () => {
  const [cookies, setCookie] = useCookies(["token"]);
  const queryClient = useQueryClient();
  const { status, id } = useParams();
  const { state } = useLocation();
  const addJob = useMutation({
    mutationFn: (newJob) => {
      return AddJobAPI({ data: newJob, token: cookies.token });
    },
    onSuccess: () => {
      toast.success("Job has been created");
      queryClient.invalidateQueries({ queryKey: ["allJobs"] });
    },
  });
  const editJob = useMutation({
    mutationFn: (editJob) => {
      toast.success("Job has been edited");
      return EditJobAPI({ data: editJob, token: cookies.token });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["allJobs"] });
    },
  });
  const onSubmit = async (data: object) => {
    if (status === "add") {
      addJob.mutate(data);
    } else {
      editJob.mutate(data);
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
