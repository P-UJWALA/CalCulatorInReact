import React, { useState } from "react"
import "./Calculator.css"

function App(){
  const [display, setDisplay] = useState("0")
  const [previousValue, setPreviousValue] = useState(null)
  const [operation, setOperation] = useState(null)
  const [newNumberFlag, setNewNumberFlag] = useState(false)

  const handleNumberClick = (num) => {
    if (newNumberFlag) {
      setDisplay(String(num))
      setNewNumberFlag(false)
    } else {
      setDisplay(display === "0" ? String(num) : display + num)
    }
  }

  const handleDecimal = () => {
    if (!display.includes(".")) {
      setDisplay(display + ".")
    }
    setNewNumberFlag(false)
  }

  const handleOperation = (op) => {
    const currentValue = parseFloat(display)

    if (previousValue === null) {
      setPreviousValue(currentValue)
    } else if (operation) {
      const result = calculate(previousValue, currentValue, operation)
      setDisplay(String(result))
      setPreviousValue(result)
    }

    setOperation(op)
    setNewNumberFlag(true)
  }

  const calculate = (prev, current, op) => {
    switch (op) {
      case "+":
        return prev + current
      case "-":
        return prev - current
      case "*":
        return prev * current
      case "/":
        return current !== 0 ? prev / current : 0
      default:
        return current
    }
  }

  const handleEquals = () => {
    if (operation && previousValue !== null) {
      const result = calculate(previousValue, parseFloat(display), operation)
      setDisplay(String(result))
      setPreviousValue(null)
      setOperation(null)
      setNewNumberFlag(true)
    }
  }

  const handleClear = () => {
    setDisplay("0")
    setPreviousValue(null)
    setOperation(null)
    setNewNumberFlag(false)
  }

  const handleBackspace = () => {
    if (display.length > 1) {
      setDisplay(display.slice(0, -1))
    } else {
      setDisplay("0")
    }
  }

  return (
    <div className="calculator-container">
      <div className="calculator">
        <h1>Calculator</h1>
        <div className="display">{display}</div>
        
        <div className="button-grid">
          <button className="btn clear" onClick={handleClear}>C</button>
          <button className="btn back" onClick={handleBackspace}>←</button>
          <button className="btn operator" onClick={() => handleOperation("/")}>/</button>
          <button className="btn operator" onClick={() => handleOperation("*")}>*</button>

          <button className="btn" onClick={() => handleNumberClick(7)}>7</button>
          <button className="btn" onClick={() => handleNumberClick(8)}>8</button>
          <button className="btn" onClick={() => handleNumberClick(9)}>9</button>
          <button className="btn operator" onClick={() => handleOperation("-")}>-</button>

          <button className="btn" onClick={() => handleNumberClick(4)}>4</button>
          <button className="btn" onClick={() => handleNumberClick(5)}>5</button>
          <button className="btn" onClick={() => handleNumberClick(6)}>6</button>
          <button className="btn operator" onClick={() => handleOperation("+")}>+</button>

          <button className="btn" onClick={() => handleNumberClick(1)}>1</button>
          <button className="btn" onClick={() => handleNumberClick(2)}>2</button>
          <button className="btn" onClick={() => handleNumberClick(3)}>3</button>
          <button className="btn equals" onClick={handleEquals}>=</button>

          <button className="btn zero" onClick={() => handleNumberClick(0)}>0</button>
          <button className="btn" onClick={handleDecimal}>.</button>
        </div>
      </div>
    </div>
  )
}

export default App

