const Message = require('../models/Message.model');

describe('Message item', () => {
   const dateAdded = Date.now().toString();
   const author = 'SomeAuthor';
   const content = 'Lorem ipsum sic dolor amet';
   const id = 1;
   let message;

   beforeEach(() =>  message = new Message({dateAdded, author, content, id}));

    it('Has the author, content and date', () => {
      expect(message.id).toEqual(id);
      expect(message.author).toEqual(author);
      expect(message.dateAdded).toEqual(dateAdded);
      expect(message.content).toEqual(content);
    });

   describe('editMessage()', () => {
    it('Edits the message content and adds a isEdited flag', () => {
      const newContent = 'new content'
      message.editMessage(newContent);
      expect(message.content).toEqual(newContent);
      expect(message.isEdited).toEqual(true);
    });
   });

    describe('deleteMessage()', () => {
      it('Deletes the message content and adds a isDeleted flag', () => {
        message.deleteMessage();
        expect(message.content).toEqual(null);
        expect(message.isDeleted).toEqual(true);
      });
    });
  }
);