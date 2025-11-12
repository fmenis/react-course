import { useState } from "react";

import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Results from "./components/Results.jsx";

function App() {
  const [userInputs, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(inputId, newValue) {
    setUserInput((prevUserInputs) => {
      return {
        ...prevUserInputs,
        [inputId]: Number(newValue),
      };
    });
  }

  const isValidInput = userInputs.duration > 0;

  return (
    <>
      <Header />
      <UserInput userInputs={userInputs} onChangeInput={handleChange} />
      {isValidInput ? (
        <Results userInputs={userInputs} />
      ) : (
        <p className="center">Please enter a duration greater than zero.</p>
      )}
    </>
  );
}

export default App;
