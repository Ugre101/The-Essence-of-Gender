document.getElementById("Save").addEventListener("click", function () {
    DisplayNone();
    document.getElementById("SaveMenu").style.display = 'block';
    for (let e = 1; e < 6; e++) {
        if (localStorage.getItem('SaveDate' + e) !== null) {
            document.getElementById("SavePlayer" + e).value = localStorage.getItem('SaveDate' + e);
        }
    }
});
document.getElementById("SaveLeave").addEventListener("click", function () {
    document.getElementById("SaveMenu").style.display = 'none';
    DisplayGame();
});

function SavePlayerButtons() {
    for (let e = 1; e < 6; e++) {
        document.getElementById("SavePlayer" + e).addEventListener("click", function () {
            const SaveArray = [player, House, Flags, Settings];
            localStorage.setItem('SavedPlayer' + e, JSON.stringify(SaveArray));
            localStorage.setItem('SaveDate' + e, Date());
            document.getElementById("SavePlayer" + e).value = Date();
            document.getElementById("LoadPlayer" + e).value = Date();
        });
    }
}
SavePlayerButtons();

document.getElementById("SaveText").addEventListener("click", function () {
    var SaveArray = [player, House, Flags, Settings];
    var uriContent = "data:application/octet-stream," + encodeURIComponent(JSON.stringify(SaveArray));
    newWindow = window.open(uriContent, 'neuesDokument');
});