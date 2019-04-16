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
    DocId("LoadLeaveStart").style.display = 'inline-block';
    DocId("LoadLeave").style.display = 'none';
    DisplayLoadDates();
});
// Start page load button
DocId("LoadLeaveStart").addEventListener("click", function () {
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
    DocId("LoadMenu").style.display = 'block';
    DocId("LoadLeaveStart").style.display = 'none';
    DocId("LoadLeave").style.display = 'inline-block';
    DisplayLoadDates();
});
DocId("LoadLeave").addEventListener("click", function () {
    DocId("LoadMenu").style.display = 'none';
    DisplayGame();
})

function DisplayLoadDates(){
    for (let e = 1; e < 6; e++) {
        if (localStorage.getItem('SaveDate' + e) !== null) {
            const savedate = new Date(localStorage.getItem('SaveDate' + e));
            DocId("LoadPlayer" + e).innerHTML = savedate.toUTCString();
        }
    }
}