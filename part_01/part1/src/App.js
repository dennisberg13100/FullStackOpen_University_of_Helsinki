const Hello = ({name, age}) => {

  const bornYear = () => new Date().getFullYear() - age

  return (
    <div>
      <p>Hello {name}, you are {age} years old!</p>
      <p>So you probebly born in {bornYear()}</p>
    </div>
  )
}

const App = () => {
  const name = 'Peter'
  const age = 10

  return (
    <div>
        <h1>Greetings</h1>
        <Hello name="Dennis" age="31"/>
        <Hello name="Laura" age={31-5}/>
        <Hello name={name} age={age}/>
    </div>
  )
}
export default App;
