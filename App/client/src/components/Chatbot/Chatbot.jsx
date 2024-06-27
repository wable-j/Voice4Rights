import { useEffect, useRef, useState } from "react";
import "./Chatbot.css";
import { OpenAI } from "openai";
import { FiChevronDown } from "react-icons/fi";
import { IoSend } from "react-icons/io5";
import Logo from "../../assests/icon1.png";



const Chatbot = ({ setBotIsOpen }) => {
  const [chats, setChats] = useState([
    {
      id: 212,
      text: 'Greetings, how can I help you?',
      sender: "robot",
    },
  ]);

  const [input, setInput] = useState('');
  const boxRef = useRef();
  const [typing, setTyping] = useState(false);

  const openai = new OpenAI({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true
  });

  useEffect(() => {
    boxRef.current.scrollTo(0, boxRef.current.scrollHeight);
  }, [chats]);

  const sendMessage = async (e) => {
    e.preventDefault();
    const userInput = {
      id: Date.now(),
      text: input,
      sender: "user"
    };
    setChats(chats => [...chats, userInput]);
    setTyping(true);
    setInput("");

    try {
      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
       response_format: { type: "text" },
        messages: [
          {
            "role": "user",
            "content": `${input}`
          }
        ],
        temperature: 1,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      });

      const botResponse = {
        id: Date.now(),
        text: response.choices[0].message.content.trim(),
        sender: "robot"
      };
      setChats(chats => [...chats, botResponse]);
    } catch (error) {
      console.error('Error from OpenAI:', error);
    }
    setTyping(false);
  };

  return (
    <div className="chatbot-outer">
      <div className="chatbox-container">
        <div className="header">
          <div className="left-header">
            <div className="stack-logo">
              <img src={Logo} alt="Logo" />
            </div>
            <span className="header-title">Ask Me</span>
          </div>
          <button onClick={() => setBotIsOpen(false)}>
            <FiChevronDown />
          </button>
        </div>
        <div className="chats-box" ref={boxRef}>
          {chats.map((chat) => (
            <div className={chat.sender} key={chat.id}>
              <span>{chat.text}</span>
            </div>
          ))}
          {typing && <span className="typing">Typing...</span>}
        </div>
        <form onSubmit={sendMessage}>
          <div className="footer">
            <input
              type="text"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              required
            />
            <button type="submit">
              <IoSend />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Chatbot;
