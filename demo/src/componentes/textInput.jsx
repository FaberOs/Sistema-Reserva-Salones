import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function TextInput({ placeholder, id, required }) {
  return (
    <div className="form-group mb-3 d-flex justify-content-center align-items-center">
      <input type="text" placeholder={placeholder} className="form-control border-custom" id={id} required={required} />
    </div>
  );
}

export default TextInput;
