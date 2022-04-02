import React from "react";
import { Link } from "react-router-dom";
import useFetchUsers from "../hooks/useFetchUsers";
export function Home() {
  const { error, users, isLoading } = useFetchUsers();

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (isLoading) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul>
        {users.map((user) => (
          <li key={user.id} data-testid={`home-users-${user.id}`}>
            <Link
              data-testid={`home-users-link-${user.id}`}
              to={`user/${user.id}`}
            >
              {user.name}
            </Link>
          </li>
        ))}
      </ul>
    );
  }
};
export default Home;
