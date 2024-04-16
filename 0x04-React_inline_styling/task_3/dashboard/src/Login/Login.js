import React from "react";
import { StyleSheet, css } from "aphrodite";

const Login = () => {
  return (
    <form className={css(styles.form)}>
      <p className={css(styles.message)}>Log in to access the full dashboard</p>

      <div className={css(styles.inputGroup)}>
        <label htmlFor="email" className={css(styles.label)}>
          Email:
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className={css(styles.input)}
        />
      </div>

      <div className={css(styles.inputGroup)}>
        <label htmlFor="password" className={css(styles.label)}>
          Password:
        </label>
        <input
          type="password"
          name="password"
          id="password"
          className={css(styles.input)}
        />
      </div>

      <button className={css(styles.button)}>OK</button>
    </form>
  );
};

Login.displayName = "Login";

const styles = StyleSheet.create({
  message: {
    marginBottom: "1rem",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "1rem",
  },
  label: {
    marginBottom: "0.25rem",
  },
  input: {
    padding: "0.5rem",
    marginBottom: "0.5rem",
  },
  button: {
    marginTop: "1rem",
    padding: "0.5rem 1rem",
  },
});

export default Login;
