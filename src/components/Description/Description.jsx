import description from '../../data/description.json'

export const Description = () => {
    return (
        <>
            {description.map((text, id) => {
                return (
                    <div key={id}>
                        <p>{text.content}</p>
                    </div>
                )
            })}
        </>
    )
}
