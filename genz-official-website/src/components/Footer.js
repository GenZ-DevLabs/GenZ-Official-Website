import React from "react";
import { Grid, Box, IconButton, Typography } from "@mui/material";
import Logo from "../assets/genzFooterLogo.png";
import { Link } from "react-router-dom";
import "./Footer.css";
import { color } from "@mui/system";

export const Footer = () => {
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
    <div>
      <Box
        sx={{
          backgroundColor: "#121212",
          margin: "0px",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid container display="flex">
          <Grid item sm={12} md={12} lg={6}>
            <Link to="/">
              <IconButton onClick={handleClickNavItem("home")}>
                <Box
                  component="img"
                  margin="0"
                  sx={{
                    marginLeft: "80px",
                    marginTop: "10px",
                    height: "180px",
                    width: "180px",
                  }}
                  alt="genz logo"
                  src={Logo}
                />
              </IconButton>
            </Link>
            <Typography
              sx={{
                marginLeft: "100px",
                marginRight: "100px",
                color: "#FFFFFF",
                fontSize: "14px",
                marginBottom: "40px",
              }}
            >
              At GenZ, we're harnessing the power of cutting-edge technology to
              create innovative solutions that drive business success and
              empower the next generations of digital natives.
            </Typography>
          </Grid>
          <Grid item xm={12} sm={12} md={6} lg={2} sx={{ color: "#FFFFFF" }}>
            <Typography
              variant="h5"
              sx={{ marginTop: "60px", color: "#00FFFF" }}
            >
              Company
            </Typography>
            <Link to="/" sx={{ textDecoration: "none" }} className="link-style">
              <Typography
                sx={{ marginTop: "20px" }}
                onClick={handleClickNavItem("home")}
              >
                Home
              </Typography>
            </Link>
            <Link to="/contactus" className="link-style">
              <Typography
                sx={{ marginTop: "8px" }}
                onClick={handleClickNavItem("contactus")}
              >
                Contact Us
              </Typography>
            </Link>
            <Link to="/about" className="link-style">
              <Typography
                sx={{ marginTop: "8px" }}
                onlclick={handleClickNavItem("about")}
              >
                About
              </Typography>
            </Link>
          </Grid>
          <Grid item sm={12} md={6} lg={2} sx={{ color: "#FFFFFF" }}>
            <Typography
              variant="h5"
              sx={{ marginTop: "60px", color: "#00FFFF" }}
            >
              Our Services
            </Typography>
            <Link className="link-style">
              <Typography sx={{ marginTop: "20px" }}>
                Web Applications
              </Typography>
            </Link>
            <Link className="link-style">
              <Typography sx={{ marginTop: "8px" }}>
                Mobile Applications
              </Typography>
            </Link>
            <Link className="link-style">
              <Typography sx={{ marginTop: "8px" }}> UI/UX Designs </Typography>
            </Link>
          </Grid>
          <Grid item sm={12} md={6} lg={2} sx={{ color: "#FFFFFF" }}>
            <Typography
              variant="h5"
              sx={{ marginTop: "60px", color: "#00FFFF" }}
            >
              Social Media
            </Typography>
            <Link className="link-style">
              <Typography sx={{ marginTop: "20px" }}> LinkedIn </Typography>
            </Link>
            <Link className="link-style">
              <Typography sx={{ marginTop: "8px" }}> Twitter </Typography>
            </Link>
            <Link className="link-style">
              <Typography sx={{ marginTop: "8px" }}> Facebook </Typography>
            </Link>
            <Link className="link-style">
              <Typography sx={{ marginTop: "8px" }}> Instagram </Typography>
            </Link>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          backgroundColor: "#0F0E0E",
          margin: "0px",
          width: "100%",
          height: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            color: "#FFFFFF",
            fontSize: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            opacity: "50%",
          }}
        >
          &copy; Copyright 2023 by GenZ DevLabs. All Rights Reserved.
        </Typography>
      </Box>
    </div>
  );
};
