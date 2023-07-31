import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Stack,
  Toolbar,
  styled,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
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
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <AppBar
      sx={{
        backgroundColor: "#0F0E0E",
        maxHeight: "66px",
      }}
    >
      <Toolbar>
        <HashLink to="/#landing" style={{ textDecoration: "none" }}>
          <IconButton disableRipple sx={{ p: 0 }}>
            <Box
              component="img"
              margin="0"
              sx={{
                marginLeft: { xs: "0px", md: "80px" },
                height: "60px",
                width: "60px",
              }}
              alt="genz logo"
              src={Logo}
            />
          </IconButton>
        </HashLink>

        {isMobile ? (
          <IconButton
            onClick={toggleMenu}
            sx={{ ml: "auto", color: "#ffffff" }}
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        ) : (
          <Stack
            justifyContent="flex-end"
            direction="row"
            spacing={{ xs: 0, sm: 1, md: 4 }}
            sx={{
              flexGrow: 1,
              display: { md: "flex" },
            }}
          >
            <HashLink smooth to="/#landing" style={{ textDecoration: "none" }}>
              <StyledButton
                disableRipple
                sx={{ fontSize: { xs: "14px", sm: "16px" } }}
              >
                Home
              </StyledButton>
            </HashLink>
            <HashLink smooth to="/about">
              <StyledButton
                disableRipple
                sx={{ fontSize: { xs: "14px", sm: "16px" } }}
              >
                About
              </StyledButton>
            </HashLink>
            <HashLink smooth to="/#services" style={{ textDecoration: "none" }}>
              <StyledButton
                disableRipple
                sx={{ fontSize: { xs: "14px", sm: "16px" } }}
              >
                Services
              </StyledButton>
            </HashLink>
            <HashLink smooth to="/#letstalk" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                disableRipple
                sx={{
                  display: { xs: "none", sm: "block" },
                  width: { xs: "80px", sm: "90px", md: "128px" },
                  height: { xs: "30px", md: "40px" },
                  fontSize: { xs: "11px", sm: "14px", md: "16px" },
                  marginTop: { xs: "5px", sm: "5px", md: "0px" },
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
        )}

        {isMobile && isMenuOpen && (
          <Box
            sx={{
              position: "absolute",
              top: "66px",
              left: "0",
              right: "0",
              backgroundColor: "#0F0E0E",
              zIndex: "999",
            }}
          >
            <Stack
              justifyContent="center"
              direction="column"
              spacing={2}
              sx={{
                display: "flex",
                alignItems: "center",
                py: 2,
              }}
            >
              <HashLink
                onClick={toggleMenu}
                smooth
                to="/#landing"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <StyledButton>Home</StyledButton>
              </HashLink>
              <HashLink
                onClick={toggleMenu}
                smooth
                to="/about"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <StyledButton>About</StyledButton>
              </HashLink>
              <HashLink
                onClick={toggleMenu}
                smooth
                to="/#services"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <StyledButton>Services</StyledButton>
              </HashLink>
              <HashLink
                onClick={toggleMenu}
                smooth
                to="/#letstalk"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <StyledButton>Let's Talk</StyledButton>
              </HashLink>
            </Stack>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};
