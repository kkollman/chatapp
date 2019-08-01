class MessageModel {
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

module.exports = MessageModel;
