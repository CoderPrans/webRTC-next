import Layout from '../components/layout.js';
import Messages from '../components/messages.js';
import Input from '../components/input.js';
import randomName from '../components/randomName.js';

function randomColor() {
  return '#' + Math.floor(Math.random() * 0xffffff).toString(16);
}

class IndexPage extends React.Component {
  state = {
    messages: [],
    member: {
      color: randomColor(),
      username: randomName(),
    },
    chatOpened: false,
  };

  componentDidMount() {
    this.drone = new Scaledrone('c4l8B2ejDQcIBLKi', {
      data: this.state.member,
    });

    this.drone.on('open', error => {
      if (error) {
        return console.error(error);
      }
      const member = {...this.state.member};
      console.log('hear me .............', member);
      member.id = this.drone.clientId;
      this.setState({member});
      this.setState({chatOpened: true});
    });

    const room = this.drone.subscribe('observable-room');

    room.on('data', (data, member) => {
      const messages = this.state.messages;
      messages.push({member, text: data});
      // const messages = [...this.state.messages, {member, text: data}];
      this.setState({messages});
    });
  }

  onSendMessage = message => {
    console.log('Calling onSendMessage');
    this.drone.publish({
      room: 'observable-room',
      message,
    });
    console.log(this.state.messages);
  };

  render() {
    return (
      <Layout>
        <div className="App">
          <h1 className="hello">web-chat</h1>
          <Messages
            messages={this.state.messages}
            currentMember={this.state.member}
          />
          <Input
            onSendMessage={this.onSendMessage}
            chatOpened={this.state.chatOpened}
          />
        </div>
        <style jsx global>{`
          body {
            margin: 0;
            padding: 0;
          }
          .hello {
            background: #333;
            font-family: Arial;
            color: white;
            padding: 15px;
            text-align: center;
            margin: 0;
          }
          .App {
            display: flex;
            flex-direction: column;
            jusify-content: space-between;
            height: 100vh;
          }
          .Messages-list {
            padding: 20px 0;
            max-width: 900px;
            width: 100%;
            margin: 0 auto;
            list-style: none;
            padding-left: 0;
            flex-grow: 1;
            overflow: auto;
          }
          .Messages-message {
            display: flex;
            margin-top: 10px;
            font-family: Helvetica;
            font-size: 18px;
          }
          .Messages-message.currentMember {
            /*justify-content: flex-end;*/
            flex-direction: row-reverse;
            text-align: right;
          }
          .Message-content {
            display: inline-block;
          }
          .currentMember > .Message-content {
            align-items: flex-end;
          }
          .Messages-message > .avatar {
            height: 35px;
            width: 35px;
            border-radius: 50%;
            display: inline-block;
            margin: 0 10px -10px;
          }
          .Message-content > .username {
            display: block;
            color: gray;
            font-size: 14px;
            padding-bottom: 4px;
          }
          .Message-content > .text {
            padding: 10px;
            max-width: 400px;
            margin: 0;
            border-radius: 12px;
            background-color: cornflowerblue;
            color: white;
            display: inline-block;
          }
          .currentMember > .Message-content .text {
            background-color: limegreen;
          }
          form {
            display: flex;
            width: 100%;
            max-width: 95vw;
            margin: 0 auto;
            border: 1px solid #ddd;
          }
          input {
            padding: 0 30px;
            height: 60px;
            font-size: 17px;
            border-radius: 3px;
            border: none;
            border-right: 1px solid #ddd;
            flex-grow: 1;
          }
          button {
            padding: 5px 10px;
            font-size: 17px;
            background-color: white;
            color: black;
            border: none;
          }
        `}</style>
      </Layout>
    );
  }
}

export default IndexPage;
