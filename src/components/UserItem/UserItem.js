import React, { Component, PropTypes } from 'react';
import './UserItem.css';

export default class UserItem extends Component {
  static propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    large: PropTypes.string,
    
  };
  render() {
    const firstName = this.props.firstName;
    const lastName = this.props.lastName;
    const large = this.props.large;
    const text = this.props.text.slice(3,-5);
    
    return (
      <div className="user-item-container">
        <img src={large} alt="foto"/>
        <div id="fullName"> {firstName}  {" "+lastName}</div>
        <div id="biography"> {text} </div>          
      </div>
    );//
  }
}
