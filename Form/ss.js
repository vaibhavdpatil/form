
function validateForm(){
    return validateName();
    return validateEmail();

}


function validateName(){
    var inpname =document.getElementById('name') ;
    localStorage.setItem("fname",inpname.value);
    var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
    var name = document.getElementById('name').value;
    if(!regName.test(name)){
        alert('Please enter your full name (first & last name).');
        document.getElementById('name').focus();
        return false;
    }else{ 
       // alert('Valid Details given.');
        return true;
    }
}

function validateEmail(inputText)
{
var mailformat = /^w+([.-]?w+)@w+([.-]?w+)(.w{2,3})+$/;
if(inputText.value.match(mailformat))
    {
        alert("You have entered a valid email address!");    //The pop up alert for a valid email address
            document.form1.text1.focus();
            return true;
    }
else
    {
        alert("You have entered an invalid email address!");    //The pop up alert for an invalid email address
        document.form1.text1.focus();
        return false;
    }
}

function validateNumber() {
var phone = document.forms["myForm"]["phone"].value;
var phoneNum = /^\(?([6-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/; 
    if(phone.value.match(phoneNum)) {
        return true;
    }
    else {
        document.getElementById("phone").className = document.getElementById("phone").className + " error";
        return false;
    }
}


function number(){
var number1=document.getElementById("phoneNumber").value;
var x = number1.substring(1,4);
var y = number1.substring(6,8);

var str = [];
var str2 = [];
var str3 = [];
var  j=621;
for(var i=0;i<=178;i++)
    {
        str[i]=j++;
    }
var k=801;
for(i=0;i<=119;i++)
    {
        str2[i]=k++;
    }
var l=921;
for(i=0;i<=78;i++)
    {
        str3[i]=l++;
    }
var area = {1:"Andhra Pradesh",2:"Arunachal Pradesh",3:"Assam",4:"Bihar",5:"Chhattisgarh",6:"Goa",7:"Gujarat",8:"Haryana",9:"Himachal Pradesh",10:"Jharkhand",11:"Karnataka",12:"Kerala",13:"Madhya Pradesh",14:"Maharashtra",15:"Manipur",16:"Meghalaya",17:"Mizoram",18:"Nagaland",19:"Odisha",20:"Punjab",21:"Rajasthan",22:"Sikkim",23:"Tamil Nadu",
24:"Telangana",25:"Tripura",26:"UttarPradesh",27:"Uttarakhand",28:"WestBengal",29:"Andaman and Nicobar Island",30:"Chandigarh",31:"Dadra and Nagar Haveli and Daman and Diu",32:"Delhi",33:"Ladakh",34:"Lakshadweep",35:"Jammu and Kashmir",36:"Puducherry"};

var demoImages = new Array("idea.png", "jio.png","vodafone.png");

for(i=0;i<=178;i++){

    if(x==str[i])
     {  document.images["logo"].src = demoImages[1];
        document.getElementById("lbltext").innerHTML = "Reliance Jio "+ area[y];
        
        }
    else if( x==str2[i])
    {   document.images["logo"].src = demoImages[0];
        document.getElementById("lbltext").innerHTML = "Idea "+ area[y];
    }
    else if(x==str3[i]){
        document.images["logo"].src = demoImages[2];
        document.getElementById("lbltext").innerHTML = "Vodafone "+ area[y];
    }
   // else {
        //document.getElementById("lbltext").innerHTML = "Invalid Number";
       // alert("Invalid Number");
   // }
    }


}



 // A function to format text to look like a phone number
 function phoneFormat(input)
{
// Strip all characters from the input except digits
input = input.replace(/\D/g,'');

// Trim the remaining input to ten characters, to preserve phone number format
input = input.substring(0,10);

// Based upon the length of the string, we add formatting as necessary
var size = input.length;
if(size == 0){
        input = input;
}else if(size < 4){
        input = '('+input;
}else if(size < 7){
        input = '('+input.substring(0,3)+')'+'-'+input.substring(3,6);
}else{
        input = '('+input.substring(0,3)+')'+'-'+input.substring(3,6)+'-'+input.substring(6,10);
}
return input; 
}
document.getElementById('phoneNumber').addEventListener('keyup',function(evt){
var phoneNumber = document.getElementById('phoneNumber');
var charCode = (evt.which) ? evt.which : evt.keyCode;
phoneNumber.value = phoneFormat(phoneNumber.value);
number1= phoneNumber.value;

});


let data=[{
    name:"",phoneNumber:""
}];
function addata(e) {
    e.preventDefault();
    let data = {};
    let name = document.getElementById("name").value;
    let phoneNumber = document.getElementById("phoneNumber").value;
    data.name = name;
    data.phoneNumber = phoneNumber;}
    