import axios from "axios"

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
    getRandomDog: () => {
        return axios.get("https://dog.ceo/api/breeds/image/random")
    },
    getDogsOfBreed: (breed) => {
        return axios.get("https://dog.ceo/api/breed/" + breed + "/images")
    },
    getBaseBreedsList: () =>  {
        return axios.get("https://dog.ceo/api/breeds/list");
      }
}