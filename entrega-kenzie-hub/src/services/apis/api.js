import axios from "axios";

const token = localStorage.getItem("@TOKEN");

export const Api = axios.create({
  baseURL: "https://kenziehub.herokuapp.com",
  timeout: 10000,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
