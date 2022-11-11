import Context from './Context'
import { useContext } from 'react'

const Input = () => {
    const { input, submit } = useContext(Context)

    return (
        <form onSubmit={(e) => submit(e)}>
            <div>
                <label htmlFor="size">paragraphs: </label>
                <input type="number" ref={input} min={0} max={9} autoFocus id="size" />
            </div>
            <button className="btn">generate</button>
        </form>
    )
}

export default Input