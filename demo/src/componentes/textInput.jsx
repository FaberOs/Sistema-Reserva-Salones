import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function TextInput({ id, type, placeholder, value, onChange, required }) {
  return (
    <div className="form-group mb-3">
      <input
        type={type}
        className="form-control"
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
}

export default TextInput;
