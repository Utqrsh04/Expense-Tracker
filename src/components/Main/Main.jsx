import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Grid,
  Divider,
  List,
} from "@material-ui/core";
import useStyles from "./styles";

function Main() {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardHeader title={"Expense Tracker"} subheader={"use your voice"} />
      <CardContent>
        <Typography align="center" variant="h5">
          Total Balance $1000
        </Typography>
        <Typography
          variant="subtitle1"
          style={{ lineHeight: "1.5em", marginTop: "20px" }}
        >
          Try Saying : Some sentaence
        </Typography>
        <Divider />
        Form
      </CardContent>

      <CardContent className={classes.cardContent}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            {/* <List /> */}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default Main;
