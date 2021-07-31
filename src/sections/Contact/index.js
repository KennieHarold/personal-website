import React, { useState } from "react";
import {
  Grid,
  Box,
  Typography,
  InputBase,
  Button,
  Snackbar,
} from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import { ThemeProvider, makeStyles } from "@material-ui/core/styles";
import { colorTheme } from "../../styles/themes";
import SectionTitle from "../../components/SectionTitle";
import "./styles.css";

const useStyles = makeStyles({
  contactQuestion: {
    fontWeight: "bold",
    marginBottom: 50,
    textAlign: "center",
  },
  contactInputContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  contactInputContent: {
    background: "#E3EDF2",
    padding: 10,
    borderRadius: 5,
    width: "100%",
  },
  contactInputBase: {
    color: "gray",
    width: "100%",
  },
});

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Contact = () => {
  const [emailLoading, setEmailLoading] = useState(false);
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientMessage, setClientMessage] = useState("");
  const [openAlert, setOpenAlert] = useState(false);
  const [alertStatus, setAlertStatus] = useState(false);

  const handleSendEmail = async () => {
    const url = "https://api.kennieharold.me/send-email";
    const data = {
      text: `Client Email: ${clientEmail}\nClient Name: ${clientName}\n\n${clientMessage}`,
    };

    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    setEmailLoading(true);

    await fetch(url, {
      method: "post",
      mode: "cors",
      headers,
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.status) {
          setAlertStatus("success");
          setOpenAlert(true);

          setClientEmail("");
          setClientName("");
          setClientMessage("");
        } else {
          setAlertStatus("error");
          setOpenAlert(true);
        }
      })
      .catch((err) => {
        console.log(err);
        setAlertStatus("error");
        setOpenAlert(true);
      });

    setEmailLoading(false);
  };

  const handleCloseAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenAlert(false);
  };

  const classes = useStyles();

  return (
    <section id="contact">
      <ThemeProvider theme={colorTheme}>
        <Grid
          id="contact__grid"
          container
          justify="center"
          alignItems="center"
          direction="column"
        >
          <Box
            id="contact__grid__section-title"
            display="flex"
            justifyContent="center"
            alignItems="flex-end"
          >
            <SectionTitle
              id="contact__grid__section-title__contact"
              title="contact"
            />
          </Box>
          <Box
            id="contact__grid__content"
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <Typography
              id="contact--subtitle"
              className={classes.contactQuestion}
              variant="h5"
              color="primary"
            >
              Have any question or want to discuss something?
            </Typography>

            <Box
              id="contact__grid__content__form"
              display="flex"
              flexDirection="column"
            >
              <Box className={classes.contactInputContainer}>
                <Box className={classes.contactInputContent}>
                  <InputBase
                    value={clientName}
                    className={classes.contactInputBase}
                    placeholder="Your name"
                    onChange={(event) => setClientName(event.target.value)}
                  />
                </Box>
              </Box>

              <Box className={classes.contactInputContainer}>
                <Box className={classes.contactInputContent}>
                  <InputBase
                    value={clientEmail}
                    className={classes.contactInputBase}
                    placeholder="Your email"
                    onChange={(event) => setClientEmail(event.target.value)}
                  />
                </Box>
              </Box>

              <Box className={classes.contactInputContainer}>
                <Box className={classes.contactInputContent}>
                  <InputBase
                    value={clientMessage}
                    className={classes.contactInputBase}
                    multiline
                    rows={10}
                    placeholder="Your message"
                    onChange={(event) => setClientMessage(event.target.value)}
                  />
                </Box>
              </Box>

              <Button
                disabled={emailLoading}
                onClick={handleSendEmail}
                variant="contained"
                color="primary"
                disableElevation
                style={{ alignSelf: "flex-end" }}
              >
                Submit
              </Button>
            </Box>
          </Box>
        </Grid>
      </ThemeProvider>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={openAlert}
        autoHideDuration={6000}
        onClose={handleCloseAlert}
      >
        <Alert onClose={handleCloseAlert} severity={alertStatus}>
          {alertStatus === "success" ? "Email Sent" : "Email Not Sent"}
        </Alert>
      </Snackbar>
    </section>
  );
};

export default Contact;
