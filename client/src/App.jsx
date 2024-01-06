import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import HomePage from "./scenes/homePage";
import LoginPage from "./scenes/loginPage";
import ProfilePage from "./scenes/profilePage";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import {CssBaseline, ThemeProvider} from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";

function App() {

   const mode = useSelector(state => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);


  return (
    <div className="App">
      <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />   
        <Routes>
          <Route path="/" element={<LoginPage />}/>
          <Route path="/home" element={<HomePage />}/>
          <Route path="/profile/:userId" element={<ProfilePage />}/>
          
          <Route path="*" element={<Navigate to="/" replace/>} /> // This is a catch-all route, if the user tries to go to a route that doesn't exist, they will be redirected to the login page
        </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  )
}

//CssBaseline is a component that applies basic CSS resets to the page. It is required for Material UI to work properly.
//This baseline ensures a consistent starting point for styling your website, removing browser-specific inconsistencies and allowing you to build upon this foundation with your own styles.

export default App
