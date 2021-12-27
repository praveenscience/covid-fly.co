import React, { Component } from "react";
import FormGroup from "../Bootstrap/FormGroup";
import Editor from "rich-markdown-editor";

class New extends Component {
  state = {
    Source: "",
    Destination: "",
    Hops: "",
    Docs: "",
    QuarantineInfo: "",
    TravelDate: "",
    Author: "",
    Email: "",
    Description: ""
  };
  render() {
    const FormFields = [
      {
        Id: "Source",
        Label: "Source",
        Type: "text",
        Placeholder: "Enter the Starting Airport"
      },
      {
        Id: "Destination",
        Label: "Destination",
        Type: "text",
        Placeholder: "Enter the Final Destination"
      },
      {
        Id: "Hops",
        Label: "Hops",
        Type: "textarea",
        Placeholder:
          "List down all the different Airport Codes one by one per line."
      },
      {
        Id: "Docs",
        Label: "Documents Needed",
        Type: "textarea",
        Placeholder:
          "List down all the different documents required one by one per line."
      },
      {
        Id: "QuarantineInfo",
        Label: "Quarantine Info",
        Type: "text",
        Placeholder:
          "Please let us know your Quarantine Experience, whether it's Mandatory Quarantine or Home one, and for how long"
      },
      {
        Id: "TravelDate",
        Label: "Travel Date",
        Type: "date",
        Placeholder: "Enter the Date and Time when you're travelling."
      },
      {
        Id: "Author",
        Label: "Name",
        Type: "text",
        Placeholder: "Please enter your name."
      },
      {
        Id: "Email",
        Label: "Email",
        Type: "text",
        Placeholder: "Please enter your email address."
      }
    ];
    const DescFile = `${this.state.Source}-${
      this.state.Destination
    }-${new Date().getTime()}.md`;
    return (
      <div className="New">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-6">
              <h2>Enter your Experience</h2>
              <form>
                {FormFields.map(fg => (
                  <FormGroup
                    key={fg.Id}
                    {...fg}
                    Value={this.state[fg.Id]}
                    onChange={e => {
                      this.setState({ [fg.Id]: e.target.value });
                    }}
                  />
                ))}
                <div className="form-group">
                  <label htmlFor="Editor">Write your Experience...</label>
                  <div className="border rounded p-1">
                    <Editor
                      placeholder="Please write your experience of travel. You can write like how you'll be writing on Medium."
                      onChange={value => {
                        this.setState({
                          Description: value()
                        });
                      }}
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className="col-12 col-md-6">
              <h2>Files to Commit</h2>
              <h3>
                Update <code>Experiences.json</code> Array
              </h3>
              <pre className="border rounded bg-light p-1">
                {JSON.stringify(
                  {
                    Source: this.state.Source,
                    Destination: this.state.Destination,
                    Hops: this.state.Hops.split("\n"),
                    Docs: this.state.Docs.split("\n"),
                    QuarantineInfo: this.state.QuarantineInfo,
                    TravelDate: this.state.TravelDate,
                    Meta: {
                      Author: this.state.Author,
                      Email: this.state.Email,
                      DatePosted: new Date().toISOString()
                    },
                    Description: this.state.Description,
                    DescFile: DescFile
                  },
                  null,
                  2
                )}
              </pre>
              <h3>
                Create a Markdown File <code>{DescFile}</code>
              </h3>
              <pre className="border rounded bg-light p-1">
                {this.state.Description}
              </pre>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default New;
