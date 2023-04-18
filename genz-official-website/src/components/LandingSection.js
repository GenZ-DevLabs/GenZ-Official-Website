import React from "react";
import { Stack, Typography, Button, Grid } from "@mui/material";
import { TypeAnimation } from "react-type-animation";
import { HashLink } from "react-router-hash-link";

const LandingSection = () => {
  return (
    <section id="landing">
      <Grid
        container
        spacing={2}
        paddingLeft={{ xs: "80px", md: "100px" }}
        minHeight={{ xs: "100vh", md: "100vh" }}
        display="flex"
        alignItems="center"
        justifyContent="left"
        sx={{ backgroundColor: "#121212" }}
      >
        <Stack spacing={2}>
          <Stack>
            <Typography
              sx={{
                color: "#FFFFFF",
                fontWeight: "600",
                fontSize: { xs: "40px", md: "70px" },
              }}
            >
              Innovating for{" "}
              <span
                style={{
                  color: "#00FFFF",
                }}
              >
                GenZ
              </span>
              's
              <br />
              <span
                style={{
                  color: "#00FFFF",
                }}
              >
                Digital{" "}
              </span>
              Future
            </Typography>
          </Stack>
          <Stack>
            <Typography
              sx={{
                fontSize: { xs: "16px", md: "20px" },
                fontWeight: "400",
                color: "#FFFFFF",
              }}
            >
              A team of talented engineers,
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "20px", md: "24px" },
                fontWeight: "600",
                color: "#FFFFFF",
              }}
            >
              Experts in{" "}
              <span style={{ color: "#00FFFF" }}>
                <TypeAnimation
                  sequence={[
                    "Web Applications",
                    3000,
                    "Mobile Applications",
                    3000,
                    "UI/UX Designing",
                    3000,
                  ]}
                  repeat={Infinity}
                />
              </span>
            </Typography>
          </Stack>
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={{ xs: 1.5, md: 2 }}
          >
            <HashLink smooth to="/#services">
              <Button
                variant="contained"
                disableRipple
                sx={{
                  width: { xs: "130px", md: "172px" },
                  height: { xs: "30px", md: "40px" },
                  fontSize: { xs: "16px", md: "20px" },
                  fontWeight: "500",
                  color: "#000000",
                  borderRadius: "50px",
                  backgroundColor: "#00FFFF",
                  verticalAlign: "center",
                  transitionDuration: "0.5s",
                  textTransform: "inherit",
                  "&:hover": {
                    backgroundColor: "#59FFFF",
                  },
                }}
              >
                See Our Work
              </Button>
            </HashLink>
            <HashLink smooth to="contactus">
              <Button
                disableRipple
                sx={{
                  width: { xs: "100px", md: "128px" },
                  height: { xs: "30px", md: "40px" },
                  fontSize: { xs: "16px", md: "20px" },
                  fontWeight: "500",
                  backgroundColor: "#121212",
                  border: "2px solid #00FFFF",
                  color: "#00FFFF",
                  borderRadius: "50px",
                  verticalAlign: "center",
                  transitionDuration: "0.5s",
                  textTransform: "inherit",
                  "&:hover": {
                    border: "2px solid #59FFFF",
                    color: "#59FFFF",
                  },
                }}
              >
                Let's Talk
              </Button>
            </HashLink>
          </Stack>
        </Stack>
      </Grid>
    </section>
  );
};

export default LandingSection;
