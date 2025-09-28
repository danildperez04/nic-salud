import { useEffect, useState } from "react";
import * as authService from '@/services/auth';

export function useUser(token: string | null) {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const fetchUser = async () => {
      if (!token) return;

      try {
        const data = await authService.authenticate(token);

        setUser(data);
      } catch (err) {

        setUser(null);
      }
    };

    fetchUser();
  }, [token]);

  return { user, setUser };
}
