import { Logo } from '../../components/Logo/Logo';
import { Navbar } from '../../components/Navbar/Navbar';
import { useState, useRef } from 'react';

const MoumouPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);

    const togglePlay = () => {
        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <>
            <header className="holiday-header">
                <Logo />
                <Navbar />
            </header>
            <main className="main-container">
                <article className="description otherPages">
                    <h2>Cadeau</h2>
                    <div className="otherPages__element no-border">
                        <video ref={videoRef} controls />
                        <source src="" type="video/mp4" />
                        <button className="btn" onClick={togglePlay}>
                            {isPlaying ? 'Pause' : 'Play'}
                        </button>
                    </div>
                </article>
            </main>
        </>
    );
};

export default MoumouPlayer;
