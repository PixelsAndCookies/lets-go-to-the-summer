import { Counter } from '../../components/Counter/Counter'
import { Description } from '../../components/Description/Description'
import { BreakingNews } from '../../components/BreakingNews/BreakingNews'
import { Cards } from '../../components/Cards/Cards'

export const Home = () => {
    return (
        <main>
            <BreakingNews />
            <h1>
                Souvenirs d&apos;été <br /><span>Les aventures fun-tastiques en famille</span>
            </h1>
            <Description />
            <Counter />
            <Cards />
        </main>
    )
}
