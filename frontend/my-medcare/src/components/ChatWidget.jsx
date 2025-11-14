import React, { useState, useEffect } from "react";
import SockJS from "sockjs-client";
import { Client } from "@stomp/stompjs";

const ChatWidget = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [stompClient, setStompClient] = useState(null);

  useEffect(() => {
    const socket = new SockJS("http://localhost:8080/ws");
    const client = new Client({
      webSocketFactory: () => socket,
      debug: (str) => console.log(str),
      onConnect: () => {
        console.log("Connected to WebSocket");
        client.subscribe("/topic/messages", (message) => {
          const msg = JSON.parse(message.body);
          setMessages((prev) => [...prev, msg]);
        });
      },
      onStompError: (err) => {
        console.error("STOMP error:", err);
      },
    });
    client.activate();
    setStompClient(client);

    return () => {
      client.deactivate();
    };
  }, []);

  const sendMessage = () => {
    if (!input.trim() || !stompClient || !stompClient.connected) return;

    const newMessage = {
      sender: "User",
      content: input,
      timestamp: new Date().toISOString(),
    };

    stompClient.publish({
      destination: "/app/chat.sendMessage",
      body: JSON.stringify(newMessage),
    });

    setInput("");
  };

  return (
    <div className="fixed bottom-5 right-5">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-700 text-white px-4 py-2 rounded-full shadow-lg"
        >
          💬 Chat with us
        </button>
      )}

      {isOpen && (
        <div className="w-80 border rounded-lg shadow-lg bg-white">
          <div className="flex justify-between items-center bg-blue-600 text-white px-4 py-2 rounded-t-lg">
            <h2 className="font-semibold">Online Chat</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white text-lg font-bold hover:text-gray-300"
            >
              ✕
            </button>
          </div>

          <div className="h-60 overflow-y-auto border p-2 bg-gray-50">
            {messages.length === 0 && (
              <p className="text-gray-500 text-center mt-10">
                No messages yet.
              </p>
            )}
            {messages.map((msg, index) => (
              <p key={index} className="text-sm mb-1">
                <b>{msg.sender}:</b> {msg.content}
              </p>
            ))}
          </div>

          <div className="flex border-t">
            <input
              className="flex-1 border-none p-2 rounded-bl-lg focus:outline-none"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type message..."
            />
            <button
              onClick={sendMessage}
              className="bg-blue-600 text-white px-4 rounded-br-lg hover:bg-blue-500"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
