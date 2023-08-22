/* eslint-disable @typescript-eslint/no-redeclare */
import React, { Fragment } from "react";
import "../styles.css";
import { useEffect, useState,useReducer } from "react";
import { Store } from "../Store";
import { faUserGroup, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import mockData from "../data";
import {query} from "../Get_chats-graph";

const getTime = (date: string) => {
    var datetime = date;
    var d1 = new Date(datetime);
    var minute = d1.getUTCMinutes();
    var hour = d1.getUTCHours();
    let suffix = hour >= 12 && minute >= 59 ? "pm" : hour <= 12 ? "am" : "pm";
  
    return `${hour}:${minute} ${suffix}`;
  };

  const getCharlength = (arr: any) => {
    let c: any = arr;
    let len = 0;
    let str1: any = c.flatMap((e1: any) => e1.firstname).join(" ");
    len = str1.length;
    let str2 = str1.substr(0, 24);
  
    if (len > 25) {
      str2 += " + more members";
    }
    return <div className="sender-name">{str2}</div>;
  };
  
 function ChatList(){
    const [data, setData] = useState<any>({});
  //const { state, dispatch } = React.useContext(Store);
  const dataFetchReducer = (state: any, action: { type: any; payload: any; }) => {
    switch (action.type) {
      case 'FETCH_INIT':
        return {
          ...state,
          isLoading: true,
          isError: false
        };
      case 'FETCH_SUCCESS':
        return {
          ...state,
          isLoading: false,
          isError: false,
          data: action.payload,
        };
      case 'FETCH_FAILURE':
        console.log(...state);
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
      default:
        throw new Error();
    }
  };



  const fetchChats = async () => {
    /*Note: cors issues preventing to fetch this api; worked in POSTMAN; so copied result from there*/
try{
  dispatch({ type: 'FETCH_INIT', payload:mockData.chats.chats });
    const response = await fetch(
      `https://api.staging.hypercare.com/graphql/private`,
      {
        credentials: "include",
        method: "POST",
        headers: {
          "hypercare-scope": "eyJvcmdhbml6YXRpb25JZCI6MX0=",
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer 3a1aeb259e5987a8be639d05714cc1dd2f87ff15",
          "User-Agent": "any-name",
       
        },
        body:JSON.stringify({
          query,
          variables: {
            continuationId: null,
            limit: 20,
            isPriority: false
          }
        })
     
      });
      const details = await response.json();
      dispatch({ type: 'FETCH_SUCCESS', payload: details.data })
      setData(details);
    } catch(e){
      dispatch({ type: 'FETCH_FAILURE', payload:mockData.chats.chats });
        setData(mockData.chats.chats);

    }
  };

  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: false,
    isError: false,
    data: mockData.chats.chats,
  });

  useEffect(() => {
    fetchChats();
  }, []);


  return(
    <Fragment>
    {// id data was defined and api was working use data.chats.chats.map
       mockData.chats.chats.map((c:any, index:number) => (
          <div className={`first-${index}`}>
            <div key={index} className="chat-item ">
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
                  c.lastMessage.sender.profilePic == null ? (
                    <div className="self-icon">
                      <FontAwesomeIcon icon={faUser} />
                    </div>
                  ) : (
                    <img
                      className="user-image"
                      src={c.lastMessage.sender.profilePic}
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
                {c.title == null ? (
                  getCharlength(c.members)
                ) : (
                  <div className="sender-name-title-not-null">
                    {c.lastMessage.sender.firstname}{" "}
                    {c.lastMessage.sender.lastname}
                  </div>
                )}

                {c.lastMessage.readBy.some(
                  (e: any) => e.user.id === c.lastMessage.sender.id
                ) ? (
                  <div className="sender-message">
                    Me: {c.lastMessage.message.substr(0, 20)}...
                  </div>
                ) : (
                  <div className="sender-message">
                    {c.lastMessage.sender.firstname}:{" "}
                    {c.lastMessage.message.substr(0, 20)}...
                  </div>
                )}
              </div>
              <div className="date-section">{getTime(c.dateCreated)}</div>
            </div>
          </div>
        ))
      
      }
    
</Fragment>
  );

  };



  export default ChatList;