import {themeStyles} from "../services/theme.ts";
import {Box, Button, Typography} from "@mui/material";
import {loginWithGoogle} from "../redux/authThunks.ts";
import {RootState, useAppDispatch} from "../redux/store.ts";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import { useEffect, useState } from "react";

const LoginPage = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const user = useSelector((state: RootState) => state.auth.user);
    const status =  useSelector((state: RootState) => state.auth.status);
    const [error, setError] = useState<string | null>(null);
    const handleLogin = async () => {
        setError(null);
        const result = await dispatch(loginWithGoogle());
        if (loginWithGoogle.fulfilled.match(result)) {
            navigate("/");
        } else if (loginWithGoogle.rejected.match(result)) {
            setError(result.payload as string);
        }
    };
    useEffect(() => {
        if(user){
            navigate("/")
        }
    }, [user, navigate]);
    return (
        <Box sx={themeStyles.pageContainer}>
            <Typography
            variant="h4"
            color="primary"
            >
                Enter
            </Typography>
            {error && (
                <Typography color="error">{error}</Typography>
            )}
            <Button
                variant="contained"
                sx={themeStyles.button}
            onClick={handleLogin} disabled={status === "loading"}>
                {status === "loading" ? "Loading" : "Auth with Google"}
            </Button>
        </Box>
    );
};

export default LoginPage;