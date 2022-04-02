import React from "react";
import { Link } from "react-router-dom";
import useFetchUser from "../hooks/useFetchUser";
export function User() {
  const { error, user, isLoading } = useFetchUser();

  if (error) {
    return <div data-testid="user-error">Error: {error.message}</div>;
  } else if (isLoading) {
    return <div data-testid="user-loading">Loading...</div>;
  } else if (user) {
    return (
      <div>
        <h1 data-testid="user-name">{user.name}</h1>
        <div data-testid="user-email">Email: {user.email}</div>
        <div data-testid="user-phone">Phone: {user.phone}</div>
        <div data-testid="user-website">Website: {user.website}</div>
        <Link to="/">Go Home</Link>
      </div>
    );
  } else {
    return <div data-testid="user-not-found">User Not Found</div>;
  }
}
export default User;
