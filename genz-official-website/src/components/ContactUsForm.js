import { Button, Grid, TextField } from "@mui/material";
import React from "react";

const ContactUsForm = () => {
  return (
    <Grid container spacing={1} sx={{ paddingTop: "40px" }}>
      <Grid xs={12} sm={6} item>
        <TextField
          variant="outlined"
          label="Full Name"
          placeholder="Enter your full name"
          id="full-name"
          fullWidth
          required
          sx={{ bgcolor: "#292929", borderRadius: "4px" }}
        />
      </Grid>
      <Grid xs={12} sm={6} item>
        <TextField
          variant="outlined"
          type="email"
          label="Email Address"
          placeholder="Enter your email address"
          id="email-address"
          fullWidth
          required
          sx={{ bgcolor: "#292929", borderRadius: "4px" }}
        />
      </Grid>
      <Grid xs={12} sm={6} item>
        <TextField
          variant="outlined"
          type="tel"
          label="Mobile Number"
          placeholder="Enter your mobile number"
          id="tel-num"
          fullWidth
          required
          sx={{ bgcolor: "#292929", borderRadius: "4px" }}
        />
      </Grid>
      <Grid xs={12} sm={6} item>
        <TextField
          variant="outlined"
          label="Email Subject"
          placeholder="Enter the subject of email"
          id="email-subject"
          fullWidth
          required
          sx={{ bgcolor: "#292929", borderRadius: "4px" }}
        />
      </Grid>
      <Grid xs={12} item>
        <TextField
          variant="outlined"
          label="Message"
          placeholder="Enter your message"
          id="message"
          multiline
          rows={10}
          fullWidth
          required
          sx={{ bgcolor: "#292929", borderRadius: "4px" }}
        />
      </Grid>
      <Grid xs={12} item>
        <div
          style={{
            paddingTop: "12px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            type="submit"
            variant="contained"
            id="submit-btn"
            disableRipple
            sx={{
              width: "168px",
              height: "36px",
              fontSize: "20px",
              fontWeight: 500,
              color: "#1E1E1E",
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
            Send Message
          </Button>
        </div>
      </Grid>
    </Grid>
  );
};

export default ContactUsForm;
