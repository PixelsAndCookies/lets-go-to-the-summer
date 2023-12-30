import { useState } from 'react';
import { Logo } from '../../components/Logo/Logo';

export const Contact = () => {
    const [lastName, setLastName] = useState('');
    const [lastNameError, setLastNameError] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [firstNameError, setFirstNameError] = useState(false);
    const [message, setMessage] = useState('');

    // Définie le format de nom de famille/prénom valide ( RegEx )
    const validName = (input) => /^[a-zA-Z\s]+$/.test(input);

    // Gère les changements de contenu dans les inputs
    const handleInputChange = (event, setInput, setError) => {
        const inputValue = event.target.value;
        setInput(inputValue);
        // Vérifie la validité du nom/prénom
        setError(!validName(inputValue));
    };

    // Gère l'envoi du message en redirigeant vers la boite mail
    const handleSubmit = (event) => {
        event.preventDefault();
        if (!lastNameError && !firstNameError) {
            window.location.href = `mailto:studiobalignon@gmail.com?subject=Message%20de%20${lastName}%20${firstName}&body=${message}`;
        }
    };

    return (
        <>
            <header className="home-header">
                <Logo />
            </header>
            <main className="main-container">
                <article className="description">
                    <h2>Contact</h2>

                    <form onSubmit={handleSubmit}>
                        <div
                            className={`otherPagesElement ${
                                lastNameError ? 'error' : ''
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
                                value={lastName}
                                onChange={(event) =>
                                    handleInputChange(
                                        event,
                                        setLastName,
                                        setLastNameError
                                    )
                                }
                                required
                            />
                            {lastNameError && (
                                <p className="error-message">
                                    Veuillez renseigner un nom de famille valide
                                </p>
                            )}
                        </div>

                        <div
                            className={`otherPagesElement ${
                                firstNameError ? 'error' : ''
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
                                value={firstName}
                                onChange={(event) =>
                                    handleInputChange(
                                        event,
                                        setFirstName,
                                        setFirstNameError
                                    )
                                }
                                required
                            />
                            {firstNameError && (
                                <p className="error-message">
                                    Veuillez renseigner un prénom valide
                                </p>
                            )}
                        </div>

                        <div className="otherPagesElement">
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
                                value={message}
                                onChange={(event) =>
                                    setMessage(event.target.value)
                                }
                                required
                            ></textarea>
                        </div>

                        <div className="otherPagesElement">
                            <button className="btn" type="submit">
                                Envoyer
                            </button>
                        </div>
                    </form>
                </article>
            </main>
        </>
    );
};
