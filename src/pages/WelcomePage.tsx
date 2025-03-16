import { Box, Button, Typography } from "@mui/material";
import { themeStyles } from "../services/theme";
import { useAppDispatch } from "../redux/store";
import { logoutUserAsync } from "../redux/authThunks";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import UserInfo from "../components/UserInfo";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const WelcomePage = () => {
    const dispatch = useAppDispatch();
    const user = useSelector((state: RootState) => state.auth.user);
    const navigate = useNavigate();
    useEffect(() => {
        if (!user) {
            navigate("/login");
        }
    }, [user, navigate]);
    const handleLogout = async () => {
        dispatch(logoutUserAsync());
    };
    return (
        <Box sx={themeStyles.pageContainer}>
            <Typography variant="h4" color="primary">
                Welcome!
            </Typography>
            <UserInfo/>
            <Button
                variant="contained"
                sx={themeStyles.button}
            onClick={handleLogout}
            >
                LogOut
            </Button>
        </Box>
    );
};

export default WelcomePage;