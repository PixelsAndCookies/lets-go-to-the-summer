import { Link } from 'react-router-dom'

export const Faq = () => {
    return (
        <>
            <main className="main-container">
                <article className="description otherPages">
                    <h2>F A Q</h2>
                    <div className="otherPages__element border">
                        <h3>Pellentesque id nibh tortor id aliquet lectus proin nibh nisl.</h3>
                        <p>
                            Tortor pretium viverra suspendisse potenti nullam ac. Sagittis orci
                            a scelerisque purus semper eget duis at tellus.
                        </p>
                    </div>
                    <div className="otherPages__element border">
                        <h3>Tincidunt eget nullam non nisi est sit amet facilisis magna.</h3>
                        <p>
                            Commodo odio aenean sed adipiscing diam donec adipiscing. At risus
                            viverra adipiscing at in tellus.
                        </p>
                    </div>
                    <div className="otherPages__element border">
                        <h3>Nullam vel dui vel arcu pellentesque convallis a ac elit.</h3>
                        <p>
                            Pulvinar mattis nunc sed blandit libero volutpat. Donec ac odio tempor 
                            orci dapibus ultrices in. Nunc sed id semper risus in hendrerit 
                            gravida rutrum quisque !
                        </p>
                    </div>
                    <div className="otherPages__element">
                        <p>
                            Si vous avez des questions ou tout autre suggestion, n&apos;hésitez pas
                            à nous contacter !
                        </p>
                        <br />
                        <button className='btn'>
                            <Link to="/contact">Contact</Link>
                        </button>
                    </div>
                </article>
            </main>
        </>
    )
}
