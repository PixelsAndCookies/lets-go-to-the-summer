// Import React
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// Import Composants
import { GeometricShapes } from '../../components/GeometricShapes/GeometricShapes'
import { Logo } from '../../components/Logo/Logo'

export const SelectPrivacy = ({ handleLogin }) => {
    const navigate = useNavigate()
    const [selectPrivacy, setSelectPrivacy] = useState(null)

    // Gère le choix de confidentialité publique ou privé
    const handlePrivacyChoice = (privacyOption) => {
        setSelectPrivacy(privacyOption)
    }

    // Gère la redirection de l'utilisateur en fonction de son choix
    const handleEnterWebsite = async () => {
        if (selectPrivacy === 'public') {
            // Redirige sur la page d'accueil et charge les données publique
            navigate('/home')
        } else if (selectPrivacy === 'private') {
            try {
                // Attend la réponse de la fonction de connexion
                await handleLogin()
                // Redirige sur la page d'accueil et charge les données privée
                navigate('/home', { state: { private: true } })
            } catch (error) {
                console.error("Erreur d'authentification :", error)
            }
        } else {
            // Redirige sur la page de choix si aucun choix n'est fait
            navigate('/')
        }
    }

    return (
        <>
            <GeometricShapes />
            <header className="header">
                <Logo isLink={false} />
            </header>
            <main className="privacyMain">
                <p>Veuillez choisir une version :</p>
                <div className="privacyMain__container">
                    <div className="privacyMain__container__choice">
                        <button
                            className="privacyMain__container__choice__btn privacyMain__container__choice__btn--public"
                            onClick={() => {
                                handlePrivacyChoice('public')
                                handleEnterWebsite()
                            }}
                        >
                            Public
                        </button>
                    </div>
                    <div className="privacyMain__container__choice">
                        <button
                            className="privacyMain__container__choice__btn privacyMain__container__choice__btn--private"
                            onClick={() => {
                                handlePrivacyChoice('private')
                                handleEnterWebsite()
                            }}
                        >
                            Privé
                        </button>
                    </div>
                </div>
            </main>
        </>
    )
}
