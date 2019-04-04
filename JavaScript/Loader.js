function SaveLoader(Load) {
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
    DocId("StartLoad").style.display = 'block';
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
for (let e = 1; e < 6; e++) {
    DocId("LoadPlayer" + e).addEventListener("click", function () {
        enemies = [];
        if (localStorage.getItem('SavedPlayer' + e) === null) {
            return;
        } else {
            SaveLoader('SavedPlayer' + e);
        }
        return;
    });
}

DocId("LoadFile").addEventListener("input", function (file) {
    const reader = new FileReader();
    reader.readAsText(file.target.files[0]);
    reader.onload = function () {
        const parseplayer = JSON.parse(reader.result),
         LoadArray = [...parseplayer];
        player = LoadArray[0];
        House = LoadArray[1];
        Flags = LoadArray[2];
        Settings = LoadArray[3];
        DocId("StartPage").style.display = 'none';
        DocId("LoadMenu").style.display = 'none';
        DisplayGame()
        CheckFlags();
        requestAnimationFrame(loop);
    }
});
DocId("Load").addEventListener("click", function () {
    DisplayNone();
    DocId("MapLoad").style.display = 'block';
    DocId("LoadMenu").style.display = 'block';
    DocId("StartLoad").style.display = 'none';

    for (let e = 1; e < 6; e++) {
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