import React, { Component } from 'react';
import GitHubUser from '../services/GitHubUser';

/**
 * @export
 * @class SearchUser
 * @extends {Component}
 */
class SearchUser extends Component {
  
  /**
   * @static
   */
  static propTypes = {
    updateUser: React.PropTypes.func.isRequired,
    updateRepos: React.PropTypes.func.isRequired    
  }
  

  /**
   * Creates an instance of SearchUser.
   */
  constructor(props) {
    super(props);
    this.onsubmit = this.onsubmit.bind(this);
  }

  /**
   * @param {any} e
   */
  onsubmit(e) {
    e.preventDefault();

    GitHubUser.getByUsername(this.refs.username.value)
      .then((response) => {
        this.props.updateUser(response.data);
    });
    
    GitHubUser.getReposByUsername(this.refs.username.value)
      .then((response) => {
        this.props.updateRepos(response.data);
    });
  }    
  
  /**
   * @returns
   */
  render() {
    return(            
      <div className="jumbotron">
        <h1>GitHub Info</h1>
        <div className="rom">
          <form onSubmit={this.onsubmit}>
            <div className="form-group">
              <label>Username</label>
              <input 
                  type="text"
                  ref="username"
                  className="form-control"
                  placeholder="Ex: myuser"
              />                                                                
            </div>
            <button
              type="submit"
              className="btn btn-primary">Buscar
            </button>
          </form>                        
        </div>
      </div>
    );
  }
}

export default SearchUser 