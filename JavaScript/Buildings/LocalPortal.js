function LocalPortalFunc() {
    var Buildings = document.getElementById("Buildings")
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

    var p = document.createElement("p");
    p.classList.add("TextBox");
    div.appendChild(p);

    if (player.Map === "Outlaws" && House.Portal.BlackMarket === false) {
        var Activate = InputButton("Activate", "Sync this local portal with your home portal");
        Activate.addEventListener("click", function () {
            House.Portal.BlackMarket = true;
            p.innerHTML = "Sync"
            LocalPortalFunc();
        });
        Activate.addEventListener("mouseover", function () {
            p.innerHTML = "Sync this local portal with your home portal";
        });
        div.appendChild(Activate);
    }

    var input1 = InputButton("Home")
    input1.addEventListener("click", function () {
        player.Area = "First";
        player.Map = "RoadToHome";
        battle = false;
        document.getElementById("map").style.display = 'block';
        document.getElementById("buttons").style.display = 'block';
        document.getElementById("EmptyButtons").style.display = 'none';
        document.getElementById("status").style.display = 'block';
        Buildings.style.display = 'none';
        while (Buildings.hasChildNodes()) {
            Buildings.removeChild(Buildings.firstChild);
        }
        DisplayGame();
    });
    input1.addEventListener("mouseover", function () {

    });
    div.appendChild(input1);

    // TODO in future when there is more portals make main buttons for each region
    if (House.Portal.Mountain) {
        var Mountain = InputButton("Mountain")
        Mountain.addEventListener("click", function () {
            player.Area = "Mountain";
            player.Map = "MountainStart";
            battle = false;
            document.getElementById("map").style.display = 'block';
            document.getElementById("buttons").style.display = 'block';
            document.getElementById("EmptyButtons").style.display = 'none';
            document.getElementById("status").style.display = 'block';
            Buildings.style.display = 'none';
            while (Buildings.hasChildNodes()) {
                Buildings.removeChild(Buildings.firstChild);
            }
            return;
        });
        div.appendChild(Mountain);
    }

    if (House.Portal.BlackMarket) {
        var BlackMarket = InputButton("BlackMarket")
        BlackMarket.addEventListener("click", function () {
            player.Area = "Second";
            player.Map = "Outlaws";
            battle = false;
            document.getElementById("map").style.display = 'block';
            document.getElementById("buttons").style.display = 'block';
            document.getElementById("EmptyButtons").style.display = 'none';
            document.getElementById("status").style.display = 'block';
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

    div.appendChild(LeaveBuilding());
    Buildings.appendChild(div);
    Buildings.style.display = "block";
}