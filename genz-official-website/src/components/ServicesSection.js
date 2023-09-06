import React from "react";
import {
  Grid,
  Stack,
  CardContent,
  Typography,
  Avatar,
  CardMedia,
  Card,
  Box,
} from "@mui/material";

import Code from "../assets/code.png";
import Phone from "../assets/phone.png";
import Brush from "../assets/brush.png";

const cardDetails = [
  {
    avatar: Code,
    title: "Web Applications Development",
    content:
      "Combines aesthetics and functionality to craft visually appealing and intuitive digital interfaces, enhancing user satisfaction and engagement.",
  },
  {
    avatar: Phone,
    title: "Mobile Applications Development",
    content:
      "Offering interactive and dynamic functionality for various online tasks, from social networking to productivity tools for the users.",
  },
  {
    avatar: Brush,
    title: "UI/UX<br/>Design",
    content:
      "Offering diverse features and services that cater to users' needs and preferences, spanning entertainment, productivity, and more.",
  },
  {
    avatar: Brush,
    title: "Software<br/>Solutions",
    content:
      "Designed to address specific problems or tasks, streamlining processes and enhancing efficiency across various industries and various users.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services">
      <Box sx={{ padding: "20px 0px 40px 0px", backgroundColor: "#171616" }}>
        <Grid
          container
          minHeight={{ md: "100vh" }}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Stack spacing={2}>
            <Typography
              sx={{
                color: "#FFFFFF",
                fontWeight: "700",
                fontSize: { xs: "26px", md: "32px" },
                textAlign: "center",
                paddingBottom: { xs: "10px", md: "0px" },
                paddingTop: { xs: "20px", md: "0px" },
              }}
              S
            >
              Our{" "}
              <span
                style={{
                  color: "#00FFFF",
                }}
              >
                Expertise
              </span>
            </Typography>
            <Typography
              sx={{
                color: "#FFFFFF",
                fontWeight: "400",
                fontSize: { xs: "14px", md: "16px" },
                textAlign: "center",
                lineHeight: "20px",
                padding: { xs: "0px 40px 20px 40px", md: "40px" },
              }}
            >
              Our expertise enables us to deliver innovative solutions and
              tackle
              <br />
              complex challenges with ease
            </Typography>
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={{ xs: 3, md: 4 }}
              sx={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {cardDetails.map((card, index) => (
                <Card
                  key={index}
                  elevation="3"
                  sx={{
                    height: "360px",
                    width: "300px",
                    borderRadius: "16px",
                    backgroundColor: "#1E1D1D",
                    transition: "transform 0.2s ease",
                    "&:hover": {
                      transform: "translateY(20px)",
                    },
                  }}
                >
                  <CardContent>
                    <CardMedia
                      sx={{
                        justifyContent: "center",
                        display: "flex",
                        marginTop: "24px",
                        marginBottom: "24px",
                      }}
                    >
                      <Avatar
                        alt={`Avatar for ${card.title}`}
                        src={card.avatar}
                      />
                    </CardMedia>

                    <Typography
                      sx={{
                        marginTop: "4px",
                        fontWeight: "700",
                        fontSize: "20px",
                        lineHeight: "24px",
                        textAlign: "center",
                        color: "#FFFFFF",
                        paddingBottom: "24px",
                      }}
                    >
                      <div dangerouslySetInnerHTML={{ __html: card.title }} />
                    </Typography>
                    <Typography
                      sx={{
                        marginTop: "24px",
                        fontWeight: "400",
                        fontSize: "16px",
                        color: "#FFFFFF",
                        textAlign: "center",
                      }}
                    >
                      <div dangerouslySetInnerHTML={{ __html: card.content }} />
                    </Typography>
                  </CardContent>
                  {/* <CardActions
                    sx={{ justifyContent: "center", display: "flex" }}
                  >
                    <Button
                      size="small"
                      variant="contained"
                      disableRipple
                      sx={{
                        width: "128px",
                        height: "32px",
                        fontSize: "16px",
                        color: "#1E1E1E",
                        fontWeight: "600",
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
                      Read More
                    </Button>
                  </CardActions> */}
                </Card>
              ))}
            </Stack>
          </Stack>
        </Grid>
      </Box>
    </section>
  );
};

export default ServicesSection;
