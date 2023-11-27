import React from "react";
import { GetAllJobAPI } from "../../api/api";
import { AllJobWrapper } from "../../css/AllJobs/ALlJobs";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";

type JobType = {
  logo: string;
  updatedAt: string | number | Date;
  _id: React.Key | null | undefined;
  title: string | number;
  jobLocation: string;
  jobType: "part-time" | "full-time" | "intern";
};

export const Alljobs = () => {
  const navigate = useNavigate();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["allJobs"],
    queryFn: () =>
      GetAllJobAPI().then((res) => {
        return res;
      }),
  });

  if (isLoading || isError) {
    return <div>Loading</div>;
  }
  console.log(data);
  const { jobsWithLogo } = data;
  return (
    <AllJobWrapper>
      <div className="allJob">
        {jobsWithLogo?.map((job: JobType) => {
          const imgSrc = "data:image/png;base64," + job?.logo;

          const date = new Date(job.updatedAt);
          return (
            <button
              key={job._id}
              className="glass-effect"
              onClick={() => {
                navigate(`/dashboard/${job._id}`);
              }}>
              <div className="job-card scale_hover">
                <div style={{ fontSize: 24, color: "#c2c2c2" }}>
                  {job.title}
                </div>
                {job?.logo ? (
                  <img
                    height={60}
                    width={40}
                    src={imgSrc}
                  />
                ) : (
                  <div
                    style={{
                      height: 60,
                      width: 40,
                      borderWidth: 2,
                      borderColor: "black",
                      backgroundColor: "grey",
                      opacity: 0.1,
                      borderRadius: 6,
                    }}></div>
                )}
                <div style={{}}>{job.jobLocation}</div>
                <div>{(job?.jobType ?? "").toUpperCase()}</div>
                <div>{`${date.getDate()}-${
                  date.getMonth() + 1
                }-${date.getFullYear()}`}</div>
              </div>
            </button>
          );
        })}
      </div>
    </AllJobWrapper>
  );
};
