function NewGamePlus(LoadArrays) {
    var LoadArray = JSON.parse(localStorage.getItem(LoadArrays));
    battle = false;
    document.getElementById("StartPage").style.display = 'none';
    document.getElementById("map").style.display = 'block';
    document.getElementById("buttons").style.display = 'block';
    document.getElementById("status").style.display = 'block';
    document.getElementById("LoadMenu").style.display = 'none';
    document.getElementById("EventLog").style.display = 'block';
    var Oldplayer = LoadArray[0];
    var OldHouse = LoadArray[1];
    var OldFlags = LoadArray[2];
    var OldSettings = LoadArray[3];

    player.Str = Oldplayer.Str;
    player.Int = Oldplayer.Int;
    player.Charm = Oldplayer.Charm;
    player.Will = Oldplayer.Will;
    player.End = Oldplayer.End;
    player.SexSkill = Oldplayer.SexSkill;
    player.Gold = Oldplayer.Gold;
    player.Exp = Oldplayer.Exp;
    player.Level = Oldplayer.Level;
    player.SkillPoints = Oldplayer.SkillPoints;
    player.PerkPoints = Oldplayer.PerkPoints;
    player.Race = Oldplayer.Race;

    if (Array.isArray(Oldplayer.Dicks)) {
        if (Oldplayer.Dicks.length > 0) {
            player.Dicks = Oldplayer.Dicks;
        }
    };
    if (Array.isArray(Oldplayer.Balls)) {
        if (Oldplayer.Balls.length > 0) {
            player.Balls = Oldplayer.Dicks;
        }
    };
    if (Array.isArray(Oldplayer.Pussies)) {
        if (Oldplayer.Pussies.length > 0) {
            player.Pussies = Oldplayer.Pussies;
        }
    };
    if (Array.isArray(Oldplayer.Boobies)) {
        if (Oldplayer.Boobies.length > 0) {
            player.Boobies = Oldplayer.Boobies;
        }
    };
    if (Array.isArray(Oldplayer.Anal)) {
        if (Oldplayer.Anal.length > 0) {
            player.Anal = Oldplayer.Anal;
        }
    }
    if (Oldplayer.hasOwnProperty("Perks")) {
        if (Oldplayer.Perks.hasOwnProperty("ExtraHealth")) {
            if (Oldplayer.Perks.ExtraHealth.hasOwnProperty("Count")) {
                player.Perks.ExtraHealth.Count = Oldplayer.Perks.ExtraHealth.Count;
            }
        }
        if (Oldplayer.Perks.hasOwnProperty("ExtraWillHealth")) {
            if (Oldplayer.Perks.ExtraWillHealth.hasOwnProperty("Count")) {
                player.Perks.ExtraWillHealth.Count = Oldplayer.Perks.ExtraWillHealth.Count;
            }
        }

        if (Oldplayer.Perks.hasOwnProperty("FasterRest")) {
            if (Oldplayer.Perks.FasterRest.hasOwnProperty("Count")) {
                player.Perks.FasterRest.Count = Oldplayer.Perks.FasterRest.Count;
            }
        }

        if (Oldplayer.Perks.hasOwnProperty("StealMore")) {
            if (Oldplayer.Perks.StealMore.hasOwnProperty("Count")) {
                player.Perks.StealMore.Count = Oldplayer.Perks.StealMore.Count;
                player.EssenceDrain = 5 + player.Perks.StealMore.Count * 3;
            }
        }
        if (Oldplayer.Perks.hasOwnProperty("GiveEssence")) {
            if (Oldplayer.Perks.GiveEssence.hasOwnProperty("Count")) {
                player.Perks.GiveEssence.Count = Oldplayer.Perks.GiveEssence.Count;
                player.GiveEssence = player.Perks.GiveEssence.Count * 3;
            }
        }
    }
    if (Array.isArray(Oldplayer.Quests)) {
        player.Quests = Oldplayer.Quests
    }
    player.Weight = Oldplayer.Weight;
    player.Height = Oldplayer.Height;
    player.Fat = Oldplayer.Fat;
    player.Masc = Oldplayer.Masc;
    player.Femi = Oldplayer.Femi;
    player.Fertility = Oldplayer.Fertility;
    player.Virility = Oldplayer.Virility;
    if (Oldplayer.hasOwnProperty("Pregnant")) {
        if (Array.isArray(Oldplayer.Pregnant.Babies)) {
            for (var e = 0; e < Oldplayer.Pregnant.Babies.length; e++) {
                player.Pregnant.Babies.push(Oldplayer.Pregnant.Babies[e])
                player.Pregnant.Status = true;
            }
        }
    }
    if (Array.isArray(Oldplayer.Children)) {
        for (var e = 0; e < Oldplayer.Children.length; e++) {
            player.Children.push(Oldplayer.Children[e]);
        }
    }
    if (Array.isArray(Oldplayer.Inventory)) {
        for (var e = 0; e < Oldplayer.Inventory.length; e++) {
            player.Inventory.push(Oldplayer.Inventory[e])
        }
    }

    //    House.Owned = OldHouse.Owned;
    House.BedLevel = OldHouse.BedLevel;
    House.Dorm = OldHouse.Dorm;
    if (OldHouse.hasOwnProperty("Kitchen")) {
        House.Kitchen = OldHouse.Kitchen;
    }
    if (OldHouse.hasOwnProperty("Gym")) {
        House.Gym = OldHouse.Gym;
    }
    if (OldHouse.hasOwnProperty("Brothel")) {
        House.Brothel = OldHouse.Brothel;
    }
    if (Array.isArray(OldHouse.Dormmates)) {

        for (var e = 0; e < OldHouse.Dormmates; e++) {
            House.Dormmates.push(OldHouse.Dormmates[e]);
        }
    }
    console.log(player);
    requestAnimationFrame(loop);
    DateEngine();
};

// New game+
document.getElementById("NewGamePlus").addEventListener("click", function () {
    document.getElementById("NewGamePlusMenu").style.display = 'block';
    document.getElementById("StartPage").style.display = 'none';
    if (localStorage.getItem('SaveDate1') !== null) {
        document.getElementById("NGPLoadPlayer1").value = localStorage.getItem('SaveDate1');
    }
    if (localStorage.getItem('SaveDate2') !== null) {
        document.getElementById("NGPLoadPlayer2").value = localStorage.getItem('SaveDate2');
    }
    if (localStorage.getItem('SaveDate3') !== null) {
        document.getElementById("NGPLoadPlayer3").value = localStorage.getItem('SaveDate3');
    }
    if (localStorage.getItem('SaveDate4') !== null) {
        document.getElementById("NGPLoadPlayer4").value = localStorage.getItem('SaveDate4');
    }
    if (localStorage.getItem('SaveDate5') !== null) {
        document.getElementById("NGPLoadPlayer5").value = localStorage.getItem('SaveDate5');
    }
});
document.getElementById("NGPLoadPlayer1").addEventListener("click", function () {
    enemies = [];
    Npcs = [];
    if (localStorage.getItem('SavedPlayer1') === null) {
        return;
    } else {
        NewGamePlus('SavedPlayer1');
    }
    return;
});
document.getElementById("NGPLoadPlayer2").addEventListener("click", function () {
    enemies = [];
    Npcs = [];
    if (localStorage.getItem('SavedPlayer2') === null) {
        return;
    } else {
        NewGamePlus('SavedPlayer2');
    }
    return;
});
document.getElementById("NGPLoadPlayer3").addEventListener("click", function () {
    enemies = [];
    Npcs = [];
    if (localStorage.getItem('SavedPlayer3') === null) {
        return;
    } else {
        NewGamePlus('SavedPlayer3');
    }
    return;
});
document.getElementById("NGPLoadPlayer4").addEventListener("click", function () {
    enemies = [];
    Npcs = [];
    if (localStorage.getItem('SavedPlayer4') === null) {
        return;
    } else {
        NewGamePlus('SavedPlayer4');
    }
    return;
});
document.getElementById("NGPLoadPlayer5").addEventListener("click", function () {
    enemies = [];
    Npcs = [];
    if (localStorage.getItem('SavedPlayer5') === null) {
        return;
    } else {
        NewGamePlus('SavedPlayer5');
    }
    return;
});
document.getElementById("NGPLoadFile").addEventListener("input", function () {
    var test = document.getElementById("LoadFile");
    var reader = new FileReader();
    reader.readAsText(test.files[0]);
    reader.onload = function () {
        var parseplayer = JSON.parse(reader.result);
        var LoadArray = [];
        LoadArray = parseplayer;
        NewGamePlus(LoadArray);
        battle = false;
        document.getElementById("StartPage").style.display = 'none';
        document.getElementById("map").style.display = 'block';
        document.getElementById("buttons").style.display = 'block';
        document.getElementById("status").style.display = 'block';
        document.getElementById("LoadMenu").style.display = 'none';
        requestAnimationFrame(loop);
    }
});

document.getElementById("NGPLoadLeaveStart").addEventListener("click", function () {
    document.getElementById("NewGamePlusMenu").style.display = 'none';
    document.getElementById("StartPage").style.display = 'block';
});