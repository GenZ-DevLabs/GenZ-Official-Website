import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { TypeAnimation } from "react-type-animation";

export const LandingSection = () => {
  return (
    <Box
      paddingLeft="100px"
      minHeight="100vh"
      display="flex"
      alignItems="center"
      justifyContent="left"
      sx={{ backgroundColor: "#121212" }}
    >
      <Stack direction="column" spacing={2}>
        <Stack>
          <Typography
            sx={{
              color: "#FFFFFF",
              fontWeight: 600,
              fontSize: "70px",
            }}
          >
            Innovating for{" "}
            <span
              style={{
                color: "#00FFFF",
                fontWeight: 600,
                fontSize: "70px",
              }}
            >
              GenZ
            </span>
            's
            <br />
            <span
              style={{
                color: "#00FFFF",
                fontWeight: 600,
                fontSize: "70px",
              }}
            >
              Digital{" "}
            </span>
            Future
          </Typography>
        </Stack>
        <Stack>
          <Typography
            sx={{ fontSize: "20px", fontWeight: 400, color: "#FFFFFF" }}
          >
            We are team of talented engineers,
          </Typography>
          <Typography
            sx={{ fontSize: "24px", fontWeight: 600, color: "#FFFFFF" }}
          >
            And we are experts in{" "}
            <span
              style={{ fontSize: "24px", fontWeight: 600, color: "#00FFFF" }}
            >
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
          <Button
            variant="contained"
            disableRipple
            sx={{
              width: "172px",
              height: "40px",
              fontSize: "16px",
              fontWeight: 600,
              color: "#000000",
              borderRadius: "50px",
              backgroundColor: "#00FFFF",
              verticalAlign: "center",
              transitionDuration: "0.5s",
              "&:hover": {
                backgroundColor: "#59FFFF",
              },
            }}
          >
            See Our Work
          </Button>
          <Button
            disableRipple
            sx={{
              width: "128px",
              height: "40px",
              fontSize: "16px",
              fontWeight: 600,
              backgroundColor: "#121212",
              border: "2px solid #00FFFF",
              color: "#00FFFF",
              borderRadius: "50px",
              verticalAlign: "center",
              transitionDuration: "0.5s",
              "&:hover": {
                border: "2px solid #59FFFF",
                color: "#59FFFF",
              },
            }}
          >
            Let's Talk
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};
