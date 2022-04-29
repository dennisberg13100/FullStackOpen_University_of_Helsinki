const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  ) 
}

const Content = (props) => {
  let parts = (props.parts)

  return parts.map((part, index) => <p key={index}>{part.name}: {part.exercises}</p>)
}

const Total = (props) => {
  let total = 0
  let parts = (props.parts)
  
  parts.forEach(part =>{
    total += part.exercises
  })

  return (
    <p>Number of exercises: {total}</p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [{
      name: 'Fundamentals of React',
      exercises: 10,
    },
    {
      name: 'Using props to pass data',
      exercises: 7,
    },
    {
      name: 'State of a component',
      exercises: 14,
    }]
  }
 
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts}/>
      <Total parts={course.parts} />
    </div>
  );
}

export default App;