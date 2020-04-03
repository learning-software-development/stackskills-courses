function init() {
  var worker = new Worker('worker.js');
  worker.addEventListener('message', function(e) {
    document.getElementById('talkbox').innerHTML += ('<p>Worker says: ' + e.data + '</p>');
  });

  var send = document.getElementById('send');
  send.addEventListener('click', function() {
    var message = document.getElementById('msg').value;
    worker.postMessage(message);
  });

  var stop = document.getElementById('stop');
  stop.addEventListener('click', function() {
    worker.terminate();
  });
}

window.addEventListener('load', init, false);
