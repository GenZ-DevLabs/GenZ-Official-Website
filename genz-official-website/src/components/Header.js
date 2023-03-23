import React, { useEffect, useRef } from "react";
import { AppBar, Box, Button, IconButton, Stack, Toolbar } from "@mui/material";
import Logo from "../assets/genzLogo.png";

const pages = ["Home", "Services", "Projects", "About"];

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

  const handleClickNavItem = (page) => () => {
    const id = `${page.toLowerCase()}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <AppBar sx={{ backgroundColor: "#0F0E0E", maxHeight: "66px" }}>
      <Toolbar>
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

        {/* For md */}
        <Stack
          justifyContent="flex-end"
          direction="row"
          spacing={4}
          sx={{
            flexGrow: 1,
            display: { xs: "none", md: "flex", marginRight: "100px" },
          }}
        >
          {pages.map((page) => (
            <Button
              key={page}
              onClick={handleClickNavItem(page)}
              disableRipple
              sx={{
                fontSize: "16px",
                color: "#FFFFFF",
                backgroundColor: "#0F0E0E",
                verticalAlign: "center",
                transitionDuration: "0.3s",
                textTransform: "inherit",
                "&:hover": {
                  color: "#00FFFF",
                },
              }}
            >
              {page}
            </Button>
          ))}
          <Button
            variant="contained"
            onClick={handleClickNavItem("contactus")}
            disableRipple
            sx={{
              width: "128px",
              height: "40px",
              fontSize: "16px",
              fontWeight: 600,
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
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
