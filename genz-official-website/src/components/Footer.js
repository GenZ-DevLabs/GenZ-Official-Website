import React from "react";
import { Grid, Box, IconButton, Typography } from "@mui/material";
import Logo from "../assets/genzFooterLogo.png";
import { HashLink } from "react-router-hash-link";
import styled from "@emotion/styled";

const StyledTypo = styled(Typography)({
  fontSize: "16px",
  color: "#FFFFFF",
  "&:hover": {
    color: "#00FFFF",
  },
});

export const Footer = () => {
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
            <HashLink to="/#landing">
              <IconButton>
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
            </HashLink>
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
              variant="h6"
              sx={{ marginTop: "60px", color: "#00FFFF" }}
            >
              GenZ DevLabs
            </Typography>

            <HashLink smooth to="/#landing" style={{ textDecoration: "none" }}>
              <StyledTypo sx={{ marginTop: "20px" }}>Home</StyledTypo>
            </HashLink>

            <HashLink smooth to="/about" style={{ textDecoration: "none" }}>
              <StyledTypo sx={{ marginTop: "8px" }}>About</StyledTypo>
            </HashLink>

            <HashLink
              smooth
              to="contactus/#contactus"
              style={{ textDecoration: "none" }}
            >
              <StyledTypo sx={{ marginTop: "8px" }}>Contact Us</StyledTypo>
            </HashLink>
          </Grid>
          <Grid item sm={12} md={6} lg={2} sx={{ color: "#FFFFFF" }}>
            <Typography
              variant="h6"
              sx={{ marginTop: "60px", color: "#00FFFF" }}
            >
              Our Services
            </Typography>

            <HashLink smooth to="/#services" style={{ textDecoration: "none" }}>
              <StyledTypo
                sx={{ marginTop: "20px", "&:hover": { color: "#00FFFF" } }}
              >
                Web Applications
              </StyledTypo>

              <StyledTypo
                sx={{ marginTop: "8px", "&:hover": { color: "#00FFFF" } }}
              >
                Mobile Applications
              </StyledTypo>

              <StyledTypo
                sx={{ marginTop: "8px", "&:hover": { color: "#00FFFF" } }}
              >
                UI/UX Designs
              </StyledTypo>
            </HashLink>
          </Grid>

          <Grid item sm={12} md={6} lg={2} sx={{ color: "#FFFFFF" }}>
            <Typography
              variant="h6"
              sx={{ marginTop: "60px", color: "#00FFFF" }}
            >
              Social Media
            </Typography>
            <a
              style={{ textDecoration: "none" }}
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              <StyledTypo sx={{ marginTop: "20px" }}> LinkedIn </StyledTypo>
            </a>
            <a
              style={{ textDecoration: "none" }}
              href="https://www.twitter.com/"
              target="_blank"
              rel="noreferrer"
            >
              <StyledTypo sx={{ marginTop: "8px" }}> Twitter </StyledTypo>
            </a>
            <a
              style={{ textDecoration: "none" }}
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              <StyledTypo sx={{ marginTop: "8px" }}> Facebook </StyledTypo>
            </a>
            <a
              style={{ textDecoration: "none" }}
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              <StyledTypo sx={{ marginTop: "8px" }}> Instagram </StyledTypo>
            </a>
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
