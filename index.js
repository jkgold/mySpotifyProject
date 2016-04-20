window.onload = function(){
var user = {};
$('#submitButton').click(function(){
  // user = {};
   user.name = document.getElementById('name').value;
   user.email = document.getElementById('email').value;
   user.password = document.getElementById('password').value;
   // user = { name: 'name', email ....}
   console.log(user.name);

  user = JSON.stringify(user);
  // user = "{'name' : 'name', ....}";
  localStorage.setItem("user", user);

  var localUser = localStorage.getItem("user");
  //localUser = "{name: 'name',....}"

  JSON.parse(localUser);
  console.log(localUser);
});
};
