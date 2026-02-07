import axios from "axios";

const instance = axios.create({
  // የባክኤንድ ሰርቨርህ API URL እዚህ ይገባል
  baseURL: "http://127.0.0.1:5001/clone-ff3f8/us-central1/api" 
});

export default instance;