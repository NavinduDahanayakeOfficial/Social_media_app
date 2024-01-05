import { useState } from "react";
import { 
    Box,
    IconButton,
    InputBase,
    Typography,
    Select,
    MenuItem,
    FormControl,
    useTheme,
    useMediaQuery
} from "@mui/material";
import {
    Search,
    Message,
    DarkMode,
    LightMode,
    Notifications,
    Help,
    Menu,
    Close,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { setMode, setLogout } from "../../state";
import { useNavigate } from "react-router-dom";
import FlexBetween from "../../components/FlexBetween";
import { dark } from "@mui/material/styles/createPalette";



const Navbar = () => {
    const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user = userSelector(state => state.user); 

    //useMediaQuery is a hook that returns true if the screen is smaller than the breakpoint
    //it is a hook from material ui
    const isNonMobileScreens = useMediaQuery("(min-width: 1000px)"); //returns true if the screen is larger than 1000px

    const theme = useTheme(); //returns the theme object
    //using this theme object, we can access the colors and typography of the theme
    const neutralLight = theme.palette.neutral.light;
    const neutralDark = theme.palette.neutral.dark;
    const background = theme.palette.background.default;
    const primaryLight = theme.palette.primary.light;
    const alt = theme.palette.alt;

    const fullName = `${user.firstName} ${user.lastName}`;


    //in flexBetween, we can pass props to the Box component
    //gap is the space between the children, that means space between flex items
    //clamp is a css function that takes 3 arguments, min, preferred and max for the font size, it is can be used to make the font responsive
    //inputBase is a component from material ui that is used to create an input field
    //sx is a prop that is used to style the component, can be used to override the default css of the component
    return(
        <FlexBetween padding="1rem 6%" backgroundColor={alt}>
            <FlexBetween gap="1.75rem">
                <Typography
                    fontWeight="bold"
                    fontSize="clamp(1rem, 2rem, 2.25rem)"
                    onClick={() => navigate("/home")}
                    sx={{
                        "&:hover":{
                            color: primaryLight,
                            cursor: "pointer",
                        },
                    }}
                >
                    SocialMedia
                </Typography>
                {isNonMobileScreens && (
                    <FlexBetween backgroundColor={neutralLight} borderRadius="9px" gap="3rem" padding="0.1rem 1.5rem">
                        <InputBase placeholder="Search..."/>
                        <IconButton>
                            <Search/>
                        </IconButton>
                    </FlexBetween>
                )}
                {/*DESKTOP NAVBAR*/}
                {isNonMobileScreens ? (
                    <FlexBetween gap="2rem">
                        <IconButton onClick={()=> dispatch(setMode())}>
                            {theme.palette.mode === "dark" ? (
                                <DarkMode sx={{fontSize:"25px"}}/>
                            ) : (
                                <LightMode sx={{color: dark,  fontSize:"25px"}}/>
                            )}
                        </IconButton>
                        <Message sx={{fontSize:"25px"}}/>
                        <Notifications sx={{fontSize:"25px"}}/>
                        <Help sx={{fontSize:"25px"}}/>
                        <FormControl varient="standard" value={fullName}> 
                            <Select 
                                value={fullName}
                                sx ={{
                                    backgroundColor: neutralLight,
                                    width: "150px",
                                    borderRadius: "0.25rem",
                                    padding: "0.25rem 1rem",
                                    "& .MuiSvgIcon-root": {
                                        paddingRight: "0.25rem",
                                        width: "3rem",
                                    },
                                    "& .MuiSelect-select:focus":{
                                        backgroundColor: neutralLight,
                                    }
                                }}  
                                input = {<InputBase/>}
                            >
                                <MenuItem value={fullName}>
                                    <Typography>{fullName}</Typography>
                                </MenuItem>
                                <MenuItem onClick={() => dispatch(setLogout())}>Logout                                </MenuItem>
                            </Select>
                        </FormControl>
                    </FlexBetween>
                ) : (
                    <IconButton onClick={() => setIsMobileMenuOpened(!isMobileMenuOpened)}>
                        <Menu />   
                    </IconButton>
                )}


                {/*MOBILE NAVBAR*/}
                {!isNonMobileScreens && isMobileMenuOpened && (
                  <Box
                    position="fixed"  
                    right="0"
                    bottom="0"
                    height="100%"
                    zIndex="10"
                    maxWidth="500px"
                    minWidth="300px"
                    bakcgroundColor={background}
                  >
                    {/*CLOSE BUTTON*/}
                    <Box display="flex" justifyContent="flex-end" padding="1rem">
                        <IconButton onClick={() => setIsMobileMenuOpened(!isMobileMenuOpened)}>
                            <Close/>
                        </IconButton>
                    </Box>

                    {/*MENU ITEMS*/}
                    <FlexBetween 
                        display="flex" 
                        flexDirection="column"  
                        justifyContent="center" 
                        alignItems="center" 
                        gap="3rem"
                    >
                        <IconButton 
                            onClick={()=> dispatch(setMode())}
                            sx={{fontSize:"25px"}}
                        
                        >
                            {theme.palette.mode === "dark" ? (
                                <DarkMode sx={{fontSize:"25px"}}/>
                            ) : (
                                <LightMode sx={{color: dark,  fontSize:"25px"}}/>
                            )}
                        </IconButton>
                        <Message sx={{fontSize:"25px"}}/>
                        <Notifications sx={{fontSize:"25px"}}/>
                        <Help sx={{fontSize:"25px"}}/>
                        <FormControl varient="standard" value={fullName}> 
                            <Select 
                                value={fullName}
                                sx ={{
                                    backgroundColor: neutralLight,
                                    width: "150px",
                                    borderRadius: "0.25rem",
                                    padding: "0.25rem 1rem",
                                    "& .MuiSvgIcon-root": {
                                        paddingRight: "0.25rem",
                                        width: "3rem",
                                    },
                                    "& .MuiSelect-select:focus":{
                                        backgroundColor: neutralLight,
                                    }
                                }}  
                                input = {<InputBase/>}
                            >
                                <MenuItem value={fullName}>
                                    <Typography>{fullName}</Typography>
                                </MenuItem>
                                <MenuItem onClick={() => dispatch(setLogout())}>Logout                                </MenuItem>
                            </Select>
                        </FormControl>
                    </FlexBetween>
                  </Box>  
                )}
            </FlexBetween>
        </FlexBetween>
    )
}

export default Navbar;