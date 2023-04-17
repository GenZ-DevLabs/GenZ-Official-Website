import React from "react";
import { Grid, Typography, Stack } from "@mui/material";
import img_Chathumi_Fernando from "../assets/chathumiFernando.jpg"
import img_Janindu_Kulathilaka from "../assets/janinduKulathilaka.jpg"
import img_Mindula_Madhuhansa from "../assets/mindulaMadhuhansa.jpg"
import img_Sachitha_Jayasinghe from "../assets/sachithaJayasinghe.jpg"

const AboutLeadSection = () => {
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
        sx={{ backgroundColor: "#171616", paddingTop: "50px" }}
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
            sx={{ color: "#FFFFFF", fontSize: "32px", fontWeight: "700" }}
          >
            <span>Our </span>
            <span style={{ color: "#00FFFF" }}>Leadership</span>
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
            Behind every successful endeavour lies a collective effort of
            extraordinary individuals. Meet the phenomenal team at GenZ, who
            embody the spirit of collaboration and determination in achieving
            greatness.
          </Typography>
          <Grid
            item
            xs={12}
            display="flex"
            justifyContent="center"
            marginTop="40px"
          >
            <div style={{ position: "relative" }}>
              <img
                src={img_Janindu_Kulathilaka}
                alt="Photo 1"
                style={{
                  width: "280px",
                  height: "340px",
                  background: "#1E1D1D",
                  borderRadius: "15px 15px 0px 0px",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 4,
                  left: 0,
                  width: "280px",
                  height: "80px",
                  backgroundColor: "#00FFFF",
                  borderRadius: "50px 50px 0px 0px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: "Roboto",
                      fontStyle: "normal",
                      fontWeight: "600",
                      fontSize: "20px",
                      color: "#1E1E1E",
                    }}
                  >
                    Chief Executive Officer
                  </div>
                  <div
                    style={{
                      fontFamily: "Roboto",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "15px",
                      color: "#1E1E1E",
                    }}
                  >
                    Janindu Kulathilaka
                  </div>
                </div>
              </div>
            </div>
            <div style={{ position: "relative" }}>
              <img
                src={img_Chathumi_Fernando}
                alt="Photo 2"
                style={{
                  width: "280px",
                  height: "340px",
                  background: "#1E1D1D",
                  borderRadius: "15px 15px 0px 0px",
                  marginLeft: "20px",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 4,
                  left: 20,
                  width: "280px",
                  height: "80px",
                  backgroundColor: "#00FFFF",
                  borderRadius: "50px 50px 0px 0px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: "Roboto",
                      fontStyle: "normal",
                      fontWeight: "600",
                      fontSize: "20px",
                      color: "#1E1E1E",
                    }}
                  >
                    Chief Operations Officer
                  </div>
                  <div
                    style={{
                      fontFamily: "Roboto",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "15px",
                      color: "#1E1E1E",
                    }}
                  >
                    Chathumi Fernando
                  </div>
                </div>
              </div>
            </div>
            <div style={{ position: "relative" }}>
              <img
                src={img_Mindula_Madhuhansa}
                alt="Photo 3"
                style={{
                  width: "280px",
                  height: "340px",
                  background: "#1E1D1D",
                  borderRadius: "15px 15px 0px 0px",
                  marginLeft: "20px",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 4,
                  left: 20,
                  width: "280px",
                  height: "80px",
                  backgroundColor: "#00FFFF",
                  borderRadius: "50px 50px 0px 0px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: "Roboto",
                      fontStyle: "normal",
                      fontWeight: "600",
                      fontSize: "20px",
                      color: "#1E1E1E",
                    }}
                  >
                    Chief Technical Officer
                  </div>
                  <div
                    style={{
                      fontFamily: "Roboto",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "15px",
                      color: "#1E1E1E",
                    }}
                  >
                    Mindula Madhuhansa
                  </div>
                </div>
              </div>
            </div>
            <div style={{ position: "relative" }}>
              <img
                src={img_Sachitha_Jayasinghe}
                alt="Photo 4"
                style={{
                  width: "280px",
                  height: "340px",
                  background: "#1E1D1D",
                  borderRadius: "15px 15px 0px 0px",
                  marginLeft: "20px",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 4,
                  left: 20,
                  width: "280px",
                  height: "80px",
                  backgroundColor: "#00FFFF",
                  borderRadius: "50px 50px 0px 0px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: "Roboto",
                      fontStyle: "normal",
                      fontWeight: "600",
                      fontSize: "20px",
                      color: "#1E1E1E",
                    }}
                  >
                    Chief Information Officer
                  </div>
                  <div
                    style={{
                      fontFamily: "Roboto",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "15px",
                      color: "#1E1E1E",
                    }}
                  >
                    Sachitha Jayasinghe
                  </div>
                </div>
              </div>
            </div>
          </Grid>
        </Stack>
      </Grid>
    </section>
  );
};

export default AboutLeadSection;
