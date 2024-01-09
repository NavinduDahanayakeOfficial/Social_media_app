import { 
    Box,
    Typography,
    useTheme,
    useMediaQuery,
} from "@mui/material";
import Form from "./Form.jsx";


const LoginPage = () => {
    const theme = useTheme();
    const isNonMobileScreen = useMediaQuery("(min-width: 1000px)")

    //rem is the root em, it is the font size of the root element, which is the html element 
    //p means padding, 1rem is 16px, 6% means 6% of the width of the screen
    //m means margin, 2rem is 32px, auto means the browser will automatically calculate the margin
    return(
        <Box>
            <Box 
            width="100%" 
            backgroundColor={theme.palette.background.alt} 
            p="1rem 6%" 
            textAlign="center">
                <Typography
                    fontWeight="bold"
                    fontSize="32px"
                    color="primary"
                >
                        SocialMedia
                </Typography>  
            </Box>
            <Box
                width={isNonMobileScreen ? "50%" : "93%"}
                p="2rem"
                m="2rem auto"
                borderRadius="1.5rem"
                backgroundColor={theme.palette.background.alt}
            >
                <Typography
                    fontWeight="500" 
                    variant="h5"
                    sx={{
                        mb: "1.5rem"
                    }} 
                >
                    Welcome to SocialMedia, the latest social media platform
                </Typography>
                <Form />
            </Box>
        </Box>
    )
}

export default LoginPage;