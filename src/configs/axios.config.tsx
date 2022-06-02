import axios from "axios";

export const api = axios.create({
  baseURL: "https://opentdb.com",
});

// https://opentdb.com/api.php?amount=10
