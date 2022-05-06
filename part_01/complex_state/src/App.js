import { useState } from "react"

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }

  return (
    <div>
      button press  history: {props.allClicks.join(' ')}
    </div>
  ) 
}

const Button = ({handleClicks, text}) => {
  return(
    <button onClick={handleClicks}>{text}</button>
  )
}

const App = () => {
  const [ left, setLeft ] = useState(0)
  const [ right, setRight ] = useState(0)
  const [ allClicks, setAllClicks ] = useState([])

  const handleLeftClicks = () => {
    setAllClicks(allClicks.concat('L'))
    setLeft(left +1)
  }

  const handleRightClicks = () => {
    setAllClicks(allClicks.concat('R'))
    setRight(right + 1)
  }

  return (
    <div>
      {left}
      <Button handleClicks={handleLeftClicks} text={'left'} />
      <Button handleClicks={handleRightClicks} text={'right'} />
      {right}
      <History allClicks={allClicks} />
    </div>
  )
}

export default App