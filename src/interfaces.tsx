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
  
  export interface IState {
    chats: Array<Chat>;
  }