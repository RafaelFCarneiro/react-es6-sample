import React, { Component } from 'react';
import UserRepos from './UserRepos';

/**
 * UserInfo
 *
 * @param {any} { user, repos }
 * @returns
 */
const UserInfo = ({ user, repos }) => {
  let userInfo = user ?
      (            
      <div className="row">
        <div className="col=lg-4">
          <img className="img-circle" 
            src={user.avatar_url} 
            alt="avatar"
            width="140"
            height="140" />
          <h2>{user.login}</h2>
          <p>{user.name}</p>
          <p>Followers: {user.webfollowers} / Following: {user.following}</p>
          <p><a 
            className="btn btn-default" 
            href={user.html_url} 
            role="button">View details</a> 
          </p>
        </div>
        <div className="col-lg-8">
          <UserRepos repos={repos} />
        </div>        
      </div>        
    ) : null;
    
  return userInfo;
};

UserInfo.propTypes = {
  user: React.PropTypes.object,
  repos: React.PropTypes.array
};

export default UserInfo;