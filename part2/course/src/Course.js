import React from "react";
const Content = props => {
  //console.log(props)
  return props.courses.map(a => (
    <div key={a.id}>
      <p style={{ fontWeight: "bold", marginBottom: "-20px" }}>{a.name} </p>
      <br />
      {a.parts.map(b => (
        <p key={b.id}>
          {b.name} {b.exercises} <br />
        </p>
      ))}
      <p style={{ fontWeight: "bold" }}>{`total of ${a.parts.reduce(
        (a, b) => a + b.exercises,
        0
      )} exercises`}</p>
    </div>
  ));
};

const Course = ({ courses }) => {
  return (
    <div>
      <h1>Web development curriculum</h1>
      <Content courses={courses} />
    </div>
  );
};

export default Course;
