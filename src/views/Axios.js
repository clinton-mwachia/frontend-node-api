import axios from "axios";
const Axios = axios.create({
  baseURL: "http://localhost:4050/api/v1",
});

Axios.interceptors.request.use(
  function (res) {
    return res;
  },
  function (err) {
    return err;
  }
);

export default Axios;
