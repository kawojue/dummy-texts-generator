import Context from './Context'
import { useContext } from 'react'

const Input = () => {
    const { texts, input, submit, onCopy, copy } = useContext(Context)

    return (
        <form onSubmit={(e) => submit(e)}>
            <div>
                <label htmlFor="size">paragraphs: </label>
                <input type="number" ref={input} min={0} max={9} autoFocus id="size" />
            </div>
            <button className="btn">generate</button>
            <button className="btn" onClick={() => onCopy(texts.join(''))}>
                {copy}
            </button>
        </form>
    )
}

export default Input