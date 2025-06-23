import React from 'react';

function ExpenseTable({ expenses, setExpenses }) {
  const handleChange = (index, field, value) => {
    const newExpenses = [...expenses];
    newExpenses[index][field] = value;
    setExpenses(newExpenses);
  };

  const addRow = () => {
    setExpenses([...expenses, { category: '', amount: '' }]);
  };

  const removeRow = (index) => {
    const newExpenses = expenses.filter((_, i) => i !== index);
    setExpenses(newExpenses);
  };

  return (
    <div style={{
      background: '#f8fafc',
      borderRadius: 10,
      boxShadow: '0 2px 12px #e0e7ef',
      padding: '1.5rem',
      marginBottom: '2rem',
      border: '1px solid #e3e8ee',
      maxWidth: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    }}>
      <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: 0, borderRadius: 8, overflow: 'hidden', background: '#fff', boxShadow: '0 1px 4px #f0f0f0' }}>
        <thead>
          <tr style={{ background: '#e3e8ee' }}>
            <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: 700, color: '#1976d2', borderTopLeftRadius: 8 }}>Category</th>
            <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: 700, color: '#1976d2' }}>Amount ($)</th>
            <th style={{ padding: '0.75rem', borderTopRightRadius: 8 }}></th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense, idx) => (
            <tr key={idx} style={{ background: idx % 2 === 0 ? '#f8fafc' : '#fff', transition: 'background 0.2s' }}>
              <td style={{ padding: '0.6rem' }}>
                <input
                  type="text"
                  value={expense.category}
                  onChange={e => handleChange(idx, 'category', e.target.value)}
                  placeholder="Category"
                  style={{
                    padding: '0.4rem',
                    border: '1px solid #ccc',
                    borderRadius: 4,
                    width: '100%',
                    boxSizing: 'border-box',
                    background: '#f4f8fb',
                  }}
                />
              </td>
              <td style={{ padding: '0.6rem' }}>
                <input
                  type="number"
                  value={expense.amount}
                  onChange={e => handleChange(idx, 'amount', e.target.value)}
                  placeholder="Amount"
                  min="0"
                  style={{
                    padding: '0.4rem',
                    border: '1px solid #ccc',
                    borderRadius: 4,
                    width: '100%',
                    boxSizing: 'border-box',
                    background: '#f4f8fb',
                  }}
                />
              </td>
              <td style={{ padding: '0.6rem', textAlign: 'center' }}>
                <button
                  onClick={() => removeRow(idx)}
                  disabled={expenses.length === 1}
                  style={{
                    background: expenses.length === 1 ? '#ccc' : '#e57373',
                    color: '#fff',
                    border: 'none',
                    borderRadius: 4,
                    padding: '0.3rem 0.8rem',
                    cursor: expenses.length === 1 ? 'not-allowed' : 'pointer',
                    fontWeight: 600,
                    fontSize: '1rem',
                    transition: 'background 0.2s',
                  }}
                  title="Remove row"
                >
                  ✕
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        onClick={addRow}
        style={{
          marginTop: '1rem',
          background: '#1976d2',
          color: '#fff',
          border: 'none',
          borderRadius: 4,
          padding: '0.5rem 1.5rem',
          fontSize: '1rem',
          fontWeight: 600,
          cursor: 'pointer',
          boxShadow: '0 1px 4px #e0e7ef',
          transition: 'background 0.2s',
        }}
      >
        + Add Expense
      </button>
    </div>
  );
}

export default ExpenseTable; 