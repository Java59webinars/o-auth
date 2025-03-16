import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAppSelector } from "../redux/store";

const ProtectedRoute = () => {
    const user = useAppSelector((state) => state.auth.user);
    const location = useLocation();

    // if user is authenticated and he tries open `/login` → redirect `/`
    if (user && location.pathname === "/login") {
        return <Navigate to="/" replace />;
    }

    //if user is NOT authenticated and tries open secured contetn  → redirect`/login`
    if (!user && location.pathname !== "/login") {
        return <Navigate to="/login" replace />;
    }

    return <Outlet />;
};

export default ProtectedRoute;