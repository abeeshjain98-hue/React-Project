import { Route, Routes } from "react-router-dom"
import AuthScreen from "../pages/auth"

function Auth() {
    return <AuthScreen />
}


export const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/auth" element={<Auth />} />
            </Routes>


        </>
    )
}