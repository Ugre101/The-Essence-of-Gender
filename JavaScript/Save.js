document.getElementById("Save").addEventListener("click", function () {
    DisplayNone();
    document.getElementById("SaveMenu").style.display = 'block';

    if (localStorage.getItem('SaveDate1') !== null) {
        document.getElementById("SavePlayer1").value = localStorage.getItem('SaveDate1');
    }
    if (localStorage.getItem('SaveDate2') !== null) {
        document.getElementById("SavePlayer2").value = localStorage.getItem('SaveDate2');
    }
    if (localStorage.getItem('SaveDate3') !== null) {
        document.getElementById("SavePlayer3").value = localStorage.getItem('SaveDate3');
    }
    if (localStorage.getItem('SaveDate4') !== null) {
        document.getElementById("SavePlayer4").value = localStorage.getItem('SaveDate4');
    }
    if (localStorage.getItem('SaveDate5') !== null) {
        document.getElementById("SavePlayer5").value = localStorage.getItem('SaveDate5');
    }
});
document.getElementById("SaveLeave").addEventListener("click", function () {
    battle = false;
    document.getElementById("SaveMenu").style.display = 'none';
    document.getElementById("map").style.display = 'block';
})
document.getElementById("SavePlayer1").addEventListener("click", function () {
    var SaveArray = [player, House, Flags, Settings];
    localStorage.setItem('SavedPlayer1', JSON.stringify(SaveArray));
    localStorage.setItem('SaveDate1', Date());
    document.getElementById("SavePlayer1").value = Date();
    document.getElementById("LoadPlayer1").value = Date();
});
document.getElementById("SavePlayer2").addEventListener("click", function () {
    var SaveArray = [player, House, Flags, Settings];
    localStorage.setItem('SavedPlayer2', JSON.stringify(SaveArray));
    localStorage.setItem('SaveDate2', Date());
    document.getElementById("SavePlayer2").value = Date();
    document.getElementById("LoadPlayer2").value = Date();
});
document.getElementById("SavePlayer3").addEventListener("click", function () {
    var SaveArray = [player, House, Flags, Settings];
    localStorage.setItem('SavedPlayer3', JSON.stringify(SaveArray));
    localStorage.setItem('SaveDate3', Date());
    document.getElementById("SavePlayer3").value = Date();
    document.getElementById("LoadPlayer3").value = Date();
});
document.getElementById("SavePlayer4").addEventListener("click", function () {
    var SaveArray = [player, House, Flags, Settings];
    localStorage.setItem('SavedPlayer4', JSON.stringify(SaveArray));
    localStorage.setItem('SaveDate4', Date());
    document.getElementById("SavePlayer4").value = Date();
    document.getElementById("LoadPlayer4").value = Date();
});
document.getElementById("SavePlayer5").addEventListener("click", function () {
    var SaveArray = [player, House, Flags, Settings];
    localStorage.setItem('SavedPlayer5', JSON.stringify(SaveArray));
    localStorage.setItem('SaveDate5', Date());
    document.getElementById("SavePlayer5").value = Date();
    document.getElementById("LoadPlayer5").value = Date();
});
document.getElementById("SaveText").addEventListener("click", function () {
    var SaveArray = [player, House, Flags, Settings];
    var uriContent = "data:application/octet-stream," + encodeURIComponent(JSON.stringify(SaveArray));
    newWindow = window.open(uriContent, 'neuesDokument');
});