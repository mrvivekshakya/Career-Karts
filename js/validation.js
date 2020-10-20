
        
    //for name
    function validateName(){
        const name = document.getElementById('name').value;

        var nameRegex =  /^[a-zA-Z ]*$/;

        var nameError = "";
        var isName = true;
        if(name == ""){
            nameError = "<font color='red'>**Name can't be blank.</font>";
            isName = false;
        }else{
            if(nameRegex.test(name)){
                nameError = "<font color='green'>**It's Valid.</font>";
            }else{
                nameError = "<font color='red'>**Name is not valid.</font>";
                isName = false;
            }
        }
        document.getElementById('nameMsg').innerHTML=nameError;
        return isName;
    }

    //for email
    function validateEmail(){
        const email = document.getElementById('r_email').value;

        var emailRegex =  /^[AZa-z0-9]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;

        
         var emailError = "";
         var isEmail = true;
         if(email == ""){
             emailError = "<font color='red'>**Email can't be blank.</font>";
             isEmail = false;
         }else{
             if(emailRegex.test(email)){
                 emailError = "<font color='green'>**It's Valid.</font>";
             }else{
                 emailError = "<font color='red'>**Email is not valid.</font>";
                 isEmail = false;
             }
         }
         document.getElementById('emailMsg').innerHTML=emailError;
         return isEmail;
         
    }

    //for mobile
    function validateMobile(){

        const mobile = document.getElementById('mobile').value;
        var mobileRegex = /^([+]\d{2})?\d{10}$/;

        var mobileError = "";
        var isMobile = true;
        if(mobile == ""){
            mobileError = "<font color='red'>**Mobile can't be blank.</font>";
            isMobile = false;
        }else{
            if(mobileRegex.test(mobile)){
                mobileError = "<font color='green'>**It's Valid.</font>";
            }else{
                mobileError = "*<font color='red'>**Mobile Number is not valid.</font>";
                isMobile = false;
            }
        }
        document.getElementById('mobileMsg').innerHTML=mobileError;
        return isMobile;
    }

    //for Colleges
    function validateColleges(){
        const colleges = document.getElementById('colleges').value;
        var collegesRegex = /^[a-zA-Z]*$/;

        var collegesError = "";
        var isCollege = true;
        if(colleges == ""){
            collegesError = "<font color='red'>**Colleges/Courses can't be blank.</font>";
            isCollege = false;
        }else{
            if(collegesRegex.test(colleges)){
                collegesError = "<font color='green'>**It's Valid.</font>";
            }else{
                collegesError = "<font color='red'>**Colleges/Courses is not valid.</font>";
                isCollege = false;
            }
        }
        document.getElementById('collegesMsg').innerHTML=collegesError;
        return isCollege;
    }
    
    function validate(){
        const name = document.getElementById('name').value;
        const email = document.getElementById('r_email').value;
        const mobile = document.getElementById('mobile').value;
        const collages = document.getElementById('colleges').value;
        if(validateName(name) && validateEmail(email) && validateMobile(mobile) && validateColleges(colleges)){
            return true;
        }else{
            validateName();
            validateEmail();
            validateMobile();
            validateColleges();
            return false;
        }
    }
