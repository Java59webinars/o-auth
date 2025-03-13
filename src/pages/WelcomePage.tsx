import {Box, Button, Typography} from "@mui/material";
import UserInfo from "../components/UserInfo.tsx";
import {themeStyles} from "../services/theme.ts";
import {logOut} from "../services/firebase.ts";


const WelcomePage = () => {
    const handleLogout = async () => {
        await logOut();
        console.log("LogOut success");
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