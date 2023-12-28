import { Link } from 'react-router-dom';

export const Error404 = () => {
    return (
        <>
            <main className="main-error home-header">
                <section className="section-error">
                    <h2>Oupsi ?</h2>
                    <p>
                        La page que vous recherchez n&apos;est actuellement pas
                        disponible.
                    </p>
                    <button className="btn btn-return">
                        <Link to={'/'}>
                            <p>Retour</p>
                        </Link>
                    </button>
                </section>
            </main>
        </>
    );
};
