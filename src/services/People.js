// Dependencies
import axios from "axios";

class PeopleService {
  constructor() {
    this.apiURL = 'https://randomuser.me/api/';
  }

  getPeople = () => new Promise((resolve, reject) => {
    axios.get(`${this.apiURL}?results=20`)
      .then((response) => {
        resolve(response.data.results);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export default PeopleService;