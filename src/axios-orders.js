import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-19dcc.firebaseio.com/",
});

export default instance;