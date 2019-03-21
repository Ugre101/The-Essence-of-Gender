function Loader(Load) {
    const LoadArray = JSON.parse(localStorage.getItem(Load));
    player = LoadArray[0];
    House = LoadArray[1];
    Flags = LoadArray[2];
    Settings = LoadArray[3];
    CheckFlags();
    DisplayGame();
    requestAnimationFrame(loop);
    DocId("LoadMenu").style.display = 'none';
    return;
}

// Game load button
DocId("LoadButton").addEventListener("click", function () {
    DocId("LoadMenu").style.display = 'block';
    DocId("StartPage").style.display = 'none';
    DocId("StartLoad").style.display = 'inline-block';
    for (let e = 1; e < 6; e++) {
        if (localStorage.getItem('SaveDate' + e) !== null) {
            DocId("LoadPlayer" + e).value = localStorage.getItem('SaveDate' + e);
        }
    }
});
// Start page load button
DocId("StartLoad").addEventListener("click", function () {
    DocId("LoadMenu").style.display = 'none';
    DocId("StartPage").style.display = 'grid';
})

// Load handler
function Loaders() {
    for (let e = 1; e < 6; e++) {
        DocId("LoadPlayer" + e).addEventListener("click", function () {
            enemies = [];
            if (localStorage.getItem('SavedPlayer' + e) === null) {
                return;
            } else {
                Loader('SavedPlayer' + e);
            }
            return;
        });
    }
}
Loaders();

DocId("LoadFile").addEventListener("input", function () {
    var test = DocId("LoadFile");
    var reader = new FileReader();
    reader.readAsText(test.files[0]);
    reader.onload = function () {
        var parseplayer = JSON.parse(reader.result);
        var LoadArray = [];
        LoadArray = parseplayer;
        player = LoadArray[0];
        House = LoadArray[1];
        Flags = LoadArray[2];
        Settings = LoadArray[3];
        battle = false;
        DocId("StartPage").style.display = 'none';
        DocId("map").style.display = 'block';
        DocId("buttons").style.display = 'block';
        DocId("status").style.display = 'block';
        DocId("LoadMenu").style.display = 'none';
        CheckFlags();
        requestAnimationFrame(loop);
    }
});
DocId("Load").addEventListener("click", function () {
    DisplayNone();
    DocId("MapLoad").style.display = 'block';
    DocId("LoadMenu").style.display = 'block';
    DocId("StartLoad").style.display = 'none';

    for (var e = 1; e < 6; e++) {
        if (localStorage.getItem('SaveDate' + e) !== null) {
            DocId("LoadPlayer" + e).value = localStorage.getItem('SaveDate' + e);
        }
    }
});
DocId("LoadLeave").addEventListener("click", function () {
    DocId("LoadMenu").style.display = 'none';
    DisplayGame();
})
// End Load handler