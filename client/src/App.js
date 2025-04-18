import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Navigation from "./Navigation";
import Login from "./Login Signup/Login";
import Register from "./Login Signup/Register";
import Repositories from "./Repositories/Repositories";
import TextEditor from "./Documents/TextEditor";
import Main from "./Documents/Main";
import { AuthProvider } from "./Context/AuthProvider";

import { v4 as uuidV4 } from "uuid";
import { Profile } from "./pages/Profile/Profile";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Landing } from "./pages/LandingPage/Landing";
import Resources from "./Resources/Resources";
import { Analytics } from "./Analytics/Analytics.js";
import { AppProvider } from "./Context/context/appContext";
import SingIn from "./Login Signup/SingIn";
import SignUp from "./Login Signup/SignUp";

import {MessageBar} from "./Components/MessageBar"
function App() {
  // src/theme.js

  const theme = createTheme({
    palette: {
      primary: {
        main: "#1E7C83", // Your primary color
      },
      secondary: {
        main: "#DFECED", // Your secondary color
      },
      success: {
        main: "#4caf50",
      },
    },
    typography: {
      fontFamily: "Arial, sans-serif", // Your preferred font family
    },
  });

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <AppProvider>
          <MessageBar/>
            <Routes>
              <Route element={<Navigation />}>
                <Route path="/" element={<Landing />} />
                <Route path="/login" element={<SingIn />} />
                <Route path="/Register" element={<SignUp />} />
                  <Route path="/Resources" element={<Resources />} />

                <Route element={<ProtectedRoute />}>
                  <Route path="/Dashboard" element={<Repositories />} />
                  <Route path="/Profile" element={<Profile />} />
                  <Route path="/Analytics" element={<Analytics />} />
                  <Route path="/:Title" element={<Main />} />
                  <Route path="/Edit/:Title" element={<TextEditor />} />
                </Route>
              </Route>
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </AppProvider>
        </AuthProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
