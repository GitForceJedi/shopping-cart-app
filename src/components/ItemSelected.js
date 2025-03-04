import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const ItemSelected = ({ onCheckout }) => {
  const { dispatch } = useContext(AppContext);

  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [action, setAction] = useState('');

  const submitEvent = () => {
    const item = {
      name: name,
      quantity: parseInt(quantity),
    };

    if (action === 'Reduce') {
      dispatch({
        type: 'RED_QUANTITY',
        payload: item,
      });
    } else {
      dispatch({
        type: 'ADD_QUANTITY',
        payload: item,
      });
    }
  };

  return (
    <div>
      <div className="row">
        <div className="input-group mb-3" style={{ marginLeft: '2rem' }}>
          <div className="input-group-prepend">
            <label className="input-group-text" htmlFor="inputGroupSelect01">
              Items
            </label>
          </div>
          <select
            className="custom-select"
            id="inputGroupSelect01"
            onChange={(event) => setName(event.target.value)}
          >
            <option defaultValue>Choose...</option>
            <option value="Shirt">Shirt</option>
            <option value="Dress">Dress</option>
            <option value="Jeans">Jeans</option>
            <option value="Dinner set">Dinner set</option>
            <option value="Bags">Bags</option>
          </select>

          <div className="input-group-prepend" style={{ marginLeft: '2rem' }}>
            <label className="input-group-text" htmlFor="inputGroupSelect02">
              Quantity
            </label>
          </div>
          <select
            className="custom-select"
            id="inputGroupSelect02"
            onChange={(event) => setAction(event.target.value)}
          >
            <option defaultValue value="Add">
              Add
            </option>
            <option value="Reduce">Reduce</option>
          </select>
          <span
            className="eco"
            style={{ marginLeft: '2rem', marginRight: '8px' }}
          ></span>

          <input
            required
            type="number"
            id="cost"
            value={quantity}
            style={{ size: 10 }}
            onChange={(event) => setQuantity(event.target.value)}
          />

          {/* Save Button */}
          <button
            className="btn btn-primary"
            onClick={submitEvent}
            style={{ marginLeft: '2rem' }}
          >
            Save
          </button>

          {/* Checkout Button */}
          <button
            className="btn btn-success"
            onClick={onCheckout}
            style={{ marginLeft: '1rem' }}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemSelected;
