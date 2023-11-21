import React, { useEffect, useState } from "react";
import { SingleJobWrapper } from "../../css/SingleJob/SingleJob";
import { useParams } from "react-router-dom";
import { GetSingleJob } from "../../api/api";

export const SingleJob = () => {
  const { id } = useParams();
  const [data, setData] = useState<object | null>(null);
  const fetchSingleJobData = async () => {
    try {
      const res = await GetSingleJob({ id });
      setData(res.job);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchSingleJobData();
  }, []);
  console.log(data);
  if (!data) return;
  return (
    <SingleJobWrapper>
      <div className="container">
        <div className="title">{data.title}</div>
        <div className="type">
          Type: {(data?.jobType ?? "this doesn't exist").toUpperCase()}
        </div>
        <div className="desc">{data.desc}</div>
        <div className="salary">
          salary: {data.salary} {data.currency}
        </div>
        <div className="salary">Location: {data.jobLocation}</div>
        <div className="contect">Contact: {data.contact}</div>
      </div>
    </SingleJobWrapper>
  );
};
