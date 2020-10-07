import React from "react";

function Input(props) {
  const { name, label, type, placeholder, onChange } = props;
  return (
    <div>
      {label && <p>{label}</p>}
      <input
        name={name}
        label={label}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}

export default Input;
