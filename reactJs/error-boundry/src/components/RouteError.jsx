
import { useRouteError, Link } from "react-router-dom";

function RouteError() {
  const error = useRouteError();

  return (
    <div style={{ padding: "20px", color: "red" }}>
      <h2>Something went wrong!</h2>

      <p>{error?.message || error?.statusText}</p>

      <Link to="/">Go to Home</Link>
    </div>
  );
}

export default RouteError;
