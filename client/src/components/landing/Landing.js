import React, { Component } from "react";
import "./Landing.css";
import { createShortUrl } from "../../APIHelper";
class Landing extends Component {
  constructor() {
    super();
    this.state = {
      showShortenUrl: false,
      shortenUrl: "",
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
      let reqObj = {
        originalUrl: this.state.originalUrl,
        shortBaseUrl: "http://muhzi.com"
      };
      createShortUrl(reqObj)
        .then(json => {
          this.setState({ showShortenUrl: true });
          this.setState({ shortenUrl: json.data.shortUrl });
          console.log("Json", json);
        })
        .catch(error => console.log("Json", error));
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
        {/* <div>Ex: https://www.amazon.com</div> */}

        <input
          field="baseUrl"
          name="baseUrl"
          placeholder="http://muhzi.com/"
          value={this.state.baseUrl}
          onChange={this.handleUserInput.bind(this)}
          disabled
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
        <div>*Here base url is deafult</div>
      </div>
    );
  }
}

export default Landing;
