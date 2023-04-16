import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import ContactUsForm from "../components/ContactUsForm";

export const ContactUs = () => {
  return (
    <section id="contactus">
      <Stack
        direction={{ xs: "column", md: "row" }}
        paddingLeft={{ xs: "0px", md: "100px" }}
        minHeight="100vh"
        display="flex"
        alignItems="center"
        justifyContent={{ xs: "center", md: "left" }}
        sx={{ backgroundColor: "#0F0F0E" }}
      >
        <Grid container marginRight={{ md: "50px" }}>
          <Grid xs={12} sm={12} md={6} item>
            <Box
              textAlign={{ xs: "center", md: "left" }}
              marginTop={{ md: "160px" }}
            >
              <Stack>
                <Typography
                  sx={{
                    color: "#FFFFFF",
                    fontWeight: 700,
                    fontSize: { xs: "48px", lg: "70px" },
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
                    lineHeight: "20px",
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
          </Grid>
          <Grid
            xs={12}
            sm={12}
            md={6}
            item
            display="flex"
            justifyContent={{ xs: "center", lg: "left" }}
            alignItems="center"
          >
            <Card
              component="form"
              sx={{
                marginTop: { xs: "20px", md: "80px" },
                width: { xs: "340px", md: "610px" },
                height: { xs: "auto", md: "550px" },
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
      </Stack>
    </section>
  );
};
