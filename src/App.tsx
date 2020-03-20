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
      <h1>COVID-19 Trends in Virginia</h1>
      <Loadable predicate={() => totals.length === 0}>
        <CovidCasesLineChart data={totals} />
        <CovidCalendar data={totals} />
      </Loadable>
    </div>
  );
}

export default App;
