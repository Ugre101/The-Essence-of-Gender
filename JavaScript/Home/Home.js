// Home
DocId("Sleep").addEventListener("click", function () {
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
    DocId("HomeText").innerHTML = "You sleep well, restoring your health and willpower.";
});


// Portal
DocId("Portal").addEventListener("click", function () {
    DocId("LeaveHome").style.display = 'none';
    const Buildings = DocId("PortalMenu")
    DocId("HomeStart").style.display = "none";
    while (Buildings.hasChildNodes()) {
        Buildings.removeChild(Buildings.firstChild);
    }
    const div = document.createElement("div");

    if (window.innerHeight > 600) { // No title on small screen
        div.appendChild(TitleText("Portal"));
    }

    const p = DocId("HomeText");

    // TODO in future when there is more portals make main buttons for each region
    if (House.Portal.Mountain) {
        const Mountain = InputButton("Mountain")
        Mountain.addEventListener("click", function () {
            player.Area = "Mountain";
            player.Map = "MountainStart";
            DocId("HomeStart").style.display = 'block';
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
        const BlackMarket = InputButton("BlackMarket")
        BlackMarket.addEventListener("click", function () {
            player.Area = "Second";
            player.Map = "Outlaws";
            DocId("HomeStart").style.display = 'block';
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

    const LeavePortal = InputButton("Back");
    LeavePortal.addEventListener("click", function () {
        while (Buildings.hasChildNodes()) {
            Buildings.removeChild(Buildings.firstChild);
        }
        DocId("HomeStart").style.display = 'block';
        DocId("PortalMenu").style.display = 'none';
        DocId("LeaveHome").style.display = 'inline-block';
    })
    div.appendChild(LeavePortal);
    Buildings.appendChild(div);
    Buildings.style.display = 'block';
});

DocId("Brothel").addEventListener("click", function () {
    DocId("TheBrothel").style.display = 'block';
    DocId("HomeStart").style.display = 'none';
});
DocId("ServeMasc").addEventListener("click", function () {
    Settings.Brothel.ServeMasc = !Settings.Brothel.ServeMasc;
    DocId("ServeMasc").value = "Masculine customers? " + Settings.Brothel.ServeMasc;
});
DocId("ServeFemi").addEventListener("click", function () {
    Settings.Brothel.ServeFemi = !Settings.Brothel.ServeFemi;
    DocId("ServeFemi").value = "Feminine customers? " + Settings.Brothel.ServeFemi;
});
DocId("CloseBrothel").addEventListener("click", function () {
    DocId("TheBrothel").style.display = 'none';
    DocId("HomeStart").style.display = 'block';
});

DocId("LeaveHome").addEventListener("click", function () {
    LeaveHome();
    return;
});

function LeaveHome() {
    DocId("Home").style.display = 'none';
    DocId("EmptyButtons").style.display = 'none';
    battle = false;
    GamePaused = false;
    DocId("LeaveHome").style.display = 'inline-block';
    DisplayGame();
}
// End home