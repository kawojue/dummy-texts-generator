const Input = ({ input }) => {

    const submit = (e) => {
        e.preventDefault()
        console.log(input.current.value)
    }

    return (
        <form onSubmit={(e) => submit(e)}>
            <input type="number" ref={input} min={0} max={9} />
            <button className="btn">generate</button>
        </form>
    )
}

export default Input