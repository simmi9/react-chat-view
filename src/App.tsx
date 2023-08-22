import React from 'react';
import logo from './logo.svg';
import './App.css';

import { useEffect, useState } from "react";
import { Store } from "./Store";
import { faUserGroup, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

const mockData = {
  chats: {
    continuationId: null,
    chats: [
      {
        id: "3dc22400-4648-44a3-beb9-cbfecc1a9d1f",
        type: "single",
        title: null,
        muted: [],
        unreadPriorityMessages: [],
        dateCreated: "2023-07-19T00:44:04.704Z",
        image: null,
        status: "active",
        lastUnreadMessage: null,
        lastMessage: {
          id: 10314,
          message: "dsdsds",
          type: "text",
          dateCreated: "2023-07-19T00:44:06.337Z",
          priorityType: "regular",
          sender: {
            id: "8100fed5-c1bf-4af0-a5b7-284612f38e6d",
            username: "hchamad",
            firstname: "Hamad ",
            lastname: "Ahmad",
            profilePic: null,
            role: "Neurosurgeon",
            status: "active",
            workStatus: "on_shift",
            __typename: "PublicUser"
          },
          readBy: [
            {
              user: {
                id: "8100fed5-c1bf-4af0-a5b7-284612f38e6d",
                __typename: "PublicUser"
              },
              messageId: 10314,
              timestamp: "2023-07-19T00:44:06.000Z",
              __typename: "ReadReceipt"
            }
          ],
          __typename: "Message"
        },
        __typename: "Chat",
        members: [
          {
            privilege: "REGULAR",
            id: "2b881170-5b6d-11e7-a17b-2d997b30f468",
            username: "support",
            firstname: "Hypercare",
            lastname: "Support",
            profilePic: null,
            role: "Support",
            status: "active",
            workStatus: "on_shift",
            statusExpiryDate: null,
            statusDescription: "fgdgdfgfdgdf",
            workStatusProxy: null,
            __typename: "ChatMember"
          },
          {
            privilege: "ADMIN",
            id: "8100fed5-c1bf-4af0-a5b7-284612f38e6d",
            username: "hchamad",
            firstname: "Hamad ",
            lastname: "Ahmad",
            profilePic: null,
            role: "Neurosurgeon",
            status: "active",
            workStatus: "on_shift",
            statusExpiryDate: null,
            statusDescription: "Hey",
            workStatusProxy: null,
            __typename: "ChatMember"
          }
        ]
      },
      {
        id: "cdfcec57-a33e-4f28-ac46-f04a5cb17b20",
        type: "single",
        title: null,
        muted: [],
        unreadPriorityMessages: [],
        dateCreated: "2023-02-03T19:16:50.721Z",
        image: null,
        status: "active",
        lastUnreadMessage: null,
        lastMessage: {
          id: 10313,
          message: "Test!!!!!!!!",
          type: "text",
          dateCreated: "2023-07-19T00:43:54.925Z",
          priorityType: "regular",
          sender: {
            id: "8100fed5-c1bf-4af0-a5b7-284612f38e6d",
            username: "hchamad",
            firstname: "Hamad ",
            lastname: "Ahmad",
            profilePic: null,
            role: "Neurosurgeon",
            status: "active",
            workStatus: "on_shift",
            __typename: "PublicUser"
          },
          readBy: [
            {
              user: {
                id: "8100fed5-c1bf-4af0-a5b7-284612f38e6d",
                __typename: "PublicUser"
              },
              messageId: 10313,
              timestamp: "2023-07-19T00:43:55.000Z",
              __typename: "ReadReceipt"
            }
          ],
          __typename: "Message"
        },
        __typename: "Chat",
        members: [
          {
            privilege: "REGULAR",
            id: "263ef968-865e-497e-9d38-2ca7cc1cdb2d",
            username: "salmaan",
            firstname: "Salmaan",
            lastname: "Ahmed",
            profilePic: {
              url:
                "https://hc-api-staging-images.s3.ca-central-1.amazonaws.com/263ef968-865e-497e-9d38-2ca7cc1cdb2d/bee6e99c-9c7f-496f-a9dc-ef9a452cac8b.jpg",
              __typename: "Image"
            },
            role: "iOS Engineer :)",
            status: "active",
            workStatus: "on_shift",
            statusExpiryDate: null,
            statusDescription: null,
            workStatusProxy: null,
            __typename: "ChatMember"
          },
          {
            privilege: "ADMIN",
            id: "8100fed5-c1bf-4af0-a5b7-284612f38e6d",
            username: "hchamad",
            firstname: "Hamad ",
            lastname: "Ahmad",
            profilePic: null,
            role: "Neurosurgeon",
            status: "active",
            workStatus: "on_shift",
            statusExpiryDate: null,
            statusDescription: "Hey",
            workStatusProxy: null,
            __typename: "ChatMember"
          }
        ]
      },
      {
        id: "2335ae90-2a94-4401-a998-2a3e032e055c",
        type: "single",
        title: null,
        muted: [],
        unreadPriorityMessages: [],
        dateCreated: "2023-07-19T00:43:38.544Z",
        image: null,
        status: "active",
        lastUnreadMessage: null,
        lastMessage: {
          id: 10312,
          message: "Testing messages",
          type: "text",
          dateCreated: "2023-07-19T00:43:44.587Z",
          priorityType: "regular",
          sender: {
            id: "8100fed5-c1bf-4af0-a5b7-284612f38e6d",
            username: "hchamad",
            firstname: "Hamad ",
            lastname: "Ahmad",
            profilePic: null,
            role: "Neurosurgeon",
            status: "active",
            workStatus: "on_shift",
            __typename: "PublicUser"
          },
          readBy: [
            {
              user: {
                id: "8100fed5-c1bf-4af0-a5b7-284612f38e6d",
                __typename: "PublicUser"
              },
              messageId: 10312,
              timestamp: "2023-07-19T00:43:44.000Z",
              __typename: "ReadReceipt"
            }
          ],
          __typename: "Message"
        },
        __typename: "Chat",
        members: [
          {
            privilege: "REGULAR",
            id: "3c4b9d2b-eff4-48c9-95ab-fba0682c229b",
            username: "sruthi0000",
            firstname: "sruthi",
            lastname: "oooo",
            profilePic: {
              url:
                "https://hc-api-staging-images.s3.ca-central-1.amazonaws.com/3c4b9d2b-eff4-48c9-95ab-fba0682c229b/8131ac64-35ca-41d5-a480-d8a2417da299.png",
              __typename: "Image"
            },
            role: null,
            status: "active",
            workStatus: "on_shift",
            statusExpiryDate: null,
            statusDescription: null,
            workStatusProxy: null,
            __typename: "ChatMember"
          },
          {
            privilege: "ADMIN",
            id: "8100fed5-c1bf-4af0-a5b7-284612f38e6d",
            username: "hchamad",
            firstname: "Hamad ",
            lastname: "Ahmad",
            profilePic: null,
            role: "Neurosurgeon",
            status: "active",
            workStatus: "on_shift",
            statusExpiryDate: null,
            statusDescription: "Hey",
            workStatusProxy: null,
            __typename: "ChatMember"
          }
        ]
      },
      {
        id: "10837472-addf-44cc-a982-a1dad93ebee8",
        type: "group",
        title: null,
        muted: [],
        unreadPriorityMessages: [],
        dateCreated: "2023-07-19T00:43:31.482Z",
        image: null,
        status: "active",
        lastUnreadMessage: null,
        lastMessage: {
          id: 10311,
          message: "Hey",
          type: "text",
          dateCreated: "2023-07-19T00:43:32.810Z",
          priorityType: "regular",
          sender: {
            id: "8100fed5-c1bf-4af0-a5b7-284612f38e6d",
            username: "hchamad",
            firstname: "Hamad ",
            lastname: "Ahmad",
            profilePic: null,
            role: "Neurosurgeon",
            status: "active",
            workStatus: "on_shift",
            __typename: "PublicUser"
          },
          readBy: [
            {
              user: {
                id: "8100fed5-c1bf-4af0-a5b7-284612f38e6d",
                __typename: "PublicUser"
              },
              messageId: 10311,
              timestamp: "2023-07-19T00:43:32.000Z",
              __typename: "ReadReceipt"
            }
          ],
          __typename: "Message"
        },
        __typename: "Chat",
        members: [
          {
            privilege: "REGULAR",
            id: "76c2b470-f389-4246-9da9-1eb2f99decbc",
            username: "salmaan1",
            firstname: "Salmaan",
            lastname: "Ahmed",
            profilePic: null,
            role: "Salmaan1",
            status: "active",
            workStatus: "on_shift",
            statusExpiryDate: null,
            statusDescription: null,
            workStatusProxy: null,
            __typename: "ChatMember"
          },
          {
            privilege: "ADMIN",
            id: "8100fed5-c1bf-4af0-a5b7-284612f38e6d",
            username: "hchamad",
            firstname: "Hamad ",
            lastname: "Ahmad",
            profilePic: null,
            role: "Neurosurgeon",
            status: "active",
            workStatus: "on_shift",
            statusExpiryDate: null,
            statusDescription: "Hey",
            workStatusProxy: null,
            __typename: "ChatMember"
          },
          {
            privilege: "REGULAR",
            id: "b28780a6-99eb-4407-90c9-e498615b327e",
            username: "umarazhar",
            firstname: "Umar",
            lastname: "Azhar",
            profilePic: {
              url:
                "https://hc-api-staging-images.s3.ca-central-1.amazonaws.com/b28780a6-99eb-4407-90c9-e498615b327e/6447a7fb-c31c-444c-9dfd-e495f50a5f4c.png",
              __typename: "Image"
            },
            role: "CTO @ Hypercare",
            status: "active",
            workStatus: "on_shift",
            statusExpiryDate: null,
            statusDescription: null,
            workStatusProxy: null,
            __typename: "ChatMember"
          }
        ]
      },
      {
        id: "9ef101cd-d3d7-43fe-abc4-d538c7c95833",
        type: "single",
        title: null,
        muted: [],
        unreadPriorityMessages: [],
        dateCreated: "2022-12-24T19:08:35.787Z",
        image: null,
        status: "active",
        lastUnreadMessage: null,
        lastMessage: {
          id: 5772,
          message: "(123) 456-7890",
          type: "text",
          dateCreated: "2023-02-16T20:21:46.217Z",
          priorityType: "regular",
          sender: {
            id: "77476b67-23d8-466e-8606-719e6efa28e1",
            username: "sralph",
            firstname: "Ralph",
            lastname: "Simelus",
            profilePic: null,
            role: "Android Engineer",
            status: "active",
            workStatus: "on_shift",
            __typename: "PublicUser"
          },
          readBy: [
            {
              user: {
                id: "8100fed5-c1bf-4af0-a5b7-284612f38e6d",
                __typename: "PublicUser"
              },
              messageId: 5772,
              timestamp: "2023-02-16T20:21:55.000Z",
              __typename: "ReadReceipt"
            },
            {
              user: {
                id: "77476b67-23d8-466e-8606-719e6efa28e1",
                __typename: "PublicUser"
              },
              messageId: 5772,
              timestamp: "2023-02-16T20:21:46.000Z",
              __typename: "ReadReceipt"
            }
          ],
          __typename: "Message"
        },
        __typename: "Chat",
        members: [
          {
            privilege: "ADMIN",
            id: "77476b67-23d8-466e-8606-719e6efa28e1",
            username: "sralph",
            firstname: "Ralph",
            lastname: "Simelus",
            profilePic: null,
            role: "Android Engineer",
            status: "active",
            workStatus: "on_shift",
            statusExpiryDate: null,
            statusDescription: "Testing new work status flow",
            workStatusProxy: {
              id: "2b881170-5b6d-11e7-a17b-2d997b30f468",
              firstname: "Hypercare",
              lastname: "Support",
              username: "support",
              status: "active",
              __typename: "PublicUser"
            },
            __typename: "ChatMember"
          },
          {
            privilege: "REGULAR",
            id: "8100fed5-c1bf-4af0-a5b7-284612f38e6d",
            username: "hchamad",
            firstname: "Hamad ",
            lastname: "Ahmad",
            profilePic: null,
            role: "Neurosurgeon",
            status: "active",
            workStatus: "on_shift",
            statusExpiryDate: null,
            statusDescription: "Hey",
            workStatusProxy: null,
            __typename: "ChatMember"
          }
        ]
      },
      {
        id: "d01c5707-cd3f-4079-ae76-a6f9cab24434",
        type: "self",
        title: null,
        muted: [],
        unreadPriorityMessages: [],
        dateCreated: "2023-02-03T19:17:07.059Z",
        image: null,
        status: "active",
        lastUnreadMessage: null,
        lastMessage: {
          id: 5770,
          message: "(123) 456-7890",
          type: "text",
          dateCreated: "2023-02-16T20:21:00.308Z",
          priorityType: "regular",
          sender: {
            id: "8100fed5-c1bf-4af0-a5b7-284612f38e6d",
            username: "hchamad",
            firstname: "Hamad ",
            lastname: "Ahmad",
            profilePic: null,
            role: "Neurosurgeon",
            status: "active",
            workStatus: "on_shift",
            __typename: "PublicUser"
          },
          readBy: [
            {
              user: {
                id: "8100fed5-c1bf-4af0-a5b7-284612f38e6d",
                __typename: "PublicUser"
              },
              messageId: 5770,
              timestamp: "2023-02-16T20:21:00.000Z",
              __typename: "ReadReceipt"
            }
          ],
          __typename: "Message"
        },
        __typename: "Chat",
        members: [
          {
            privilege: "ADMIN",
            id: "8100fed5-c1bf-4af0-a5b7-284612f38e6d",
            username: "hchamad",
            firstname: "Hamad ",
            lastname: "Ahmad",
            profilePic: null,
            role: "Neurosurgeon",
            status: "active",
            workStatus: "on_shift",
            statusExpiryDate: null,
            statusDescription: "Hey",
            workStatusProxy: null,
            __typename: "ChatMember"
          }
        ]
      },
      {
        id: "7a81241a-15a5-412f-8fbf-8321df4605a7",
        type: "group",
        title: "MUTE TEMP",
        muted: [],
        unreadPriorityMessages: [5571],
        dateCreated: "2023-01-18T18:56:19.968Z",
        image: null,
        status: "active",
        lastUnreadMessage: null,
        lastMessage: {
          id: 5604,
          message: "HI",
          type: "text",
          dateCreated: "2023-01-18T19:10:54.944Z",
          priorityType: "regular",
          sender: {
            id: "b28780a6-99eb-4407-90c9-e498615b327e",
            username: "umarazhar",
            firstname: "Umar",
            lastname: "Azhar",
            profilePic: {
              url:
                "https://hc-api-staging-images.s3.ca-central-1.amazonaws.com/b28780a6-99eb-4407-90c9-e498615b327e/6447a7fb-c31c-444c-9dfd-e495f50a5f4c.png",
              __typename: "Image"
            },
            role: "CTO @ Hypercare",
            status: "active",
            workStatus: "on_shift",
            __typename: "PublicUser"
          },
          readBy: [
            {
              user: {
                id: "b28780a6-99eb-4407-90c9-e498615b327e",
                __typename: "PublicUser"
              },
              messageId: 5604,
              timestamp: "2023-01-18T19:10:55.000Z",
              __typename: "ReadReceipt"
            },
            {
              user: {
                id: "8100fed5-c1bf-4af0-a5b7-284612f38e6d",
                __typename: "PublicUser"
              },
              messageId: 5604,
              timestamp: "2023-02-14T19:36:11.000Z",
              __typename: "ReadReceipt"
            }
          ],
          __typename: "Message"
        },
        __typename: "Chat",
        members: [
          {
            privilege: "REGULAR",
            id: "263ef968-865e-497e-9d38-2ca7cc1cdb2d",
            username: "salmaan",
            firstname: "Salmaan",
            lastname: "Ahmed",
            profilePic: {
              url:
                "https://hc-api-staging-images.s3.ca-central-1.amazonaws.com/263ef968-865e-497e-9d38-2ca7cc1cdb2d/bee6e99c-9c7f-496f-a9dc-ef9a452cac8b.jpg",
              __typename: "Image"
            },
            role: "iOS Engineer :)",
            status: "active",
            workStatus: "on_shift",
            statusExpiryDate: null,
            statusDescription: null,
            workStatusProxy: null,
            __typename: "ChatMember"
          },
          {
            privilege: "REGULAR",
            id: "3c4b9d2b-eff4-48c9-95ab-fba0682c229b",
            username: "sruthi0000",
            firstname: "sruthi",
            lastname: "oooo",
            profilePic: {
              url:
                "https://hc-api-staging-images.s3.ca-central-1.amazonaws.com/3c4b9d2b-eff4-48c9-95ab-fba0682c229b/8131ac64-35ca-41d5-a480-d8a2417da299.png",
              __typename: "Image"
            },
            role: null,
            status: "active",
            workStatus: "on_shift",
            statusExpiryDate: null,
            statusDescription: null,
            workStatusProxy: null,
            __typename: "ChatMember"
          },
          {
            privilege: "ADMIN",
            id: "52b718ac-61d8-41c0-8789-057496abb808",
            username: "umarazh395",
            firstname: "Umar",
            lastname: "Azhar",
            profilePic: {
              url:
                "https://hc-api-staging-images.s3.ca-central-1.amazonaws.com/52b718ac-61d8-41c0-8789-057496abb808/5a221fa0-23fa-44dc-aab5-dfe9c262211a.png",
              __typename: "Image"
            },
            role: "CTO",
            status: "active",
            workStatus: "on_shift",
            statusExpiryDate: null,
            statusDescription: null,
            workStatusProxy: null,
            __typename: "ChatMember"
          },
          {
            privilege: "REGULAR",
            id: "76c2b470-f389-4246-9da9-1eb2f99decbc",
            username: "salmaan1",
            firstname: "Salmaan",
            lastname: "Ahmed",
            profilePic: null,
            role: "Salmaan1",
            status: "active",
            workStatus: "on_shift",
            statusExpiryDate: null,
            statusDescription: null,
            workStatusProxy: null,
            __typename: "ChatMember"
          },
          {
            privilege: "REGULAR",
            id: "8100fed5-c1bf-4af0-a5b7-284612f38e6d",
            username: "hchamad",
            firstname: "Hamad ",
            lastname: "Ahmad",
            profilePic: null,
            role: "Neurosurgeon",
            status: "active",
            workStatus: "on_shift",
            statusExpiryDate: null,
            statusDescription: "Hey",
            workStatusProxy: null,
            __typename: "ChatMember"
          },
          {
            privilege: "ADMIN",
            id: "b28780a6-99eb-4407-90c9-e498615b327e",
            username: "umarazhar",
            firstname: "Umar",
            lastname: "Azhar",
            profilePic: {
              url:
                "https://hc-api-staging-images.s3.ca-central-1.amazonaws.com/b28780a6-99eb-4407-90c9-e498615b327e/6447a7fb-c31c-444c-9dfd-e495f50a5f4c.png",
              __typename: "Image"
            },
            role: "CTO @ Hypercare",
            status: "active",
            workStatus: "on_shift",
            statusExpiryDate: null,
            statusDescription: null,
            workStatusProxy: null,
            __typename: "ChatMember"
          },
          {
            privilege: "REGULAR",
            id: "ba5c0d2a-9aae-4961-a32c-2cb16cfa84ea",
            username: "narotta563",
            firstname: "Narottam",
            lastname: "Bisht",
            profilePic: null,
            role: "Software Engineer @ Hyperc",
            status: "active",
            workStatus: "on_shift",
            statusExpiryDate: null,
            statusDescription: null,
            workStatusProxy: null,
            __typename: "ChatMember"
          }
        ]
      },
      {
        id: "b6a8732e-90dd-4459-9659-eda7d98bf5ea",
        type: "single",
        title: null,
        muted: ["messages", "system"],
        unreadPriorityMessages: [],
        dateCreated: "2022-10-04T16:24:20.541Z",
        image: null,
        status: "active",
        lastUnreadMessage: null,
        lastMessage: {
          id: 5315,
          message: "3",
          type: "text",
          dateCreated: "2023-01-09T18:02:12.155Z",
          priorityType: "regular",
          sender: {
            id: "8100fed5-c1bf-4af0-a5b7-284612f38e6d",
            username: "hchamad",
            firstname: "Hamad ",
            lastname: "Ahmad",
            profilePic: null,
            role: "Neurosurgeon",
            status: "active",
            workStatus: "on_shift",
            __typename: "PublicUser"
          },
          readBy: [
            {
              user: {
                id: "b28780a6-99eb-4407-90c9-e498615b327e",
                __typename: "PublicUser"
              },
              messageId: 5315,
              timestamp: "2023-01-17T15:46:13.000Z",
              __typename: "ReadReceipt"
            },
            {
              user: {
                id: "8100fed5-c1bf-4af0-a5b7-284612f38e6d",
                __typename: "PublicUser"
              },
              messageId: 5315,
              timestamp: "2023-01-09T18:02:12.000Z",
              __typename: "ReadReceipt"
            }
          ],
          __typename: "Message"
        },
        __typename: "Chat",
        members: [
          {
            privilege: "REGULAR",
            id: "8100fed5-c1bf-4af0-a5b7-284612f38e6d",
            username: "hchamad",
            firstname: "Hamad ",
            lastname: "Ahmad",
            profilePic: null,
            role: "Neurosurgeon",
            status: "active",
            workStatus: "on_shift",
            statusExpiryDate: null,
            statusDescription: "Hey",
            workStatusProxy: null,
            __typename: "ChatMember"
          },
          {
            privilege: "ADMIN",
            id: "b28780a6-99eb-4407-90c9-e498615b327e",
            username: "umarazhar",
            firstname: "Umar",
            lastname: "Azhar",
            profilePic: {
              url:
                "https://hc-api-staging-images.s3.ca-central-1.amazonaws.com/b28780a6-99eb-4407-90c9-e498615b327e/6447a7fb-c31c-444c-9dfd-e495f50a5f4c.png",
              __typename: "Image"
            },
            role: "CTO @ Hypercare",
            status: "active",
            workStatus: "on_shift",
            statusExpiryDate: null,
            statusDescription: null,
            workStatusProxy: null,
            __typename: "ChatMember"
          }
        ]
      },
      {
        id: "a27f918f-4cf9-40a2-a016-64cfde1ae5ab",
        type: "single",
        title: null,
        muted: [],
        unreadPriorityMessages: [],
        dateCreated: "2022-09-29T20:45:27.031Z",
        image: null,
        status: "active",
        lastUnreadMessage: null,
        lastMessage: {
          id: 5310,
          message: "Hey",
          type: "text",
          dateCreated: "2023-01-09T18:00:58.662Z",
          priorityType: "regular",
          sender: {
            id: "8100fed5-c1bf-4af0-a5b7-284612f38e6d",
            username: "hchamad",
            firstname: "Hamad ",
            lastname: "Ahmad",
            profilePic: null,
            role: "Neurosurgeon",
            status: "active",
            workStatus: "on_shift",
            __typename: "PublicUser"
          },
          readBy: [
            {
              user: {
                id: "8100fed5-c1bf-4af0-a5b7-284612f38e6d",
                __typename: "PublicUser"
              },
              messageId: 5310,
              timestamp: "2023-01-09T18:00:58.000Z",
              __typename: "ReadReceipt"
            }
          ],
          __typename: "Message"
        },
        __typename: "Chat",
        members: [
          {
            privilege: "REGULAR",
            id: "52b718ac-61d8-41c0-8789-057496abb808",
            username: "umarazh395",
            firstname: "Umar",
            lastname: "Azhar",
            profilePic: {
              url:
                "https://hc-api-staging-images.s3.ca-central-1.amazonaws.com/52b718ac-61d8-41c0-8789-057496abb808/5a221fa0-23fa-44dc-aab5-dfe9c262211a.png",
              __typename: "Image"
            },
            role: "CTO",
            status: "active",
            workStatus: "on_shift",
            statusExpiryDate: null,
            statusDescription: null,
            workStatusProxy: null,
            __typename: "ChatMember"
          },
          {
            privilege: "ADMIN",
            id: "8100fed5-c1bf-4af0-a5b7-284612f38e6d",
            username: "hchamad",
            firstname: "Hamad ",
            lastname: "Ahmad",
            profilePic: null,
            role: "Neurosurgeon",
            status: "active",
            workStatus: "on_shift",
            statusExpiryDate: null,
            statusDescription: "Hey",
            workStatusProxy: null,
            __typename: "ChatMember"
          }
        ]
      }
    ],
    __typename: "PaginatedChats"
  }
};

const getTime = (date: string) => {
  var datetime = date;
  var d1 = new Date(datetime);
  var minute = d1.getUTCMinutes();
  var hour = d1.getUTCHours();

  return `${hour}:${minute}`;
};

function ChatList() {}

const Tabs = () => {
  return (
    <div className="Tabs">
      {/* Tab nav */}
      <ul className="nav">
        <li>Priority</li>
        <li>Archieved</li>
      </ul>
      <div className="outlet">{/* content will be shown here */}</div>
    </div>
  );
};
const SecondTab = () => {
  return (
    <div className="SecondTab">
      <p>Second Tab!! Hurray!!</p>
      {/* Second  tab content will go here */}
    </div>
  );
};

const FirstTab = () => {
  return (
    
    <div className="FirstTab">
      <p>First Tab!! Hurray!!</p>
      {/* Second  tab content will go here */}
    </div>
    
  );
};


export default function App() {
  const [data, setData] = useState({});
  const { state, dispatch } = React.useContext(Store);
  React.useEffect(() => {
    //   state.chats.length === 0 && fetchDataAction(dispatch)
  });
/*
  const props = {
    chats: state.chats,
    store: { state, dispatch }
  };
  */

 const fetchChats = async()=>{
  const response = await fetch("url");
  const details = await response .json();
  setData(details );
}

let query=`
query organizationChats($continuationId: ID, $limit: Int, $isPriority: Boolean) {
    chatsForOrganization(continuationId: $continuationId, limit: $limit, isPriority: $isPriority) {
         chats {
    ...basicChatFields
     unreadPriorityMessages
     }
     }
    }
    
    fragment basicChatFields on Chat {
         chatId: id
    title
    type
    members {
         ...chatMemberFields
         } lastMessage {
            ...messageFields
         }
         muted
    status
     dateCreated
      isArchived 
      unreadPriorityMessages
    }
    
    fragment chatMemberFields on ChatMember {
         id
         firstname
         lastname
          username
           role
           profilePic {
             url
             }
             status
             privilege

    workStatus
     statusExpiryDate
      statusDescription
       workStatusProxy { 
        ...publicUserStatusFields
    }
}

fragment messageFields on Message {
     id
     priority
      message
       image
       # attachment {
        # url
        # mimeType
        # fileName
        # }
         type
         dateCreated
          sender {
             ...publicUserFields
             }
              readBy {

    ...readReceiptFields
 }
 data {
     __typename
      ... on ConsultMessageData { 
        mrn
        firstname
    lastname
     details
     }
     }
    }
    
    fragment readReceiptFields on ReadReceipt {
        messageId
        user {
    ...publicUserFields
 }
 timestamp
}

fragment publicUserFields on PublicUser {
    id
    firstname
    lastname
     username
      role
       profilePic {
         url
        }
         workStatus
          statusDescription
           workStatusProxy {

    ...publicUserStatusFields
}
}

fragment publicUserStatusFields on PublicUser {
     id
    firstname
    lastname
    username
    role
    profilePic {
         url
        }
    }
    
    ","variables":{"isPriority":false,"limit":20}
`

useEffect(() => {
 fetchChats();
},[]);
  const fetchData = () => {
    console.log("FETCHING...");

    fetch("https://api.staging.hypercare.com/graphql/private", {
      credentials: "include",
      method: "GET",
      headers: {
        "hypercare-scope": "eyJvcmdhbml6YXRpb25JZCI6MX0=",
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization:"3a1aeb259e5987a8be639d05714cc1dd2f87ff15",
        
        "data": `"query":${query}`,
      
      
    },}
    ).then((res:any) => (res == null ? mockData : res.data.json())) // res.json())
      .then(setData);

    if (data == null) {
      setData(mockData.chats.chats);
    }
  };
  useEffect(() => {
    fetchData();
  });
// <!-- {mockData.chats.chats[0].id}->'
//c.members.values.toString().length<25
const getCharlength=( arr:any)=>{
  let c:any=arr;
  let len=0;
  let str3:any
  let str5:any = c.flatMap((e1:any)=>e1.firstname).join(' ');

  len=str5.length;
  console.log(len);
   let str6=str5.substr(0,24);

console.log(str3)

if(len> 25){
  str6+= "+ more members";
}
console.log("n");
console.log(str3)
   return (
      <div className="sender-name">
        {str6}
      </div>
    )
  }

  return (
    <div className="App">
     
    
      <Tabs />

      {mockData.chats.chats.map((c, index) => {
       
        return (
          <>
        
            <div key={c.id} className="chat-item">
              <div className="icon-section">
                {c.type === "self" ? (
                  <>
                    <div className="self-icon">
                      <h3>
                        {c.lastMessage.sender.firstname.charAt(0)}{" "}
                        {c.lastMessage.sender.lastname.charAt(0)}
                      </h3>
                    </div>
                  </>
                ) : c.type === "single" ? (
                  c.image == null ? (
                    <div className="self-icon">
                      <FontAwesomeIcon icon={faUser} />
                    </div>
                  ) : (
                    <img
                      className="user-image"
                      src={c.image}
                      alt="single"
                    ></img>
                  )
                ) : c.type === "group" ? (
                  <div className="self-icon">
                    <FontAwesomeIcon icon={faUserGroup} />
                  </div>
                ) : (
                  <></>
                )}
              </div>
              <div className="chat-detail-section">
                {c.title == null ?  getCharlength(c.members): 
                (
                  <div className="sender-name-title-not-null">
                    {c.lastMessage.sender.firstname}{" "}
                    {c.lastMessage.sender.lastname}
                  </div>
                )}

                {c.lastMessage.readBy.some(
                  (e:any) => e.user.id === c.lastMessage.sender.id
                ) ? (
                  <div className="sender-message">
                    Me: {c.lastMessage.message}
                  </div>
                ) : (
                  <div className="sender-message">
                    {c.lastMessage.sender.firstname}: {c.lastMessage.message}
                  </div>
                )}
              </div>
              <div className="date-section">
                 {getTime(c.dateCreated)}
              </div>
            </div>
          </>
        );
      })
      }
    </div>
  );
}

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/