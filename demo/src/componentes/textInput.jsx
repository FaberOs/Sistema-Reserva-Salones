import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../hojas-de-estilo/textInput-styles.css';

function TextInput({ id, type, placeholder, value, onChange, required }) {
  return (
    <div className="form-group">
      <input
        type={type}
        className="form-control"
        id={id}
        value={value}
        onChange={onChange}
        required={required}
      />
      <label>{placeholder}</label>
    </div>
  );
}

export default TextInput;
