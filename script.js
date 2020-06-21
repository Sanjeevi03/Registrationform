function checkInputs() {
        var name = document.forms["myform"]["name"];
        var gen = document.forms["myform"]["gen"];
        var dob = document.forms["myform"]["dob"];
        var city = document.forms["myform"]["city"];
        var st = document.forms["myform"]["st"];
        var mob = document.forms["myform"]["mob"];
        var email = document.forms["myform"]["email"];
        var password = document.forms["myform"]["password"];
        var conpass = document.forms["myform"]["password2"];
        
    if(name.value==""){
        alert("Please! Enter Your Name");
        name.focus();
        return false;
    }
    if(gen.value==""){
        alert("Please! Enter Your Gender");
        gen.focus();
        return false;
    }
    if(dob.value==""){
        alert("Please! Choose Your Date of Birth");
        dob.focus();
        return false;
    }
    if(city.value==""){
        alert("Please! Enter Your City");
        city.focus();
        return false;
    }
    if(st.value==""){
        alert("Please! Select Your State");
        st.focus();
        return false;
    }
    if(mob.value==10){
        alert("Please! Enter Your Mobile number");
        mob.focus();
        return false;
    }
    if(mob.length != 10) {
        alert("Phone number must be 10 digits.");
    mob.focus();
    return false;
}
        
        if(email.value==""){
        alert("Please! Enter Your email");
        email.focus();
        return false;
        }
        
       
    if(password.value==""){
        alert("Please! Enter Your password");
        password.focus();
        return false;
    }
      if(conpass.value==""){
        alert("Please! Enter Your Confirmpassword");
        conpass.focus();
        return false;
    }
    if(password.value!=conpass.value) {
        alert("Password Mismatching")
        conpass.focus();
        return false;
    }
    }
    
    