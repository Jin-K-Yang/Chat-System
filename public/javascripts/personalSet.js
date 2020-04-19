


function setCookie(cname,exdays,token){
    var d = new Date();
    d.setTime(d.getTime()+(exdays*24*60*60*1000));
    var expires = "expires="+d.toGMTString();
    var cookieToken = "token="+token;
    document.cookie = "username=" + cname;
    document.cookie = expires;
    document.cookie = cookieToken;
    var test = document.cookie;
}	

function checkCookie(){
    var token=getCookie("token");
    var user= getCookie("username")
    if (token!=""){
      personalPageUrl ="http://localhost:3000/users?username=" + user;
      window.location.href = personalPageUrl;
    }else{
      alert('didnt found cookie');
    }
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


function changeText(idName){
    alert(idName);  
    var changeTag = "<textarea id=\"edit\" class=\"form-control form-control-lg\" rows=\"3\"></textarea><button id=\"check\" onclick=\"send_out(\'"+ idName +"\')\">Submit</button>";
    
    document.getElementById(idName).outerHTML = changeTag;
}

function changeFinish(idName){
    let changeContent = document.getElementById("edit").value;
    console.log(changeContent); 
    //let changeContent = document.getElementById('edit').value;
    document.getElementById('edit').outerHTML= "<a id=\"" +idName+ "\" class=\"pSetContentBody\">"+changeContent+"<br><br><br><br><br></a>";
    document.getElementById('check').outerHTML = '';
}



var xhr = new XMLHttpRequest();
var changeData ="";
var data ="";



function send_out(idName){

  init( );
  if(true){
    if(idName == 'userContent'){
        data = "introduction=" + changeData;
        xhr.open("PUT", "http://localhost:3000/users/update");
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.setRequestHeader('token',getCookie('token'));

        xhr.send(data);
        alert('ready to response');
        response(idName);
    }else if(idName=='searchFor'){
        data = "attempt=" + changeData;
        xhr.open("PUT", "http://localhost:3000/users/update");
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.setRequestHeader('token',getCookie('token'));

        xhr.send(data);
        alert('ready to response');
        response(idName);
    }else if(idName=='interesting'){
        data = "interesting=" + changeData;
        xhr.open("PUT", "http://localhost:3000/users/update");
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.setRequestHeader('token',getCookie('token'));

        xhr.send(data);
        alert('ready to response');
        response(idName);
    }
    
  }
}

function response(idName){
  xhr.onreadystatechange = function() {
      alert('response');

    //here's the problem
    if (xhr.readyState == XMLHttpRequest.DONE) {
      var response = xhr.responseText;
      var responseParse = JSON.parse(response);
      if(responseParse.status == 1){
          //跳轉
          //set cookie  
          alert('change success');
          changeFinish(idName);
        }else{
          alert("fail");
        }
      }
    }
}

function init() {
    changeData = document.getElementById('edit').value;
}