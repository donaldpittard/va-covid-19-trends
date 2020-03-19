import React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";

interface CovidChartProps {
  totals: object[];
}

export default function CovidChart({ totals }: CovidChartProps) {
  return (
    <AreaChart
      width={730}
      height={250}
      data={totals}
      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
    >
      <defs>
        <linearGradient id="colorCases" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
        </linearGradient>
        <linearGradient id="colorNewCases" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
        </linearGradient>
        <linearGradient id="colorDeaths" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#ff6347" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#ff6347" stopOpacity={0} />
        </linearGradient>
      </defs>
      <XAxis dataKey="Date" />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Area
        type="monotone"
        dataKey="Cases"
        stroke="#8884d8"
        fillOpacity={1}
        fill="url(#colorCases)"
      />
      <Area
        type="monotone"
        dataKey="New Cases"
        stroke="#82ca9d"
        fillOpacity={1}
        fill="url(#colorNewCases)"
      />
      <Area
        type="monotone"
        dataKey="Deaths"
        stroke="#ff6347"
        fillOpacity={1}
        fill="url(#colorDeaths)"
      />
    </AreaChart>
  );
}
