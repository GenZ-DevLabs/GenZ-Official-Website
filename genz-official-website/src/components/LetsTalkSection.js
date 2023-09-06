import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { HashLink } from "react-router-hash-link";

const LetsTalkSection = () => {
  return (
    <section id="letstalk">
      <Box
        paddingLeft={{ xs: "40px", md: "100px" }}
        paddingRight={{ xs: "40px", md: "0px" }}
        minHeight={{ xs: "60vh", md: "100vh" }}
        display="flex"
        alignItems="center"
        justifyContent="left"
        sx={{ backgroundColor: "#171616" }}
      >
        <Stack direction="column">
          <Typography
            sx={{
              color: "#FFFFFF",
              fontWeight: "700",
              fontSize: { xs: "40px", md: "70px" },
            }}
          >
            Let's{" "}
            <span
              style={{
                color: "#00FFFF",
              }}
            >
              Talk
              <br />
              About{" "}
            </span>
            your{" "}
            <span
              style={{
                color: "#00FFFF",
              }}
            >
              Product
            </span>
          </Typography>
          <Typography
            sx={{
              color: "#FFFFFF",
              fontWeight: "400",
              fontSize: { xs: "14px", md: "16px" },
              paddingBottom: "40px",
              display: "flex",
            }}
          >
            Our team is always excited to welcome new clients and engage with
            our community. Whether you're interested
            <br />
            in digital products or just have question,
            <br />
            we're here to help.
          </Typography>
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={2}
            display="flex"
          >
            <HashLink
              smooth
              to="contactus/#contactus"
              style={{ textDecoration: "none" }}
            >
              <Button
                variant="contained"
                disableRipple
                sx={{
                  width: { xs: "180px", md: "248px" },
                  height: { xs: "30px", md: "40px" },
                  fontSize: { xs: "14px", md: "20px" },
                  fontWeight: "500",
                  color: "#000000",
                  borderRadius: "50px",
                  backgroundColor: "#00FFFF",
                  verticalAlign: "center",
                  transitionDuration: "0.5s",
                  textTransform: "lowercase",
                  "&:hover": {
                    backgroundColor: "#59FFFF",
                  },
                }}
              >
                genzdevlabs@gmail.com
              </Button>
            </HashLink>
            <Button
              disableRipple
              sx={{
                width: { xs: "130px", md: "192px" },
                height: { xs: "30px", md: "40px" },
                fontSize: { xs: "14px", md: "20px" },
                fontWeight: "600",
                color: "#00FFFF",
                backgroundColor: "#121212",
                border: "2px solid #00FFFF",
                borderRadius: "50px",
                verticalAlign: "center",
                transitionDuration: "0.5s",
                "&:hover": {
                  border: "2px solid #59FFFF",
                  color: "#59FFFF",
                },
              }}
            >
              <a href="tel:+94701765144" style={{ textDecoration: "none" }}>
                <span style={{ color: "#00FFFF" }}>+94740412139</span>
              </a>
            </Button>
          </Stack>
        </Stack>
      </Box>
    </section>
  );
};

export default LetsTalkSection;
