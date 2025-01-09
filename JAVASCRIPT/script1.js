// Form validation
function validateForm() {
    var name = document.forms["registrationForm"]["name"].value;
    var email = document.forms["registrationForm"]["email"].value;
    var eventDate = document.forms["registrationForm"]["eventDate"].value;
    var ticketType = document.forms["registrationForm"]["ticketType"].value;

    if (name == "" || email == "" || eventDate == "" || ticketType == "") {
        alert("All fields must be filled out");
        return false;
    }
    return true;
}