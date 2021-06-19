
var uname;
    var pno;
    var currentTab = 0;
    var x = document.getElementsByClassName("tab");
    var OTP = '';

    function addd() {
      uname = document.getElementById("name").value;
      document.getElementById('fname').innerHTML += uname.split(" ")[0];;
      pno = document.getElementById("phoneNumber").value;
      document.getElementById('phone').innerHTML += pno;
    }

     // Current tab is set to be the first tab (0)

    showTab(currentTab); // Display the current tab

    
    function showTab(n) {
      // This function will display the specified tab of the form...
      var x = document.getElementsByClassName("tab");
      x[n].style.display = "block";
      //... and fix the Previous/Next buttons:
      if (n == 0) {
        document.getElementById("prevBtn").style.display = "none";
      } else {
        document.getElementById("prevBtn").style.display = "inline";
      }
      if (n == (x.length - 1)) {
        document.getElementById("nextBtn").innerHTML = "Submit";
      } else {
        document.getElementById("nextBtn").innerHTML = "Next";
      }
      //... and run a function that will display the correct step indicator:
      fixStepIndicator(n)
    }

    function nextPrev(n) {
      // This function will figure out which tab to display
      var x = document.getElementsByClassName("tab");
      // Exit the function if any field in the current tab is invalid:
      if (n == 1 && !validateForm()) return false;
      // Hide the current tab:
      x[currentTab].style.display = "none";
      // Increase or decrease the current tab by 1:
      currentTab = currentTab + n;
      // if you have reached the end of the form...
      if (currentTab >= x.length) {
        // ... the form gets submitted:

        document.getElementById("regForm").submit();
        validotp();
        return false;

      }
      // Otherwise, display the correct tab:
      showTab(currentTab);
    }

    function validateForm() {
      // This function deals with validation of the form fields
      var x, y, i, valid = true;
      x = document.getElementsByClassName("tab");
      y = x[currentTab].getElementsByTagName("input");

      //uname=document.getElementById("name").value;
      // console.log(uname)
      // A loop that checks every input field in the current tab:
      for (i = 0; i < y.length; i++) {
        // If a field is empty...
        if (y[i].value == "") {
          // add an "invalid" class to the field:
          y[i].className += " invalid";
          // and set the current valid status to false
          valid = false;
        }
      }
      // If the valid status is true, mark the step as finished and valid:
      if (valid) {
        document.getElementsByClassName("step")[currentTab].className += " finish";
      }

      var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
      var name = document.getElementById('name').value;
      // document.write(name);
      if (!regName.test(name)) {
        alert('Please enter your full name (first & last name).');
        document.getElementById('name').focus();
        return false;
      } else {
        // alert('Valid Details given.');
        return true;
        return valid; // return the valid status
      }
    }

    function fixStepIndicator(n) {
      // This function removes the "active" class of all steps...
      var i, x = document.getElementsByClassName("step");
      for (i = 0; i < x.length; i++) {
        x[i].className = x[i].className.replace(" active", "");
      }
      //... and adds the "active" class on the current step:
      x[n].className += " active";
    }

    function number() {
      var number1 = document.getElementById("phoneNumber").value;
      var x = number1.substring(1, 4);
      var y = number1.substring(6, 8);
      var str = [];
      var str2 = [];
      var str3 = [];
      var j = 621;
      for (var i = 0; i <= 178; i++) {
        str[i] = j++;
      }
      var k = 801;
      for (i = 0; i <= 119; i++) {
        str2[i] = k++;
      }
      var l = 921;
      for (i = 0; i <= 78; i++) {
        str3[i] = l++;
      }
      var area = {
        1: "Andhra Pradesh", 2: "Arunachal Pradesh", 3: "Assam", 4: "Bihar", 5: "Chhattisgarh", 6: "Goa", 7: "Gujarat", 8: "Haryana", 9: "Himachal Pradesh", 10: "Jharkhand", 11: "Karnataka", 12: "Kerala", 13: "Madhya Pradesh", 14: "Maharashtra", 15: "Manipur", 16: "Meghalaya", 17: "Mizoram", 18: "Nagaland", 19: "Odisha", 20: "Punjab", 21: "Rajasthan", 22: "Sikkim", 23: "Tamil Nadu",
        24: "Telangana", 25: "Tripura", 26: "UttarPradesh", 27: "Uttarakhand", 28: "WestBengal", 29: "Andaman and Nicobar Island", 30: "Chandigarh", 31: "Dadra and Nagar Haveli and Daman and Diu", 32: "Delhi", 33: "Ladakh", 34: "Lakshadweep", 35: "Jammu and Kashmir", 36: "Puducherry"
      };
      var demoImages = new Array("idea.png", "jio.png", "vodafone.png");
      for (i = 0; i <= 178; i++) {

        if (x == str[i]) {
          document.images["logo"].src = demoImages[1];
          document.getElementById("lbltext").innerHTML = "Reliance Jio " + area[y];

        }
        else if (x == str2[i]) {
          document.images["logo"].src = demoImages[0];
          document.getElementById("lbltext").innerHTML = "Idea " + area[y];
        }
        else if (x == str3[i]) {
          document.images["logo"].src = demoImages[2];
          document.getElementById("lbltext").innerHTML = "Vodafone " + area[y];
        }
        // else {
        //document.getElementById("lbltext").innerHTML = "Invalid Number";
        // alert("Invalid Number");
        // }
      }
    }
    // A function to format text to look like a phone number
    function phoneFormat(input) {
      // Strip all characters from the input except digits
      input = input.replace(/\D/g, '');

      // Trim the remaining input to ten characters, to preserve phone number format
      input = input.substring(0, 10);

      // Based upon the length of the string, we add formatting as necessary
      var size = input.length;
      if (size == 0) {
        input = input;
      } else if (size < 4) {
        input = '(' + input;
      } else if (size < 7) {
        input = '(' + input.substring(0, 3) + ')' + '-' + input.substring(3, 6);
      } else {
        input = '(' + input.substring(0, 3) + ')' + '-' + input.substring(3, 6) + '-' + input.substring(6, 10);
      }
      return input;
    }
    document.getElementById('phoneNumber').addEventListener('keyup', function (evt) {
      var phoneNumber = document.getElementById('phoneNumber');
      var charCode = (evt.which) ? evt.which : evt.keyCode;
      phoneNumber.value = phoneFormat(phoneNumber.value);
      number1 = phoneNumber.value;

    });

  
    function generateOTP() {
      // Declare a digits variable 
      // which stores all digits
      var digits = '0123456789';
      for (let i = 0; i < 4; i++) {
        OTP += digits[Math.floor(Math.random() * 10)];
      }
      document.getElementById('otpnumber').innerHTML = OTP;
    }
   
    generateOTP();

    function validotp() {
      //var stg1 = document.getElementById('capt').value;
      var stg1 = document.getElementById('otpNumber').value;
      if (stg1 == OTP) {
        alert(" Validation Succesfully");
        //return true;
      } else {
        alert("Please enter a valid OTP");
        // return false;
      }
    }

    
