import React from "react";
import "./App.css";
import CovidChart from "./CovidChart";
import Loadable from "./Loadable";
import useTotals from "./useTotals";

function App() {
  const totals = useTotals();

  return (
    <div className="App">
      <h1>COVID-19 Trends in Virginia</h1>
      <Loadable predicate={() => totals.length === 0}>
        <CovidChart totals={totals} />
      </Loadable>
    </div>
  );
}

export default App;
