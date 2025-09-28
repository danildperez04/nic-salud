import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL + '/departments';

async function getAll() {
  const res = await axios.get(API_URL);

  return res.data;
}

export {
  getAll
}