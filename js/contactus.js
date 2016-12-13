/**
 * Created by Tony on 12/12/2016.
 */
var close = document.getElementsByClassName("closebtn");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.opacity = "0";
        setTimeout(function () {
            div.style.display = "none";
        }, 600);
    }
}
function validatecontactus() {
    var fullname = document.contactus.name.value;
    var email = document.contactus.email.value;
    var message = document.contactus.message.value;
    document.querySelector("div[class='alert']").style.display = "none";
    document.querySelector("div[class='alert success']").style.display = "none";
    document.querySelector("div[class='alert'] span[data-id='message']").innerHTML = "";
    document.querySelector("div[class='alert success'] span[data-id='message']").innerHTML = "";
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (fullname == "") {
        document.querySelector("div[class='alert'] span[data-id='message']").innerHTML = "Full name cannot be empty.";
        document.querySelector("div[class='alert']").style.display = "block";
        document.querySelector("div[class='alert']").style.opacity = "1";
        document.querySelector("div[class='alert success']").style.display = "none";
        return false
    } else if (fullname.length < 6) {
        document.querySelector("div[class='alert'] span[data-id='message']").innerHTML = "Full Name Must Be Greater Then 6";
        document.querySelector("div[class='alert']").style.display = "block";
        document.querySelector("div[class='alert']").style.opacity = "1";
        document.querySelector("div[class='alert success']").style.display = "none";
        return false
    } else if (email == "") {
        document.querySelector("div[class='alert'] span[data-id='message']").innerHTML = "Email Address Is Empty";
        document.querySelector("div[class='alert']").style.display = "block";
        document.querySelector("div[class='alert']").style.opacity = "1";
        document.querySelector("div[class='alert success']").style.display = "none";
        return false
    } else if (!mailformat.test(email)) {
        document.querySelector("div[class='alert'] span[data-id='message']").innerHTML = "You have entered an invalid email address!";
        document.querySelector("div[class='alert']").style.display = "block";
        document.querySelector("div[class='alert']").style.opacity = "1";
        document.querySelector("div[class='alert success']").style.display = "none";
        return false
    } else if (message == "") {
        document.querySelector("div[class='alert'] span[data-id='message']").innerHTML = "Message Is Empty";
        document.querySelector("div[class='alert']").style.display = "block";
        document.querySelector("div[class='alert']").style.opacity = "1";
        document.querySelector("div[class='alert success']").style.display = "none";
        return false
    } else {
        document.querySelector("div[class='alert success'] span[data-id='message']").innerHTML = "Email Have Been Sent !";
        document.querySelector("div[class='alert success']").style.display = "block";
        document.querySelector("div[class='alert success']").style.opacity = "1";
        document.querySelector("div[class='alert']").style.display = "none";
        return true
    }

}
