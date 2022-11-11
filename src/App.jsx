import { useContext } from 'react'
import Input from './components/Input'
import Context from './components/Context'
import Paragraph from './components/Paragraph'

const App = () => {
  const { texts } = useContext(Context)

  return (
    <main>
      <header>
        <h1 className="md:text-4xl">
          generate dummy texts
        </h1>
      </header>
      <Input />
      <section>
        {texts.length !== 0 ?
          <article className="paragraph">
            {texts.map((text, index) => (
              <Paragraph text={text} key={index} />
            ))}
          </article> :
          <article className="paragraph">
            <p className="p-tag md:text-[0.9rem]">
              No text.
            </p>
          </article>}
      </section>
    </main>
  )
}

export default App
