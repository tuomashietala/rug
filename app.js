var url = 'https://randomuser.me/api/';

$('#btn').click(function(){
  $.ajax({
    method : 'GET',
    url : url,
    dataType : 'json'
  })
  .done(loadRandomUser)
  .fail(function(){
    console.log('failed');
  });
});
  
function loadRandomUser(data){
  var info = data.results[0];

  $("#fullname").text(info.name.first+ " " + info.name.last);
  $("#avatar").attr("src",info.picture.medium);  
  $("#email").text(info.email);
  $("#country").text(info.location.country);
  $("#city").text(info.location.city);
};