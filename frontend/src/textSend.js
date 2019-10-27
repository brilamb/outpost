import React, { Fragment , Component} from "react";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

class TextSend extends React.Component{
  
  constructor(props) {
    super(props)
    this.state = {
      value: 'spaghet test'
    }
  }
  buttonPress(e) {
    this.setState({value: e.target.value})
    this.setState({[e.target.value]: ''})
    console.log(this.state.value);
    
  }
  handleChange = (e) => {
    this.setState({value: e.target.value});
    
    console.log("text box changed"+this.state.value)
    
  }
  render() {
      return (
        <div className="form-inline" id = "textBar">
            <textarea className="form-control"  onChange={this.handleChange.bind(this)} id="sendTextArea" placeholder="Aa" rows = '1' />
            <Button variant = "link" onClick={this.buttonPress.bind(this)} id = "button"><img src={"/send-arrow.png"} id = "sendArrowImage"></img> </Button> 
        </div>
      )
  }

}

export default TextSend;
