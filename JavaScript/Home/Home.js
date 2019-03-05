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
    document.getElementById("LeaveHome").style.display = 'none';
    var Buildings = document.getElementById("PortalMenu")
    document.getElementById("HomeStart").style.display = "none";
    while (Buildings.hasChildNodes()) {
        Buildings.removeChild(Buildings.firstChild);
    }
    var div = document.createElement("div");

    if (window.innerHeight > 600) { // No title on small screen
        var h1 = document.createElement("h1");
        var h1text = document.createTextNode("Portal");
        h1.appendChild(h1text);
        div.appendChild(h1);
    }

    var p = document.getElementById("HomeText");

    // TODO in future when there is more portals make main buttons for each region
    if (House.Portal.Mountain) {
        var Mountain = InputButton("Mountain")
        Mountain.addEventListener("click", function () {
            player.Area = "Mountain";
            player.Map = "MountainStart";
            document.getElementById("HomeStart").style.display = 'block';
            LeaveHome();
            Buildings.style.display = 'none';
            while (Buildings.hasChildNodes()) {
                Buildings.removeChild(Buildings.firstChild);
            }
            return;
        });
        Mountain.addEventListener("mouseover", function () {

        });
        div.appendChild(Mountain);
    }

    if (House.Portal.BlackMarket) {
        var BlackMarket = InputButton("BlackMarket")
        BlackMarket.addEventListener("click", function () {
            player.Area = "Second";
            player.Map = "Outlaws";
            document.getElementById("HomeStart").style.display = 'block';
            LeaveHome();
            Buildings.style.display = 'none';
            while (Buildings.hasChildNodes()) {
                Buildings.removeChild(Buildings.firstChild);
            }
            return;
        });
        BlackMarket.addEventListener("mouseover", function () {

        });
        div.appendChild(BlackMarket);
    }

    var LeavePortal = InputButton("Back");
    LeavePortal.addEventListener("click", function () {
        while (Buildings.hasChildNodes()) {
            Buildings.removeChild(Buildings.firstChild);
        }
        document.getElementById("HomeStart").style.display = 'block';
        document.getElementById("PortalMenu").style.display = 'none';
        document.getElementById("LeaveHome").style.display = 'inline-block';
    })
    div.appendChild(LeavePortal);
    Buildings.appendChild(div);
    Buildings.style.display = 'block';
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
    battle = false;
    DisplayGame();
}
// End home