DocId("Save").addEventListener("click", function () {
    DisplayNone();
    DocId("SaveMenu").style.display = 'block';
    for (let e = 1; e < 6; e++) {
        if (localStorage.getItem('SaveDate' + e) !== null) {
            DocId("SavePlayer" + e).innerHTML = localStorage.getItem('SaveDate' + e);
        }
    }
});

DocId("SaveLeave").addEventListener("click", function () {
    DocId("SaveMenu").style.display = 'none';
    DisplayGame();
});

for (let e = 1; e < 6; e++) {
    DocId("SavePlayer" + e).addEventListener("click", function () {
        const SaveArray = [player, House, Flags, Settings];
        localStorage.setItem('SavedPlayer' + e, JSON.stringify(SaveArray));
        localStorage.setItem('SaveDate' + e, Date());
        DocId("SavePlayer" + e).innerHTML = Date();
        DocId("LoadPlayer" + e).innerHTML = Date();
    });
}

DocId("SaveText").addEventListener("click", function () {
    var SaveArray = [player, House, Flags, Settings];
    var uriContent = "data:application/octet-stream," + encodeURIComponent(JSON.stringify(SaveArray));
    newWindow = window.open(uriContent, 'neuesDokument');
});