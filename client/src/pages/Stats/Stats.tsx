import React, { useEffect, useState } from "react";
import { AxisOptions, Chart } from "react-charts";
import { GetStatsAPI } from "../../api/api";
import { toast } from "react-toastify";
import { useCookies } from "react-cookie";

type MyDatum = { date: Date; stars: number };
export const Stats = () => {
  const [statsData, setStatsData] = useState();
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
  useEffect(() => {
    console.log(statsData);
  }, [statsData]);
  const data = [
    {
      label: "Full-job",
      data: [
        {
          date: new Date(),
          stars: 299320,
        },
        {
          date: new Date().setDate(1),
          stars: 220,
        },
        {
          date: new Date().setDate(2),
          stars: 22320,
        },
        // ...etc
      ],
    },
    {
      label: "Part-Job",
      data: [
        {
          date: new Date(),
          stars: 9320,
        },
        {
          date: new Date().setDate(1),
          stars: 1220,
        },
        {
          date: new Date().setDate(2),
          stars: 25320,
        },
        // ...etc
      ],
    },
    {
      label: "Intern",
      data: [
        {
          date: new Date(),
          stars: 1111,
        },
        {
          date: new Date().setDate(1),
          stars: 22222,
        },
        {
          date: new Date().setDate(5),
          stars: 33333,
        },
        // ...etc
      ],
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
        getValue: (datum) => datum.stars,
      },
    ],
    []
  );
  return (
    <div>
      <div key={"test" + ""}>
        <h1>test</h1>
        <div style={{ height: 300, width: 300 }}>
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
