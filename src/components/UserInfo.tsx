import {Avatar, Box, Typography} from "@mui/material";
import { themeStyles } from "../services/theme";
import {useAppSelector} from "../redux/store.ts";

const UserInfo = () => {
    const user = useAppSelector((state) => state.auth.user);

    if (!user) {
        return null; // Если пользователь не авторизован, не показываем компонент
    }
    return (
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Avatar
                src={user.photoURL || undefined}
                alt={user.displayName || "Пользователь"}
                sx={themeStyles.avatar}
            />
            <Typography variant="h6">{user.displayName }</Typography>
        </Box>
    );
};

export default UserInfo;