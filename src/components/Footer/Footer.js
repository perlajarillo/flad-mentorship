import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Paper, Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 3,
    bottom: 0,
    width: "100vw"
  },
  paper: {
    padding: theme.spacing.unit * 3,
    backgroundColor: theme.palette.primary.main,
    borderRadius: 0
  },
  textColor: {
    color: theme.palette.primary.contrastText
  },
  credits: {
    color: "#bdbdbd",
    fontSize: "0.55rem"
  },
  links: {
    color: "white",
    margin: "0.5em",
    textDecoration: "none"
  },
  icon: {
    width: "26px"
  },
  linksText: {
    fontSize: "0.7rem"
  },
  linksSection: {
    textAlign: "center"
  },
  creditsRow: {
    backgroundColor: theme.palette.primary.dark,
    display: "flex",
    padding: theme.spacing.unit
  },
  authors: {
    textAlign: "right"
  }
});

function Footer(props) {
  const { classes } = props;
  return (
    <footer className={classes.root}>
      <Paper className={classes.paper} elevation={0}>
        <Grid container spacing={8}>
          <Grid item xs={12} sm={3} md={3} lg={3}>
            <Typography
              variant="caption"
              align="center"
              className={classes.textColor}
            >
              2018 FLAD Mentorship
            </Typography>
          </Grid>
          <Grid item xs={12} sm={7} md={7} lg={7}>
            <Typography
              variant="overline"
              align="center"
              className={classes.textColor}
            >
              Social{" "}
            </Typography>
            <div className={classes.linksSection}>
              <Typography
                variant="caption"
                align="center"
                className={classes.linksText}
              >
                <a
                  className={classes.links}
                  href="https://www.facebook.com/TalkBusinessFlad/"
                  target="blank"
                >
                  Facebook
                </a>
                <a
                  className={classes.links}
                  href="https://www.flad.pt/en/lets-talk-about-business/"
                  target="blank"
                >
                  Flad Mentorship
                </a>
                <a className={classes.links} href="mailto:talkbusiness@flad.pt">
                  e-mail: talkbusiness@flad.pt
                </a>
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={2} md={2} lg={2}>
            <Typography
              variant="overline"
              align="center"
              className={classes.textColor}
            >
              Join us{" "}
            </Typography>
            <div className={classes.linksSection}>
              <Typography
                variant="caption"
                align="center"
                className={classes.linksText}
              >
                {" "}
                <a className={classes.links} href="/newmentee">
                  As mentee{" "}
                </a>
                {"  "}
                <a href="/newmentor" className={classes.links}>
                  As mentor{" "}
                </a>
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Paper>

      <Grid container spacing={8} className={classes.creditsRow}>
        <Grid item xs={12} sm={5} md={5} lg={5}>
          <Typography
            variant="caption"
            align="left"
            gutterBottom
            className={classes.textColor}
          >
            Developed by
            <a
              className={classes.links}
              href="https://www.linkedin.com/in/perla-jarillo-98290436/"
              target="blank"
            >
              Perla Jarillo
            </a>
            and
            <a
              href="https://www.fabiolavieyra.com/"
              className={classes.links}
              target="blank"
            >
              Fabiola Vieyra
            </a>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Typography
            variant="caption"
            align="center"
            className={classes.credits}
            gutterBottom
          >
            CREDITS - Logos cards social media and phone: Icons made by{" "}
            <a
              href="http://www.freepik.com/"
              title="Freepik"
              className={classes.links}
            >
              Freepik
            </a>{" "}
            from{" "}
            <a
              href="https://www.flaticon.com/"
              title="Flaticon"
              className={classes.links}
            >
              www.flaticon.com
            </a>{" "}
            is licensed by{" "}
            <a
              href="http://creativecommons.org/licenses/by/3.0/"
              title="Creative Commons BY 3.0"
              target="_blank"
              className={classes.links}
            >
              CC 3.0 BY{", "}
            </a>
            Email icon made by{" "}
            <a
              href="https://www.flaticon.com/authors/vectors-market"
              title="Vectors Market"
              className={classes.links}
            >
              Vectors Market
            </a>{" "}
            from{" "}
            <a
              href="https://www.flaticon.com/"
              title="Flaticon"
              className={classes.links}
            >
              www.flaticon.com
            </a>{" "}
            is licensed by{" "}
            <a
              href="http://creativecommons.org/licenses/by/3.0/"
              title="Creative Commons BY 3.0"
              className={classes.links}
              target="_blank"
            >
              CC 3.0 BY{" "}
            </a>
            List of specialties/industries based on LinkedIn's{" "}
            <a
              href="https://developer.linkedin.com/docs/reference/industry-codes"
              title="Industry codes"
              className={classes.links}
              target="_blank"
            >
              reference table.
            </a>
          </Typography>
        </Grid>
      </Grid>
    </footer>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);
