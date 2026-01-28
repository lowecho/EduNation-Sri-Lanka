import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-[70vh] items-center justify-center">
      <div className="text-center">
        <h1 className="mb-3 text-4xl font-semibold">404</h1>
        <p className="mb-5 text-muted-foreground">Oops! Page not found</p>
        <Link to="/" className="text-primary underline underline-offset-4 hover:opacity-90">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
