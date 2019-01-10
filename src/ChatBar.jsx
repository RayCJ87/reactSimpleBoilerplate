import React, {Component}from 'react';

let newUser = '';
let newContent = '';

export default class ChatBar extends Component {

  constructor (props){
    super(props)
    this.handleEnter = this.handleEnter.bind(this);
  }
  checkMsg (evt) {
    evt.preventDefault();
    if (evt.target.name === "theName"){
      newUser = evt.target.value;
      console.log("The user is: ", newUser);
    }
    if (evt.target.name === "newContent"){
      newContent = evt.target.value;
      console.log("The msg is: ", newContent);
    }
  }

  handleEnter (evt) {
    evt.preventDefault();
    console.log("The userrr is: ", newUser);
    if (evt.key === "Enter" && newContent != ''){
      if (newUser === ''){
        newUser = 'Anonymous'
      }
      this.props.updateCurrentUser(newUser)
      .then(res=> {
          this.props._sendMessageToServer(newUser, newContent)
      })
      evt.target.value = '';
    }

  }

  render() {
    // const theUser = this.props.theUser.name;
    return (
        <footer className="chatbar">
          <input className="chatbar-username" placeholder="Your Name (Optional)" name="theName" onChange = {this.checkMsg} />
          <input className="chatbar-message" placeholder="Type a message and hit ENTER" name="newContent" onChange={this.checkMsg} onKeyUp={this.handleEnter}/>
        </footer>
    )
  }
}