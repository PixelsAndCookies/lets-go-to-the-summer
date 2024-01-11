import { Header } from '../../components/Header/Header';

export const About = () => {
    return (
        <>
            <Header />
            <main className="main-container">
                <article className="description otherPages">
                    <h2>À propos</h2>
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
