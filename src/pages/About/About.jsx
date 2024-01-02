import { Logo } from '../../components/Logo/Logo';

export const About = () => {
    return (
        <>
            <header className="home-header">
                <Logo />
            </header>
            <main className="main-container">
                <article className="description otherElement">
                    <h2>A propos</h2>
                    <p style={{ lineHeight: 1.3 }}>
                        Quelques petites informations concernant ce site.
                        <br></br>
                        Ce site est crée par la famille, pour la famille ! Par
                        ailleurs, tout ce qui s&apos;y trouve est protégé et
                        n&apos;est en aucun cas divulgué sur la toile. Afin de
                        préserver notre intimité et continuer à partager nos
                        souvenirs et nos annecdotes en toute confiance.
                    </p>
                </article>
            </main>
        </>
    );
};
