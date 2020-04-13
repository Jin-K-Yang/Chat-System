//for checking the login.html's form
//username and password can't be blank
function checkLoginForm()
{
  var userName = "";
  userName = document.getElementById("loginUsername");
  var passWord = "";
  passWord = document.getElementById("loginPassword");
  
  if (userName.value.length <= 0 || passWord.value.length <= 0) 
  {
    alert("Please enter correct data");
    return false;
   }
   return( true );
}


xhr = new XMLHttpRequest();
var loginStatus = 0;
var retUsername = "";
var registErr = null;
  
function send_out(){

  init();
  if(checkLoginForm()){
    var data = "name=" + name + "&password=" + password;

    xhr.open("POST", "http://localhost:3000/member/login");
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    xhr.send(data);
    response();
  }
}

function response(){

  xhr.onreadystatechange = function() {

    //here's the problem
    if (xhr.readyState == XMLHttpRequest.DONE) {
      var response = xhr.responseText;
      var responseParse = JSON.parse(response);
      loginStatus = responseParse.status;
      retUsername = responseParse.loginname;
      if(loginStatus == 1){
          //跳轉
          alert("成功");
          window.location.href='http://localhost:3000/users';
        }else{
          alert("fail");
        }
      }
    }
}

  function init() {
    name = document.getElementById("loginUsername").value;
    password = document.getElementById("loginPassword").value;
  }
