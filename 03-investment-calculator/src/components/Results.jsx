import { calculateInvestmentResults, formatter } from "../util/investment.js";

export default function Results({ userInputs }) {
  const results = calculateInvestmentResults(userInputs);
  const initialInvestment =
    results[0].valueEndOfYear -
    results[0].interest -
    results[0].annualInvestment;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Value)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {results.map((result) => {
          const totalInterestValue =
            result.valueEndOfYear -
            result.annualInvestment * result.year -
            initialInvestment;

          const totalAmountInvestment =
            result.valueEndOfYear - totalInterestValue;

          return (
            <tr key={result.year}>
              <td>{result.year}</td>
              <td>{formatter.format(result.valueEndOfYear)}</td>
              <td>{formatter.format(result.interest)}</td>
              <td>{formatter.format(totalInterestValue)}</td>
              <td>{formatter.format(totalAmountInvestment)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
