import {Avatar, Box, Typography} from "@mui/material";


const UserInfo = () => {
    return (
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Avatar sx={{ width: 50, height: 50 }} />
            <Typography variant="h6">UserName</Typography>
        </Box>
    );
};

export default UserInfo;