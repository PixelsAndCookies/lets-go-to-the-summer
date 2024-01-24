// Import React
import { Routes, Route } from 'react-router-dom'
// Import JS
import { LoadPageFromTop } from './utils/LoadPageFromTop.jsx'
// Import Page
import { Home } from './pages/Home/Home.jsx'
import { Holiday } from './pages/Holiday/Holiday.jsx'
import { About } from './pages/About/About.jsx'
import { Footer } from './components/Footer/Footer.jsx'
import { Error404 } from './pages/Error404/Error404.jsx'
import { Faq } from './pages/Faq/Faq.jsx'
import { Licences } from './pages/Licences/Licences.jsx'
import { Contact } from './pages/Contact/Contact.jsx'
import { StudioPC } from './pages/StudioP&C/StudioPC.jsx'
// Import Composants
import { Header } from './components/Header/Header.jsx'
// Import Styles
import './style/main.scss'

export default function App() {

    return (
        <div className="App">
            <LoadPageFromTop>
                <Routes>
                    {/* Route Home */}
                    <Route
                        path="/"
                        element={
                            <>
                                <Header isHomePage={true} />
                                <Home />
                                <Footer />
                            </>
                        }
                    />
                    {/* Route Holiday */}
                    <Route
                        path="/holidays/:year"
                        element={
                            <>
                                <Header />
                                <Holiday />
                                <Footer />
                            </>
                        }
                    />
                    {/* Route A Propos */}
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
                    {/* Route FAQ */}
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
                    {/* Route Licences */}
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
                    {/* Route Contact */}
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
                    {/* Route Studio Pixels And Cookies */}
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
                    {/* Route Erreur404 */}
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
