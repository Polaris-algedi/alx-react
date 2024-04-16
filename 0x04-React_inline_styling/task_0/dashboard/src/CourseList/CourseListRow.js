import React from "react";
import PropTypes from "prop-types";

const rowStyle = { backgroundColor: "#f5f5f5ab" };
const headerRowStyle = { backgroundColor: "#deb5b545" };

function CourseListRow({ isHeader, firstCellText, secondCellText }) {
  let rowElement;

  if (isHeader) {
    if (secondCellText === null) {
      rowElement = <th colSpan="2">{firstCellText}</th>;
    } else {
      rowElement = (
        <>
          <th>{firstCellText}</th>
          <th>{secondCellText}</th>
        </>
      );
    }
  } else {
    rowElement = (
      <>
        <td>{firstCellText}</td>
        <td>{secondCellText}</td>
      </>
    );
  }

  let rowStyleToUse = isHeader ? headerRowStyle : rowStyle;

  return <tr style={rowStyleToUse}>{rowElement}</tr>;
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  firstCellText: PropTypes.string.isRequired,
  secondCellText: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
  isHeader: false,
  secondCellText: null,
};

export default CourseListRow;
