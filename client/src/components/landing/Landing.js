import React, { Component } from "react";
import { Form, Text } from "react-form";
import "./Landing.css";
class Landing extends Component {
  constructor() {
    super();
    this.state = {
      showShortenUrl: true,
      shortenUrl: " https://www.amazon.com/AFDcs"
    };
  }
  render() {
    return (
      <div className="landing">
        <Form
          render={({ submitForm }) => (
            <form onSubmit={submitForm}>
              <div>
                <h5> Original Url</h5>
              </div>
              <div>
                Ex:https://www.amazon.com/Apple-iPhone-GSM-Unlocked-5-8/dp/B075QMZH2L
              </div>
              <Text field="firstName" placeholder="Paste your link.." />

              <div>
                <h5> Base Url [Optional]</h5>
              </div>
              <div>Ex: https://www.amazon.com</div>

              <Text field="lastName" placeholder="Paste your domain" />
              <button
                className="btn waves-effect waves-light submit-btn"
                type="submit"
                name="action"
              >
                Submit
              </button>
              {this.state.showShortenUrl && (
                <div className="shorten-title">
                  <h5>Shortened Url is </h5>
                  <a target="_blank" href={this.state.shortenUrl}>
                    {this.state.shortenUrl}
                  </a>
                </div>
              )}
            </form>
          )}
        />
      </div>
    );
  }
}

export default Landing;
