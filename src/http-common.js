import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:58494/",
  headers: {
    "Content-type": "application/json"
    // 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
  }

  
});