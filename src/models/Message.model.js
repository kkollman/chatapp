/*
  This model is the same one as used on backend. The reason I repeat myself here is that I want to assume that backend here is frontend-agnostic and uses own models, that may differ from the ones used on frontend.
 */

export default class MessageModel {
  constructor({ author, content = '', dateAdded, id }) {
    this.id = id;
    this.author = author;
    this.content = content;
    this.dateAdded = dateAdded;
    this.isEdited = false;
    this.isDeleted = false;
  }

  editMessage(newContent) {
    this.content = newContent;
    this.isEdited = true;
  }

  deleteMessage() {
    this.content = null;
    this.isEdited = true;
    this.isDeleted = true;
  }
}
