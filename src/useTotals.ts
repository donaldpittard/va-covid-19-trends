import { useState, useEffect } from "react";

export default function useTotals() {
  const [totals, setTotals] = useState([]);

  useEffect(() => {
    fetch(
      "https://spreadsheets.google.com/feeds/list/1jAktSWzVGtzTBaFns_i9hZRg-80yM8rRZRLCoRqtp4o/1/public/values?alt=json"
    )
      .then(res => res.json())
      .then(res => {
        setTotals(
          res.feed.entry.map((entry: any, index: number, entries: []) => {
            const totalCases = parseInt(entry["gsx$cases"]["$t"]);
            const newCases =
              index === 0
                ? totalCases
                : totalCases - entries[index - 1]["gsx$cases"]["$t"];
            return {
              Date: entry["gsx$date"]["$t"],
              Cases: totalCases,
              "New Cases": newCases,
              Deaths: parseInt(entry["gsx$deaths"]["$t"])
            };
          })
        );
      });
  }, []);

  return [...totals];
}
