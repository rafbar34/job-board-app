import React from "react";
import { AxisOptions, Chart } from "react-charts";

export const Stats = () => {
  const data = [
    {
      label: "Series 1",
      data: [
        {
          primary: "2022-02-03T00:00:00.000Z",
          likes: 130,
        },
        {
          primary: "2022-03-03T00:00:00.000Z",
          likes: 150,
        },
      ],
    },
    {
      label: "Series 2",
      data: [
        {
          primary: "2022-04-03T00:00:00.000Z",
          likes: 200,
        },
        {
          primary: "2022-05-03T00:00:00.000Z",
          likes: 250,
        },
      ],
    },
  ];
  const primaryAxis = React.useMemo(
    () => ({
      getValue: (datum: { primary: string }) => datum.primary,
    }),
    []
  );
  const secondaryAxes = React.useMemo(
    () => [
      {
        getValue: (datum: { likes: number }) => datum.likes,
        elementType: "area",
      },
    ],
    []
  );
  return (
    <div>
      <div key={"test" + ""}>
        <h1>test</h1>
        <div style={{height:300, width:300}}>
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
