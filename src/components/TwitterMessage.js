import React from "react";

class TwitterMessage extends React.Component {


  constructor(props) {
    super();
    this.state = {
      message: "",
      newChar: props.maxChars
    };
  }

  handleChange = event => {
    //debugger
    let nChar = this.props.maxChars - event.target.value.length
    this.setState({
      message: event.target.value,
      newChar: nChar
    })

  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={event => this.handleChange(event)} />
        <p>{this.state.newChar} left</p>
      </div>
    );
  }
}

export default TwitterMessage;
