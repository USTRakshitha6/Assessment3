function validateForm()
{
    let formData=document.forms[0];
   // console.log(formDate.uname.value);


       let UserName = formData.uname.value;
       let passwordValue = formData.passwrd.value;
if(UserName.length>4 && passwordValue.length>7){
    formData.uname.style.border='1px solid green';
    formData.passwrd.style.border='1px solid green';
    formData.loginSubmit.disabled = false;
}else{
    formData.uname.style.border='4px soild red';
    formData.passwrd.style.border='4px solid red';
   formData.loginSubmit.disabled=true;
}
}
