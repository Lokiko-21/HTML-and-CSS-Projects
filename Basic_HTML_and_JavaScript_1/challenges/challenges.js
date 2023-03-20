function formValidation() {
    let a = document.forms["myForm"]["number"].value;
    if (a == "") {
        alert("Please fill out the Phone Number Section");
        return false;
    }
}