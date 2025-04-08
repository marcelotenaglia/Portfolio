import { BrowserRouter } from "react-router-dom"
import { Navbar } from "./components/Navbar/Navbar"
import { Presentation } from "./components/Presentation/Presentation"
import { Experience } from "./components/Experience/Experience"
import { Proyects } from "./components/Proyects/Proyects"

export const AppRouter = () => {
    return (
        <>  
            <BrowserRouter>
                <Navbar />
                <Presentation />
                <Experience />
                <Proyects />
            </BrowserRouter>
        </>
    )
}