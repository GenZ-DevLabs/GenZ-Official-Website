import React from "react";
import { Box, Stack, Typography } from "@mui/material";

export const TechnologySection = () => {
  return (
    <Box
      minHeight="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{ backgroundColor: "#1E1D1D" }}
    >
      <Stack direction="column" spacing={2}>
        <Typography
          sx={{
            color: "#FFFFFF",
            fontWeight: 700,
            fontSize: "32px",
            textAlign: "center",
          }}
        >
          Expertise{" "}
          <span
            style={{
              color: "#00FFFF",
              fontWeight: 700,
              fontSize: "32px",
            }}
          >
            In{" "}
          </span>
          Latest{" "}
          <span
            style={{
              color: "#00FFFF",
              fontWeight: 700,
              fontSize: "32px",
            }}
          >
            Technologies
          </span>
        </Typography>
        <Typography
          sx={{
            color: "#FFFFFF",
            fontWeight: 400,
            fontSize: "16px",
            textAlign: "center",
            lineHeight: "20px",
          }}
        >
          Our expertise in the latest technologies allows us to deliver
          customized solutions
          <br />
          that meet your unique needs and requirements.
        </Typography>
        <Box
          sx={{
            backgroundColor: "#272626",
            borderRadius: "16px",
            height: "400px",
            width: "640px",
          }}
        ></Box>
      </Stack>
    </Box>
  );
};
