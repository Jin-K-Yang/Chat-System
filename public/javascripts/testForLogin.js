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
var personalPageUrl = "";
  
function send_out(){

  init();
  if(checkLoginForm()){
    var data = "name=" + name + "&password=" + password;

    xhr.open("POST", "http://localhost:3000/member/login");
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    xhr.send(data);
    alert('ready to response');
    response();
  }
}

function response(){
  xhr.onreadystatechange = function() {
      alert('response');

    //here's the problem
    if (xhr.readyState == XMLHttpRequest.DONE) {
      var response = xhr.responseText;
      var responseParse = JSON.parse(response);
      var responseToken = xhr.getResponseHeader('token');
      loginStatus = responseParse.status;
      retUsername = responseParse.loginname;
      alert(responseToken);
      if(loginStatus == 1){
          //跳轉
          //set cookie  
          setCookie(retUsername,1,responseToken);
          personalPageUrl ="http://localhost:3000/users?username=" + retUsername ;
          alert(personalPageUrl);
          alert("成功");
          window.location.href = personalPageUrl;
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

function setCookie(cname,exdays,token){
    var d = new Date();
    d.setTime(d.getTime()+(exdays*24*60*60*1000));
    var expires = "expires="+d.toGMTString();
    var cookieToken = "token="+token;
    document.cookie = "username=" + cname;
    document.cookie = expires;
    document.cookie = cookieToken;
    var test = document.cookie;
    alert(test);
}

function getCookie(cname){
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name)==0) { return c.substring(name.length,c.length); }
    }
    return "";
}

function checkCookie(){
    var token=getCookie("token");
    var user= getCookie("username")
    alert(token);
    if (token!=""){
      personalPageUrl ="http://localhost:3000/users?username=" + user ;
      window.location.href = personalPageUrl;
    }else{
      alert('didnt found cookie');
    }
}