let errText;
// Ketika tombol submit di klik
function submitData() {
    let valName = validateFullName();
    let valEmail = validateEmail();
    let valUsrName = validateUserName();
    let valPassword = validatePassword();
    let valCPwd = validateCPassword();
    let valGender = validateGender();
    let valQty = validateQty();
    let valAddress = validateAddress();
    let valChkAgree = validateAgreement();
    let allValidated = valName && valEmail && valUsrName && valPassword && valCPwd && valGender && valQty && valAddress && valChkAgree;
    console.log(valName);
    if (allValidated) {
        alert("Game bought");
        document.getElementById("regisForm").reset();
    } else {
        alert("Error detected");
    }
}
// Validasi Full Name
function validateFullName() {
    let fullName = document.getElementById("usrFullName").value;
    let alphabetOnly = true;
    for (let i = 0; i < fullName.length; i++) {
        let char = fullName.charCodeAt(i);
        if (char >= 65 && char <= 90) { // Alphabet Huruf Besar
            alphabetOnly = true;
        } else if (char >= 97 && char <= 122) { // Alphabet Huruf Kecil
            alphabetOnly = true;
        } else if ((char >= 192 && char <= 214) || (char >= 216 && char <= 253)) { // Alphabet special characters (e.g. áäåóöúü)
            alphabetOnly = true;
        } else if (char == 32) {
            alphabetOnly = true;
        } else {
            alphabetOnly = false;
            break;
        }
    }
    if (fullName == "") {
        errText = "Must be filled";
    } else if (!alphabetOnly) {
        errText = "Must consist of letters only";
    } else {
        errText = "";
    }
    document.getElementById("errFullName").innerHTML = errText;
    switch (errText) {
        case "":
            return true;
            break;
    
        default:
            return false;
            break;
    }
}
// Validasi Email
function validateEmail() {
    let email = document.getElementById("usrEmail").value;
    let hasAt = false, hasDot = false, hasBoth, alphabetOnly;
    let atCharLoc, dotCharLoc;
    for (let i = 0; i < email.length; i++) {
        let char = email.charCodeAt(i);
        if (char == 64) {
            hasAt = true;
            atCharLoc = i;
            break;
        }
    }
    for (let i = 0; i < email.length; i++) {
        let char = email.charCodeAt(i);
        if (char == 46) {
            hasDot = true;
            dotCharLoc = i;
            break;
        }
    }
    for (let i = 0; i < email.length; i++) {
        let char = email.charCodeAt(i);
        if ((char >= 65 && char <= 90) || (char >= 97 && char <= 122) || char == 64 || char == 46 || (char >= 48 && char <= 57)) {
            alphabetOnly = true;
        } else {
            alphabetOnly = false;
            break;
        }
    }
    hasBoth = hasAt && hasDot;
    if (email == "") {
        errText = "Must be filled";
    } else if (email.includes("@.") || email.includes(".@")) {
        errText = "'@' and '.' cannot be side by side"
    } else if (!hasBoth) {
        errText = "Must contain '@' and '.'"
    } else if (!alphabetOnly || (dotCharLoc < atCharLoc)) {
        errText = "Must be valid";
    } else {
        errText = "";
    }
    document.getElementById("errEmail").innerHTML = errText;
    switch (errText) {
        case "":
            return true;
            break;
    
        default:
            return false;
            break;
    }
}
// Validasi Username
function validateUserName() {
    let userName = document.getElementById("usrName").value;
    let containSpace = false;
    for (let i = 0; i < userName.length; i++) {
        let char = userName.charCodeAt(i);
        if (char == 32) {
            containSpace = true;
            break;
        } else {
            containSpace = false;
        }
    }
    if (userName == "") {
        errText = "Must be filled";
    } else if (userName.length <= 6) {
        errText = "Length must be greater than 6 characters";
    } else if (containSpace) {
        errText = "Cannot contain space character";
    } else {
        errText = "";
    }
    document.getElementById("errUsername").innerHTML = errText;
    switch (errText) {
        case "":
            return true;
            break;
    
        default:
            return false;
            break;
    }
}
// Validasi Password
function validatePassword() {
    let password = document.getElementById("usrPwd").value;
    let isAlphaNumeric;
    let countAlphabet = 0;
    let countNumeric = 0;
    for (let i = 0; i < password.length; i++) {
        let char = password.charCodeAt(i);
        if (char >= 65 && char <= 90) { // Alphabet Huruf Besar
            countAlphabet++;
        } else if (char >= 97 && char <= 122) { // Alphabet Huruf Kecil
            countAlphabet++;
        } else if ((char >= 192 && char <= 214) || (char >= 216 && char <= 253)) { // Alphabet special characters (e.g. áäåóöúü)
            countAlphabet++;
        } else if (char >= 48 && char <= 57) { // Number (0-9)
            countNumeric++;
        }
    }
    if ((countAlphabet > 0) && (countNumeric > 0)) {
        isAlphaNumeric = true;
    } else {
        isAlphaNumeric = false;
    }
    if (password == "") {
        errText = "Must be filled";
    } else if (password.length <= 8) {
        errText = "Length must be greater than 8 characters";
    } else if (!isAlphaNumeric) {
        errText = "Must be alphanumeric";
    } else {
        errText = ""
    }
    document.getElementById("errPassword").innerHTML = errText;
    switch (errText) {
        case "":
            return true;
            break;
    
        default:
            return false;
            break;
    }
}
// Validasi Confirm Password
function validateCPassword() {
    let password = document.getElementById("usrPwd").value;
    let confirmPwd = document.getElementById("usrCPwd").value;
    if (confirmPwd == "") {
        errText = "Must be filled";
    } else if (password === confirmPwd) {
        errText = "";
    } else {
        errText = "Must be same with Password";
    }
    document.getElementById("errCPwd").innerHTML = errText;
    switch (errText) {
        case "":
            return true;
            break;
    
        default:
            return false;
            break;
    }
}
// Validasi Gender
function validateGender() {
    let maleChkd = document.getElementById("gdrMale").checked;
    let femaleChkd = document.getElementById("gdrFemale").checked;
    if (maleChkd || femaleChkd) {
        errText = "";
    } else {
        errText = "Must be chosen";
    }
    document.getElementById("errGender").innerHTML = errText;
    switch (errText) {
        case "":
            return true;
            break;
    
        default:
            return false;
            break;
    }
}
// Validasi Quantity
function validateQty() {
    let qty = document.getElementById("usrQty").value;
    if (qty < 1) {
        errText = "Must be greater than 0";
    } else {
        errText = "";
    }
    document.getElementById("errQty").innerHTML = errText;
    switch (errText) {
        case "":
            return true;
            break;
    
        default:
            return false;
            break;
    }
}
// Validasi Adress
function validateAddress() {
    let address = document.getElementById("usrAddress").value;
    if (address == "") {
        errText = "Must be filled";
    } else if (!address.endsWith(" Street")) {
        errText = "Must end with ' Street'";
    } else {
        errText = "";
    }
    document.getElementById("errAddress").innerHTML = errText;
    switch (errText) {
        case "":
            return true;
            break;
    
        default:
            return false;
            break;
    }
}
// Validasi Aggreement
function validateAgreement() {
    let agree = document.getElementById("chkAgree").checked;
    if (agree) {
        document.getElementById("errChkAgree").style.opacity = "0";
    } else {
        document.getElementById("errChkAgree").style.opacity = "1";
    }
    console.log(agree);
    return agree;
}