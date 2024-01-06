import { 
    Box,
    Typography,
    useTheme,
    useMediaQuery,
} from "@mui/material";


const LoginPage = () => {
    const theme = useTheme();
    const isNonMobileScreen = useMediaQuery("(min-width: 1000px)")


    return(
        <Box>
            <Box>
            <Typography
                    fontWeight="bold"
                    fontSize="clamp(1rem, 2rem, 2.25rem)"
                    color="primary"
                    sx={{
                        "&:hover":{
                            color: primaryLight,
                            cursor: "pointer",
                        },
                    }}
                >
                    SocialMedia
                </Typography>  
            </Box>
        </Box>
    )
}

export default LoginPage;