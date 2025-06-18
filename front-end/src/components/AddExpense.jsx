import { useState } from 'react'
import '../styles/AddExpense.css'

function AddExpense() {
  const today = new Date().toISOString().split('T')[0]
  const [expense, setExpense] = useState({
    amount: '',
    description: '',
    image: null
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Tạm thời log ra console, có thể gửi lên server sau
    const data = {
      expenseDate: today,
      amount: expense.amount,
      description: expense.description,
      image: expense.image
    }
    console.log('Expense data:', data)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setExpense(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleFileChange = (e) => {
    setExpense(prev => ({
      ...prev,
      image: e.target.files[0] || null
    }))
  }

  return (
    <div className="add-expense-container">
      <h1 className="add-expense-title">Add New Expense</h1>
      <form className="add-expense-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="expenseDate">Expense Date</label>
            <input
              type="date"
              id="expenseDate"
              name="expenseDate"
              value={today}
              readOnly
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="amount">Amount</label>
            <input
              type="text"
              id="amount"
              name="amount"
              value={expense.amount}
              onChange={handleChange}
              required
              className="form-input"
              placeholder="Enter amount"
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={expense.description}
            onChange={handleChange}
            required
            className="form-input"
            placeholder="Enter description"
            rows={3}
            style={{resize: 'vertical'}}
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Add Image</label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleFileChange}
            className="form-input"
          />
        </div>
        <button type="submit" className="add-expense-btn">Add Expense</button>
      </form>
    </div>
  )
}

export default AddExpense