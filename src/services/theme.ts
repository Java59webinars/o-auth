import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    palette: {
        primary: {
            main: "#1976d2",
        },
        secondary: {
            main: "#dc004e",
        },
        background: {
            default: "#f5f5f5",
        },
    },
    typography: {
        fontFamily: "Arial, sans-serif",
        h4: {
            fontWeight: 600,
        },
        h6: {
            fontWeight: 500,
        },
    },
});

// Экспортируем стили
export const themeStyles = {
    pageContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        gap: 2,
    },
    button: {
        marginTop: 2,
    },
    userInfoContainer: {
        display: "flex",
        alignItems: "center",
        gap: 2,
    },
    avatar: {
        width: 56,
        height: 56,
    },
};