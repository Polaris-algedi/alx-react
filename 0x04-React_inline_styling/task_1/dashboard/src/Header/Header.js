import React from "react";
import logo from "../assets/holberton-logo.png";
import { StyleSheet, css } from "aphrodite";

const Header = () => (
  <header className={css(styles.header)}>
    <img src={logo} className={css(styles.logo)} alt="Holberton School logo" />
    <h1 className={css(styles.heading)}>School dashboard</h1>
  </header>
);

const styles = StyleSheet.create({
  header: {
    display: "flex",
    alignItems: "center",
    borderBottom: "3px solid #E1345B",
    height: "250px",
    padding: "0 20px",
  },
  logo: {
    width: "200px",
    height: "200px",
  },
  heading: {
    color: "#E1345B",
    margin: 0,
  },
});

export default Header;
