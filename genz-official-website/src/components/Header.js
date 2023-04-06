import React, { useEffect, useRef } from "react";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Stack,
  Toolbar,
  styled,
} from "@mui/material";
import Logo from "../assets/genzLogo.png";
import { HashLink } from "react-router-hash-link";

const StyledButton = styled(Button)({
  fontSize: "16px",
  color: "#FFFFFF",
  backgroundColor: "#0F0E0E",
  verticalAlign: "center",
  transitionDuration: "0.3s",
  textTransform: "inherit",
  "&:hover": {
    color: "#00FFFF",
    backgroundColor: "#0F0E0E",
  },
});

export const Header = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const headerElement = headerRef.current;
      if (!headerElement) {
        return;
      }
      if (prevScrollPos > currentScrollPos) {
        headerElement.style.transform = "translateY(0)";
      } else {
        headerElement.style.transform = "translateY(-200px)";
      }
      prevScrollPos = currentScrollPos;
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AppBar sx={{ backgroundColor: "#0F0E0E", maxHeight: "66px" }}>
      <Toolbar>
        <HashLink to="/#landing">
          <IconButton disableRipple sx={{ p: 0 }}>
            <Box
              component="img"
              margin="0"
              sx={{
                marginLeft: "80px",
                height: "60px",
                width: "60px",
              }}
              alt="genz logo"
              src={Logo}
            />
          </IconButton>
        </HashLink>

        <Stack
          justifyContent="flex-end"
          direction="row"
          spacing={4}
          sx={{
            flexGrow: 1,
            display: { xs: "none", md: "flex", marginRight: "100px" },
          }}
        >
          <HashLink smooth to="/#landing">
            <StyledButton disableRipple>Home</StyledButton>
          </HashLink>
          <HashLink smooth to="/about">
            <StyledButton disableRipple>About</StyledButton>
          </HashLink>
          <HashLink smooth to="/#services">
            <StyledButton disableRipple>Services</StyledButton>
          </HashLink>
          <HashLink smooth to="/#letstalk">
            <Button
              variant="contained"
              disableRipple
              sx={{
                width: "128px",
                height: "40px",
                fontSize: "16px",
                fontWeight: "600",
                color: "#000000",
                borderRadius: "50px",
                backgroundColor: "#00FFFF",
                verticalAlign: "center",
                transitionDuration: "0.5s",
                textTransform: "inherit",
                "&:hover": {
                  backgroundColor: "#0F0E0E",
                  border: "2px solid #00FFFF",
                  color: "#00FFFF",
                },
              }}
            >
              Let's Talk
            </Button>
          </HashLink>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
