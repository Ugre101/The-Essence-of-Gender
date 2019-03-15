function Loader(Load) {
    const LoadArray = JSON.parse(localStorage.getItem(Load));   
    player = LoadArray[0];
    House = LoadArray[1];
    Flags = LoadArray[2];
    Settings = LoadArray[3];
    CheckFlags();
    DisplayGame();
    requestAnimationFrame(loop);
    document.getElementById("LoadMenu").style.display = 'none';
    return;
}

// Game load button
document.getElementById("LoadButton").addEventListener("click", function () {
    document.getElementById("LoadMenu").style.display = 'block';
    document.getElementById("StartPage").style.display = 'none';
    document.getElementById("StartLoad").style.display = 'inline-block';
    for (let e = 1; e < 6; e++) {
        if (localStorage.getItem('SaveDate' + e) !== null) {
            document.getElementById("LoadPlayer" + e).value = localStorage.getItem('SaveDate' + e);
        }
    }
});
// Start page load button
document.getElementById("StartLoad").addEventListener("click", function () {
    document.getElementById("LoadMenu").style.display = 'none';
    document.getElementById("StartPage").style.display = 'grid';
})

// Load handler
function Loaders() {
    for (let e = 1; e < 6; e++) {
        document.getElementById("LoadPlayer" + e).addEventListener("click", function () {
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

document.getElementById("LoadFile").addEventListener("input", function () {
    var test = document.getElementById("LoadFile");
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
        document.getElementById("StartPage").style.display = 'none';
        document.getElementById("map").style.display = 'block';
        document.getElementById("buttons").style.display = 'block';
        document.getElementById("status").style.display = 'block';
        document.getElementById("LoadMenu").style.display = 'none';
        CheckFlags();
        requestAnimationFrame(loop);
    }
});
document.getElementById("Load").addEventListener("click", function () {
    DisplayNone();
    document.getElementById("MapLoad").style.display = 'block';
    document.getElementById("LoadMenu").style.display = 'block';
    document.getElementById("StartLoad").style.display = 'none';

    for (var e = 1; e < 6; e++) {
        if (localStorage.getItem('SaveDate' + e) !== null) {
            document.getElementById("LoadPlayer" + e).value = localStorage.getItem('SaveDate' + e);
        }
    }
});
document.getElementById("LoadLeave").addEventListener("click", function () {
    document.getElementById("LoadMenu").style.display = 'none';
    DisplayGame();
})
// End Load handler