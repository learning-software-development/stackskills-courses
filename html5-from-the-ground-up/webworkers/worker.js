self.addEventListener('message', function(e) {
  var data = e.data;
  switch(data) {
    case 'Hi': {
      self.postMessage('Hello there!');
      break;
    }
    case 'How are you?': {
      self.postMessage('I am fine thanks.');
      break;
    }
    case 'What do you do?': {
      self.postMessage('I talk, sort of.');
      break;
    }
    case '': {
      self.postMessage('You have to say something?');
      break;
    }
    case 'Stop': {
      self.postMessage('Cheers!');
      self.close();
      break;
    }
    default: {
      self.postMessage('I do not understand: '+ data);
    }
  }
});
