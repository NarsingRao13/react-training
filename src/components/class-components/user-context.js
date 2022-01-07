import React, { Component } from "react";

const UserContext = React.createContext("tech");

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserConsumer, UserProvider };
export default UserContext;
