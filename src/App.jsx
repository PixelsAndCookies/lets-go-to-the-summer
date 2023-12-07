import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home/Home.jsx';
import { Holiday } from './pages/Holiday/Holiday.jsx';
import { About } from './pages/About/About.jsx';
import { Footer } from './components/Footer/Footer.jsx';
import './style/main.scss';

export default function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/holidays/:id" element={<Holiday />} />
                <Route path="/about" element={<About />} />
            </Routes>
            <Footer />
        </div>
    );
}
