function validateForm()
{
    let formData=document.forms[0];
   // console.log(formDate.uname.value);

       let UserName = formData.uname.value;
       let passwordValue = formData.password.value;
       let cpsw = formData.cpsw.value;
       if(password==="" && cpsw===""){
           console.log("fill the details properly");
           return false;
       }
else if(UserName.length>4 && passwordValue.length>7 && password===cpsw){
    console.log("success");
    formData.uname.style.border='2px solid green';
    formData.password.style.border='2px solid green';
    formData.cpsw.style.border='2px solid red'
    formData.loginSubmit.disabled = false;
}else{
    formData.uname.style.border='4px soild red';
    formData.password.style.border='4px solid red';
    formData.cpsw.style.border='4px solid red';
    console.log('password not matching');
   formData.loginSubmit.disabled=true;
}
}
