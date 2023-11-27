import React from "react";
import { AxisOptions, Chart } from "react-charts";
import { GetStatsAPI } from "../../api/api";
import { useCookies } from "react-cookie";
import { useQuery } from "react-query";

type MyDatum = { date: Date; jobs: number };
export const Stats = () => {
  const [cookies] = useCookies(["token"]);
  const { data: statsData, isLoading } = useQuery({
    queryKey: ["singleJob"],
    queryFn: () =>
      GetStatsAPI({ token: cookies.token }).then((x) => {
        return x;
      }),
  });
console.log(statsData)
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
   if (isLoading) return;
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
