import axios from "axios";

export const findMovie = ( movieTitle, movieObject ) => {

    const body = {movieTitle};

    return axios
    .post("http://localhost:5000/getMovie", body)
    .then(response => {
      Object.assign(movieObject, response.data);
     
    })
    .catch((err) => {
      console.log("did not work");
      console.log(err);
      console.log(err.response);
    });
};
