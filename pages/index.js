import Layout from '../components/layout.js';
import {useState, useEffect} from 'react';
import RTCinit from '../RTCinit.js';

const IndexPage = () => {
  const [name, setName] = useState('');
  const [showbox, setShowbox] = useState(true);

  const doChatShit = () => {
    alert(`Welcome ${name}`);
    setShowbox(false);
  };

  useEffect(() => {
    console.log(location);
    RTCinit();
  });

  return (
    <Layout>
      <h1>Welcome to Web-Chat{!showbox && `, ${name}`}</h1>
      {showbox && (
        <div className="welcome-box">
          <input
            placeholder="your name ?"
            onChange={e => setName(e.target.value)}
            onKeyPress={e => {
              e.which === 13 ? doChatShit() : null;
            }}
            value={name}
            style={{
              width: 130,
              padding: '8px',
              margin: '10px',
              fontSize: 16,
              borderRadius: 2,
              border: '1px solid #DDD',
            }}
          />
          <br />
          <button onClick={doChatShit}>Enter</button>
        </div>
      )}
      <div className="content">
        <div className="messages" />
        <form className="footer" onsubmit="return false;">
          <input type="text" placeholder="Your message.." />
          <button type="submit">Send</button>
        </form>
      </div>

      <template data-template="message">
        <div className="message">
          <div className="message__name" />
          <div className="message__bubble" />
        </div>
      </template>
      <style jsx>{`
        h1 {
          font-family: Arial;
        }
        button {
          padding: 8px;
          margin: 0 10px;
          font-size: 15px;
          font-style: bold;
          background-color: #4285f4;
          border-radius: 3px;
          color: white;
          border: none;
        }
        .content {
          box-shadow: rgba(156, 172, 172, 0.2) 0px 2px 2px,
            rgba(156, 172, 172, 0.2) 0px 4px 4px,
            rgba(156, 172, 172, 0.2) 0px 8px 8px,
            rgba(156, 172, 172, 0.2) 0px 16px 16px,
            rgba(156, 172, 172, 0.2) 0px 32px 32px,
            rgba(156, 172, 172, 0.2) 0px 64px 64px;
          border-radius: 3px;
          height: 100vh;
          max-height: 600px;
          width: 100vw;
          max-width: 400px;
          display: flex;
          flex-direction: column;
        }
        .messages {
          flex-grow: 1;
          padding: 20px 30px;
          overflow: auto;
        }
        .message {
          display: flex;
          flex-direction: column;
        }
        .message--mine {
          align-items: flex-end;
        }
        .message--theirs {
          align-items: flex-start;
        }
        .message__name {
          padding: 10px 0;
        }
        .message__bubble {
          padding: 20px;
          border-radius: 3px;
        }
        .message--theirs .message__bubble {
          background: #6363bf;
          color: white;
        }
        .message--mine .message__bubble {
          background: rgba(156, 172, 172, 0.2);
        }
        .footer {
          line-height: 76px;
          border-top: 1px solid rgba(156, 172, 172, 0.2);
          display: flex;
          flex-shrink: 0;
        }
        input {
          height: 76px;
          border: none;
          flex-grow: 1;
          padding: 0 30px;
          font-size: 16px;
          background: transparent;
        }
        button {
          border: none;
          background: transparent;
          padding: 0 30px;
          font-size: 16px;
          cursor: pointer;
        }
      `}</style>
    </Layout>
  );
};

export default IndexPage;
