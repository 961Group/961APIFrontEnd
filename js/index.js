/**
 * Created by Tony on 11/12/2016.
 */
var slideIndex = 1;
showSlider(slideIndex);
function NextSlider(n) {
    setInterval(function () {
        showSlider(slideIndex += n);
    }, 3000);
}
function showSlider(n) {
    var i;
    var x = document.getElementsByClassName("slider");
    if (n > x.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = x.length
    }
    ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}