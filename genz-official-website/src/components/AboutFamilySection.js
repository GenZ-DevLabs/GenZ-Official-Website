import React from "react";
import { Grid, Typography, Stack } from "@mui/material";

const AboutFamilySection = () => {
  return (
    <section id="about">
      <Grid
        container
        spacing={2}
        paddingLeft="100px"
        minHeight="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        paddingBottom="100px"
        sx={{ backgroundColor: "#1E1D1D", paddingTop: "50px" }}
      >
        <Stack
          sx={{
            height: "auto",
            width: "50%",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: "#FFFFFF",
              fontSize: "32px",
              fontWeight: "700",
              fontFamily: "Roboto",
              fontStyle: "normal",
            }}
          >
            <span>GenZ </span>
            <span style={{ color: "#00FFFF" }}>Family</span>
          </Typography>

          <Typography
            variant="body2"
            sx={{
              fontfamily: "Roboto",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "16px",
              color: "#FFFFFF",
            }}
          >
            At GenZ, we recognize that our greatest asset is our people, and we
            are dedicated to cultivating a culture that puts their well-being at
            the forefront. By fostering an atmosphere of transparency,
            accountability, and positivity, we create a space where our team can
            thrive and contribute their unique talents to our shared mission.
          </Typography>
        </Stack>
        <div style={{ marginTop: "100px" }}>
          <CardsContainer />
          <div style={{ marginTop: "20px" }}>
            <CardsContainer />
          </div>
        </div>
      </Grid>
    </section>
  );
};

const Card = () => {
  return (
    <div
      style={{
        width: "300px",
        height: "300px",
        background: "#292929",
        borderRadius: "15px",
      }}
    >
      {/* Add content of the card here */}
    </div>
  );
};

const CardsContainer = () => {
  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      spacing={{ xs: 3, md: 4 }}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      {[...Array(4)].map((_, index) => (
        <Card key={index} />
      ))}
    </Stack>
  );
};

export default AboutFamilySection;
