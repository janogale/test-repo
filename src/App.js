import React, { useState, useEffect } from "react";

// student Table
import StudentTable from "./components/StudentsTable";

//students fomr
import StudentForm from "./components/StudentForm";

// student data
import students from "./data/students";

// styles
import s from "./app.module.css";

function App() {
  const [toggleForm, setToggleForm] = useState(true);
  const [studentData, setStudents] = useState(students);

  const AddNewStudent = (newStudent) => {
    // Assign Id to new Student
    newStudent = { ...newStudent, id: studentData.length + 101 };

    setStudents([...studentData, newStudent]);
  };

  // delete

  const deleteStudent = (id) => {
    let filteredStudent = studentData.filter((s) => s.id != id);

    setStudents(filteredStudent);
  };

  useEffect(
    function effect() {
      document.title = toggleForm ? "Adding Student" : "Reading Data";
    },
    [toggleForm]
  );

  return (
    <>
      <div className={s.app}>
        <div>
          <h1 id="title" className="title is-3">
            Student List
          </h1>
          <span
            className="is-size-5 has-text-light has-text-centered link"
            onClick={() => setToggleForm(!toggleForm)}
          >
            <span className="has-text-weight-bold has-text-link is-size-4">
              {" "}
              +{" "}
            </span>
            New Student
          </span>
        </div>
        <hr />
        <div className="flex">
          <StudentTable deleteStudent={deleteStudent} students={studentData} />
          {toggleForm ? (
            <StudentForm addStudent={AddNewStudent} />
          ) : (
            <h3 className="subtitle has-text-success">
              List of Enrolled Students in React JS Class
            </h3>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
