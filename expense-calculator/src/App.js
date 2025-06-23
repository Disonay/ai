import React, { useState } from 'react';
import './App.css';
import ExpenseTable from './ExpenseTable';
import Results from './Results';

function App() {
  const [expenses, setExpenses] = useState([
    { category: 'Groceries', amount: '15000' },
    { category: 'Rent', amount: '40000' },
    { category: 'Transportation', amount: '5000' },
    { category: 'Entertainment', amount: '10000' },
    { category: 'Communication', amount: '2000' },
    { category: 'Gym', amount: '3000' },
  ]);
  const [results, setResults] = useState(null);

  const calculate = () => {
    const parsedExpenses = expenses
      .map(e => ({ ...e, amount: Number(e.amount) || 0 }))
      .filter(e => e.category && e.amount > 0);
    const total = parsedExpenses.reduce((sum, e) => sum + e.amount, 0);
    const average = Math.round(total / 30);
    const top3 = [...parsedExpenses]
      .sort((a, b) => b.amount - a.amount)
      .slice(0, 3);
    setResults({ total, average, top3 });
  };

  return (
    <div className="App" style={{ maxWidth: 600, margin: '2rem auto', padding: '2rem', background: '#fff', borderRadius: 8, boxShadow: '0 2px 8px #eee' }}>
      <h1>Expense Calculator</h1>
      <ExpenseTable expenses={expenses} setExpenses={setExpenses} />
      <button onClick={calculate} style={{ marginTop: '1rem', padding: '0.5rem 1.5rem', fontSize: '1rem' }}>Calculate</button>
      {results && <Results total={results.total} average={results.average} top3={results.top3} />}
    </div>
  );
}

export default App;
