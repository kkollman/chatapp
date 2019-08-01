import { decorate, observable } from 'mobx';

class ChatStore {
  messages = [];

  users = [];
}

export default decorate(ChatStore, {
  messages: observable,
  users: observable,
});
