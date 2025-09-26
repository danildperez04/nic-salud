import { Link } from "react-router";

export function NotFoundPage() {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to="/">Go to Homepage</Link>
    </div>
  );
};