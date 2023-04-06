import React from "react";
import { Paper, Grid, Stack, Typography } from "@mui/material";
import Technologies from "../assets/technologies.png";

const TechnologySection = () => {
  return (
    <Grid
      container
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
            fontWeight: "700",
            fontSize: "32px",
            textAlign: "center",
          }}
        >
          Expertise{" "}
          <span
            style={{
              color: "#00FFFF",
            }}
          >
            In{" "}
          </span>
          Latest{" "}
          <span
            style={{
              color: "#00FFFF",
            }}
          >
            Technologies
          </span>
        </Typography>
        <Typography
          sx={{
            color: "#FFFFFF",
            fontWeight: "400",
            fontSize: "16px",
            textAlign: "center",
            lineHeight: "20px",
            paddingBottom: "40px",
          }}
        >
          Our expertise in the latest technologies allows us to deliver
          customized solutions
          <br />
          that meet your unique needs and requirements.
        </Typography>
        <Paper
          elevation={3}
          sx={{
            backgroundColor: "#272626",
            borderRadius: "16px",
            height: "450px",
            width: "800px",
          }}
        >
          <img
            src={Technologies}
            alt="technogies we use"
            height="450px"
            width="800px"
          />
        </Paper>
      </Stack>
    </Grid>
  );
};

export default TechnologySection;
