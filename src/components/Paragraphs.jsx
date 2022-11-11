import Context from './Context'
import { useContext } from 'react'

const Paragraphs = () => {
    const { texts } = useContext(Context)

    return (
        <section>
            <article>
                {texts.map((text, index) => (
                    <p className="p-tag" key={index}>
                        {text}
                    </p>
                ))}
            </article>
        </section>
    )
}

export default Paragraphs
