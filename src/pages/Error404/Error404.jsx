import { Link } from 'react-router-dom';
import { Logo } from '../../components/Logo/Logo';
import { Navbar } from '../../components/Navbar/Navbar';

export const Error404 = () => {
    return (
        <>
            <header className="holiday-header">
                <Logo />
                <Navbar />
            </header>
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
