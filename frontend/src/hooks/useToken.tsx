import { useEffect, useState } from 'react'

export function useToken() {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setToken(token);
  }, [token])

  const setTokenStorage = (token: string) => {
    localStorage.setItem('token', token);
    setToken(token);
  }

  const removeTokenStorage = () => {
    localStorage.removeItem('token');
    setToken(null);
  }

  return { token, setTokenStorage, removeTokenStorage };
}
