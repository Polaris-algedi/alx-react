import React from "react";
import { StyleSheet, css } from "aphrodite";

const Login = () => {
  return (
    <div className={css(styles.container)}>
      <p className={css(styles.message)}>Log in to access the full dashboard</p>
      <label htmlFor="email" className={css(styles.label)}>
        Email:
      </label>
      <input type="email" id="email" />

      <label htmlFor="password" className={css(styles.label)}>
        Password:
      </label>
      <input type="password" id="password" />

      <button className={css(styles.button)}>OK</button>
    </div>
  );
};

Login.displayName = "Login";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  message: {
    marginBottom: "1rem",
  },
  label: {
    padding: "1rem",
    paddingLeft: 0,
    marginBottom: "1rem",
  },
  button: {
    margin: "1rem",
  },
});

export default Login;
