import React from "react";
import {
  Box,
  Stack,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Avatar,
  CardMedia,
} from "@mui/material";

import Code from "../assets/code.png";
import Phone from "../assets/phone.png";
import Brush from "../assets/brush.png";

const cardDetails = [
  {
    avatar: Code,
    title: "Web Applications Development",
    content:
      "We are using ReactJS, Angular, HTML, CSS, JavaScript, Bootstrap, Rest API, Django, Java, etc to develop Web Applications.",
  },
  {
    avatar: Phone,
    title: "Mobile Applications Development",
    content:
      "We are mainly using React Native, Flutter to develop Mobile Applications.",
  },
  {
    avatar: Brush,
    title: "UI/UX<br/>Design",
    content:
      "We are mainly using Figma and Adobe XD to design UI/<br/>UX Designs",
  },
];

const ServicesSection = () => {
  return (
    <div id="services-section">
      <Box
        minHeight="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{ backgroundColor: "#171616" }}
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
              fontWeight: 400,
              fontSize: "16px",
              textAlign: "center",
              lineHeight: "20px",
              paddingBottom: "40px",
            }}
          >
            Our expertise enables us to deliver innovative solutions and tackle
            <br />
            complex challenges with ease
          </Typography>
          <Stack
            direction="row"
            spacing={4}
            sx={{
              justifyContent: "center",
              display: "flex",
            }}
          >
            {cardDetails.map((card, index) => (
              <Card
                key={index}
                sx={{
                  height: "360px",
                  width: "300px",
                  borderRadius: "16px",
                  backgroundColor: "#1E1D1D",
                }}
              >
                <CardMedia
                  sx={{
                    justifyContent: "center",
                    display: "flex",
                    marginTop: "24px",
                  }}
                >
                  <Avatar alt={`Avatar for ${card.title}`} src={card.avatar} />
                </CardMedia>
                <CardContent sx={{ textAlign: "center", height: "180px" }}>
                  <Typography
                    sx={{
                      marginTop: "4px",
                      fontWeight: 700,
                      fontSize: "20px",
                      lineHeight: "24px",
                      textAlign: "center",
                      color: "#FFFFFF",
                    }}
                  >
                    <div dangerouslySetInnerHTML={{ __html: card.title }} />
                  </Typography>
                  <Typography
                    sx={{
                      marginTop: "24px",
                      fontWeight: 400,
                      fontSize: "16px",
                      color: "#FFFFFF",
                      textAlign: "center",
                    }}
                  >
                    <div dangerouslySetInnerHTML={{ __html: card.content }} />
                  </Typography>
                </CardContent>{" "}
                <CardActions sx={{ justifyContent: "center", display: "flex" }}>
                  <Button
                    size="small"
                    variant="contained"
                    disableRipple
                    sx={{
                      width: "128px",
                      height: "32px",
                      fontSize: "16px",
                      color: "#1E1E1E",
                      fontWeight: 600,
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
                </CardActions>
              </Card>
            ))}
          </Stack>
        </Stack>
      </Box>
    </div>
  );
};

export default ServicesSection;
