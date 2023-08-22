import React from "react";
import "./styles.css";
import { useEffect, useState } from "react";
import { Store } from "./Store";
import { faUserGroup, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import mockData from "./data";
import ChatList from "./Components/ChatList";
import Tabs from "./Components/Tabs";

//initial idea is to store context in store provider at global level to be accessible accross app, without passing down through children as props

function App(){
  return (
    <div className="App">
      <Tabs />
   <ChatList/>
    </div>
  );
}

export default App;