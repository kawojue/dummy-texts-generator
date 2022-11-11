const Input = ({ input, submit }) => {
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