import { Link } from 'react-router-dom'

export const Faq = () => {
    return (
        <>
            <main className="main-container">
                <article className="description otherPages">
                    <h2>F A Q</h2>
                    <div className="otherPages__element border">
                        <h3>Le site familial est-il visible pour n&apos;importe qui ?</h3>
                        <p>
                            Le site n&apos;est visible que par les membres de celui-ci. Il
                            n&apos;est accessible que si vous avez le mot de passe.
                        </p>
                    </div>
                    <div className="otherPages__element border">
                        <h3>Puis-je communiquer mon mot de passe à des amis pour leur montrer ?</h3>
                        <p>
                            Pour la sécurité et le respect de l&apos;intimité de chacun, nous vous
                            demandons de ne pas communiquer le mot de passe.
                        </p>
                    </div>
                    <div className="otherPages__element border">
                        <h3>Puis-je ajouter du contenu moi-même ?</h3>
                        <p>
                            Cette fonctionnalité est réservé pour l&apos;instant aux développeurs.
                            Mais vous pouvez leur communiquer des annecdotes/photos/idées via
                            l&apos;un des (trop) nombreux goupes WhatsApp !
                        </p>
                    </div>
                    <div className="otherPages__element">
                        <p>
                            Si vous avez des questions ou tout autre suggestion, n&apos;hésitez pas
                            à nous contacter !
                        </p>
                        <br />
                        <button className='btn'>
                            <Link to="/contact">Contact</Link>
                        </button>
                    </div>
                </article>
            </main>
        </>
    )
}
