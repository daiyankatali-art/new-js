const mycheckbox=document.getElementById("mycheckbox");
const myvisa=document.getElementById("myvisa");
const mymastercard=document.getElementById("mymastercard");
const mypaypal=document.getElementById("mypaypal");
const mysubmit=document.getElementById("mysubmit");
const subresult=document.getElementById("subresult");
const paymentresult=document.getElementById("paymentresult");

mysubmit.onclick=function(){
    if(mycheckbox.checked){
        subresult.textContent="u have subscribed";
    }
    else{
        subresult.textContent="u have not subscribed";
    }
     if(myvisa.checked){
        paymentresult.textContent="u r paying with visa";
    }
    else if(mymastercard.checked){
        paymentresult.textContent="u r paying with mastercard";
    }
    else if(mypaypal.checked){
        paymentresult.textContent="u r paying with paypal";
    }
    else{
        paymentresult.textContent="select one payment method";
    }
}

