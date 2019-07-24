import {useState} from 'react';

const Input = props => {
  const [text, setText] = useState('');
  const [isDisabled, setDisabled] = useState(true);

  function onFormSubmit(e) {
    e.preventDefault();
    props.onSendMessage(text);
    setText('');
  }

  setTimeout(() => setDisabled(false), 1500);

  return (
    <div>
      <div className="Input">
        <form onSubmit={e => onFormSubmit(e)}>
          {!isDisabled ? (
            <>
              <input
                onChange={e => setText(e.target.value)}
                value={text}
                placeholder="Enter your message.."
                autoFocus={true}
                disabled={isDisabled}
              />
              <button type="submit">SEND</button>
            </>
          ) : (
            <span style={{textAlign: 'center'}}>Loading .... </span>
          )}
        </form>
      </div>
    </div>
  );
};

export default Input;
