import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginPage from "./pages/LoginPage.tsx";
import WelcomePage from "./pages/WelcomePage.tsx";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import ProtectedRoute from "./components/ProtectedRoute.tsx";

const App = () => {
    return (
        <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route element={<ProtectedRoute />}>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/" element={<WelcomePage />} />
                </Route>
            </Routes>
        </BrowserRouter>
        </Provider>
    );
};

export default App;