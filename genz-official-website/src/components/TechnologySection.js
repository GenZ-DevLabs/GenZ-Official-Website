import React from "react";
import { Paper, Grid, Stack, Typography, Box } from "@mui/material";
import Technologies from "../assets/technologies.png";

const TechnologySection = () => {
  return (
    <Grid
      container
      minHeight={{ xs: "60vh", sm: "80vh", md: "100vh" }}
      display="flex"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      sx={{ backgroundColor: "#1E1D1D" }}
    >
      <Stack direction="column" spacing={2}>
        <Typography
          sx={{
            color: "#FFFFFF",
            fontWeight: "700",
            fontSize: { xs: "26px", md: "32px" },
            padding: { xs: "0px 40px 0px 40px", md: "0px" },
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
            fontSize: { xs: "14px", md: "16px" },
            textAlign: "center",
            lineHeight: "20px",
            padding: { xs: "0px 40px 20px 40px", md: "0px 0px 40px 0px" },
          }}
        >
          Our expertise in the latest technologies allows us to deliver
          customized solutions that meet your unique needs and requirements.
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <Paper
            sx={{
              backgroundColor: "#272626",
              borderRadius: "16px",
              height: { xs: "180px", sm: "270px", md: "450px" },
              width: { xs: "320px", sm: "480px", md: "800px" },
            }}
          >
            <img
              src={Technologies}
              alt="technologies we use"
              height="100%"
              width="auto"
            />
          </Paper>
        </Box>
      </Stack>
    </Grid>
  );
};

export default TechnologySection;
