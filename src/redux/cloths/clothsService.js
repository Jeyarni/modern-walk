import axios from "axios";

const api_url = "https://fakestoreapi.com";

class ClothsService {
  allClothsService = (url) => {
    return new Promise((resolve, reject) => {
      axios
        .get(`${api_url}/${url}`)
        .then((response) => {
          if (response && response.status === 200) {
            resolve(response?.data);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
}
const instance = new ClothsService();

export default instance;
