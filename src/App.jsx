import { Routes, Route } from 'react-router-dom'
import { Header } from './components/Header/Header.jsx'
import { Home } from './pages/Home/Home.jsx'
import { Holiday } from './pages/Holiday/Holiday.jsx'
import './style/main.css'

export default function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/holiday" element={<Holiday />} />
            </Routes>
        </div>
    )
}
