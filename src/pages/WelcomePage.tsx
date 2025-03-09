import {Box, Button, Typography} from "@mui/material";
import UserInfo from "../components/UserInfo.tsx";
import {themeStyles} from "../services/theme.ts";


const WelcomePage = () => {
    return (
        <Box sx={themeStyles.pageContainer}>
            <Typography variant="h4" color="primary">
                Welcome!
            </Typography>
            <UserInfo/>
            <Button variant="contained" sx={themeStyles.button}>LogOut</Button>
        </Box>
    );
};

export default WelcomePage;