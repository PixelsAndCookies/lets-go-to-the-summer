import { Logo } from '../../components/Logo/Logo';

export const Faq = () => {
    return (
        <>
            <header className="home-header">
                <Logo />
            </header>
            <main className="main-container">
                <article className="description">
                    <h2>FAQ</h2>
                    <div className="faq">
                        <p className="question">
                            Le site familial est-il visible pour n'importe qui ?
                        </p>
                        <p>
                            Non, le site n'est visible que par les membres de
                            celui-ci. Il n'est accessible que si vous avez le
                            mot de passe.
                        </p>
                    </div>
                    <div className="faq">
                        <p className="question">
                            Puis-je communiquer mon mot de passe à des amis pour
                            leur montrer ?
                        </p>
                        <p>
                            Non, pour la sécurité et l'intimité de chacun, nous
                            ne communiquerons pas le mot de passe.
                        </p>
                    </div>
                    <div className="faq">
                        <p className="question">
                            Puis-je ajouter du contenu moi-même ?
                        </p>
                        <p>
                            Non, cette fonctionnalité est réservé pour l'instant
                            aux développeurs. Mais vous pouvez leur communiquer
                            des annecdotes/photos/idées via le formulaire de
                            contact ou l'un des (trop) nombreux goupe WhatsApp !
                        </p>
                    </div>
                    <div className="faq no-border">
                        <p>
                            Si vous avez des questions ou tout autre suggestion,
                            n'hésitez pas à nous contacter
                            {/*<Link to="créerPageContact" className="link">ici</Link> */}{' '}
                            !
                        </p>
                    </div>
                </article>
            </main>
        </>
    );
};
