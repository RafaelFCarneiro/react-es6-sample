import React, { Component } from 'react';
import SearchUser from './SearchUser';
import UserInfo from './UserInfo';


/**
 * Main UI component
 * 
 * @export
 * @class GitHub
 * @extends {Component}
 */
export default class GitHub extends Component {
  
  /**
   * Creates an instance of GitHub.
   * 
   * @param {any} props
   */
  constructor(props) {
    super(props);
      
    this.state = {
      user: null,
      repos: []
    }
    
    this.updateUser = this.updateUser.bind(this);
    this.updateRepos = this.updateRepos.bind(this);
  }

  /**
   * Set user
   * 
   * @param {any} user
   */
  updateUser(user) {
    this.setState({user: user});
  }
  
  /**
   * Set repository
   * 
   * @param {any} repos
   */
  updateRepos(repos) {
    this.setState({repos: repos});
  }

  /**
   * JSX interface
   * 
   * @returns
   */
  render() {
    return(            
      <div className="container">
        <SearchUser 
          updateUser={this.updateUser}
          updateRepos={this.updateRepos}
         />
        <UserInfo 
          user={this.state.user}
          repos={this.state.repos} 
          />
      </div>                                            
    );
  }
}