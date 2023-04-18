import React from "react";
import { Grid, Typography, Stack, Box, Card } from "@mui/material";
import p1 from "../assets/teamPhotos/1.jpg";
import p2 from "../assets/teamPhotos/2.jpg";
import p3 from "../assets/teamPhotos/3.jpg";
import p4 from "../assets/teamPhotos/4.jpg";
import p5 from "../assets/teamPhotos/5.jpg";
import p6 from "../assets/teamPhotos/6.jpg";
import p7 from "../assets/teamPhotos/7.jpg";
import p8 from "../assets/teamPhotos/8.jpg";

const AboutFamilySection = () => {
  return (
    <section id="about">
      <Grid
        container
        minHeight={{ xs: "350vh", md: "100vh" }}
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{ backgroundColor: "#1E1D1D" }}
      >
        <Stack
          sx={{
            width: { xs: "80%", md: "50%" },
            textAlign: "center",
            fontFamily: "Roboto",
            fontStyle: "normal",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: "#FFFFFF",
              fontSize: "32px",
              fontWeight: "700",
            }}
          >
            <span>GenZ </span>
            <span style={{ color: "#00FFFF" }}>Family</span>
          </Typography>

          <Typography
            variant="body2"
            sx={{
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
        <Stack width="80%">
          <CardsContainer1 />
          <CardsContainer2 />
        </Stack>
      </Grid>
    </section>
  );
};

const cardDetails1 = [
  { photo: p1 },
  { photo: p2 },
  { photo: p3 },
  { photo: p4 },
];

const cardDetails2 = [
  { photo: p5 },
  { photo: p6 },
  { photo: p7 },
  { photo: p8 },
];

const CardsContainer1 = () => {
  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      spacing={2}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        marginBottom: "20px",
      }}
    >
      {cardDetails1.map((card, index) => (
        <Card
          key={index}
          sx={{
            width: "300px",
            height: "300px",
            borderRadius: "15px",
          }}
        >
          <Box style={{ position: "relative" }}>
            <Box
              component={"img"}
              src={card.photo}
              alt="photo"
              style={{
                width: "auto",
                height: "300px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            />
          </Box>
        </Card>
      ))}
    </Stack>
  );
};

const CardsContainer2 = () => {
  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      spacing={2}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        marginBottom: "20px",
      }}
    >
      {cardDetails2.map((card, index) => (
        <Card
          key={index}
          sx={{
            width: "300px",
            height: "300px",
            borderRadius: "15px",
          }}
        >
          <Box style={{ position: "relative" }}>
            <Box
              component={"img"}
              src={card.photo}
              alt="photo"
              style={{
                width: "auto",
                height: "300px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            />
          </Box>
        </Card>
      ))}
    </Stack>
  );
};

export default AboutFamilySection;
