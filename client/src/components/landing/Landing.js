import React, { Component } from "react";
import { Form, Text, Radio, RadioGroup, TextArea, Checkbox } from "react-form";
class Landing extends Component {
  render() {
    return (
      <div>
        <Form
          render={({ submitForm }) => (
            <form onSubmit={submitForm}>
              Original Url
              <Text field="firstName" placeholder="First Name" />
              Base Url
              <Text field="lastName" placeholder="Last Name" />
              <a className="waves-effect waves-light btn">Sbumit</a>
            </form>
          )}
        />
      </div>
    );
  }
}

export default Landing;
