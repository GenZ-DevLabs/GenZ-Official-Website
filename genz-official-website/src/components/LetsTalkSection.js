import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const LetsTalkSection = () => {
  return (
    <div id="contactus-section">
      <Box
        paddingLeft="100px"
        minHeight="100vh"
        display="flex"
        alignItems="center"
        justifyContent="left"
        sx={{ backgroundColor: "#171616" }}
      >
        <Stack direction="column">
          <Typography
            sx={{
              color: "#FFFFFF",
              fontWeight: 700,
              fontSize: "40px",
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
              fontWeight: 400,
              fontSize: "16px",
              paddingBottom: "40px",
            }}
          >
            Our team is always excited to welcome new clients
            <br />
            and engage with our community. Whether you're interested
            <br />
            in digital products or just have question,
            <br />
            we're here to help.
          </Typography>
          <Stack direction="row" spacing={2}>
            <Link to="/contactus">
              <Button
                variant="contained"
                disableRipple
                sx={{
                  width: "200px",
                  height: "40px",
                  fontSize: "20px",
                  fontWeight: 500,
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
                hello@genz.com
              </Button>
            </Link>
            <Button
              disableRipple
              sx={{
                width: "192px",
                height: "40px",
                fontSize: "20px",
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
              +94 12 345 6789
            </Button>
          </Stack>
        </Stack>
      </Box>
    </div>
  );
};

export default LetsTalkSection;
