import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import ContactUsForm from "../components/ContactUsForm";

export const ContactUs = () => {
  return (
    <Box
      paddingLeft="100px"
      minHeight="100vh"
      display="flex"
      alignItems="center"
      justifyContent="left"
      sx={{ backgroundColor: "#0F0F0E" }}
    >
      <Grid container>
        <Grid xs={12} sm={6} item>
          <div
            style={{
              marginTop: "160px",
              display: "flex",
              justifyContent: "left",
              alignItems: "center",
            }}
          >
            <Box>
              <Stack>
                <Typography
                  sx={{
                    color: "#FFFFFF",
                    fontWeight: 700,
                    fontSize: "48px",
                  }}
                >
                  Let's{" "}
                  <span
                    style={{
                      color: "#00FFFF",
                    }}
                  >
                    Talk
                  </span>
                </Typography>
              </Stack>
              <Stack>
                <Typography
                  sx={{
                    color: "#FFFFFF",
                    fontWeight: 400,
                    fontSize: "16px",
                    textAlign: "left",
                    lineHeight: "20px",
                    paddingBottom: "40px",
                  }}
                >
                  Our team is always excited to welcome new clients
                  <br />
                  and engage with our community. Whether you're interested{" "}
                  <br />
                  in digital products or just have question, <br />
                  we're here to help.
                </Typography>
              </Stack>
            </Box>
          </div>
        </Grid>
        <Grid xs={12} sm={6} item>
          <Card
            component="form"
            sx={{
              marginTop: "80px",
              width: "610px",
              height: "550px",
              backgroundColor: "#171616",
              borderRadius: "16px",
            }}
          >
            <CardContent>
              <ContactUsForm />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};
