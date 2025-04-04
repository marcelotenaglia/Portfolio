import './Home.css'
import { Navbar } from "../Navbar/Navbar"
import { Presentation } from "../Presentation/Presentation"

export const Home = () => {
    return (
        <div className="home-container">
            <Navbar />
            <Presentation />
        </div>
    )
}