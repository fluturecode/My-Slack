import React from "react";
import "./Chat.css";
import { useParams } from "react-router-dom";

function Chat() {
  const { roomId } = useParams();
  return (
    <div claaName="chat">
      <h2>You are in the {roomId} room</h2>
    </div>
  );
}

export default Chat;
