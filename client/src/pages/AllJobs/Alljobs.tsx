import React, { useEffect, useState } from "react";
import { GetAllJobAPI } from "../../api/api";
import { toast } from "react-toastify";
import { AllJobWrapper } from "../../css/AllJobs/ALlJobs";
import { useNavigate } from "react-router-dom";
import { Buffer } from "buffer";

export const Alljobs = () => {
  const [fetchedJobs, setFetchedJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const FetchAllJobs = async () => {
    try {
      setLoading(true);
      const res = await GetAllJobAPI();
      setFetchedJobs(res);
      setLoading(false);
    } catch (e) {
      console.log(e);
      toast.error(
        `Something is wrong:${e?.response?.data?.error ?? e?.message} `
      );
      // handle your error
    }
  };
  useEffect(() => {
    FetchAllJobs();
  }, []);

  if (loading) {
    return <div>Loading</div>;
  }
  const { jobsWithLogo } = fetchedJobs;
  console.log(jobsWithLogo);
  return (
    <AllJobWrapper>
      <div className="allJob">
        {!loading &&
          jobsWithLogo?.map((job) => {
            let imgSrc = "data:image/png;base64," + job.logo;

            const date = new Date(job.updatedAt);
            return (
              <button
                onClick={() => {
                  navigate(`/dashboard/${job._id}`);
                }}>
                <div className="job-card scale_hover">
                  <div style={{ fontSize: 24, color: "green" }}>
                    {job.title}
                  </div>
                  <img
                    height={60}
                    width={40}
                    src={imgSrc}
                  />
                  <div style={{}}>{job.jobLocation}</div>
                  <div>{job.jobType}</div>
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
