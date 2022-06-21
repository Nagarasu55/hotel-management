function validation(){
  var name=document.myform.name.value;
  if (name==""){
    document.getElementById("err1").innerHTML="*Please enter your name";
    return false;
  }
  else{
  document.getElementById("err1").innerHTML="";
  }

  var phonenum=document.myform.phone.value;
  if (phonenum==""){
    document.getElementById("err2").innerHTML="*Please enter your Phone Number";
    return false;
  }
  else if (phonenum.length !=10||isNaN(phonenum)){
    document.getElementById("err2").innerHTML="*Invalid Phone number";
    return false;
  } 
  else{
    document.getElementById("err2").innerHTML="";
  }

  var email=document.myform.email.value;
  var email1=/^([a-zA-Z0-9-_\.]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,10})(\.[a-zA-Z]{2,8})?$/;
  if (email==""){
    document.getElementById("err3").innerHTML="*Please enter your email";
    return false;
  }
  else if (!email1.test(email)){
    document.getElementById("err3").innerHTML="*Invalid email address";
    return false;
  }
  else{
  document.getElementById("err3").innerHTML="";
  }
  

    var number1=document.myform.number1.value;
  if (number1==""){
    document.getElementById("err4").innerHTML="*Please enter the number of rooms";
    return false;
  }
  else{
    document.getElementById("err4").innerHTML="";
  }
  
    var number2=document.myform.number2.value;
  if (number2==""){
    document.getElementById("err5").innerHTML="*Please enter the number of persons";
    return false;
  }
  else{
    document.getElementById("err5").innerHTML="";
  }
  
  
    var date1=document.myform.date1.value;
  if (date1==""){
    document.getElementById("err6").innerHTML="*Please enter the arrival date";
    return false;
  }
  else{
    document.getElementById("err6").innerHTML="";
  }
  
    var date2=document.myform.date2.value;
  if (date2==""){
    document.getElementById("err7").innerHTML="*Please enter the departure date";
    return false;
  }
  else{
    document.getElementById("err7").innerHTML="";
  }
  
 
  if(name !==""&&phonenum !==""&&phonenum.length ==10&&email !==""&&email1.test(email)&&!isNaN(phonenum)&& number1 !==""&&number2 !==""&&date1 !==""&&date2 !==""){
    alert('Booking successfull, Thank you, Mr./Mrs.'+' '+document.getElementById("name").value+' '+', We are expecting your arrival.');
  }

}