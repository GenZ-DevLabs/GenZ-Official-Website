import React from "react";
import { Grid, Typography, Stack } from "@mui/material";

const AboutLandingSection = () => {
  return (
    <section id="about">
      <Grid
        container
        minHeight={{ xs: "80vh", md: "100vh" }}
        display="flex"
        alignItems="center"
        justifyContent="left"
        sx={{ backgroundColor: "#121212" }}
      >
        <Stack
          sx={{
            width: { xs: "80%", md: "50%" },
            marginLeft: { xs: "40px", md: "100px" },
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: "#FFFFFF",
              fontSize: { xs: "40px", md: "48px", lg: "60px" },
              fontWeight: "700",
            }}
          >
            <span style={{ color: "#00FFFF" }}>GenZ DevLabs</span> is a<br />
            <span style={{ color: "#00FFFF" }}>Tech Driven</span> Company
          </Typography>

          <Typography
            variant="body2"
            sx={{
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: { xs: "14px", md: "16px" },
              color: "#FFFFFF",
              display: { xs: "none", sm: "block" },
            }}
          >
            We provides innovative technology solutions and services to business
            and individuals. Our team is made up diverse individuals who value
            collaboration, creativity, and excellence. We believe in building
            strong relationship with clients and partners based on integrity,
            transparency, and trust. At GenZ DevLabs, we strive to stay ahead of
            the curve in the ever-changing digital landscape, and our goal is to
            help our clients achieve their objectives through bespoke solutions.
            Whether you're a startup or a large corporation,
          </Typography>
          <Typography
            sx={{
              fontStyle: "normal",
              fontSize: { xs: "24px", md: "32px" },
              fontWeight: "700",
              color: "#FFFFFF",
            }}
          >
            <span style={{ color: "#00FFFF" }}>Committed </span>to Empowering
            <br />
            You to <span style={{ color: "#00FFFF" }}>Succeed </span>
            in the <span style={{ color: "#00FFFF" }}>Digital World</span>
          </Typography>
        </Stack>
      </Grid>
    </section>
  );
};

export default AboutLandingSection;
