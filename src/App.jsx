import { useState } from "react";

function App() {
  const [amount, setAmount] = useState(0);
  const [months, setMonths] = useState(0);
  const [emi, setEmi] = useState(null);

  const calculateEmi = (e) => {
    e.preventDefault();
    const interestRate = 0.10;
    const monthlyRate = interestRate / 12;
    const emi = (amount * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
    setEmi(emi.toFixed(2));
  };

  return (
    <div>
      <form onSubmit={calculateEmi}>
        <div>
          <input
            type="number"
            min={10000}
            placeholder="Enter the amount here"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div>
          <h1>Interest rate is 10%</h1>
        </div>
        <div>
          <input
            type="number"
            max={360}
            placeholder="Enter the number of months here"
            value={months}
            onChange={(e) => setMonths(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">Calculate EMI per month</button>
        </div>
      </form>
      {emi && (
        <div>
          <h2>EMI per month: ₹{emi}</h2>
        </div>
      )}
    </div>
  );
}

export default App;
