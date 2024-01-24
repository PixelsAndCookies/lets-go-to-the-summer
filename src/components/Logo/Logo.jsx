import { Link } from 'react-router-dom'

export const Logo = () => {
    return (
        <h1>
            <Link to="/">
                <span>
                    <span className="warp">
                        <span className="warp__0">L</span>
                        <span className="warp__1">e</span>
                        <span className="warp__2">t</span>
                        <span className="warp__3">&apos;</span>
                        <span className="warp__4">s</span>
                        <span className="warp__5"> </span>
                        <span className="warp__6">g</span>
                        <span className="warp__7">o</span>
                    </span>
                </span>
                <span>to the</span> <span>summer</span>
            </Link>
        </h1>
    )
}
