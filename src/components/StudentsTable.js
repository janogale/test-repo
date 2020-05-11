import React from "react";

import style from "./table.module.css";

function StudentsTable({ students, deleteStudent }) {
  if (!students.length) {
    return null;
  }

  return (
    <div className={style.table}>
      <table className="table">
        <TableHeader />
        <TableBody students={students} deleteStudent={deleteStudent} />
      </table>
    </div>
  );
}

export default StudentsTable;

function TableHeader() {
  return (
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Mobile</th>
        <th>Email</th>
        <th>Course</th>
        <th>Fee</th>
        <th>Action</th>
      </tr>
    </thead>
  );
}

function TableBody({ students, deleteStudent }) {
  return (
    <tbody>
      {students.map((student) => {
        return (
          <tr
            key={student.id}
            className={student.isPaid ? "" : "has-background-warning"}
          >
            <td>{student.id}</td>
            <td>{student.name}</td>
            <td>{student.phone}</td>
            <td>{student.email}</td>
            <td>{student.course}</td>
            <td>{student.isPaid ? "Paid" : "Not Paid"}</td>
            <td>
              <span
                onClick={() => deleteStudent(student.id)}
                className="delete"
              >
                Delete
              </span>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
}
