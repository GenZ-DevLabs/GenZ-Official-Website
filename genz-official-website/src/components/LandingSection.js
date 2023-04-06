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
        paddingLeft="100px"
        minHeight="100vh"
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
                fontSize: "70px",
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
              sx={{ fontSize: "20px", fontWeight: "400", color: "#FFFFFF" }}
            >
              We are team of talented engineers,
            </Typography>
            <Typography
              sx={{ fontSize: "24px", fontWeight: "600", color: "#FFFFFF" }}
            >
              And we are experts in{" "}
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
          <Stack direction="row" spacing={2}>
            <HashLink smooth to="/#services">
              <Button
                variant="contained"
                disableRipple
                sx={{
                  width: "172px",
                  height: "40px",
                  fontSize: "20px",
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
                  width: "128px",
                  height: "40px",
                  fontSize: "20px",
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
