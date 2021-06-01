import React from 'react'


const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 20,
        id:4
      }
    ]
  }

  return <Course course={course} />
}
const Course = ({course}) =>{
  console.log(course);
  console.log(course.parts);
    return (
      <div>
      <Header course={course.name} />
      <Content p={course.parts} />
      <Total c={course.parts} />
    </div>  

    )
}
const Header = (p) => {
console.log(p.course)
  return(
    <h1>{p.course}</h1>
  )
}
const Content = ({p}) =>{
  console.log(p);
  return (
    <div>
      <ul>
        {p.map(part => 
          <Part key={part.id} part={part} />
        )}
      </ul>
    </div>
  )
}
const Part =({part}) =>{
  return(
    <p>{part.name}{part.exercises}</p>
  )
}
const Total =({c})=>{
  return(
    <p>   {'Total Exercises'} `{c[0].exercises+c[1].exercises+c[2].exercises+c[3].exercises}</p>
  )

}

export default App;
