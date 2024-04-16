import React from "react";
import PropTypes from "prop-types";
import CourseListRow from "./CourseListRow";
import { StyleSheet, css } from "aphrodite";

const CourseList = ({ courses }) => {
  const renderRows = () =>
    courses.map(({ id, name, credit }) => (
      <CourseListRow key={id} name={name} credit={credit} />
    ));

  return (
    <table id="CourseList" cellSpacing="0" className={css(styles.table)}>
      <thead>
        <CourseListRow textFirstCell="Available courses" isHeader />
        <CourseListRow
          textFirstCell="Course Name"
          textSecondCell="Credit"
          isHeader
        />
      </thead>
      <tbody>
        {courses.length ? (
          renderRows()
        ) : (
          <tr>
            <td colSpan="2" className={css(styles.cell)}>
              No course available yet
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

CourseList.propTypes = {
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      credit: PropTypes.number.isRequired,
    })
  ).isRequired,
};

const styles = StyleSheet.create({
  table: { width: "100%" },
  cell: { padding: "0.25rem", border: "1px solid lightgray" },
});

export default CourseList;
