
function closePopUp() {
    document.getElementById("PopUp").style.opacity = "0";
    document.getElementById("PopUp").style.zIndex = "-1";
}

setTimeout(
    function openPopUp() {
    document.getElementById("PopUp").style.opacity = "1";
    document.getElementById("PopUp").style.zIndex = "99999";
}, 4000);

openPopUp();