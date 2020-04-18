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
      personalPageUrl ="http://localhost:3000/users?username=" + user + "&token=" + token;
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