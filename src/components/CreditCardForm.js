import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import './CreditCardForm.css'; // Import external CSS

const CreditCardForm = () => {
  const { expenses, Location } = useContext(AppContext);
  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.unitprice * item.quantity);
  }, 0);

  const [formData, setFormData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardholderName: '',
    address: '',
    city: '',
    state: '',
    zip: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Data:', formData);
  };

  return (
    <div className="credit-container">
      <div className="credit-form-box">
        <h2 className="credit-title">Enter Payment Details</h2>

        {/* Total Cart Value Section */}
        <div className="credit-cart-total">
          <span>
            Cart Value: {Location}
            {totalExpenses}
          </span>
        </div>

        <form onSubmit={handleSubmit} className="credit-form">
          <label className="credit-label">
            Cardholder Name
            <input
              type="text"
              name="cardholderName"
              value={formData.cardholderName}
              onChange={handleChange}
              placeholder="John Doe"
              required
              className="credit-input"
            />
          </label>

          <label className="credit-label">
            Card Number
            <input
              type="text"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              placeholder="1234 5678 9012 3456"
              maxLength={19}
              required
              className="credit-input"
            />
          </label>

          <div className="credit-row">
            <label className="credit-label">
              Expiry Date
              <input
                type="text"
                name="expiryDate"
                value={formData.expiryDate}
                onChange={handleChange}
                placeholder="MM/YY"
                maxLength={5}
                required
                className="credit-input"
              />
            </label>

            <label className="credit-label">
              CVV
              <input
                type="text"
                name="cvv"
                value={formData.cvv}
                onChange={handleChange}
                placeholder="123"
                maxLength={4}
                required
                className="credit-input"
              />
            </label>
          </div>

          {/* Address Section */}
          <h3 className="credit-subtitle">Billing Address</h3>

          <label className="credit-label">
            Address
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="123 Main St"
              required
              className="credit-input"
            />
          </label>

          <label className="credit-label">
            City
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="New York"
              required
              className="credit-input"
            />
          </label>

          <div className="credit-row">
            <label className="credit-label">
              State
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                placeholder="NY"
                required
                className="credit-input"
              />
            </label>

            <label className="credit-label">
              ZIP Code
              <input
                type="text"
                name="zip"
                value={formData.zip}
                onChange={handleChange}
                placeholder="10001"
                required
                className="credit-input"
              />
            </label>
          </div>

          <button type="submit" className="credit-submit-btn">
            Submit Payment
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreditCardForm;
