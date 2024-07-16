import { useState, createContext, useContext } from "react";
import ReactDOM from "react-dom/client";

const UserContext = createContext();

function F1() {
  const [user, setUser] = useState("Sudhanshu");

  return (
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
      <F2 name={user} />
    </UserContext.Provider>
  );
}

function F2(props) {
  return (
    <>
      <h1>function 2, {props.name}</h1>
      
    </>
  );
}





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<F1 />);

export default F1;