import React, { useEffect, useState } from "react";
import { GetAllCreatedJobs } from "../../api/api";
import { toast } from "react-toastify";
import { AllJobWrapper } from "../../css/AllJobs/ALlJobs";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { EditIcon } from "../../icons/edit";
import { DeleteIcon } from "../../icons/delete";

export const MyJobs = () => {
  const [fetchedJobs, setFetchedJobs] = useState([]);
  const [cookies, setCookie] = useCookies(["token"]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const FetchAllJobs = async () => {
    try {
      setLoading(true);
      const res = await GetAllCreatedJobs({ token: cookies.token });
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
  return (
    <AllJobWrapper>
      <div className="allJob">
        {!loading &&
          jobsWithLogo?.map((job) => {
            let imgSrc = "data:image/png;base64," + job.logo;

            const date = new Date(job.updatedAt);
            return (
              <div>
                <div className="job-card scale_hover">
                  <div className="tools">
                    <button
                      className="editBtn"
                      onClick={() => {
                        navigate(`/dashboard/edit/${job._id}`, {
                          state: { job: job },
                        });
                      }}>
                      <EditIcon />
                    </button>
                    <button
                      className="editBtn"
                      onClick={() => {
                        navigate(`/dashboard/${job._id}`);
                      }}>
                      <DeleteIcon />
                    </button>
                  </div>
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
              </div>
            );
          })}
      </div>
    </AllJobWrapper>
  );
};
