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
  const total = (props.stats.good + props.stats.bad + props.stats.neutral)
  const positive = (props.stats.good/total)
  const average = (props.stats.good-props.stats.bad)/total
  if (total === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
  return(
    <>
      <StatisticLine text = "good" value ={props.stats.good}/>
      <StatisticLine text = "bad" value = {props.stats.bad}/>
      <StatisticLine text = "neutral" value = {props.stats.neutral}/>
      <StatisticLine text = "all" value = {total}/>
      <StatisticLine text = "positive" value = {positive}/>
      <StatisticLine text = "average" value = {average}/>
    </>
  )
}

const StatisticLine = (props) => {
  return(
    <tr>
      <td>{props.text}</td> 
      <td>{props.value}</td>
    </tr>
  )
}

const App = () => {
  const [ clicks, setClicks ] = useState({ good: 0, bad: 0, neutral: 0})



  const handleGood = () => setClicks({ ...clicks, good: clicks.good + 1})
  const handleBad = () => setClicks({ ...clicks, bad: clicks.bad + 1})
  const handleNeutral = () => setClicks({ ...clicks, neutral: clicks.neutral + 1})



  return(
    <div>
      <Header header = 'give feedback'/>
      <Button onClick = {handleGood} text = 'good'/>
      <Button onClick = {handleBad} text = 'bad'/>
      <Button onClick = {handleNeutral} text = 'Neutral'/>
      <Header header = 'statistics'/>
      <Statistic stats = {clicks}/>
    </div>
  )
}

export default App

