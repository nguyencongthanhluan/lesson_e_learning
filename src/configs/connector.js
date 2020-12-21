import axios from "axios";

const createConnector = (customConfig) => {
  const config = {};

  const token = localStorage.getItem("t");

  if (token) {
    config.headers = {
      Authorization: "Bearer " + token,
    };
  }

  return axios({ ...customConfig, ...config });
};

export default createConnector;

// export const request = (url = "", method = "", data = {}) => {
//   const config = {};

//   const token = localStorage.getItem("t");

//   if (token) {
//     config.headers = {
//       Authorization: "Bearer " + token,
//     };
//   }

//   return axios({
//     url: url,
//     method: method,
//     data: data,
//     ...config,
//   });
// };
// export default request;
