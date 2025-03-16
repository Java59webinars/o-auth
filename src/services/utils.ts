export const handleError = (error: unknown): string => {
    if (error instanceof Error) {
        return error.message;
    }
    return typeof error === "string" ? error : "Unknown error";
};