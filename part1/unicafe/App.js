import { useState } from "react" 

const Header = (props) => {
  return(
    <div>
      <h1>
        {props.header}
      </h1>
    </div>
  )
}

const Button = (props) => {
  return(
    <>
      <button onClick = {props.onClick}> {props.text}</button>
    </>
  )
}

const Statistic = (props) => {
  return(
    <div>
      {props.name} {props.statistic}
    </div>
  )
}

const App = () => {
  const [ good, setGood ] = useState(0)
  const [ bad, setBad ] = useState(0)
  const [ neutral, setNeutral ] = useState(0)



  const handleGood = () => setGood(good + 1)
  const handleBad = () => setBad(bad + 1)
  const handleNeutral = () => setNeutral(neutral + 1)

  const total = (good + bad + neutral)
  const positive = (good/total)
  const average = (good-bad)/total

  return(
    <div>
      <Header header = 'give feedback'/>
      <Button onClick = {handleGood} text = 'good'/>
      <Button onClick = {handleBad} text = 'bad'/>
      <Button onClick = {handleNeutral} text = 'Neutral'/>
      <Header header = 'statistics'/>
      <Statistic statistic = {good} name = 'good'/>
      <Statistic statistic = {neutral} name = 'neutral'/>
      <Statistic statistic = {bad} name = 'bad'/>
      <Statistic statistic = {total} name = 'all'/>
      <Statistic statistic = {positive} name = 'positive'/>
      <Statistic statistic = {average} name = 'average'/>

      
    </div>
  )
}

export default App

