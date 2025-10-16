import axios from "axios";

const commonAPI = async (httpMethod, url, reqBody) => {
  try {
    const res = await axios({ method: httpMethod, url, data: reqBody });
    return res.data; // return only data
  } catch (err) {
    console.error("API Error:", err.response ? err.response.data : err.message);
    throw err; // throw to handle in component
  }
};

export default commonAPI;
