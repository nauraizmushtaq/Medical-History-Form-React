import React, { Component } from "react";
import CheckedComponent from "./CheckedComponent";
import "../App.css";
import TextareaAutosize from "react-textarea-autosize";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
var myStyleWhite = { border: "none", color: "white" };
var lableStylesGrey = { border: "none", color: "#7a7a7ab6" };
/*

Global Scope Variable for setting of Lable color on Each Click
*/
var [lableStyles, lableStylesA, lableStylesB, lableStylesC, lableStylesD] = [
  lableStylesGrey,
  lableStylesGrey,
  lableStylesGrey,
  lableStylesGrey,
  lableStylesGrey,
];

/*
  --------------------------------------------------------------------------------------------------------------------------
  --------------------------------------------------------------------------------------------------------------------------
  --------------------------------------------------------------------------------------------------------------------------
  --------------------------------------------------------------------------------------------------------------------------
  --------------------------------------------------------------------------------------------------------------------------
  --------------------------------------------------------------------------------------------------------------------------
  --------------------------------------------------------------------------------------------------------------------------
*/

/*
Medicak Form Componet deals with rendering of form which allows the user to put info in the form
and use the CheckComponent inoder to let the user know that he have made an entry 
*/
class MedicalFormComponent extends Component {
  state = {
    /*
    Values variable are use for storing the values of diffrent text areas, in order to maniupate the state of variable
    */
    dataOfTextFields: ["", "", "", "", ""],
    /*,
    Type varibale in state is use for refering to the type of field currently user is maipuilating with
    */
    fieldType: "",

    /*
    Flags variable for setting the icon up 
    */
    textAreaFlag: [false, false, false, false, false],
  };

  /*
  --------------------------------------------------------------------------------------------------------------------------
  --------------------------------------------------------------------------------------------------------------------------
  --------------------------------------------------------------------------------------------------------------------------
  --------------------------------------------------------------------------------------------------------------------------
  --------------------------------------------------------------------------------------------------------------------------
  --------------------------------------------------------------------------------------------------------------------------
  --------------------------------------------------------------------------------------------------------------------------
    */
  /*
    This function call on eah click to check and reset all the labels color crossponding to the each style of label
*/
  resetLabelColor = () => {
    lableStyles = lableStylesA = lableStylesB = lableStylesC = lableStylesD = lableStylesGrey;
  };

  /*
  --------------------------------------------------------------------------------------------------------------------------
  --------------------------------------------------------------------------------------------------------------------------
  --------------------------------------------------------------------------------------------------------------------------
  --------------------------------------------------------------------------------------------------------------------------
  --------------------------------------------------------------------------------------------------------------------------
  --------------------------------------------------------------------------------------------------------------------------
  --------------------------------------------------------------------------------------------------------------------------
    */
  //for toast Notification
  notify = () => {
    toast("Your report has been successfully submitted", {});
  };
  handleClick = (fieldType) => {
    /*
    this function handle each field on click and set their crossponding states according to the previous state of the form
*/
    this.resetLabelColor();
    var dArray = [...this.state.textAreaFlag];
    if (fieldType === "examinationField") {
      lableStyles = myStyleWhite;
      dArray[0] = true;
      this.setState({
        fieldType: fieldType,
        textAreaFlag: dArray,
      });
    }

    if (fieldType === "clinicalHisField") {
      lableStylesA = myStyleWhite;
      dArray[1] = true;
      this.setState({
        fieldType: fieldType,
        textAreaFlag: dArray,
      });
    }

    if (fieldType === "technicalField") {
      lableStylesB = myStyleWhite;
      dArray[2] = true;
      this.setState({
        fieldType: fieldType,
        textAreaFlag: dArray,
      });
    }

    if (fieldType === "findingsField") {
      lableStylesC = myStyleWhite;
      dArray[3] = true;
      this.setState({
        fieldType: fieldType,
        textAreaFlag: dArray,
      });
    }

    if (fieldType === "impressionField") {
      lableStylesD = myStyleWhite;
      dArray[4] = true;
      this.setState({
        fieldType: fieldType,
        textAreaFlag: dArray,
      });
    }
  };

  /*
  --------------------------------------------------------------------------------------------------------------------------
  --------------------------------------------------------------------------------------------------------------------------
  --------------------------------------------------------------------------------------------------------------------------
  --------------------------------------------------------------------------------------------------------------------------
  --------------------------------------------------------------------------------------------------------------------------
  --------------------------------------------------------------------------------------------------------------------------
  --------------------------------------------------------------------------------------------------------------------------
    */
  handleChange = (event) => {
    /*
    this function captures the change of text filed crosspoding to user input at run time 
*/
    var destinationArray = [...this.state.dataOfTextFields];
    if (this.state.fieldType === "examinationField") {
      destinationArray[0] = event.target.value;
      this.setState({ dataOfTextFields: destinationArray });
    }

    if (this.state.fieldType === "clinicalHisField") {
      destinationArray[1] = event.target.value;
      this.setState({ dataOfTextFields: destinationArray });
    }

    if (this.state.fieldType === "technicalField") {
      destinationArray[2] = event.target.value;
      this.setState({ dataOfTextFields: destinationArray });
    }

    if (this.state.fieldType === "findingsField") {
      destinationArray[3] = event.target.value;
      this.setState({ dataOfTextFields: destinationArray });
    }

    if (this.state.fieldType === "impressionField") {
      destinationArray[4] = event.target.value;
      this.setState({ dataOfTextFields: destinationArray });
    }
  };
  /*
  --------------------------------------------------------------------------------------------------------------------------
  --------------------------------------------------------------------------------------------------------------------------
  --------------------------------------------------------------------------------------------------------------------------
  --------------------------------------------------------------------------------------------------------------------------
  --------------------------------------------------------------------------------------------------------------------------
  --------------------------------------------------------------------------------------------------------------------------
  --------------------------------------------------------------------------------------------------------------------------
    */

  displayData = () => {
    /*
this function dislpays the data filled in the form on console which could be seen bt crl+shift+i on browser
*/
    console.log("Examinations : ", this.state.dataOfTextFields[0]);
    console.log("Clinical History : ", this.state.dataOfTextFields[1]);
    console.log("Techniques : ", this.state.dataOfTextFields[2]);
    console.log("Findings : ", this.state.dataOfTextFields[3]);
    console.log("Impressions : ", this.state.dataOfTextFields[4]);
  };

  /*
  --------------------------------------------------------------------------------------------------------------------------
  --------------------------------------------------------------------------------------------------------------------------
  --------------------------------------------------------------------------------------------------------------------------
  --------------------------------------------------------------------------------------------------------------------------
  --------------------------------------------------------------------------------------------------------------------------
  --------------------------------------------------------------------------------------------------------------------------
  --------------------------------------------------------------------------------------------------------------------------
    */
  render() {
    /*
    this function shows complete output in the form of table which is very well structured and easy to maipulate each and every rows
*/
    return (
      <React.Fragment>
        <ToastContainer />

        <header className="App-header">
          <table className="table">
            <tbody>
              <tr>
                <td style={{ border: "none" }}>
                  <CheckedComponent reg={this.state.textAreaFlag[0]} />
                </td>
                <td style={lableStyles}>Examination</td>
              </tr>
              <tr>
                <td style={{ border: "none" }} />
                <td style={{ border: "none" }}>
                  <TextareaAutosize
                    onClick={() => this.handleClick("examinationField")}
                    value={this.state.dataOfTextFields[0]}
                    onChange={this.handleChange}
                  />
                </td>
              </tr>

              {/* ===========================================================================================================*/}

              <tr>
                <td style={{ border: "none" }}>
                  <CheckedComponent reg={this.state.textAreaFlag[1]} />
                </td>
                <td style={lableStylesA}>Clinical Hsitory</td>
              </tr>
              <tr>
                <td style={{ border: "none" }} />
                <td style={{ border: "none" }}>
                  <TextareaAutosize
                    rows="1"
                    cols="150"
                    onClick={() => this.handleClick("clinicalHisField")}
                    value={this.state.dataOfTextFields[1]}
                    onChange={this.handleChange}
                  />
                </td>
              </tr>

              {/* ===========================================================================================================*/}

              <tr>
                <td style={{ border: "none" }}>
                  <CheckedComponent reg={this.state.textAreaFlag[2]} />
                </td>
                <td style={lableStylesB}>Technique</td>
              </tr>
              <tr>
                <td style={{ border: "none" }} />
                <td style={{ border: "none" }}>
                  <TextareaAutosize
                    rows="1"
                    cols="150"
                    onClick={() => this.handleClick("technicalField")}
                    value={this.state.dataOfTextFields[2]}
                    onChange={this.handleChange}
                  />
                </td>
              </tr>

              {/* ===========================================================================================================*/}

              <tr>
                <td style={{ border: "none" }}>
                  <CheckedComponent reg={this.state.textAreaFlag[3]} />
                </td>
                <td style={lableStylesC}>Findings</td>
              </tr>
              <tr>
                <td style={{ border: "none" }} />
                <td style={{ border: "none" }}>
                  <TextareaAutosize
                    rows="1"
                    cols="150"
                    onClick={() => this.handleClick("findingsField")}
                    value={this.state.dataOfTextFields[3]}
                    onChange={this.handleChange}
                  />
                </td>
              </tr>

              {/* ===========================================================================================================*/}

              <tr>
                <td style={{ border: "none" }}>
                  <CheckedComponent reg={this.state.textAreaFlag[4]} />
                </td>
                <td style={lableStylesD}>Impressions</td>
              </tr>
              <tr>
                <td style={{ border: "none" }} />
                <td style={{ border: "none" }}>
                  <TextareaAutosize
                    rows="1"
                    cols="150"
                    onClick={() => this.handleClick("impressionField")}
                    value={this.state.dataOfTextFields[4]}
                    onChange={this.handleChange}
                  />
                </td>
              </tr>

              {/* ===========================================================================================================*/}

              <tr>
                <td style={{ border: "none" }} />
                <td style={{ border: "none" }}>
                  <button
                    type="button"
                    className="btn btn-primary"
                    style={{ float: "right" }}
                    onClick={this.notify}
                    onClickCapture={this.displayData}
                  >
                    Submit
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </header>
      </React.Fragment>
    );
  }
}

export default MedicalFormComponent;
