import Layout from '../components/layout.js';
import {useState, useEffect} from 'react';
import {RTCinit} from '../RTCinit.js';

const IndexPage = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [showbox, setShowbox] = useState(true);

  useEffect(() => {
    // console.log(location);
    RTCinit();
  }, []);

  const insertMessage = (options, isForMe) => {
    console.log(options.content);
  };

  // console.log(datachannel);

  return (
    <Layout>
      <div className="content">
        <h1>Web-Chat</h1>
        {showbox && (
          <div className="welcome-box">
            <input
              className="name-input"
              placeholder="your name ?"
              onChange={e => setName(e.target.value)}
              onKeyPress={e => {
                e.which === 13 ? alert(`Welcome ${name}`) : null;
              }}
              value={name}
            />
            <br />
            {
              // <button
              //   className="enter-button"
              //   onClick={() => alert(`Welcome ${name}`)}>
              //   Enter
              // </button>
            }
          </div>
        )}
        <div className="messages" />
        <div className="footer">
          <input
            value={message}
            onChange={e => setMessage(e.target.value)}
            onKeyPress={e => {
              e.which === 13 ? insertMessage({content: message}, false) : null;
            }}
            placeholder="Your message.."
          />
          <button onClick={() => insertMessage({content: message}, false)}>
            Send
          </button>
        </div>
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
          display: flex;
          justify-content: center;
          color: rgba(0, 0, 255, 0.5);
        }
        .welcome-box {
          display: flex;
          justify-contnet: center;
        }
        .name-input {
          width: 130px;
          padding: 8px;
          height: 35px;
          margin: 10px;
          fontsize: 16px;
          borderradius: 2px;
          border: 1px solid #ddd;
        }
        .content {
          box-shadow: rgba(156, 172, 172, 0.2) 0px 2px 2px,
            rgba(156, 172, 172, 0.2) 0px 4px 4px,
            rgba(156, 172, 172, 0.2) 0px 8px 8px,
            rgba(156, 172, 172, 0.2) 0px 16px 16px,
            rgba(156, 172, 172, 0.2) 0px 32px 32px,
            rgba(156, 172, 172, 0.2) 0px 64px 64px;
          border-radius: 3px;
          height: 96vh;
          max-height: 700px;
          width: 100vw;
          max-width: 400px;
          margin: 0 auto;
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
