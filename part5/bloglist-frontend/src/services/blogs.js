import axios from "axios";
const baseUrl = "/api/blogs";

const getAll = () => {
  const request = axios.get(baseUrl);
  //console.log(request.data);
  return request.then(response => response.data);
};

export default { getAll };
