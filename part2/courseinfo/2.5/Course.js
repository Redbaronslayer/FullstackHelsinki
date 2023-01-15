const Header = ({ course }) => <h1>{course}</h1>
const Total = ({ sum }) => <b>Number of exercises {sum}</b>


const Content = ({ name, exercises }) => {
  return(
    <p>{name} {exercises}</p>
  )
}

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course.name}/>
      <>
        {course.parts.map(part=> 
          <Content key={part.id} name={part.name} exercises={part.exercises}/>
          )}
      </>
      <Total sum = {course.parts.reduce((sum, part) => sum + part.exercises, 0)}/>
    </div>
  )
}


export default Course
