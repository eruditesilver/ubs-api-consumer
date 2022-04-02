import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import { User } from "./interfaces/User.interface";

let fetchedUsers: User[] = [];
describe("Display User List", () => {
  render(<App />);
  it("loads a list of user", async () => {
    const users = await fetch("https://jsonplaceholder.typicode.com/users/")
      .then((res) => res.json())
      .then((data) => {
        if (Object.keys(data).length > 0 || data.length > 0) {
          return data;
        }
      });
    fetchedUsers = [...users];
    try {
      for (let index = 0; index < users.length; index++) {
        const { name } = users[index];
        const nameLabel = await screen.findByText(name);
        expect(nameLabel).toBeInTheDocument();
      }
    } catch (error) {
      console.log(error);
    }
  });
});

// test("loads a user", async () => {
//   render(<App />);
//   jest.setTimeout(1000)
//   try {
//     const userLength = fetchedUsers.length;
//     const randomSelectUserIndex = Math.floor(Math.random() * 100) % userLength;
//     const targetUserID = fetchedUsers[randomSelectUserIndex].id;
//     const clickableLink = screen.getByTestId("home-users-" + targetUserID);
//     fireEvent.click(clickableLink);
//     const { data: singleUserData } = await fetch(
//       "https://jsonplaceholder.typicode.com/users/" + targetUserID
//     ).then((res) => res.json());
//     const { name, email, phone, website } = singleUserData;
//     const nameLabel = await screen.findByText(name);
//     expect(nameLabel).toBeInTheDocument();
//     const emailLabel = await screen.findByText(email);
//     expect(emailLabel).toBeInTheDocument();
//     const phoneLabel = await screen.findByText(phone);
//     expect(phoneLabel).toBeInTheDocument();
//     const websiteLabel = await screen.findByText(website);
//     expect(websiteLabel).toBeInTheDocument();
//   } catch (error) {
//     console.log(error);
//   }
// });
