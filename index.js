window.onload = function(){
var user = {};
$('input').click(function(){

  user.name = getElementById('name').value();

  localStorage.setItem("user", user);
  var localUser = localStorage.getItem("nameInfo");


  console.log(localUser.name);
});
};
