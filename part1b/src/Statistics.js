const Statistics = ({good, neutral, bad, handleClick}) => {

    const totalFeedback = () => good + neutral + bad
    const average = () => (good + bad * -1) / totalFeedback()
    const positive = () => 100 * (good / totalFeedback() / 100)

    return (
        <>
            <h1>give feedback</h1>
            <button onClick={() => handleClick("good")}>good</button>
            <button onClick={() => handleClick("neutral")}>neutral</button>
            <button onClick={() => handleClick("bad")}>bad</button>
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