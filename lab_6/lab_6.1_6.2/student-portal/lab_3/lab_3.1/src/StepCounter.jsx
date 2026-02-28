import React, {useState} from "react"

function StepCounter({ initialValue = 0, step = 1}) {
    const [count, setCount] = useState (initialValue);
    const [history, setHistory] = useState ([]);
    const [operationCount, setOperationCount] = useState(0);

    function heandleIncrement() {
        const newCount = count + step;
        setCount (newCount);
        setHistory((prev) => [... prev, newCount]);
        setOperationCount((prev) => prev + 1)
    }
    
    function heandleDecrement() {
        const newCount = count - step;
        setCount (newCount);
        setHistory((prev) => [... prev, newCount]);
        setOperationCount((prev) => prev + 1)
    }

    function heandleReset() {
        setCount (initialValue);
        setHistory([]);
        setOperationCount(0)
    }

    const lastFive = history.slice(-5)

    return(
        <div style={{border: "1px solid #ccc", padding: 12, marginBottom: 12}}>
            <h3>step Counter</h3>
            <p>Current count: <b>{count}</b></p>
            <p>Total operation: <b>{operationCount}</b></p>

            <p><b>Last Value:</b> {lastFive.length ? lastFive.join(", ") : "-"}</p>

            <button onClick={heandleIncrement}>Increment</button>
            <button onClick={heandleDecrement}>Decrement</button>
            <button onClick={heandleReset}>Reset</button>

        </div>
    )
}

export default StepCounter;
