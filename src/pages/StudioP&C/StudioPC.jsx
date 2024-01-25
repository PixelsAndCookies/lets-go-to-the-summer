export const StudioPC = () => {
    return (
        <>
            <main className="main-container">
                <article className="description otherPages">
                    <h2>Pixels & Cookies</h2>
                    <p>Et voici les 3 membres du studio qui ont créé ce site.</p>

                    <div className="figure-container">
                        <figure>
                            <a href="https://github.com/mroulland" title="Lien pour vous rendre sur le Github de Morgane Roulland">
                                <img src="/pictures/mo.jpg" alt="photo de Morgane Roulland" loading="lazy" />
                                <figcaption>Morgane</figcaption>
                            </a>
                        </figure>
                        <figure>
                            <a href="https://github.com/LaurineRoulland" title="Lien pour vous rendre sur le Github de Laurine Roulland">
                            <img src="/pictures/lau.jpg" alt="photo de Laurine Roulland" loading="lazy" />
                            <figcaption>Laurine</figcaption>
                            </a>
                        </figure>
                        <figure>
                            <a href="https://github.com/AxelPrt73" title="Lien pour vous rendre sur le Github d'Axel Perret">
                            <img src="/pictures/ax.jpg" alt="photo d'Axel Perret" loading="lazy" />
                            <figcaption>Axel</figcaption>
                            </a>
                        </figure>
                    </div>
                </article>
            </main>
        </>
    )
}
