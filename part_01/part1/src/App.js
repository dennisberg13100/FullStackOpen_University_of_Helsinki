const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old!</p>
    </div>
  )
}

const App = () => {
  return (
    <div>
        <h1>Greetings</h1>
        <Hello name="Dennis" age="31"/>
        <Hello name="Laura" age={31-5}/>
        <Hello name="Logan" age={1.5*7}/>
    </div>
  )
}
export default App;
