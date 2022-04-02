import React from "react";
import { Link } from "react-router-dom";
import useFetchUsers from "../hooks/useFetchUsers";
import "../styles/UserList.css";
export function Home(): React.ReactElement {
  const { error, users, isLoading } = useFetchUsers();

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (isLoading) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="container">
        {users.map((user) => (
          <div key={user.id} data-testid={`home-users-${user.id}`} className="card">
            <Link
              data-testid={`home-users-link-${user.id}`}
              to={`user/${user.id}`}
            >
              {user.name}
            </Link>
          </div>
        ))}
      </div>
    );
  }
}
export default Home;
