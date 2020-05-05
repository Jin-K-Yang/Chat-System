

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

function linkPersonalSetURL(){
	var personalSetURL;
	personalSetURL= "http://localhost:3000/users/personalSet?username=" + getCookie('username') ;
	alert(personalSetURL);
	window.location.href = personalSetURL;
}


function send_out(idName){

  init( );
  if(true){
    if(idName == 'userContent'){
        data = "introduction=" + changeData;
        xhr.open("PUT", "http://localhost:3000/users/update");
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.setRequestHeader('token',getCookie('token'));

        xhr.send(data);
        response(idName);
    }else if(idName=='searchFor'){
        data = "attempt=" + changeData;
        xhr.open("PUT", "http://localhost:3000/users/update");
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.setRequestHeader('token',getCookie('token'));

        xhr.send(data);
        response(idName);
    }else if(idName=='interesting'){
        data = "interesting=" + changeData;
        xhr.open("PUT", "http://localhost:3000/users/update");
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.setRequestHeader('token',getCookie('token'));

        xhr.send(data);
        response(idName);
    }
    
  }
}

function response(idName){
  xhr.onreadystatechange = function() {

    //here's the problem
    if (xhr.readyState == XMLHttpRequest.DONE) {
      var response = xhr.responseText;
      var responseParse = JSON.parse(response);
      if(responseParse.status == 1){
          //跳轉
          //set cookie  
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

var failureCallback;

async function sendVerify(){

    var verifyURL = "http://localhost:3000/verify/" + getCookie("username");
    xhr.open("GET", verifyURL);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    xhr.send(data);
    console.log('ready to response'); 
    var verifyStatus; 
    verifyResponse().then((result)=>{
        if(result === "success"){
        console.log('verify success');
    }
    }).catch(() =>{
        deleteAllCookies();
        window.location.href = "http://localhost:3000";
        console.log('verify fail of catch');
    });
}

function verifyResponse(){
    return new Promise ((resolve, reject)=>{
  xhr.onreadystatechange = function() {

        //here's the problem
        
            if (xhr.readyState == XMLHttpRequest.DONE) {
                console.log('getResponse');
                var response = xhr.responseText;
                var responseParse = JSON.parse(response);
                if(responseParse.status == 1){
                    resolve("success");
                    
                }else{
                    reject("fail");
                    
                }
            }
    }
    })
}

function deleteAllCookies() {
    var cookies = document.cookie.split("; ");
    for (var c = 0; c < cookies.length; c++) {
        var d = window.location.hostname.split(".");
        while (d.length > 0) {
            var cookieBase = encodeURIComponent(cookies[c].split(";")[0].split("=")[0]) + '=; expires=Thu, 01-Jan-1970 00:00:01 GMT; domain=' + d.join('.') + ' ;path=';
            var p = location.pathname.split('/');
            document.cookie = cookieBase + '/';
            while (p.length > 0) {
                document.cookie = cookieBase + p.join('/');
                p.pop();
            };
            d.shift();
        }
    }
};


