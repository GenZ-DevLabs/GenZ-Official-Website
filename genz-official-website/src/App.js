import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material";
import { MainPage } from "./pages/MainPage";
import { ContactUs } from "./pages/ContactUs";
import { Header } from "./components/Header";
import { Routes, Route } from "react-router-dom";
import { About } from "./pages/About";

const theme = createTheme({
  palette: {
    primary: {
      main: "#00FFFF", // Change the color of label and typing
    },
  },
  typography: {
    fontFamily: ["Roboto", '"Helvetica Neue"', "Arial", "sans-serif"].join(","),
  },
  components: {
    MuiInputBase: {
      styleOverrides: {
        input: {
          color: "#FFFFFF80", // Change the color of typing
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: "#FFFFFF80", // Change the color of label
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          "&::placeholder": {
            color: "#FFFFFF80", // Change the color of placeholder
          },
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/about" element={<About />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
