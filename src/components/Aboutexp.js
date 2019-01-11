import React, { Component } from "react";
import "../styles/css/bootstrap.min.css";
import "../styles/css/new_styles.css";

class Aboutexp extends Component {
  render() {
    return (
      <section>
        <h6>
          Software Developer Intern-DEFENCE ELECTRONICS RESEARCH
          LABORATORY(DLRL)
        </h6>
        <h6> Apr'2017–June'2017</h6>
        <p style={{ fontsize: "8px" }}>
          Strengthened security of critical research data by developing a java
          application for encrypting data before uploading it to a cloud.
          <br />
          Improvised the usability of the application by creating a Simple
          interaction page for it using HTML, JavaScript.
          <br />
          Worked on writing test cases and Q/A testing the application.
        </p>

        <h6> Software Developer Intern- Monarch Infotech Services</h6>
        <h6>Jan’17-Mar’17</h6>
        <p style={{ fontsize: "8px" }}>
          Acquired proficiency in product development skills by regularly
          attending scrum meetings as part of Fast-paced Environment.
          <br />
          Built beautiful & functional portal and dashboard pages in React using
          HTML, CSS, JavaScript.
          <br />
          Successful in identifying problems and debugging critical JavaScript
          code using browser tools.
          <br />
          Interpreted retrieved data on dashboard in human readable format of
          tables and charts based on user needs.
          <br />
          Successful in implementing filter functions using JavaScript (that
          were important part of user experience) for the data retrieved.
        </p>
        <h6>Web Developer Intern - Denture Capital</h6>
        <h6>May'2016–July'2016</h6>
        <p style={{ fontsize: "8px" }}>
          Transformed requirements into Design of webpages.
          <br />
          Developed dynamic web pages of a startup - www.denturecapital.in using
          HTML, CSS, JavaScript.
        </p>
      </section>
    );
  }
}
export default Aboutexp;
