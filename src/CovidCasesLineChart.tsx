import React from "react";
import { ResponsiveLine, PointTooltip } from "@nivo/line";
import CaseData from "./CaseData";

interface CovidCasesLineChartProps {
  data: CaseData[];
}

const tooltip: PointTooltip = ({ point }) => {
  const pointSerie = point.serieId;
  const pointData = point.data;

  return (
    <div style={{ backgroundColor: "#FFFFFF", padding: "5px" }}>
      <span className="bold">{pointData.x}</span>: {pointData.y} {pointSerie}
    </div>
  );
};

export default function CovidCasesLineChart({
  data,
  ...props
}: CovidCasesLineChartProps) {
  const totalCases = data.map((d: CaseData) => {
    return { x: d.date, y: d.totalCases };
  });
  const deaths = data.map((d: CaseData) => {
    return { x: d.date, y: d.deaths };
  });

  const newCases = data.map((d: CaseData) => {
    return { x: d.date, y: d.newCases };
  });

  return (
    <ResponsiveLine
      data={[
        {
          id: "Total Cases",
          color: "hsl(242,52,71)",
          data: totalCases
        },
        {
          id: "New Cases",
          color: "hsl(49, 70%, 50%)",
          data: newCases
        },
        {
          id: "Deaths",
          color: "hsl(29, 70%, 50%)",
          data: deaths
        }
      ]}
      tooltip={tooltip}
      colors={["#9390dc", "#98d3ae", "#eb5e44"]}
      curve={"monotoneX"}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: false,
        reverse: false
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        orient: "bottom",
        tickSize: 10,
        tickValues: [totalCases[0].x, totalCases[totalCases.length - 1].x],
        tickPadding: 5,
        tickRotation: 0,
        legend: "Date",
        legendOffset: 36,
        legendPosition: "middle"
      }}
      axisLeft={{
        orient: "left",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Number of Cases",
        legendOffset: -40,
        legendPosition: "middle"
      }}
      pointSize={10}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabel="y"
      pointLabelYOffset={-12}
      enableArea={true}
      enablePoints={false}
      useMesh={true}
      legends={[
        {
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: "left-to-right",
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: "circle",
          symbolBorderColor: "rgba(0, 0, 0, .5)",
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 0, .03)",
                itemOpacity: 1
              }
            }
          ]
        }
      ]}
    />
  );
}
