DocId("Save").addEventListener("click", function () {
    DisplayNone();
    DocId("SaveMenu").style.display = 'block';
    for (let e = 1; e < 6; e++) {
        if (localStorage.getItem('SaveDate' + e) !== null) {
            const savedate = new Date(localStorage.getItem('SaveDate' + e));
            DocId("SavePlayer" + e).innerHTML = savedate.toUTCString();
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
        localStorage.setItem('SaveDate' + e, new Date());
        DocId("SavePlayer" + e).innerHTML = new Date().toUTCString();
        DocId("LoadPlayer" + e).innerHTML = new Date().toUTCString();
    });
}

DocId("SaveText").addEventListener("click", function () {
    var SaveArray = [player, House, Flags, Settings];
    var uriContent = "data:application/octet-stream," + encodeURIComponent(JSON.stringify(SaveArray));
    newWindow = window.open(uriContent, 'neuesDokument');
});