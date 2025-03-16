import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginPage from "./pages/LoginPage.tsx";
import WelcomePage from "./pages/WelcomePage.tsx";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const App = () => {
    return (
        <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path="/login"  element={<LoginPage/>}/>
                <Route path="/"  element={<WelcomePage/>}/>
            </Routes>
        </BrowserRouter>
        </Provider>
    );
};

export default App;