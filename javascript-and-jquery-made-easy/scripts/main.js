import $ from 'jquery';

function onDataReceived(data, status, xhr) {
  console.dir(data);
  console.log(status);
  console.dir(xhr);

  $('#name').text(data.name);

  if (data.types) {
    for (var i = 0; i < data.types.length; i++) {
      $('#type').append($('<li></li>').text(data.types[i].type.name));
    }
  }

}

function onError(xhr, status) {
  console.dir(xhr);
  console.log(status);
}

$(document).ready(function() {
  $('button').click(function() {

    var request = {
      url: 'https://pokeapi.co/api/v2/pokemon/{CODE}'.replace('{CODE}', $('input').val()),
      type: 'GET',
      success: onDataReceived,
      headers: {Accept: 'application/json'},
      error: onError
    };
    $.ajax(request);
  });
});
