import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-amzon-dh.cloudfunctions.net/api", // THE API (cloud function) URL
  //http://127.0.0.1:4001/clone-amzon-dh/us-central1/api
});

export default instance;
