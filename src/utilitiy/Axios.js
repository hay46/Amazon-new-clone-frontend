import axios from "axios";

const instance = axios.create({
  // ለጊዜው በ Local እየሰራህ ከሆነ ይህ ይሁን
  baseURL: "http://127.0.0.1:5001/clone-ff3f8/us-central1/api",
  
  // ለወደፊቱ Deploy ስታደርግ ዋናውን URL እዚህ ትተካዋለህ
  // baseURL: "https://api-xxxxxxxx.cloudfunctions.net/api" 
});

export default instance;