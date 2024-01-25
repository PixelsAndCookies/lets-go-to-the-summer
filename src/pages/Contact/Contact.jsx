// Import React
import { useState } from 'react'

const apiUrl = 'https://pixelsandcookies.fr/server/api'
const apiEndpoint = apiUrl + '/mailer.php'

export const Contact = () => {
    const [formData, setFormData] = useState({ firstName: '', name: '', message: '' })
    const [formErrors, setFormErrors] = useState({ firstNameError: false, nameError: false })
    const [submitted, setSubmitted] = useState(false)
    // Définie le format de nom de famille/prénom valide ( RegEx )
    const validName = (input) => /^[a-zA-Z\s]+$/.test(input)

    // Gère les changements de contenu dans les inputs
    const handleInputChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        })

        // Vérifie la validité du nom/prénom
        setFormErrors({
            ...formErrors,
            [event.target.name]: !validName(event.target.value),
        })
    }

    // Gère l'envoi du message en redirigeant vers l'API mailer
    const handleSubmit = async (event) => {
        event.preventDefault()
        if (!formErrors['firstNameError'] && !formErrors['nameError']) {
            try {
                const response = await fetch(apiEndpoint, {
                    method: 'POST',
                    headers: { 'Content-Type': '' },
                    body: JSON.stringify(formData),
                })
                if (response.status === 200) setSubmitted(true)
            } catch (error) {
                console.log("Erreur lors de l'appel API", error)
            }
        }
    }

    return (
        <>
            <main className="main-container">
                <article className="description otherPages">
                    <h2>Contact</h2>

                    {submitted ? (
                        <p className="submitted">Votre message a bien été envoyé</p>
                    ) : (
                        <form onSubmit={handleSubmit}>
                            <div
                                className={`otherPages__element ${
                                    formErrors['name'] ? 'error' : ''
                                }`}
                            >
                                <h3>
                                    <label htmlFor="name">Nom :</label>
                                </h3>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Tapez votre nom ici"
                                    minLength="3"
                                    maxLength="33"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                />
                                {formErrors['name'] && (
                                    <p className="error-message">
                                        Veuillez renseigner un nom de famille valide
                                    </p>
                                )}
                            </div>

                            <div
                                className={`otherPages__element ${
                                    formErrors['firstName'] ? 'error' : ''
                                }`}
                            >
                                <h3>
                                    <label htmlFor="firstName">Prénom :</label>
                                </h3>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    placeholder="Tapez votre prénom ici"
                                    minLength="3"
                                    maxLength="33"
                                    value={formData.firstName}
                                    onChange={handleInputChange}
                                    required
                                />
                                {formErrors['firstName'] && (
                                    <p className="error-message">
                                        Veuillez renseigner un prénom valide
                                    </p>
                                )}
                            </div>

                            <div className="otherPages__element">
                                <h3>
                                    <label htmlFor="message">Message :</label>
                                </h3>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="10"
                                    cols="100"
                                    placeholder="Une question ?&#10;Un avis à donner ?&#10;On vous écoute ici ! &#10;&#x1F60A;"
                                    maxLength="2000"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                ></textarea>
                            </div>

                            <div className="otherPages__element">
                                <button className="btn" type="submit">
                                    Envoyer
                                </button>
                            </div>
                        </form>
                    )}
                </article>
            </main>
        </>
    )
}
