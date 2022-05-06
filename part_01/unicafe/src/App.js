import { useState } from 'react'

const Title = ({title}) => <h1>{title}</h1>
const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>
const Statistics = ({good, neutral, bad}) => {
  
  if(good === 0 && neutral === 0 && bad === 0) {
    return <p>No feedback given</p>
  }

  let total = good + neutral + bad
  let average = (good-bad)/total
  let positive = (good/total) * 100

  return (
    <table>
      <tbody>
        <StatisticsLine text='good' value={good} />
        <StatisticsLine text='neutral' value={neutral} />
        <StatisticsLine text='bad' value={bad} />
        <StatisticsLine text='all' value={total} />
        <StatisticsLine text='average' value={isNaN(average) ? 0 : average} />
        <StatisticsLine text='positive' value={isNaN(positive) ? 0 : positive+' %'} />
      </tbody> 
    </table>
  )
}
const StatisticsLine = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}
const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad ] = useState(0)

  return (
    <div>
      <Title title='give feedback' />
      <Button text='good' handleClick={() => setGood(good+1)} />
      <Button text='neutral' handleClick={() => setNeutral(neutral+1)} />
      <Button text='bad' handleClick={() => setBad(bad+1)} />
      <Title title='statistics' />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
}

export default App;
