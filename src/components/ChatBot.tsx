import React, { useState } from 'react';
import { FiMessageSquare, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hello! How can I help you today?' }
  ]);
  const [input, setInput] = useState('');

  const handleToggle = () => setIsOpen(!isOpen);

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { from: 'user', text: input }]);
    setInput('');
    setTimeout(() => {
      setMessages(prev => [...prev, { from: 'bot', text: "I'm just a demo bot 🤖" }]);
    }, 700);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Floating Button */}
      <button
        onClick={handleToggle}
        className="bg-gradient-to-br from-blue-500 via-red-500 to-black text-white p-3 rounded-full shadow-lg hover:scale-105 transition-all"
      >
        {isOpen ? <FiX size={24} /> : <FiMessageSquare size={24} />}
      </button>

      {/* Chatbox */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="mt-2 w-80 h-96 flex flex-col rounded-lg shadow-xl overflow-hidden border border-gray-700 bg-gradient-to-b from-gray-900 to-black text-white"
          >
            {/* Header */}
            <div className="p-3 font-semibold bg-gradient-to-r from-blue-600 via-red-600 to-black text-white">
              Chat with Me
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-3 space-y-2 text-sm scrollbar-thin scrollbar-thumb-gray-600">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`max-w-[80%] p-2 rounded-md ${
                    msg.from === 'user'
                      ? 'bg-blue-700 ml-auto text-right'
                      : 'bg-gray-800 text-left'
                  }`}
                >
                  {msg.text}
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="flex border-t border-gray-700 p-2 bg-gray-900">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                className="flex-1 px-3 py-2 bg-black text-white rounded-l outline-none placeholder-gray-400"
                placeholder="Type a message..."
              />
              <button
                onClick={handleSend}
                className="bg-blue-700 px-4 rounded-r text-white hover:bg-blue-800"
              >
                Send
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChatBot;
