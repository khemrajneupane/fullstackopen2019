import React from "react";

//Ex 2.1 Course Contents step6
/*const Header = props => {
  return <h1>{props.course.name}</h1>;
};
const Part = props => (
  <p>
    {props.part.name} {props.part.exercises}
  </p>
);
const Content = props => {
  return props.parts.map(part => <Part part={part} key={part.id} />);
};

const Course = ({ course }) => {
  const { parts } = course;

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
    </div>
  );
};

export default Course;
*/

/** Ex 2.2 Course Contents step7 && Ex 2.3* Course Contents step8 */
/*const Header = props => {
  return <h1>{props.course.name}</h1>;
};
const Part = props => (
  <p>
    {props.part.name} {props.part.exercises}
  </p>
);
const Content = props => {
  return props.parts.map(part => <Part part={part} key={part.id} />);
};
*/

/**  Ex 2.2 Course Contents step7 */
/*const Total = ({ parts }) => {
  let total = 0;
  for (var i = 0; i < parts.length - 1; i++) {
    total += parts[i].exercises;
  }
  return <strong>total of {total} exercises</strong>;
};
*/

/** Ex 2.3* Course Contents step8 */
/*const Total = props => (
  <strong>
    total of {props.parts.reduce((s, p) => s + p.exercises, 0)} exercises
  </strong>
);


const Course = ({ course }) => {
  const { parts } = course;

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
};

export default Course;
*/
/**Ex 2.4 Course Contents step9 is done in another computer*/
const Header = props => {
  return props.courses.map(s => s.name);
};

const Total = props => {
  //console.log(props);
  //return props.courses.map(s => s.parts.reduce((p, a) => p + a.exercises, 0));
  /**if needed to show all total together */
  const myarr = [];
  props.courses.map(a => a.parts.map(d => myarr.push(d.exercises)));
  return (
    <strong>total of {myarr.reduce((a, b) => a + b, 0)} exercises </strong>
  );
};

const Course = ({ courses }) => {
  return (
    <div>
      <h1>Web development curriculum</h1>
      <Header courses={courses} />
      <Total courses={courses} />
    </div>
  );
};
export default Course;
