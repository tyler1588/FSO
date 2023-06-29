import { useState } from 'react'
import Statistics from './Statistics'
import Button from './Button'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  

  const handleClick = (type) => {
    if (type === "good") setGood(good + 1)
    else if (type === "neutral") setNeutral(neutral + 1)
    else setBad(bad + 1)
  }


  return (
    <>
      <h1>give feedback</h1>
      <Button name="good" handleClick={handleClick}></Button>
      <Button name="neutral" handleClick={handleClick}></Button>
      <Button name="bad" handleClick={handleClick}></Button>
      <Statistics good={good} neutral={neutral} bad={bad} handleClick={handleClick}/>
    </>
    
  )
}

export default App