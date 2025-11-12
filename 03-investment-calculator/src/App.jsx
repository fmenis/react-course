import { useState } from "react";

import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Result from "./components/Result.jsx";

import { calculateInvestmentResults } from "./util/investment.js";

const initialValues = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
};

const initialResults = calculateInvestmentResults(initialValues);
console.log(initialResults);

function App() {
  const [results, setResults] = useState(initialResults);

  function handleChangeValue({ label, value }) {
    console.log(label);
    console.log(value);

    let values = { ...initialValues };

    if (label === "initial investment") {
      values = {
        ...values,
        initialInvestment: value,
      };
    }

    if (label === "annual investment") {
      values = {
        ...values,
        annualInvestment: value,
      };
    }

    if (label === "expected return") {
      values = {
        ...values,
        expectedReturn: value,
      };
    }

    if (label === "initial investment") {
      values = {
        ...values,
        duration: value,
      };
    }

    setResults((prevResults) => {
      const results = calculateInvestmentResults(initialValues);
      console.log(results);
      return results;
    });
  }

  return (
    <>
      <Header />
      <main>
        <section id="user-input">
          <ul>
            <UserInput
              label="initial investment"
              initialValue={initialValues.initialInvestment}
              onChangeValue={handleChangeValue}
            />
            <UserInput
              label="annual investment"
              initialValue={initialValues.annualInvestment}
              onChangeValue={handleChangeValue}
            />
            <UserInput
              label="expected return"
              initialValue={initialValues.expectedReturn}
              onChangeValue={handleChangeValue}
            />
            <UserInput
              label="duration"
              initialValue={initialValues.duration}
              onChangeValue={handleChangeValue}
            />
          </ul>
        </section>

        <section id="result">
          <Result />
        </section>
      </main>
    </>
  );
}

export default App;
