import { useState } from "react";
import React from "react";

import "./App.css";
import HomeLogin from "./components/HomeLogin";
import Form from "./components/Form";
import HomeHeader from "./components/HomeHeader";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [listTransactions, setListTransactions] = useState([]);
  const [prohibited, setProhibited] = useState(listTransactions);

  function addList(newList) {
    setListTransactions([...listTransactions, newList]);
    setProhibited([...prohibited, newList]);
  }

  function deleteList(index) {
    let newList = [...listTransactions];
    newList.splice(index, 1);
    setListTransactions(newList);
    setProhibited(newList);
  }

  return (
    <div className="App">
      {isLogin ? (
        <>
          <HomeHeader isLogin={isLogin} setIslogin={setIsLogin} />
          <Form
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
            addList={addList}
            deleteList={deleteList}
            prohibited={prohibited}
            setProhibited={setProhibited}
          />
        </>
      ) : (
        <div className="App-login">
          <HomeLogin isLogin={isLogin} setIslogin={setIsLogin} />
        </div>
      )}
    </div>
  );
}

export default App;
