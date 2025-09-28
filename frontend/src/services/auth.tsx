import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL + '/auth';

async function register({ email, username, password }: { email: string, username: string, password: string }) {
  const response = await axios.post(`${API_URL}/register`,
    {
      email,
      username,
      password
    },
    {
      headers: {
        'Content-Type': 'application/json'
      }
    });

  return response.data;
}

async function login({ username, password }: { username: string, password: string }) {
  const response = await axios.post(`${API_URL}/login`,
    {
      username,
      password
    },
    {
      headers: {
        'Content-Type': 'application/json'
      }
    })

  return response.data;
}

async function activate() {

}

async function authenticate(token: string) {
  const response = await axios(`${API_URL}/me`, {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });

  return response.data
}

export {
  register,
  login,
  activate,
  authenticate
}