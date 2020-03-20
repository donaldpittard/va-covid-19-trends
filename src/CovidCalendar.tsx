import React from "react";
import { ResponsiveCalendar, CalendarDatum } from "@nivo/calendar";
import CaseData from "./CaseData";

interface CovidCalendarProps {
  data: CaseData[];
}

function pad(val: number): string {
  return val < 10 ? `0${val}` : val.toString();
}

export default function CovidCalendar({ data, ...props }: CovidCalendarProps) {
  const newCases: CalendarDatum[] = data.map(c => {
    const caseDate = new Date(c.date);
    const year = caseDate.getFullYear();
    const month = pad(caseDate.getMonth() + 1);
    const day = pad(caseDate.getDate());

    return {
      day: `${year}-${month}-${day}`,
      value: c.newCases
    };
  });

  const firstDay = newCases[0].day;
  const lastDay = newCases[newCases.length - 1].day;

  return (
    <ResponsiveCalendar
      data={newCases}
      from={firstDay}
      to={lastDay}
      emptyColor="#eeeeee"
      colors={["#61cdbb", "#97e3d5", "#e8c1a0", "#f47560"]}
      margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
      yearSpacing={40}
      monthBorderColor="#ffffff"
      dayBorderWidth={2}
      dayBorderColor="#ffffff"
      legends={[
        {
          anchor: "bottom-right",
          direction: "row",
          translateY: 36,
          itemCount: 4,
          itemWidth: 42,
          itemHeight: 36,
          itemsSpacing: 14,
          itemDirection: "right-to-left"
        }
      ]}
    />
  );
}
