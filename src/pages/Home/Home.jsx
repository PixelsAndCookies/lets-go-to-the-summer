import { Counter } from "../../components/Counter/Counter";
import { BreakingNews } from "../../components/BreakingNews/BreakingNews";
import { Cards } from "../../components/Cards/Cards";
import { Description } from "../../components/Description/Description";

export const Home = () => {
  return (
    <main>
      <BreakingNews />
      <div className="main-container">
        <h1>
          Souvenirs d&apos;été <br />
          <span>Les aventures fun-tastiques en famille</span>
        </h1>
        <Description />
        <Counter />
        <Cards />
      </div>
    </main>
  );
};
