import React, { Component } from "react";
import { Form, Text } from "react-form";
import "./Landing.css";
class Landing extends Component {
  constructor() {
    super();
    this.state = {
      showShortenUrl: false,
      shortenUrl: " https://www.amazon.com/AFDcs",
      originalUrl: "",
      baseUrl: "",
      clickSubmit: true,
      showError: false
    };
    this.handleUserInput = this.handleUserInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleUserInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  }
  handleSubmit() {
    this.setState({ clickSubmit: true });
    if (this.state.clickSubmit && this.state.originalUrl) {
      this.setState({ showShortenUrl: true });
    } else {
      this.setState({ showError: true });
    }
  }
  render() {
    return (
      <div className="landing">
        <div>
          <h5> Original Url</h5>
        </div>
        <div>
          Ex:https://www.amazon.com/Apple-iPhone-GSM-Unlocked-5-8/dp/B075QMZH2L
        </div>
        <input
          name="originalUrl"
          field="originalUrl"
          placeholder="Paste your link.."
          value={this.state.originalUrl}
          onChange={this.handleUserInput.bind(this)}
        />

        {this.state.showError && (
          <div className="formError">Original Url is required</div>
        )}

        <div>
          <h5> Base Url [Optional]</h5>
        </div>
        <div>Ex: https://www.amazon.com</div>

        <input
          field="baseUrl"
          name="baseUrl"
          placeholder="Paste your domain"
          value={this.state.baseUrl}
          onChange={this.handleUserInput.bind(this)}
        />
        <button
          className="btn waves-effect waves-light submit-btn"
          name="action"
          onClick={this.handleSubmit}
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
      </div>
    );
  }
}

export default Landing;
