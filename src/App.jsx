import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home/Home.jsx'
import { Holiday } from './pages/Holiday/Holiday.jsx'
import { Footer } from './components/Footer/Footer.jsx'
import './style/main.scss'

export default function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/holidays/:id" element={<Holiday />} />
            </Routes>
            <Footer />
        </div>
    )
}
