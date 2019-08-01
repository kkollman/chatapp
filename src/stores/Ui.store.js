import { decorate, observable, action } from 'mobx';

class UiStore {
  activeTabId = 'chat';

  handleTabClick = id => {
    this.activeTabId = id;
  };
}

export default decorate(UiStore, {
  activeTabId: observable,
  handleTabClick: action,
});
