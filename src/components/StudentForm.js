import React, { useState } from "react";

const style = {
  form: {
    borderLeft: "1px solid rgb(163, 163, 163)",
    paddingLeft: 30,
    margin: "auto",
  },
};

export default function StudentForm({ addStudent }) {
  let [name, setName] = useState("");
  let [phone, setPhone] = useState("");
  let [email, setEmail] = useState("");
  let [isPaid, setIsPaid] = useState(false);
  let [course, setCourse] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    let newStudent = {
      name,
      phone,
      email,
      course,
      isPaid,
    };
    addStudent(newStudent);
  }

  return (
    <div style={style.form}>
      <form className="form" onSubmit={handleSubmit}>
        <div className="field">
          <p className="control">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input"
              placeholder="Name"
            />
          </p>
        </div>
        <div className="field">
          <p className="control">
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="text"
              className="input"
              placeholder="Mobile"
            />
          </p>
        </div>
        <div className="field">
          <p className="control">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              className="input"
              placeholder="Email"
              required
            />
          </p>
        </div>
        <div className="field">
          <p className="control">
            <select
              className="select"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
            >
              <option value="HTML">HTML</option>
              <option value="CSS">CSS</option>
              <option value="JavaScript">JavaScript</option>
              <option value="React">React</option>
              <option value="Node JS">Node JS</option>
            </select>
          </p>
        </div>
        <div className="field">
          <div className="control">
            <label className="checkbox">
              <input
                onChange={(e) => setIsPaid(e.target.checked)}
                type="checkbox"
              />
              Fee paid
            </label>
          </div>
        </div>
        <p className="control">
          <button className="button is-success is-small">Add Student</button>
        </p>
      </form>
    </div>
  );
}
