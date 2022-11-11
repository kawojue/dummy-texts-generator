import data from '../data'
import { useRef, useState, useEffect, createContext } from 'react'

const Context = createContext({})

export const DataProvider = ({ children }) => {
    const input = useRef(0)
    const [texts, setTexts] = useState([])

    useEffect(() => {
        input.current.value = 0
    }, []) // becomes zero once the page reloads.

    const submit = (e) => {
        e.preventDefault()
        setTexts(data.slice(0, parseInt(input.current.value)))
    }

    return (
        <Context.Provider value={{
            submit, input, texts
        }}>
            {children}
        </Context.Provider>
    )
}

export default Context