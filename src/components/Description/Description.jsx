import description from "../../data/description.json";

export const Description = (props) => {
  const array = description[props.item];
  
  return (
    <section className="description">
      {array.map((presentation) => (
        <div key={presentation.id}>
          <h2>{presentation.title}</h2>
          <p>{presentation.content}</p>
        </div>
      ))}
    </section>
  );
};
