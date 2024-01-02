import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import HomePage from "./scenes/homePage";
import LoginPage from "./scenes/loginPage";
import ProfilePage from "./scenes/profilePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />}/>
          <Route path="/home" element={<HomePage />}/>
          <Route path="/profile/:userId" element={<ProfilePage />}/>
          
          <Route path="*" element={<Navigate to="/" replace/>} /> // This is a catch-all route, if the user tries to go to a route that doesn't exist, they will be redirected to the login page
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
