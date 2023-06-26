const Statistics = ({good, neutral, bad}) => {

    const totalFeedback = () => good + neutral + bad
    const average = () => (good + bad * -1) / totalFeedback()
    const positive = () => 100 * (good / totalFeedback() / 100)

    return (totalFeedback() === 0 ? <p>No feedback given</p> :
        <>
                <h1>statistics</h1>
                <p>good {good}</p>
                <p>neutral {neutral}</p>
                <p>bad {bad}</p>
                <p>all {totalFeedback()}</p>
                <p>average {average()}</p>
                <p>positive {positive()}</p>
        </>
    )
}

export default Statistics