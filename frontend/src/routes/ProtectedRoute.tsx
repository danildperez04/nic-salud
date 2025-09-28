import { useToken } from '@/hooks/useToken'
import { useUser } from '@/hooks/useUser';
import { Outlet, useNavigate } from 'react-router';

export function ProtectedRoute(roles: string[]) {
  const { token } = useToken();

  const { user } = useUser(token);

  const navigate = useNavigate();

  if (!user) {
    navigate('/login');
    return;
  }

  if (!roles.includes(user.role.name)) {
    navigate('/');
    return;
  }

  return (
    <Outlet />
  )
}
