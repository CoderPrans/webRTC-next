import {useState} from 'react';

const Input = props => {
  const [text, setText] = useState('');
  // const [isDisabled, setDisabled] = useState(true);

  function onFormSubmit(e) {
    e.preventDefault();
    props.onSendMessage(text);
    setText('');
  }

  // setTimeout(() => setDisabled(false), 1500);

  return (
    <div>
      <div className="Input">
        <form onSubmit={e => onFormSubmit(e)}>
          {props.chatOpened ? (
            <>
              <input
                onChange={e => setText(e.target.value)}
                value={text}
                placeholder="Enter your message.."
                autoFocus={true}
              />
              <button type="submit">SEND</button>
            </>
          ) : (
            <span
              style={{
                margin: '10px',
                padding: '10px',
                fontSize: '23px',
              }}>
              Loading ....{' '}
            </span>
          )}
        </form>
      </div>
    </div>
  );
};

export default Input;
