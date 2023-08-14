import { Outlet } from "react-router-dom";
import { GlobalStyles } from "../styles/GlobalStyles";
import { ThemeContext } from "../contexts/ThemeContext";
import { ThemeProvider } from "styled-components";
import { useContext } from "react";
import { PostContextProvider } from "../contexts/PostContext";
import { AuthContextProcider } from "../contexts/AuthContext";

export function AppRoutes() {
  const { theme } = useContext(ThemeContext);
  return (
    <ThemeProvider theme={theme}>
      <AuthContextProcider>
        <PostContextProvider>
          <Outlet />
          <GlobalStyles />
        </PostContextProvider>
      </AuthContextProcider>
    </ThemeProvider>
  );
}
