import React from "react";
import User from "./comp/User";
import UserClass from "./comp/UserClass";
import UserFunc from "./comp/UserFunc";

function App() {
  const users = [
    {
      id: 1,
      name: "Alexandr",
    },
    {
      id: 2,
      name: "Dimitry",
    },
    {
      id: 3,
      name: "Hasan"
    },
    {
      id: 4,
      name: "Maxim",
    },
    {
      id: 5,
      name: "Alex",
    },
    {
      id: 6,
      name: "Moris",
    },
    {
      id: 7,
      name: "Mark",
    },
    {
      id: 8,
      name: "Sergey",
    },
  ];
  return (
    <>
      {/* {users.map((user, index) => {
        return <UserClass name={user.name} key={index}/>;
      })} */}
         {users.map((user, index) => {
        return <UserFunc name={user.name} key={user.id}/>;
      })}
    </>
  );
}

export default React.memo(App);
