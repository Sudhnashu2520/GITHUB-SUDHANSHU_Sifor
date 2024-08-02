import React, { useState } from 'react';

const DivideIntegers = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleDivision = () => {
    try {
      const number1 = parseInt(num1);
      const number2 = parseInt(num2);

      if (isNaN(number1) || isNaN(number2)) {
        setError('Please enter valid integers.');
        return;
      }

      if (number2 === 0) {
        throw new Error('Division by zero is not allowed.');
      }

      const divisionResult = number1 / number2;
      setResult(divisionResult);
      setError('');
    } catch (err) {
      setError(err.message);
      setResult(null);
    }
  };

  return (
    <div>
      <h1>Divide Two Integers</h1>
      <div>
        <label>
          Number 1:
          <input
            type="text"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Number 2:
          <input
            type="text"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
          />
        </label>
      </div>
      <button onClick={handleDivision}>Divide</button>
      {result !== null && (
        <div>
          <h2>Result: {result}</h2>
        </div>
      )}
      {error && (
        <div style={{ color: 'red' }}>
          <h2>Error: {error}</h2>
        </div>
      )}
    </div>
  );
};

export default DivideIntegers;
