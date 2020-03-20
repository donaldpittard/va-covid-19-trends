import React from "react";
import "./App.css";
import CovidCasesLineChart from "./CovidCasesLineChart";
import CovidCalendar from "./CovidCalendar";
import Loadable from "./Loadable";
import useTotals from "./useTotals";

function App() {
  const totals = useTotals();

  return (
    <div className="App">
      <h1>COVID-19 in Virginia</h1>
      <Loadable predicate={() => totals.length === 0}>
        <h2>Total Cases</h2>
        <CovidCasesLineChart data={totals} />
        <h2>New Cases</h2>
        <CovidCalendar data={totals} />
      </Loadable>
    </div>
  );
}

export default App;
