import { Logo } from '../../components/Logo/Logo';

export const Licences = () => {
    return (
        <>
            <header className="home-header">
                <Logo />
            </header>
            <main className="main-container">
                <article className="description otherPages">
                    <h2>Licences</h2>

                    <div className="otherPages__element border">
                        <h3>Emoticons</h3>
                        <p>Designer : Freepik </p>
                        <p>https://www.freepik.com/</p>
                    </div>

                    <div className="otherPages__element border">
                        <h3>Emojis</h3>
                        <p>Designer : Morgane Roulland </p>
                        <p>Application : Avatoon</p>
                    </div>

                    <div className="otherPages__element border">
                        <h3>Photographies et vidéos</h3>
                        <p>
                            Les photos et vidéos des membres des familles
                            Pargaud, Roulland, Belletre et Perret sont
                            strictement réservées à un usage privé et non
                            commercial. Tous les droits sont réservés aux
                            auteurs et/ou sujets des dites photos/vidéos.
                        </p>
                        <p>
                            Toutes autres photos et images sont libres de droit
                            (source : Pexels et Canva)
                        </p>
                    </div>

                    <div className="otherPages__element no-border">
                        <h3>Polices</h3>
                        <aside>
                            <p>Designer : Ilham Herry</p>
                            <p>Font : Genty</p>
                            <p> https://dribbble.com/Ilhamherry</p>
                        </aside>
                        <aside>
                            <p>Designer : Gabriel Lam, ViệtAnh Nguyễn </p>
                            <p>Font : Darker Grotesque</p>
                            <p>https://github.com/bettergui/DarkerGrotesque</p>
                        </aside>
                        <aside>
                            <p>Designer : Hendra Pratama</p>
                            <p>Font : Bukhary Script</p>
                            <p>
                                https://www.creativefabrica.com/designer/mikrojihad-typefounder/ref/2081/
                            </p>
                        </aside>
                    </div>
                </article>
            </main>
        </>
    );
};
