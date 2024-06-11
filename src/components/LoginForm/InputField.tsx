import React from "react";
import styles from "../../styles/LoginForm.module.scss";
import { Form } from "react-bootstrap";

const InputField: React.FC<InputFieldProps> = ({
  label,
  type,
  value,
  error,
  onChange,
}) => {
  return (
    <>
      <label htmlFor={label}>{label}</label>
      <input
        type={type}
        className={`form-control ${error ? "is-invalid" : ""}`}
        id={label}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {error && (
        <div className={`invalid-feedback ${styles.error}`}>{error}</div>
      )}
    </>
  );
};

export default InputField;
