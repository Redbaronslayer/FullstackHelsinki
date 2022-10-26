
import { Component } from "react"

const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Content = (props) => {
  const [part1, part2, part3] = props.parts
  console.log (props.parts)
  return(
    <>
      <Part part = {part1.name} exercises = {part1.exercises}/>
      <Part part = {part2.name} exercises = {part2.exercises}/>
      <Part part = {part3.name} exercises = {part3.exercises}/>
    </>

  )
}

const Part = (props) => {
  return(
    <>
      <p>{props.part} {props.exercises}</p>
    </>
  )
}

const Total = (props) => {
  const [part1, part2, part3] = props.parts
  console.log(props.parts)
  return(
    <>
      <p>{part1.exercises + part2.exercises + part3.exercises}</p>
    </>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [{
      name: 'Fundamentals of React',
      parts: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 10
    },
    {
      name: 'State of a Component',
      exercises: 14
    }]

  }
  return(
    <div>
      <Header course = {course.name}/>
      <Content parts = {course.parts}/>
      <Total parts = {course.parts}/>
    </div>
  )
}

export default App

