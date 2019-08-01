import UiStore from './Ui.store.js';
import ChatStore from './Chat.store.js';

class RootStore {
  constructor() {
    this.uiStore = new UiStore();
    this.chatStore = new ChatStore();
  }
}

export default RootStore;
