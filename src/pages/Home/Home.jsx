import { Counter } from '../../components/Counter/Counter'
import { Description } from '../../components/Description/Description'
import { FlashBanner } from '../../components/FlashBanner/FlashBanneer'

export const Home = () => {
    return (
        <main>
            <FlashBanner />
            <h1>
                Souvenirs d&apos;été <br /><span>Les aventures fun-tastiques en famille</span>
            </h1>
            <Description />
            <Counter />
        </main>
    )
}
