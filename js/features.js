/**
 * Created by Tony on 11/12/2016.
 */
var MyPopUp = document.getElementById('PopUp');
var openpopup = document.querySelectorAll("p[data-id*='openpopup']");
var closepopup = document.getElementsByClassName("close")[0];
for (var i = 0; i < openpopup.length; i++) {
    openpopup[i].onclick = function () {
        var sender = this;

        document.querySelector("div[class='popup-header'] h2").innerHTML = this.innerHTML;


        $.getJSON('./json/features.json', function (data) {
            if (sender.id == 'UFA') {
                $('div[class="popup-body"] p').html(data.UFA);
            }
            else if (sender.id == 'Aff') {
                $('div[class="popup-body"] p').html(data.Aff);
            }
            else if (sender.id == 'HC') {
                $('div[class="popup-body"] p').html(data.HC);
            }
            else if (sender.id == 'TP') {
                $('div[class="popup-body"] p').html(data.TP);
            }
            else if (sender.id == 'AP') {
                $('div[class="popup-body"] p').html(data.AP);
            }
            else if (sender.id == 'SL') {
                $('div[class="popup-body"] p').html(data.SL);
            }
            else if (sender.id == 'SFH') {
                $('div[class="popup-body"] p').html(data.SFH);
            }
            else if (sender.id == 'ST') {
                $('div[class="popup-body"] p').html(data.ST);
            }
            else if (sender.id == 'SV') {
                $('div[class="popup-body"] p').html(data.SV);
            }

        });
        MyPopUp.style.display = "block";
    }
}
closepopup.onclick = function () {
    MyPopUp.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == MyPopUp) {
        MyPopUp.style.display = "none";
    }
}