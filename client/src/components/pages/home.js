import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Animated } from "react-animated-css";

class Home extends Component {
  state = {};
  render() {
    return (
      <div id="bg_homepage">
        <div id="homepage">
          <Animated
            animationIn="fadeInLeft"
            animationOut="fadeOut"
            isVisible={true}
          >
            <div
              className="bouce col-12 block_content_home"
              id="block_content_home_1"
            >
              <figure className="col-3">
                <Link to="/service">
                  <img
                    id="logo"
                    src={require("../../assets/img/content-1.png")}
                  />
                </Link>
              </figure>
              <div className="col-8">
                <Animated animationIn="fadeInRight">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer ac felis ullamcorper, elementum dolor ut, euismod
                    leo. Duis sed tortor a augue blandit convallis in et enim.
                    In non fringilla dui. Aenean non auctor enim. Duis eget orci
                    non arcu tempus pulvinar. Proin hendrerit est vel justo
                    posuere volutpat. Donec fermentum risus vel venenatis
                    dapibus. Sed et mauris eros. Curabitur ac purus rutrum,
                    gravida nunc non, egestas arcu. Nam sem elit, finibus sed
                    dictum volutpat, hendrerit imperdiet nisi. Fusce eget
                    vestibulum mauris. Proin dignissim interdum ligula, nec
                    convallis mi elementum vel. Morbi augue sapien, commodo
                    vitae lorem vitae, ultrices venenatis nunc. Phasellus quis
                  </p>
                </Animated>
              </div>
            </div>
          </Animated>

          {/* block_content_home */}
          <Animated
            animationIn="fadeInRight"
            animationOut="fadeOut"
            isVisible={true}
          >
            <div
              className="col-12 block_content_home "
              id="block_content_home_2"
            >
              <div className="col-8">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer ac felis ullamcorper, elementum dolor ut, euismod leo.
                  Duis sed tortor a augue blandit convallis in et enim. In non
                  fringilla dui. Aenean non auctor enim. Duis eget orci non arcu
                  tempus pulvinar. Proin hendrerit est vel justo posuere
                  volutpat. Donec fermentum risus vel venenatis dapibus. Sed et
                  mauris eros. Curabitur ac purus rutrum, gravida nunc non,
                  egestas arcu. Nam sem elit, finibus sed dictum volutpat,
                  hendrerit imperdiet nisi. Fusce eget vestibulum mauris. Proin
                  dignissim interdum ligula, nec convallis mi elementum vel.
                  Morbi augue sapien, commodo vitae lorem vitae, ultrices
                  venenatis nunc. Phasellus quis
                </p>
              </div>
              <figure className="col-3">
                <img
                  id="logo"
                  src={require("../../assets/img/content-2.png")}
                />
              </figure>
            </div>
          </Animated>
          {/* block_content_home */}

          <Animated
            animationIn="fadeInLeft"
            animationOut="fadeOut"
            isVisible={true}
          >
            <div
              className="col-12 block_content_home "
              id="block_content_home_2"
            >
              <figure className="col-3">
                <img
                  id="logo"
                  src={require("../../assets/img/content-3.png")}
                />
              </figure>
              <div className="col-8">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer ac felis ullamcorper, elementum dolor ut, euismod leo.
                  Duis sed tortor a augue blandit convallis in et enim. In non
                  fringilla dui. Aenean non auctor enim. Duis eget orci non arcu
                  tempus pulvinar. Proin hendrerit est vel justo posuere
                  volutpat. Donec fermentum risus vel venenatis dapibus. Sed et
                  mauris eros. Curabitur ac purus rutrum, gravida nunc non,
                  egestas arcu. Nam sem elit, finibus sed dictum volutpat,
                  hendrerit imperdiet nisi. Fusce eget vestibulum mauris. Proin
                  dignissim interdum ligula, nec convallis mi elementum vel.
                  Morbi augue sapien, commodo vitae lorem vitae, ultrices
                  venenatis nunc. Phasellus quis
                </p>
              </div>
            </div>
            {/* block_content_home */}
          </Animated>
        </div>
      </div>
    );
  }
}

export default Home;
