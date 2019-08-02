import { decorate, observable, action } from 'mobx';

class UiStore {
  activeTabId = 'chat';

  inputPlaceholder = 'Type your username';

  handleTabClick = id => {
    this.activeTabId = id;
  };
}

export default decorate(UiStore, {
  activeTabId: observable,
  handleTabClick: action,
  inputPlaceholder: observable,
});
