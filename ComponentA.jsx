import ComponentB from "./ComponentB.jsx"
import React, { useState, createContext } from 'react';

export const UserContext = createContext();
// using UserContext
function ComponentA() {

  const [user, setUser] = useState("BroCode");

  return (
    <div className="box">
      <h1>ComponentA</h1>
      <h2>{`Hello ${user}`}</h2>
      <UserContext.Provider value={user}>
        <ComponentB user={user} />
      </UserContext.Provider>


    </div>
  );
}// provider component
export default ComponentA