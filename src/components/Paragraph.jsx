import { useState } from 'react'
import { FaCopy } from 'react-icons/fa'

const Paragraph = ({ text }) => {
    const [copy, setCopy] = useState(<FaCopy />)

    const onCopy = async value => {
        try {
            await navigator.clipboard.writeText(value)
            setCopy('Copied!')
            setTimeout(() => {
                setCopy(<FaCopy />)
            }, 2000)
        } catch (err) {
            setCopy('Failed to copy!')
        }
    }

    return (
        <div>
            <p className="p-tag md:text-[0.9rem]">
                {text}
            </p>
            <button className="btn" onClick={() => onCopy(text)}>
                {copy}
            </button>
        </div>
    )
}

export default Paragraph
