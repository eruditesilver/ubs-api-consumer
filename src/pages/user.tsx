import React from "react";
import { Link } from "react-router-dom";
import useFetchUser from "../hooks/useFetchUser";
import "../styles/UserList.css";
import "../styles/User.css";
export function User() {
  const { error, user, isLoading } = useFetchUser();

  if (error) {
    return (
      <div data-testid="user-error" className="container">
        <div className="user-card">
          <div className="user-detail">Error: {error.message}</div>
          <div className="back">
            <Link to="/">Go Home</Link>
          </div>
        </div>
      </div>
    );
  } else if (isLoading) {
    return (
      <div data-testid="user-loading" className="container">
        <div className="user-card">Loading...</div>
      </div>
    );
  } else if (user) {
    return (
      <div className="container">
        <div className="user-card">
          <h1 data-testid="user-name" className="user-heading user-name">
            {user.name}
          </h1>
          <div data-testid="user-email" className="user-detail user-email">
            Email: {user.email}
          </div>
          <div data-testid="user-phone" className="user-detail user-phone">
            Phone: {user.phone}
          </div>
          <div data-testid="user-website" className="user-detail user-website">
            Website: {user.website}
          </div>
          <div className="back">
            <Link to="/">Go Home</Link>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div data-testid="user-not-found" className="container">
        <div data-testid="user-error" className="user-card">
          User Not Found
        </div>
        <div className="back">
          <Link to="/">Go Home</Link>
        </div>
      </div>
    );
  }
}
export default User;
