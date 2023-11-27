import { Day } from "../../components/Day/Day"
import { Logo } from "../../components/Logo/Logo"
import { Navbar } from "../../components/Navbar/Navbar"

export const Holiday = () => {
    return (
        <>
            <header>
                <Logo />
                <Navbar />
            </header>
            <main>
                <Day />
            </main>
        </>
    )
}
