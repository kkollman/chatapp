import { decorate, observable } from 'mobx';

class ChatStore {
  username = '';

  messages = [];

  users = [];

  connection = null;

  openConnection() {
    const chat = new WebSocket('ws://localhost:4000');

    chat.onmessage = message => {
      const response = JSON.parse(message.data);

      this.messages.replace([...response.chat]);
      this.users.replace([...response.activeUsers]);
    };

    this.connection = chat;
  }

  sendMessage(message) {
    if (this.connection) {
      const content = JSON.stringify({
        author: this.username,
        content: message,
      });

      this.connection.send(content);
    } else {
      return false;
    }
  }

  registerUser(userName) {
    this.username = userName;
    // first message sent to backend registers user
    this.sendMessage('');
  }
}

export default decorate(ChatStore, {
  messages: observable,
  users: observable,
  username: observable,
});
