import { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [expenses, setExpenses] = useState([]);

  function addExpense() {
    if (title.trim() === "" || amount === "") return;

    const newExpense = {
      id: Date.now(),
      title,
      amount: parseFloat(amount),
    };

    setExpenses([...expenses, newExpense]);
    setTitle("");
    setAmount("");
  }

  function deleteExpense(id) {
    setExpenses(expenses.filter((e) => e.id !== id));
  }

  return (
    <div className="wrapper">
      <div className="card glass">
        <h1 className="title">💸 Expense Tracker</h1>

        <div className="input-section">
          <input
            type="text"
            placeholder="Expense title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
            type="number"
            placeholder="Amount..."
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />

          <button onClick={addExpense}>Add Expense</button>
        </div>

        <ul className="expense-list">
          {expenses.map((exp) => (
            <li key={exp.id} className="expense-item">
              <span>
                <strong>{exp.title}</strong>  
                <p className="amount">₹{exp.amount}</p>
              </span>

              <button
                className="delete-btn"
                onClick={() => deleteExpense(exp.id)}
              >
                ✖
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
