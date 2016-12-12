/**
 * Created by Tony on 12/12/2016.
 */
function validatecontactus() {
    var fullname = document.contactus.name.value;
    var email = document.contactus.email.value;
    var message = document.contactus.message.value;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (fullname == "") {
        alert("Full Name Is Empty");
        return false
    } else if (fullname.length < 6) {
        alert("Full Name Must Be Greater Then 6");
        return false
    } else if (email == "") {
        alert("Email Address Is Empty");
        return false
    } else if (!mailformat.test(email)) {
        alert("You have entered an invalid email address!");
        return false
    } else if (message == "") {
        alert("Message Is Empty");
        return false
    } else {
        alert("Email Have Been Sent !");
        return true
    }

}
