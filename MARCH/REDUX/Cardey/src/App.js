import React, { Component } from "react";
import store from "./store";
import user from "./images/user.png";
import {fetchUserProfile} from './actions'
import "./App.css";

class App extends Component {
  componentDidMount() {
    store.dispatch(fetchUserProfile());
  }
  render() {
    const {
      name = ". . .",
      description = " . . .",
      likes = " . . .",
      location = " . . .",
      profilePic,
      isLoading = true
    } = store.getState();
    return (
      <div className={`${!isLoading ? "App" : "App App--loading"}`}>
        <div className="App__header">SAGA</div>
        <section className="User__img">
          {profilePic && <img src={user} alt="user" />}
        </section>

        {!isLoading && (
          <section className="User__info">
            <p>
              {" "}
              <span className="faint">I am</span> a {description}
            </p>
            <p>
              {" "}
              <span className="faint">I like</span> {likes}
            </p>
            <p className="User__info__details User__info__divider faint">
              <span>Name: </span>
              <span>{name}</span>
            </p>
            <p className="User__info__details faint">
              <span>Location: </span>
              <span>{location}</span>
            </p>
          </section>
        )}
      </div>
    );
  }
}

export default App;
