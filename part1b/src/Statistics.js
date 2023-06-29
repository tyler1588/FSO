import StatisticLine from "./StatisticLine"

const Statistics = ({good, neutral, bad}) => {

    const totalFeedback = () => good + neutral + bad
    const average = () => (good + bad * -1) / totalFeedback()
    const positive = () => 100 * (good / totalFeedback() / 100)

    return (totalFeedback() === 0 ? <p>No feedback given</p> :
        <>
                <h1>statistics</h1>
                <StatisticLine text="good" value={good}></StatisticLine>
                <StatisticLine text="neutral" value={neutral}></StatisticLine>
                <StatisticLine text="bad" value={bad}></StatisticLine>
                <StatisticLine text="all" value={totalFeedback()}></StatisticLine>
                <StatisticLine text="average" value={average()}></StatisticLine>
                <StatisticLine text="positive" value={positive()}></StatisticLine>
        </>
    )
}

export default Statistics