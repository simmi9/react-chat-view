import React from "react";
//import { IState, IAction } from '../interfaces'
export interface Chat {
  id: string;
  type: string;
  title: string;
  muted: [];
  dateCreated: string;
  status: string;
  image: string;
  lastUnreadMessage: string;
  lastMessage: Message;
}

export interface Message {
  id: number;
  message: string;
  type: string;
  dateCreated: string;
  priorityType: string;
  sender: {
    id: string;
    username: string;
    firstname: string;
    lastname: string;
    profilePic: string;
    role: string;
    status: string;
    workStatus: string;
    __typename: string;
  };
  readBy: [
    /*  {
      "user": {
        "id":string,
        "__typename": string
      },
      "messageId": number,
      "timestamp": string,
      "__typename":string
    }*/
  ];
  __typename: string;
}

export interface IState {
  chats: Array<Chat>;
}

export interface IAction {
  type: string;
  payload: Array<Chat> | any;
}
const initialState: IState = {
  chats: []
};

//export const Store = React.createContext(initialState);
export const Store = React.createContext<IState | any>(initialState)

function reducer(state: IState, action: IAction): IState {
  switch (action.type) {
    case "FETCH_DATA":
      return { ...state, chats: action.payload };
  }
  return { ...state, chats: action.payload };
}

export function StoreProvider({
  children
}: JSX.ElementChildrenAttribute | any): JSX.Element {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
  );
}
