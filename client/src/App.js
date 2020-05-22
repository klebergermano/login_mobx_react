import React, { Component } from "react";
import "./assets/css/style.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/common/header";
import SlideHome from "./components/common/slideHome";

import Footer from "./components/common/footer";
import Home from "./components/pages/home";
import Services from "./components/pages/services";
import About from "./components/pages/about";
import Contact from "./components/pages/contact";

//Store mobx
import { observer } from "mobx-react";
import UserStore from "./stores/UserStore";
import LoginForm from "./LoginForm";
import SubtmitButton from "./SubmitButton";

class App extends Component {
  async componentDidMount() {
    try {
      let res = await fetch("/isLoggedIn", {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      let result = await res.json();
      if (result && result.success) {
        UserStore.logading = false;
        UserStore.IsLoggedIn = true;
        UserStore.username = result.username;
      } else {
        UserStore.loading = false;
        UserStore.IsLoggedIn = false;
      }
    } catch (err) {
      console.log(err);
      UserStore.loading = false;
      UserStore.IsLoggedIn = false;
    }
  }

  async doLogout() {
    try {
      let res = await fetch("/logout", {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      let result = await res.json();
      if (result && result.success) {
        UserStore.IsLoggedIn = false;
        UserStore.username = "";
      }
    } catch (err) {
      console.log(err);
    }
  }
  render() {
    if (UserStore.loading) {
      return <div className="app"> Loading, wait... </div>;
    } else {
      if (UserStore.IsLoggedIn) {
        return (
          <div>
            Bem vindo: {UserStore.username}
            <SubtmitButton
              text={"Log out"}
              disabled={false}
              onClick={() => this.doLogout()}
            />
          </div>
        );
      }
    }
    return (
      <Router>
        <div className="container">
          <Header />

          <div id="content">
            <LoginForm />

            {/*
              <Route path="/" exact component={SlideHome} />
            <Route path="/" exact component={Home} />

            <Route path="/services" exact component={Services} />
            <Route path="/about" exact component={About} />
            <Route path="/contact" exact component={Contact} />

*/}
          </div>
          {/* content */}
          <Footer />
        </div>
      </Router>
    );
  }
}

export default observer(App);
