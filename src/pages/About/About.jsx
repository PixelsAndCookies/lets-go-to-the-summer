import { Logo } from '../../components/Logo/Logo';

export const About = () => {
    return (
        <>
            <header className="home-header">
                <Logo />
            </header>
            <main className='main-container'>
                <article className="description">
                    <h2>A propos</h2>
                    <p>
                        Quelques petites informations concernant ce site.
                        <br></br>
                        Ce site est crée par la famille, pour la famille ! Par
                        ailleurs, tout ce qui s'y trouve est protégé et n'est en
                        aucun cas divulgué sur la toile. Afin de préserver notre
                        intimité et continuer à partager nos souvenirs et nos
                        annecdotes en toute confiance.
                    </p>
                </article>
            </main>
        </>
    );
};
