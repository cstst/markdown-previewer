import React, { Component } from "react";
import Frame from "./Frame";
import { connect } from "react-redux";
import { input } from "../actions";

class Editor extends Component {
  state = {
    input: `# Derek Larson  
**Full Stack Web Developer**  
**E-mail** derekslarson@gmail.com  
**LinkedIn** [linkedin.com/in/derekslarson](https://linkedin.com/in/derekslarson)  
**GitHub** [github.com/cstst](https://github.com/cstst)  

## Summary
Full stack web developer proficient in front-end technologies such as React, Redux, Sass, Webpack and Babel, as well as Node.js and MongoDB on the back-end. Experienced in building database-driven web applications with complex functionality. Always striving to learn more and be challenged.

Originally from Woodinville, WA, moved to Phnom Penh, Cambodia in 2013 to experience something different. Spent the last five years teaching high school students enrolled in a US school's distance learning program. Recently moved back to the Seattle area to further career as a developer.

## Experience  
**11/2018 - 01/2019**   
**Dom's Handcrafted Sausages** ([domssausages.com](https://domssausages.com))  
**Full Stack Web Developer**  
   
Full e-commerce single-page-application constructed from the ground up. Front-end built using React, Redux, Webpack & Babel. Back-end & CMS built using Node.js, MongoDB & KeystoneJS. Customer account creation and authentication using Passport.js. Order sending using Mailgun. Dual language functionality. Fully responsive using Sass.

## Education
**01/2018 - 09/2018**  
**freeCodeCamp** ([freecodecamp.org](https://freecodecamp.org))  
**Full Stack Web Development**
  
Completed certifications in Responsive Web Design, Algorithms, Data Structures, Front-End Libraries, Data Visualization, APIs, Microservices, Information Security and Quality Assurance, culminating in a final certification in Full Stack Web Development. Built a variety of front and back-end projects such as an anonymous message board, a stock price checker and favorites tracker, a markdown previewer, a choropleth map and a clone of the game Simon.

`
  };
  componentDidMount() {
    this.props.input(this.state.input);
  }

  handleChange = e => {
    const input = e.target.value;
    this.setState({ input });
    this.props.input(input);
  };

  render() {
    return (
      <Frame name="editor">
        <textarea
          id="editor"
          value={this.state.input}
          onChange={this.handleChange}
        />
      </Frame>
    );
  }
}

export default connect(
  null,
  { input }
)(Editor);
