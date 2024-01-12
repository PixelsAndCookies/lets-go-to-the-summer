import { Header } from '../../components/Header/Header';

export const StudioPC = () => {
    return (
        <>
            <Header />
            <main className="main-container">
                <article className="description otherPages">
                    <h2 >Pixels & Cookies</h2>
                    <p>
                        Et voici les 3 membres du studio qui ont créé ce site.
                    </p>

                    <div className="figure-container">
                        <figure>
                            <img
                                src="/pictures/mo.jpg"
                                alt="photo de Morgane"
                                loading="lazy"
                            />
                            <figcaption>Morgane</figcaption>
                        </figure>
                        <figure>
                            <img
                                src="/pictures/lau.jpg"
                                alt="photo de Laurine"
                                loading="lazy"
                            />
                            <figcaption>Laurine</figcaption>
                        </figure>
                        <figure>
                            <img
                                src="/pictures/ax.jpg"
                                alt="photo de Axel"
                                loading="lazy"
                            />
                            <figcaption>Axel</figcaption>
                        </figure>
                    </div>
                </article>
            </main>
        </>
    );
};
