import React, { useEffect, useState } from "react";
import { AxisOptions, Chart } from "react-charts";
import { GetStatsAPI } from "../../api/api";
import { toast } from "react-toastify";
import { useCookies } from "react-cookie";

type MyDatum = { date: Date; jobs: number };
export const Stats = () => {
  const [statsData, setStatsData] = useState([]);
  const [cookies, setCookies] = useCookies(["token"]);
  const fetchStats = async () => {
    try {
      const res = await GetStatsAPI({ token: cookies.token });
      setStatsData(res);
    } catch (err) {
      toast(`something is wrong:${err.message}`);
      console.log(err);
    }
  };
  useEffect(() => {
    fetchStats();
  }, []);
  const data = [
    {
      color: "#1f77b4",
      label: "Full-job",
      data: !statsData?.fullTime
        ? [{ date: new Date(), jobs: 0 }]
        : statsData?.fullTime.map((item) => {
            if (item.length === 0) return [{ date: new Date(), jobs: 0 }];
            return {
              date: new Date(
                new Date().getFullYear(),
                Number(item[0]?.month) - 1,
                1
              ),
              jobs: item.length,
            };
          }),
    },
    {
      label: "Part-Job",
      data: !statsData?.partTime
        ? [{ date: new Date(), jobs: 0 }]
        : statsData?.partTime.map((item) => {
            if (item.length === 0) {
              return [{ date: new Date(), jobs: 0 }];
            } else {
              return {
                date: new Date(
                  new Date().getFullYear(),
                  Number(item[0]?.month) - 1,
                  1
                ),
                jobs: Number(item.length),
              };
            }
          }),
    },
    {
      label: "Intern",
      data: !statsData?.intern
        ? [{ date: new Date(), jobs: 0 }]
        : statsData?.intern.map((item) => {
            if (item.length === 0) {
              return [{ date: new Date(), jobs: 0 }];
            } else {
              return {
                date: new Date(
                  new Date().getFullYear(),
                  Number(item[0]?.month) - 1,
                  1
                ),
                jobs: Number(item.length),
              };
            }
          }),
    },
  ];
  const primaryAxis = React.useMemo(
    (): AxisOptions<MyDatum> => ({
      getValue: (datum) => datum.date,
    }),
    []
  );
  const secondaryAxes = React.useMemo(
    (): AxisOptions<MyDatum>[] => [
      {
        getValue: (datum) => datum.jobs,
      },
    ],
    []
  );
  return (
    <div>
      <div key={"test" + ""}>
        <h1>Stats</h1>
        <div style={{ height: 700, marginTop: 10 }}>
          <Chart
            options={{
              data,
              primaryAxis,
              secondaryAxes,
            }}
          />
        </div>
      </div>

      <div style={{ height: "50rem" }} />
    </div>
  );
};
