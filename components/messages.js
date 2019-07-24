const Messages = props => {
  console.log(props);
  const renderMessage = (message, i) => {
    const {member, text} = message;
    const {currentMember} = props;
    const messageFromMe = member.id === currentMember.id;
    const className = messageFromMe
      ? 'Messages-message currentMember'
      : 'Messages-message';
    return (
      <li className={className} key={`${i}`}>
        <span
          className="avatar"
          style={{
            backgroundColor: member.clientData
              ? member.clientData.color
              : '#000',
          }}
        />
        <div className="Message-content">
          <div className="username">
            {member.clientData ? member.clientData.username : 'anonymus'}
          </div>
          <div className="text">{text}</div>
        </div>
      </li>
    );
  };
  return (
    <ul className="Messages-list">
      {props.messages.map((m, i) => renderMessage(m, i))}
    </ul>
  );
};

Messages.getInitialProps = props => {
  return props;
};

export default Messages;
