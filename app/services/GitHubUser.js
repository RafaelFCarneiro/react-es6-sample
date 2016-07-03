import axios from 'axios';

const GitHubUser = {
  /**
   * 
   * 
   * @param {any} username
   * @returns
   */
  getByUsername(username) {
    return axios.get(`https://api.github.com/users/${username}`);
  },
  /**
   * 
   * 
   * @param {any} username
   * @returns
   */
  getReposByUsername(username) {
    return axios.get(`http://api.github.com/users/${username}/repos`);
  }
};

export default GitHubUser;