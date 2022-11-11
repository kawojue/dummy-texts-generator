import texts from './data'
import { useRef, useEffect } from 'react'
import Input from './components/Input'

const App = () => {
  const input = useRef(0)

  useEffect(() => {
    input.current.value = 0;
  }, []) // zero once the page reloads.

  return (
    <main>
      <header>
        <h1>generate dummy texts</h1>
      </header>
      <Input texts={texts} input={input} />
    </main>
  )
}

export default App
