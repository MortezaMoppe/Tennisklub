
function validering() {
    let medlem = document.forms["form"]["medlemid"].value;
    if (medlem == ""){
        alert("skriv medlemsid");
        return false;
    }
}