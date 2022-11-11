const Paragraphs = ({ texts }) => {
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
