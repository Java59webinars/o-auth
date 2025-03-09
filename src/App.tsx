import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginPage from "./pages/LoginPage.tsx";
import WelcomePage from "./pages/WelcomePage.tsx";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login"  element={<LoginPage/>}/>
                <Route path="/"  element={<WelcomePage/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;