import { Button, Collapse, Grid, IconButton, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Alert from "@mui/material/Alert";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactUsForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telNo, setTelNo] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const [open, setOpen] = useState(true);

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      email_id: email,
      tp_no: telNo,
      subject: subject,
      message: message,
    };

    emailjs
      .send(
        "service_gsdm27f",
        "template_3pmflrk",
        templateParams,
        "rcyAo91xkCVPVf7Iw"
      )
      .then(
        (response) => {
          console.log(response.text);
          setName("");
          setTelNo("");
          setEmail("");
          setSubject("");
          setMessage("");
          setIsSubmit(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      {isSubmit && (
        <Collapse in={open}>
          <Alert
            severity="success"
            action={
              <IconButton
                size="sm"
                color="inherit"
                onClick={() => setOpen(false)}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
          >
            Message sent successfully!
          </Alert>
        </Collapse>
      )}
      <Grid
        container
        spacing={2}
        sx={{ paddingTop: { xs: "10px", md: "20px" } }}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Grid xs={6} item>
          <TextField
            variant="outlined"
            label="Full Name"
            placeholder="Enter your full name"
            id="full-name"
            type="text"
            name="from_name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            required
            sx={{
              backgroundColor: "#292929",
              borderRadius: "15px",
            }}
          />
        </Grid>
        <Grid xs={6} item>
          <TextField
            variant="outlined"
            type="email"
            label="Email Address"
            placeholder="Enter your email address"
            id="email-address"
            name="email_id"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            required
            sx={{ backgroundColor: "#292929", borderRadius: "15px" }}
          />
        </Grid>
        <Grid xs={12} md={6} item>
          <TextField
            variant="outlined"
            type="tel"
            label="Mobile Number"
            placeholder="Enter your mobile number"
            id="tel-num"
            name="tp_no"
            value={telNo}
            onChange={(e) => setTelNo(e.target.value)}
            fullWidth
            sx={{ backgroundColor: "#292929", borderRadius: "15px" }}
          />
        </Grid>
        <Grid xs={12} sm={12} md={6} item>
          <TextField
            variant="outlined"
            label="Email Subject"
            placeholder="Enter the subject of email"
            id="email-subject"
            type="text"
            name="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            fullWidth
            required
            sx={{ backgroundColor: "#292929", borderRadius: "15px" }}
          />
        </Grid>
        <Grid xs={12} item>
          <TextField
            variant="outlined"
            label="Message"
            placeholder="Enter your message"
            id="message"
            type="text"
            name="message"
            multiline
            rows={10}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            fullWidth
            required
            sx={{ backgroundColor: "#292929", borderRadius: "15px" }}
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
              onClick={sendEmail}
              variant="contained"
              id="submit-btn"
              disableRipple
              sx={{
                width: "168px",
                height: "36px",
                fontSize: "20px",
                fontWeight: "500",
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
    </>
  );
};

export default ContactUsForm;
