import data from './data'
import Input from './components/Input'
import Paragraphs from './components/Paragraphs'
import { useRef, useState, useEffect } from 'react'

const App = () => {
  const input = useRef(0)
  const [texts, setTexts] = useState([])

  useEffect(() => {
    input.current.value = 0;
  }, []) // becomes zero once the page reloads.

  const submit = (e) => {
    e.preventDefault()
    setTexts(data.slice(0, parseInt(input.current.value)))
  }

  return (
    <main>
      <header>
        <h1 className="md:text-4xl">generate dummy texts</h1>
      </header>
      <Input submit={submit} input={input} />
      <Paragraphs texts={texts} />
    </main>
  )
}

export default App
