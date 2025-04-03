import App from "./App";
import { AppRouter } from "./AppRouter";

export function AppHookContainer () {
    return (
        <App>
            <AppRouter />
        </App>
    )
}