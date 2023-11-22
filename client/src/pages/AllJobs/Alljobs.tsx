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
      setFetchedJobs(res ?? []);
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
  return (
    <AllJobWrapper>
      <div className="allJob">
        {!loading &&
          jobsWithLogo?.map((job) => {
            let imgSrc = "data:image/png;base64," + job?.logo;

            const date = new Date(job.updatedAt);
            return (
              <button
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
