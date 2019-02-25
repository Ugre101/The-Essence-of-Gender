function Loader(Load) {
    battle = false;
    document.getElementById("StartPage").style.display = 'none';
    document.getElementById("map").style.display = 'block';
    document.getElementById("buttons").style.display = 'block';
    document.getElementById("status").style.display = 'block';
    document.getElementById("LoadMenu").style.display = 'none';
    document.getElementById("EventLog").style.display = 'block';
    var LoadArray = JSON.parse(localStorage.getItem(Load));
    player = LoadArray[0];
    House = LoadArray[1];
    Flags = LoadArray[2];
    Settings = LoadArray[3];
    CheckFlags();
    requestAnimationFrame(loop);
    return;
}

// Game load button
document.getElementById("LoadButton").addEventListener("click", function () {
    document.getElementById("LoadMenu").style.display = 'block';
    document.getElementById("StartPage").style.display = 'none';
    document.getElementById("StartLoad").style.display = 'block';
    if (localStorage.getItem('SaveDate1') !== null) {
        document.getElementById("LoadPlayer1").value = localStorage.getItem('SaveDate1');
    }
    if (localStorage.getItem('SaveDate2') !== null) {
        document.getElementById("LoadPlayer2").value = localStorage.getItem('SaveDate2');
    }
    if (localStorage.getItem('SaveDate3') !== null) {
        document.getElementById("LoadPlayer3").value = localStorage.getItem('SaveDate3');
    }
    if (localStorage.getItem('SaveDate4') !== null) {
        document.getElementById("LoadPlayer4").value = localStorage.getItem('SaveDate4');
    }
    if (localStorage.getItem('SaveDate5') !== null) {
        document.getElementById("LoadPlayer5").value = localStorage.getItem('SaveDate5');
    }
});
// Start page load button
document.getElementById("StartLoad").addEventListener("click", function () {
    document.getElementById("LoadMenu").style.display = 'none';
    document.getElementById("StartPage").style.display = 'grid';
})

// Load handler
document.getElementById("LoadPlayer1").addEventListener("click", function () {
    enemies = [];
    if (localStorage.getItem('SavedPlayer1') === null) {
        return;
    } else {
        Loader('SavedPlayer1');
    }
    return;
});
document.getElementById("LoadPlayer2").addEventListener("click", function () {
    enemies = [];
    if (localStorage.getItem('SavedPlayer2') === null) {
        return;
    } else {
        Loader('SavedPlayer2');
    }
    return;
});
document.getElementById("LoadPlayer3").addEventListener("click", function () {
    enemies = [];
    if (localStorage.getItem('SavedPlayer3') === null) {
        return;
    } else {
        Loader('SavedPlayer3');
    }
    return;
});
document.getElementById("LoadPlayer4").addEventListener("click", function () {
    enemies = [];
    if (localStorage.getItem('SavedPlayer4') === null) {
        return;
    } else {
        Loader('SavedPlayer4');
    }
    return;
});
document.getElementById("LoadPlayer5").addEventListener("click", function () {
    enemies = [];
    if (localStorage.getItem('SavedPlayer5') === null) {
        return;
    } else {
        Loader('SavedPlayer5');
    }
    return;
});
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

    if (localStorage.getItem('SaveDate1') !== null) {
        document.getElementById("LoadPlayer1").value = localStorage.getItem('SaveDate1');
    }
    if (localStorage.getItem('SaveDate2') !== null) {
        document.getElementById("LoadPlayer2").value = localStorage.getItem('SaveDate2');
    }
    if (localStorage.getItem('SaveDate3') !== null) {
        document.getElementById("LoadPlayer3").value = localStorage.getItem('SaveDate3');
    }
    if (localStorage.getItem('SaveDate4') !== null) {
        document.getElementById("LoadPlayer4").value = localStorage.getItem('SaveDate4');
    }
    if (localStorage.getItem('SaveDate5') !== null) {
        document.getElementById("LoadPlayer5").value = localStorage.getItem('SaveDate5');
    }
});
document.getElementById("LoadLeave").addEventListener("click", function () {
    document.getElementById("LoadMenu").style.display = 'none';
    DisplayGame();
})
// End Load handler