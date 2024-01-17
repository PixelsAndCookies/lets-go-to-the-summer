// Import React
import { useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
// Import JS
import { LoadPageFromTop } from './utils/LoadPageFromTop.jsx'
// Import Page
import { SelectPrivacy } from './pages/SelectPrivacy/SelectPrivacy.jsx'
import { Home } from './pages/Home/Home.jsx'
import { Holiday } from './pages/Holiday/Holiday.jsx'
import { About } from './pages/About/About.jsx'
import { Footer } from './components/Footer/Footer.jsx'
import { Error404 } from './pages/Error404/Error404.jsx'
import { Faq } from './pages/Faq/Faq.jsx'
import { Licences } from './pages/Licences/Licences.jsx'
import { Contact } from './pages/Contact/Contact.jsx'
import { MoumouPlayer } from './pages/MoumouPlayer/MoumouPlayer.jsx'
import { StudioPC } from './pages/StudioP&C/StudioPC.jsx'
// Import Composants
import { Header } from './components/Header/Header.jsx'
// Import Styles
import './style/main.scss'

export default function App() {
    // Défini l'état d'authentification initial de l'utilisateur à false
    const [isLogin, setIsLogin] = useState(false)
    const location = useLocation()
    // Défini si la page doit être publique ou privée
    const isPrivate = location.state?.private || isLogin

    // Défini l'état d'authentification à true lorsqu'elle est appelée
    const handleLogin = async () => {
        setIsLogin(true)
    }

    return (
        <div className="App">
            <LoadPageFromTop>
                <Routes>
                    <Route
                        path="/"
                        element={<SelectPrivacy isLogin={isPrivate} handleLogin={handleLogin} />}
                    />
                    <Route
                        path="/home"
                        element={
                            <>
                                <Header isHomePage={true} />
                                <Home isLogin={isPrivate} />
                                <Footer />
                            </>
                        }
                    />
                    <Route
                        path="/holidays/:year"
                        element={
                            <>
                                <Header />
                                <Holiday isLogin={isPrivate} />
                                <Footer />
                            </>
                        }
                    />
                    <Route
                        path="/about"
                        element={
                            <>
                                <Header />
                                <About />
                                <Footer />
                            </>
                        }
                    />
                    <Route
                        path="/faq"
                        element={
                            <>
                                <Header />
                                <Faq />
                                <Footer />
                            </>
                        }
                    />
                    <Route
                        path="/licences"
                        element={
                            <>
                                <Header />
                                <Licences />
                                <Footer />
                            </>
                        }
                    />
                    <Route
                        path="/contact"
                        element={
                            <>
                                <Header />
                                <Contact />
                                <Footer />
                            </>
                        }
                    />
                    <Route
                        path="/holidays/moumou"
                        element={
                            <>
                                <Header />
                                <MoumouPlayer isLogin={isPrivate} />
                                <Footer />
                            </>
                        }
                    />
                    <Route
                        path="/studioPC"
                        element={
                            <>
                                <Header />
                                <StudioPC />
                                <Footer />
                            </>
                        }
                    />
                    <Route
                        path="*"
                        element={
                            <>
                                <Header />
                                <Error404 />
                                <Footer />
                            </>
                        }
                    />
                </Routes>
            </LoadPageFromTop>
        </div>
    )
}
