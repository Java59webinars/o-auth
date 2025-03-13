import {themeStyles} from "../services/theme.ts";
import {Box, Button, Typography} from "@mui/material";
import {loginWithGoogle} from "../redux/authThunks.ts";
import {RootState, useAppDispatch} from "../redux/store.ts";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import { useEffect } from "react";



const LoginPage = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const user = useSelector((state: RootState) => state.auth.user);
    const status =  useSelector((state: RootState) => state.auth.status);
    const handleLogin = async () => {
        const result = await dispatch(loginWithGoogle());
        if(loginWithGoogle.fulfilled.match(result)){
            navigate("/");
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