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
      showError: false,
      showLoading: false,
      exUrl:
        "https://www.amazon.com/Apple-iPhone-GSM-Unlocked-5-8/dp/B075QMZH2L",
      exShortUrl: "http://muhzi.com"
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
      this.setState({ showLoading: true, showShortenUrl: false });
      let reqObj = {
        originalUrl: this.state.originalUrl,
        shortBaseUrl: "http://muhzi.com"
      };
      createShortUrl(reqObj)
        .then(json => {
          setTimeout(() => {
            this.setState({
              showLoading: false,
              showShortenUrl: true,
              shortenUrl: json.data.shortUrl
            });
          }, 1000);
        })
        .catch(error => console.log("Json", error));
    } else {
      this.setState({ showError: true });
    }
  }
  renderButton() {
    if (!this.state.showLoading) {
      return (
        <button
          className="btn waves-effect waves-light submit-btn"
          name="action"
          onClick={this.handleSubmit}
        >
          Submit
        </button>
      );
    } else {
      return (
        <div className="loader">
          <div className="preloader-wrapper small active">
            <div className="spinner-layer spinner-green-only">
              <div className="circle-clipper left">
                <div className="circle" />
              </div>
              <div className="gap-patch">
                <div className="circle" />
              </div>
              <div className="circle-clipper right">
                <div className="circle" />
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
  render() {
    return (
      <div className="landing">
        <div>
          <h5> Original Url</h5>
        </div>
        <div>
          Ex:{" "}
          <a target="_blank" href={this.state.exUrl}>
            {this.state.exUrl}
          </a>
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
          <h5>*Base Url</h5>
        </div>

        <input
          field="baseUrl"
          name="baseUrl"
          placeholder="http://muhzi.com"
          value={this.state.baseUrl}
          onChange={this.handleUserInput.bind(this)}
          disabled
        />
        {this.renderButton()}
        {this.state.showShortenUrl && (
          <div className="shorten-title">
            <h5>Shortened Url is </h5>
            <a target="_blank" href={this.state.shortenUrl}>
              {this.state.shortenUrl}
            </a>
          </div>
        )}
        <div className="shorten-imp">
          [* Here base url hase the default value{" "}
          <a target="_blank" href={this.state.exShortUrl}>
            {this.state.exShortUrl}
          </a>,you can change it later]
        </div>
      </div>
    );
  }
}

export default Landing;
