import { BrowserRouter } from "react-router-dom"
import { Home } from "./components/Home/Home"


export const AppRouter = () => {
    return (
        <>  
            <BrowserRouter>
                <Home />
            </BrowserRouter>
        </>
    )
}