import {themeStyles} from "../services/theme.ts";
import {Box, Button, Typography} from "@mui/material";
import {signWithGoogle} from "../services/firebase.ts";


const LoginPage = () => {
    const handleLogin = async () => {
        const user = await signWithGoogle();
        if(user){
            console.log("Success", user);
        } else {
            console.log("Error")
        }
    }
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
            onClick={handleLogin}>
                Auth with Google
            </Button>
        </Box>
    );
};

export default LoginPage;