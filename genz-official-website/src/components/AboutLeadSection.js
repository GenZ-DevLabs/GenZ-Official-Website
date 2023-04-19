import React from "react";
import { Grid, Typography, Stack, Box, Card } from "@mui/material";
import img_Chathumi_Fernando from "../assets/chathumiFernando.jpg";
import img_Janindu_Kulathilaka from "../assets/janinduKulathilaka.jpg";
import img_Mindula_Madhuhansa from "../assets/mindulaMadhuhansa.jpg";
import img_Sachitha_Jayasinghe from "../assets/sachithaJayasinghe.jpg";

const cardDetails = [
  {
    avatar: img_Janindu_Kulathilaka,
    post: "Chief Executive Officer",
    name: "Janindu Kulathilaka",
  },
  {
    avatar: img_Chathumi_Fernando,
    post: "Chief Operations Officer",
    name: "Chathumi Fernando",
  },
  {
    avatar: img_Mindula_Madhuhansa,
    post: "Chief Technical Officer",
    name: "Mindula Madhuhansa",
  },
  {
    avatar: img_Sachitha_Jayasinghe,
    post: "Cheif Information Officer",
    name: "Sachitha Jayasinghe",
  },
];

const AboutLeadSection = () => {
  return (
    <section id="about">
      <Grid
        container
        minHeight={{ xs: "210vh", md: "80vh" }}
        display="flex"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        sx={{ backgroundColor: "#171616" }}
      >
        <Stack>
          <Typography
            variant="h6"
            sx={{ color: "#FFFFFF", fontSize: "32px", fontWeight: "700" }}
          >
            <span>Our </span>
            <span style={{ color: "#00FFFF" }}>Leadership</span>
          </Typography>

          <Typography
            variant="body2"
            sx={{
              fontWeight: "400",
              fontSize: "16px",
              color: "#FFFFFF",
              marginBottom: "50px",
              padding: { xs: "0px 40px 40px 40px", md: "0px" },
            }}
          >
            Behind every successful endeavour lies a <br /> collective effort of
            extraordinary individuals. Meet the phenomenal team at GenZ, who
            embody <br /> the spirit of collaboration and determination in
            achieving greatness.
          </Typography>

          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={3}
            sx={{
              fontFamily: "Roboto",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
              fontStyle: "normal",
              color: "#1E1E1E",
            }}
          >
            {cardDetails.map((card, index) => (
              <Card
                key={index}
                sx={{
                  width: "280px",
                  height: "340px",
                  borderRadius: "15px 15px 0px 0px",
                  backgroundColor: "#1E1D1D",
                }}
              >
                <Box style={{ position: "relative" }}>
                  <Box
                    component={"img"}
                    src={card.avatar}
                    alt="photo"
                    style={{
                      width: "280px",
                      height: "340px",
                    }}
                  />
                  <Box
                    style={{
                      position: "absolute",
                      bottom: 0,
                      width: "280px",
                      height: "80px",
                      backgroundColor: "#00FFFF",
                      borderRadius: "50px 50px 0px 0px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Box>
                      <Box
                        style={{
                          fontWeight: "600",
                          fontSize: "18px",
                        }}
                      >
                        {card.post}
                      </Box>
                      <Box
                        style={{
                          fontWeight: "400",
                          fontSize: "14px",
                        }}
                      >
                        {card.name}
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Card>
            ))}
          </Stack>
        </Stack>
      </Grid>
    </section>
  );
};

export default AboutLeadSection;
