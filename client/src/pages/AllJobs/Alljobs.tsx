import React, { useEffect, useState } from "react";
import { GetAllJobAPI } from "../../api/api";
import { toast } from "react-toastify";
import { AllJobWrapper } from "../../css/AllJobs/ALlJobs";

export const Alljobs = () => {
  const [fetchedJobs, setFetchedJobs] = useState([]);
  const [loading, setLoading] = useState(false);
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
  const { jobs } = fetchedJobs;
  console.log(jobs);
  return (
    <AllJobWrapper>
      <div className="allJob">
        {!loading &&
          jobs?.map((job) => {
            const date = new Date(job.updatedAt);
            return (
              <div className="job-card scale_hover">
                <div style={{fontSize:24, color:'green'}}>{job.title}</div>
                <div style={{}}>{job.jobLocation}</div>
                <div>{job.jobType}</div>
                <div>{`${date.getDate()}-${
                  date.getMonth() + 1
                }-${date.getFullYear()}`}</div>
              </div>
            );
          })}
      </div>
    </AllJobWrapper>
  );
};
