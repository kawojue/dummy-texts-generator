import data from '../data'
import { FaCopy } from 'react-icons/fa'
import { useRef, useState, useEffect, createContext } from 'react'

const Context = createContext({})

export const DataProvider = ({ children }) => {
    const input = useRef(0)
    const [texts, setTexts] = useState([])
    const [copy, setCopy] = useState(<FaCopy />)

    useEffect(() => {
        input.current.value = 0
    }, []) // becomes zero once the page reloads.

    const submit = (e) => {
        e.preventDefault()
        setTexts(data.slice(0, parseInt(input.current.value)))
    }

    const onCopy = async value => {
        try {
            await navigator.clipboard.writeText(value)
            setCopy("Copied!")
            setTimeout(() => {
                setCopy(<FaCopy />)
            }, 2000)
        } catch (err) {
            setCopy('Failed to copy!')
        }
    }

    return (
        <Context.Provider value={{
            onCopy, copy,
            submit, input, texts
        }}>
            {children}
        </Context.Provider>
    )
}

export default Context
