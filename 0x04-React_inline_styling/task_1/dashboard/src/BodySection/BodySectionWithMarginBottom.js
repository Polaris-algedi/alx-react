import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

import BodySection from "./BodySection";

const BodySectionWithMarginBottom = ({ title, children, ...rest }) => (
  <div className={css(styles.margin)}>
    <BodySection title={title} {...rest}>
      {children}
    </BodySection>
  </div>
);

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

BodySectionWithMarginBottom.defaultProps = {
  title: "",
  children: null,
};

const styles = StyleSheet.create({
  margin: {
    marginBottom: "40px",
  },
});

export default BodySectionWithMarginBottom;
