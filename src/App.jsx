import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home/Home.jsx'
import { Holiday } from './pages/Holiday/Holiday.jsx'
import { About } from './pages/About/About.jsx'
import { Footer } from './components/Footer/Footer.jsx'
import { Error404 } from './pages/Error404/Error404.jsx'
import { Faq } from './pages/Faq/Faq.jsx'
import { Licences } from './pages/Licences/Licences.jsx'
import { Contact } from './pages/Contact/Contact.jsx'
import { MoumouPlayer } from './pages/MoumouPlayer/MoumouPlayer.jsx';
import './style/main.scss'

export default function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/holidays/:year" element={<Holiday />} />
                <Route path="/about" element={<About />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/licences" element={<Licences />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/moumou" element={<MoumouPlayer />} />
                <Route path="*" element={<Error404 />} />
            </Routes>
            <Footer />
        </div>
    );
}
