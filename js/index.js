/** Validation for registration form */

function validate() {
    const a = document.getElementById('name').value;
    // document.getElementById('nameMsg').innerHTML = a;
    if(a == ""){
        return false;
    }else{
        return true;
    }
}

/** .Validation for registration form */