import Context from './Context'
import { useContext } from 'react'

const Paragraphs = () => {
    const { texts } = useContext(Context)

    return (
        <section>
            {texts.length !== 0 ?
                <article className="paragraph">
                    {texts.map((text, index) => (
                        <p className="p-tag md:text-[0.9rem]" key={index}>
                            {text}
                        </p>
                    ))}
                </article> :
                <article className="paragraph">
                    <p className="p-tag md:text-[0.9rem]">
                        No text.
                    </p>
                </article>}
        </section>
    )
}

export default Paragraphs
