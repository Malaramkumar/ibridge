import React, { useState } from 'react';
import './ChatBox.scss';

const ChatBox = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hi there! Need help with Java Training?' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = { from: 'user', text: input };
    setMessages([...messages, userMsg]);
    setInput('');

    setTimeout(() => {
      setMessages(prev => [...prev, { from: 'bot', text: 'Thanks! We will get back to you shortly.' }]);
    }, 1000);
  };

  return (
    <div className="chat-container">
      {open ? (
        <div className="chat-box">
          <div className="chat-header">
            <span>Live Chat</span>
            <button onClick={() => setOpen(false)}>×</button>
          </div>
          <div className="chat-messages">
            {messages.map((msg, idx) => (
              <div key={idx} className={`message ${msg.from}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chat-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type a message..."
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      ) : (
        <button className="chat-toggle" onClick={() => setOpen(true)}>
          💬 Chat
        </button>
      )}
    </div>
  );
};

export default ChatBox;
