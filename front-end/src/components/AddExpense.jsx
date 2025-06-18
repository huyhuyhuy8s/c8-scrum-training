import { useState, useEffect } from 'react'

function AddExpense({ onClose }) {
  const today = new Date().toISOString().split('T')[0]
  const [expense, setExpense] = useState({
    amount: '',
    description: '',
    image: null,
    expenseDate: today
  })

  // Handle Escape key to close modal
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && onClose) {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [onClose])
  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Validate amount
    const amount = parseFloat(expense.amount)
    if (!expense.amount || isNaN(amount) || amount <= 0) {
      alert('Please enter a valid amount greater than 0')
      return
    }
    
    // Validate description
    if (!expense.description.trim()) {
      alert('Please enter a description')
      return
    }

    // Validate date
    if (!expense.expenseDate) {
      alert('Please enter a valid date')
      return
    }
    
    // Process the expense data
    const data = {
      expenseDate: today,
      amount: amount,
      description: expense.description.trim(),
      image: expense.image
    }
    console.log('Expense data:', data)
    
    // Show success message
    alert('Expense added successfully!')
    
    // Reset form
    setExpense({
      amount: '',
      description: '',
      image: null,
      expenseDate: today
    })
    
    // Close modal if onClose function is provided
    if (onClose) {
      onClose()
    }
  }
  const handleChange = (e) => {
    const { name, value } = e.target
    
    // For amount field, only allow numeric input with decimals
    if (name === 'amount') {
      // Remove any non-numeric characters except decimal point
      const numericValue = value.replace(/[^0-9.]/g, '')
      // Ensure only one decimal point
      const parts = numericValue.split('.')
      const cleanValue = parts.length > 2 ? parts[0] + '.' + parts.slice(1).join('') : numericValue
      
      setExpense(prev => ({
        ...prev,
        [name]: cleanValue
      }))
    } else {
      setExpense(prev => ({
        ...prev,
        [name]: value
      }))
    }
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
          </div>          <div className="form-group">
            <label htmlFor="amount">Amount ($)</label>
            <input
              type="text"
              id="amount"
              name="amount"
              value={expense.amount}
              onChange={handleChange}
              required
              className="form-input"
              placeholder="0.00"
              pattern="[0-9]+(\.[0-9]{1,2})?"
              title="Please enter a valid amount (e.g., 10.50)"
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