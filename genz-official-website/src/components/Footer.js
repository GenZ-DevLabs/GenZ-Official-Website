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
          paddingBottom: { xs: "20px", md: "0px" },
        }}
      >
        <Grid container display="flex">
          <Grid item sm={12} md={12} lg={6} textAlign={"center"}>
            <HashLink to="/#landing">
              <IconButton>
                <Box
                  component="img"
                  margin="0"
                  sx={{
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
                marginLeft: { xs: "50px", md: "150px" },
                marginRight: { xs: "50px", md: "150px" },
                color: "#FFFFFF",
                fontSize: "13px",
                marginBottom: { xs: "0px", md: "30px" },
              }}
            >
              At GenZ, we're harnessing the power of cutting-edge technology to
              create innovative solutions that drive business success and
              empower the next generations of digital natives.
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            lg={2}
            sx={{ color: "#FFFFFF" }}
            textAlign={"center"}
          >
            <Typography
              variant="h6"
              sx={{
                marginTop: { xs: "40px", md: "60px" },
                color: "#00FFFF",
                fontSize: { xs: "16px", md: "20px" },
              }}
            >
              GenZ DevLabs
            </Typography>

            <HashLink smooth to="/#landing" style={{ textDecoration: "none" }}>
              <StyledTypo
                sx={{
                  marginTop: { xs: "10px", md: "20px" },
                  fontSize: { xs: "13px", md: "14px" },
                }}
              >
                Home
              </StyledTypo>
            </HashLink>

            <HashLink smooth to="/about" style={{ textDecoration: "none" }}>
              <StyledTypo
                sx={{
                  marginTop: { xs: "6px", md: "8px" },
                  fontSize: { xs: "13px", md: "14px" },
                }}
              >
                About
              </StyledTypo>
            </HashLink>

            <HashLink
              smooth
              to="contactus/#contactus"
              style={{ textDecoration: "none" }}
            >
              <StyledTypo
                sx={{
                  marginTop: { xs: "6px", md: "8px" },
                  fontSize: { xs: "13px", md: "14px" },
                }}
              >
                Contact Us
              </StyledTypo>
            </HashLink>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            lg={2}
            sx={{ color: "#FFFFFF" }}
            textAlign={"center"}
          >
            <Typography
              variant="h6"
              sx={{
                marginTop: { xs: "40px", md: "60px" },
                color: "#00FFFF",
                fontSize: { xs: "16px", md: "20px" },
              }}
            >
              Our Services
            </Typography>

            <HashLink smooth to="/#services" style={{ textDecoration: "none" }}>
              <StyledTypo
                sx={{
                  marginTop: { xs: "10px", md: "20px" },
                  fontSize: { xs: "13px", md: "14px" },
                }}
              >
                Web Applications
              </StyledTypo>

              <StyledTypo
                sx={{
                  marginTop: { xs: "6px", md: "8px" },
                  fontSize: { xs: "13px", md: "14px" },
                }}
              >
                Mobile Applications
              </StyledTypo>

              <StyledTypo
                sx={{
                  marginTop: { xs: "6px", md: "8px" },
                  fontSize: { xs: "13px", md: "14px" },
                }}
              >
                UI/UX Designs
              </StyledTypo>
            </HashLink>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            lg={2}
            sx={{ color: "#FFFFFF" }}
            textAlign={"center"}
          >
            <Typography
              sx={{
                marginTop: { xs: "40px", md: "60px" },
                color: "#00FFFF",
                fontSize: { xs: "16px", md: "20px" },
              }}
            >
              Social Media
            </Typography>
            <a
              style={{ textDecoration: "none" }}
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              <StyledTypo
                sx={{
                  marginTop: { xs: "10px", md: "20px" },
                  fontSize: { xs: "13px", md: "14px" },
                }}
              >
                {" "}
                LinkedIn{" "}
              </StyledTypo>
            </a>
            <a
              style={{ textDecoration: "none" }}
              href="https://www.twitter.com/"
              target="_blank"
              rel="noreferrer"
            >
              <StyledTypo
                sx={{
                  marginTop: { xs: "6px", md: "8px" },
                  fontSize: { xs: "13px", md: "14px" },
                }}
              >
                {" "}
                Twitter{" "}
              </StyledTypo>
            </a>
            <a
              style={{ textDecoration: "none" }}
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              <StyledTypo
                sx={{
                  marginTop: { xs: "6px", md: "8px" },
                  fontSize: { xs: "13px", md: "14px" },
                }}
              >
                {" "}
                Facebook{" "}
              </StyledTypo>
            </a>
            <a
              style={{ textDecoration: "none" }}
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              <StyledTypo
                sx={{
                  marginTop: { xs: "6px", md: "8px" },
                  fontSize: { xs: "13px", md: "14px" },
                }}
              >
                {" "}
                Instagram{" "}
              </StyledTypo>
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
            fontSize: { xs: "10px", md: "12px" },
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
