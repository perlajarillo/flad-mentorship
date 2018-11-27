import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { Route, Switch } from "react-router-dom";
import withAuthentication from "./WithAuthentication";
import theme from "./theme";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Home from "./Home/Home";
import Mentors from "./Mentors";
import NewMentor from "./Mentors/NewMentor";
import Logout from "./LogOut/LogOut";
import NewMentee from "./Mentees/NewMentee";
import TermsAndConditions from "./Mentees/TermsAndConditions";
import AvailableMentors from "./AvailableMentors";
import PasswordReset from "./PasswordReset/PasswordReset";
import Settings from "./Settings/Settings";

const App = () => (
  <div className="App">
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/mentors" component={Mentors} />
        <Route path="/logout" component={Logout} />
        <Route path="/newmentor" component={NewMentor} />
        <Route path="/newmentee" component={NewMentee} />
        <Route path="/termsandconditions" component={TermsAndConditions} />
        <Route path="/availablementors" component={AvailableMentors} />
        <Route path="/password-reset" component={PasswordReset} />
        <Route path="/settings" component={Settings} />

      </Switch>
      <Footer />
    </MuiThemeProvider>
  </div>
);

export default withAuthentication(App);
