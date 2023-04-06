import React from "react";
import { Grid, Typography, Stack } from "@mui/material";

const AboutLandingSection = () => {
  return (
    <section id="about">
      <Grid
        container
        spacing={2}
        paddingLeft="100px"
        minHeight="100vh"
        display="flex"
        alignItems="center"
        justifyContent="left"
        sx={{ backgroundColor: "#121212" }}
      >
        <Stack sx={{ height: "auto", width: "50%" }}>
          <Typography
            variant="h6"
            sx={{ color: "#FFFFFF", fontSize: "48px", fontWeight: "700" }}
          >
            <span style={{ color: "#00FFFF" }}>GenZ DevLabs</span> is a<br />
            <span style={{ color: "#00FFFF" }}>Tech Driven</span> Company
          </Typography>

          <Typography
            variant="body2"
            sx={{
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "20px",
              color: "#FFFFFF",
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
              fontSize: "32px",
              fontWeight: "700",
              color: "#FFFFFF",
            }}
          >
            We are <span style={{ color: "#00FFFF" }}>Committed </span>to
            Empowering
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
