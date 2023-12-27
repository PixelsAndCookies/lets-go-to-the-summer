import { Link } from 'react-router-dom';

export const Error404 = () => {
    return (
        <>
            <main className="main-error home-header">
                <section className="section-error">
                    <h3>Oupsi ?</h3>
                    <p>
                        La page que vous recherchez n'est actuellement pas
                        disponible.
                    </p>
                    <button>
                        <Link to={'/'}>
                            <p>Retour</p>
                        </Link>
                    </button>
                </section>
            </main>
        </>
    );
};
