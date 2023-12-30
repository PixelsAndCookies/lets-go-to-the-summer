import { Logo } from '../../components/Logo/Logo';
import { Counter } from '../../components/Counter/Counter';
import { BreakingNews } from '../../components/BreakingNews/BreakingNews';
import { Cards } from '../../components/Cards/Cards';
import { Description } from '../../components/Description/Description';

export const Home = () => {
    return (
        <>
            <div className="red-cercle rotating_1"></div>
            <svg
                className="blue-triangle rotating_2"
                width="797"
                height="838"
                viewBox="0 0 797 838"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M99.6363 832.288C47.4015 853.376 -7.72616 809.016 1.69682 753.479L119.299 60.3521C128.495 6.15103 192.591 -18.1632 235.422 16.3015L769.73 446.24C812.561 480.705 802.525 548.518 751.547 569.099L99.6363 832.288Z"
                    fill="url(#paint0_linear_220_37)"
                />
                <defs>
                    <linearGradient
                        id="paint0_linear_220_37"
                        x1="244.994"
                        y1="767.729"
                        x2="439.159"
                        y2="200.293"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#0996A5" />
                        <stop offset="1" stopColor="#D9D9D9" stopOpacity="0" />
                    </linearGradient>
                </defs>
            </svg>

            <header className="home-header">
                <Logo />
            </header>
            <BreakingNews />
            <main className="home-main">
                <div className="main-container">
                    <p>
                        Souvenirs d&apos;été <br />
                        <span>Les aventures fun-tastiques en famille</span>
                    </p>
                    <Description content="presentation" />
                    <Counter />
                    <Cards />
                    <Description content="informations" />
                </div>
            </main>
        </>
    );
};
