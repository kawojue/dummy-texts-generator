import Input from './components/Input'
import Paragraphs from './components/Paragraphs'

const App = () => {
  return (
    <main>
      <header>
        <h1 className="md:text-4xl">generate dummy texts</h1>
      </header>
      <Input />
      <Paragraphs />
    </main>
  )
}

export default App
