

// Form validation code will come here.
function validate()
{
 
     if( document.myForm.Name.value == "" )
     {
       alert( "Please provide your name!" );
       document.myForm.Name.focus() ;
       return false;
     }
     if( document.myForm.EMail.value == "" )
     {
       alert( "Please provide your Email!" );
       document.myForm.EMail.focus() ;
       return false;
     }
     if( document.myForm.Zip.value == "" ||
             isNaN( document.myForm.Zip.value ) ||
             document.myForm.Zip.value.length != 5 )
     {
       alert( "Please provide a zip in the format #####." );
       document.myForm.Zip.focus() ;
       return false;
     }
     if( document.myForm.Country.value == "-1" )
     {
       alert( "Please provide your country!" );
       return false;
     }
  return( true );
}



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
  if (atpos < 1 || ( dotpos - atpos < 2 ) || userName.value.length <= 0 || passWord.value.length <= 0) 
  {
    alert("Please enter correct data");
    //document.myForm.EMail.focus();
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
  else{
    window.location.assign("https://google.com");
  }
}


