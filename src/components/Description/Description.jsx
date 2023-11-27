import description from "../../data/description.json";

export const Description = (props) => {

  const item = description[props.item];
  return (
    <section>
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.content}</p>
        </div>
    </section>
  );
};
