import React from "react";
import { SingleJobWrapper } from "../../css/SingleJob/SingleJob";
import { useParams } from "react-router-dom";
import { GetSingleJob } from "../../api/api";
import { useQuery } from "react-query";

export const SingleJob = () => {
  const { id } = useParams();
  const { data, isLoading } = useQuery({
    queryKey: ["singleJob"],
    queryFn: () =>
      GetSingleJob({ id }).then((x) => {
        return x.job;
      }),
  });

  if (isLoading) return;
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
