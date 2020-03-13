import axios from 'axios';

class Services {
  constructor() {
    this.baseUrl = 'http://5d60ae24c2ca490014b27087.mockapi.io/api/v1/';
  }

  get(params) {
    return axios.get(`${this.baseUrl}${params}`).then(({ data }) => data);
  }
}

export default Services;
