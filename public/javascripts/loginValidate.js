




//for checking the Register.html's form
//username and password can't be blank and email have to match the email size
function checkRegistForm()
{
  var userName = "";
  userName = document.getElementById("RegistInputUsername");
  var passWord = document.getElementById("registPassword");
  var emailID = document.registForm.registEmail.value;
  atpos = emailID.indexOf("@");
  dotpos = emailID.lastIndexOf(".");
  var registerAgree = null;
  registerAgree = document.getElementById("registerAgree");
  if (atpos < 1 || ( dotpos - atpos < 2 ) || userName.value.length <= 0 || passWord.value.length <= 0) 
  {
    alert("Please enter correct data");
    //document.myForm.EMail.focus();
    return false;
  }else if(registerAgree.checked == 0){
    alert("please agree !!");
    return false;
  }
  return true;
}


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
var registStatus = 0;
var registErr = null;
  
function send_out(){

  init();
  if(checkRegistForm()){
    var data = "name=" + name + "&email=" + email + "&password=" + password;

    xhr.open("POST", "http://localhost:3000/member/register");
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    xhr.send(data);

    response();

    if(registStatus == 1){
      //跳轉
      window.location.href='login.html';
    }else{
      alert(registErr);
    }
  }
}

function response(){
  xhr.onreadystatechange = function() {
    if (xhr.readyState == XMLHttpRequest.DONE) {
      var response = xhr.responseText;
      var responseParse = JSON.parse(response);
      registStatus = responseParse.status;
      registErr = responseParse.result;
      }
    }
}

  function init() {
    name = document.getElementById("RegistInputUsername").value;
    email = document.getElementById("registEmail").value;
    password = document.getElementById("registPassword").value;
  }


