import description from "../../data/description.json";

export const Description = () => {
  return (
    <section>
      {description.map((presentation) => (
        <div key={presentation.id}>
          <h2>{presentation.title}</h2>
          <p>{presentation.content}</p>
        </div>
      ))}
    </section>
  );
};
