import { Day } from "../../components/Day/Day"
import { Logo } from "../../components/Logo/Logo"
import { Navbar } from "../../components/Navbar/Navbar"

export const Holiday = () => {
    return (
        <>
            <header className="holiday-header">
                <Logo />
                <Navbar />
            </header>
            <main className="holiday-main">
                <Day />
            </main>
        </>
    )
}
