import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  row: { backgroundColor: "#f5f5f5ab" },
  headerRow: { backgroundColor: "#deb5b545" },
  cell: { textAlign: "left" },
  headerCell: { fontSize: "18px" },
});

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  const tableItemStyle = css(
    isHeader ? [styles.cell, styles.headerCell] : styles.cell
  );

  const rowStyle = css(isHeader ? styles.headerRow : styles.row);

  const cells = [
    <td key={1} className={tableItemStyle}>
      {textFirstCell}
    </td>,
  ];

  if (textSecondCell !== null) {
    cells.push(
      <td key={2} className={tableItemStyle}>
        {textSecondCell}
      </td>
    );
  }

  return (
    <tr className={rowStyle}>
      {isHeader && textSecondCell === null ? (
        <th colSpan="2" className={css([styles.cell, styles.headerCell])}>
          {textFirstCell}
        </th>
      ) : (
        cells
      )}
    </tr>
  );
}

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default CourseListRow;
