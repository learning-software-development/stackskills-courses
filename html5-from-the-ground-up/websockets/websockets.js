window.onload = function() {
  var connection = new WebSocket('ws://192.168.200.16/server/websockets.php');
  console.dir(connection);

  connection.onopen = function() {
    console.log('Websocket opened!');
    document.write('Status: ' + connection.readyState);
  }

  connection.onerror = function(error) {
    console.error('Websocket error: ' + error);
  }

  connection.onmessage = function(event) {
    document.write('Server message: ' + event.data);
  }

  var sendButton = document.getElementById('sendBtn');
  sendButton.onclick = function() {
    connection.send('This i9s a test message of the send function');
    connection.close();
  }
}
