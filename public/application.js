var socket = io();

socket.on('connect', function () {
  console.log('Yay, we have connected!');

  socket.send('sushirrito', {
    username: 'jphoenix',
    text: 'I am a banana'
  });
});

socket.on('chat message', function (message) {
  $('.messages').append(`<div>
                        <h3>${message.username}</h3>
                       <p>${message.text}</p>
                        </div>`)
});

$('.submit-message').on('click', function (e) {
  e.preventDefault();

  var username = $('.new-message .username').val();
  var message = $('.new-message .message').val();

  socket.send('chat message', {
    username: username,
    text: message
  });
});
