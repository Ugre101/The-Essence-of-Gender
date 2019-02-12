// Home
document.getElementById("Sleep").addEventListener("click", function () {
    if (player.Health < player.MaxHealth + House.BedLevel * 5) {
        player.Health = player.MaxHealth + House.BedLevel * 5;
    }
    if (player.WillHealth < player.MaxWillHealth + House.BedLevel * 5) {
        player.WillHealth = player.MaxWillHealth + House.BedLevel * 5;
    }
    battle = false;
    for (var e = 0; e < 8; e++) {
        DateTracker();
    }
    battle = true;
    document.getElementById("CurrentDate").innerHTML = Flags.Date.Day + "/" + Flags.Date.Month + "/" + Flags.Date.Year;
    document.getElementById("HomeText").innerHTML = "You sleep well, restoring your health and willpower.";
});


// Portal
document.getElementById("Portal").addEventListener("click", function () {
    document.getElementById("HomeStart").style.display = 'none';
    document.getElementById("PortalMenu").style.display = 'block';
    if (House.Portal.Mountain) {
        document.getElementById("Mountain").style.display = 'inline-block';
    } else {
        document.getElementById("Mountain").style.display = 'none';
    }
});
document.getElementById("LeavePortal").addEventListener("click", function () {
    document.getElementById("HomeStart").style.display = 'block';
    document.getElementById("PortalMenu").style.display = 'none';
});
document.getElementById("Portals").addEventListener("click", function (e) {
    Npcs = [];
    var Chosen;
    if (e.target.type == "button") {
        Chosen = String(e.target.id);
        switch (Chosen) {
            case "TempLand":
                player.Area = Chosen;
                player.Map = "TempCity";
                LeaveHome();
                break
            case "Mountain":
                player.Area = Chosen;
                player.Map = "MountainStart";
                LeaveHome();
                break
            case "Lumindera":
                /**                    player.Area = "Lumindera";
                player.Map = "nice";
                LeaveHome(); */
                break;
            default:
                break;

        }
    }
});

document.getElementById("Brothel").addEventListener("click", function () {
    document.getElementById("TheBrothel").style.display = 'block';
    document.getElementById("HomeStart").style.display = 'none';
});
document.getElementById("ServeMasc").addEventListener("click", function () {
    Settings.Brothel.ServeMasc = !Settings.Brothel.ServeMasc;
    document.getElementById("ServeMasc").value = "Masculine customers? " + Settings.Brothel.ServeMasc;
});
document.getElementById("ServeFemi").addEventListener("click", function () {
    Settings.Brothel.ServeFemi = !Settings.Brothel.ServeFemi;
    document.getElementById("ServeFemi").value = "Feminine customers? " + Settings.Brothel.ServeFemi;
});
document.getElementById("CloseBrothel").addEventListener("click", function () {
    document.getElementById("TheBrothel").style.display = 'none';
    document.getElementById("HomeStart").style.display = 'block';
});

document.getElementById("LeaveHome").addEventListener("click", function () {
    LeaveHome();
    return;
});

function LeaveHome() {
    document.getElementById("Home").style.display = 'none';
    document.getElementById("EmptyButtons").style.display = 'none';
    DisplayGame();
}
// End home