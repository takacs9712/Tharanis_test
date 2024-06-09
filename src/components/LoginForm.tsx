import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/LoginForm.module.scss";
import { validateEmail, validatePassword } from "../utils/Validation";
import LoginInfoModal from "../UI/Modal";
import { BsQuestionCircle } from "react-icons/bs";
import {
  email as defaultEmail,
  password as defaultPassword,
} from "../utils/Constants";
import { useAuth } from "../auth/AuthContext";

const LoginForm: React.FC = () => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {}
  );
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");
    if (storedEmail && storedPassword) {
      setEmailValue(storedEmail);
      setPasswordValue(storedPassword);
    }
  }, []);

  const validate = (): boolean => {
    const errors: { email?: string; password?: string } = {};
    let isValid = true;

    const emailError = validateEmail(emailValue);
    if (emailError) {
      errors.email = emailError;
      isValid = false;
    }

    const passwordError = validatePassword(passwordValue);
    if (passwordError) {
      errors.password = passwordError;
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      if (emailValue === defaultEmail && passwordValue === defaultPassword) {
        login({ name: "TEST" });
        localStorage.setItem("email", emailValue);
        localStorage.setItem("password", passwordValue);
        navigate("/inbox");
      } else {
        alert("Hibás email vagy jelszó");
      }
    }
  };

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleFillCredentials = () => {
    setEmailValue(defaultEmail);
    setPasswordValue(defaultPassword);
  };

  return (
    <section className={styles.section}>
      <div className={styles["login-container"]}>
        <form onSubmit={handleSubmit}>
          <div className={`form-group ${styles["form-group"]}`}>
            <label htmlFor="email">Email cím</label>
            <input
              type="email"
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              id="email"
              value={emailValue}
              onChange={(e) => setEmailValue(e.target.value)}
            />
            {errors.email && (
              <div className={`invalid-feedback ${styles.error}`}>
                {errors.email}
              </div>
            )}
          </div>
          <div className={`form-group ${styles["form-group"]}`}>
            <label htmlFor="password">Jelszó</label>
            <input
              type="password"
              className={`form-control ${errors.password ? "is-invalid" : ""}`}
              id="password"
              value={passwordValue}
              onChange={(e) => setPasswordValue(e.target.value)}
            />
            {errors.password && (
              <div className={`invalid-feedback ${styles.error}`}>
                {errors.password}
              </div>
            )}
          </div>
          <div className={styles["button-group"]}>
            <button type="submit" className="btn btn-primary">
              Bejelentkezés
            </button>
            <button
              type="button"
              className={`btn btn-question ${styles["question-icon"]}`}
              onClick={handleShowModal}
            >
              <BsQuestionCircle />
            </button>
          </div>
        </form>

        <LoginInfoModal
          show={showModal}
          onHide={handleCloseModal}
          fillCredentials={handleFillCredentials}
        />
      </div>
    </section>
  );
};

export default LoginForm;
