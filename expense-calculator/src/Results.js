import React from 'react';

function Results({ total, average, top3 }) {
  const rowStyle = {
    display: 'grid',
    gridTemplateColumns: '32px 1fr 100px',
    alignItems: 'center',
    marginBottom: '1rem',
    gap: '0.5rem',
  };
  const top3ItemStyle = {
    ...rowStyle,
    marginBottom: 10,
    padding: '0.5rem 0.75rem',
    background: '#f0f4fa',
    borderRadius: '6px',
  };
  const labelStyle = {
    fontWeight: 600,
    gridColumn: 2,
    textAlign: 'left',
  };
  return (
    <div style={{
      marginTop: '2rem',
      background: '#f8fafc',
      borderRadius: '10px',
      boxShadow: '0 2px 12px #e0e7ef',
      padding: '2rem',
      maxWidth: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
      border: '1px solid #e3e8ee',
    }}>
      <h2 style={{
        textAlign: 'center',
        color: '#1976d2',
        marginBottom: '1.5rem',
        letterSpacing: '1px',
      }}>Results</h2>
      <div style={{ ...rowStyle, marginBottom: '1rem' }}>
        <span style={{ fontSize: '1.5rem', gridColumn: 1 }}>💰</span>
        <span style={labelStyle}>Total Expenses:</span>
        <span style={{ fontWeight: 700, color: '#1976d2', gridColumn: 3, textAlign: 'right' }}>${total.toLocaleString()}</span>
      </div>
      <div style={{ ...rowStyle, marginBottom: '1.5rem' }}>
        <span style={{ fontSize: '1.5rem', gridColumn: 1 }}>📅</span>
        <span style={labelStyle}>Average Daily Expense:</span>
        <span style={{ fontWeight: 700, color: '#388e3c', gridColumn: 3, textAlign: 'right' }}>${average.toLocaleString()}</span>
      </div>
      <h3 style={{ color: '#333', marginBottom: '0.5rem', fontSize: '1.1rem' }}>Top 3 Expenses</h3>
      <ol style={{ paddingLeft: 0, margin: 0, listStyle: 'none' }}>
        {top3.map((item, idx) => (
          <li key={idx} style={top3ItemStyle}>
            <span style={{ fontSize: '1.2rem', gridColumn: 1 }}>{['🥇','🥈','🥉'][idx]}</span>
            <span style={{ gridColumn: 2, minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', textAlign: 'left' }}>{item.category}</span>
            <span style={{ color: '#1976d2', fontWeight: 600, gridColumn: 3, textAlign: 'right' }}>${item.amount.toLocaleString()}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Results; 