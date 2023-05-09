import { useState } from "react";

function Button() {
    const [count, setCount] = useState(0);

    function addOne() {
        setCount(count + 1);
    }

    function restOne() {
        setCount(count - 1);
    }
    return (
        <div>
            <button disabled={count >= 10} onClick={addOne}>
                +
            </button>
            <h3>{count}</h3>
            <button disabled={count <= 0} onClick={restOne}>
                -
            </button>
        </div>
    );
}

export default Button;
