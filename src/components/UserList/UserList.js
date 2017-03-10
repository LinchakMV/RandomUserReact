import React, { Component } from 'react';
import UserItem from '../UserItem/UserItem';
import { getRandomUsers } from '../../User';
import { getRandomText } from '../../UserText';
import './UserList.css';

export class UserList extends Component {

  constructor(props){
    super(props);
    this.state = {fetching: true};
  }

  
  componentWillMount() {
      //request random users
      //set state to fetching
    
    getRandomUsers()
    
      .then( data => {
        this.setState({
          users: data,
          fetching: false
        });
      });
      getRandomText()
      .then( data =>{
        this.setState({
          text_out:data,
          // fetching:false
        })
      })
  }
    
  renderUserItems() {
    
    return this.state.users.map((user, index) => {
      const first = user.name.first;
      const last = user.name.last;
      const photo = user.picture.large;
      const text = this.state.text_out.text_out;
      return (
        <UserItem
          key={first+last+index}
          firstName={first}
          lastName={last}  
          text={text}
          large={photo}/>
      );
    });
  }
  
  render () {
    if(this.state.fetching) {
      //show loader
      return (        
        <div>
          <img src='../public/favicon.ico' alt="loader"/>
        </div>
      );
    }

    return (
      <div className="header">
        <div>
          {this.renderUserItems()}           
        </div>        
      </div>
    );
  }
}
