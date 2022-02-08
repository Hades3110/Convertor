import './convertor.css';
import { useState } from "react";
import { splitInput } from './function'

const Convertor = () => {
    const [value, setValue] = useState<number>(0)
    const [numText, setNumText] = useState<string>('')

    const convert = () => {
        if (value < 1000000) {
            setNumText(splitInput(value))
        } else {
            setNumText('error')
        }
    }

    return (
        <section>
            <input id="input" type="text" onChange={(event) => setValue(+event.target.value)} placeholder="Type something" />
            <button id="button" onClick={convert}>Print Input</button>
            <h2 id="output">{numText}</h2>
        </section>
    )
}

export default Convertor;