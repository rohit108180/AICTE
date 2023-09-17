import {
  BrowserRouter as Router,
  Routes,
  Route,Navigate
} from "react-router-dom"
import ProtectedRoute from "./ProtectedRoute"
import Navigation from "./Navigation"
import Login from "./Login Signup/Login"
import Register from "./Login Signup/Register"
import Repositories from "./Repositories/Repositories"
import TextEditor from "./Documents/TextEditor"
import Main from "./Documents/Main"
import { AuthProvider } from "./Context/AuthProvider";

import { v4 as uuidV4 } from "uuid"
import { Profile } from "./pages/Profile/Profile"
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Landing } from "./pages/LandingPage/Landing"

function App() {


  // src/theme.js


const theme = createTheme({
  palette: {
    primary: {
      main: '#1E7C83', // Your primary color
    },
    secondary: {
      main: '#DFECED', // Your secondary color
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif', // Your preferred font family
  },
});





  return (
    <Router>
      <ThemeProvider theme={theme}>
      <AuthProvider>

       <Routes>
       <Route  element={<Navigation />}>
        <Route path="/" element={<Landing />}/> 
        <Route path="/login" element={<Login />}/>
        <Route path="/Register" element={<Register />}/>
        
        <Route element={<ProtectedRoute />}>
   
          <Route path="/Dashboard" element={<Repositories/>}/>
          <Route path="/Profile" element={<Profile/>}/>
          <Route path="/:Title" element={<Main />}/>
          <Route path="/Edit/:Title" element={<TextEditor />}/>
        </Route>
        </Route>
        <Route path="*"element={<Navigate to="/" />}/>
       </Routes>
       </AuthProvider>
       </ThemeProvider>
    </Router>
  )
}

export default App
