import { Link } from 'react-router-dom';
import { Header } from '../../components/Header/Header';

export const Error404 = () => {
    return (
        <>
            <Header />
            <main className="main-error">
                <section className="section-error">
                    <h2>Oupsi</h2>
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
