document.getElementById("SacRaceEss").addEventListener("click", function () {
    var SacMenu = document.getElementById("SacRaceEssMenu");
    if (SacMenu.style.display === 'grid') {
        SacMenu.style.display = 'none';
    } else {
        SacMenu.style.display = 'grid';
        SacRaces();
    }
});

function SacRaces(amount = 50) {
    var SacMenu = document.getElementById("SacRaceEssMenu");
    var SacFrag = document.createDocumentFragment();
    while (SacMenu.hasChildNodes()) {
        SacMenu.removeChild(SacMenu.firstChild);
    }

    var Sliderdiv = document.createElement("DIV");

    var SliderOut = document.createElement("P");
    SliderOut.innerHTML = "Donate: " + amount;
    Sliderdiv.appendChild(SliderOut);

    var Slider = document.createElement("input");
    Slider.setAttribute("type", "range");
    Slider.min = 0;
    Slider.max = 1000;
    Slider.value = amount;
    Slider.oninput = function () {
        SliderOut.innerHTML = "Donate: " + this.value;
    }
    Slider.onmouseup = function () {
        SacRaces(this.value);
    }
    Slider.ontouchend = function () {
        SacRaces(this.value);
    }
    Sliderdiv.appendChild(Slider);
    SacFrag.appendChild(Sliderdiv);

    var Condiv = document.createElement("DIV");
    Condiv.setAttribute("class", "TwoColumn");
    var RaceEss = player.RaceEssence;
    for (var e = 0; e < player.RaceEssence.length; e++) {
        var div = document.createElement("DIV");
        var Race = document.createElement("INPUT");
        Race.setAttribute("type", "button");
        Race.setAttribute("data-index", e);
        Race.setAttribute("value", RaceEss[e].Race + " " + RaceEss[e].amount);
        Race.addEventListener("click", function (event) {
            var e = event.target.dataset.index; // lol, I think this works without problem?
            if (amount > RaceEss[e].amount) {
                player.Blessings.ChimeraShrine.Donated += RaceEss[e].amount;
                player.RaceEssence.splice(e, 1);
            } else {
                player.Blessings.ChimeraShrine.Donated += amount;
                RaceEss[e].amount -= amount;
            }
            player.Blessings.ChimeraShrine.Points = Math.floor(Math.sqrt(player.Blessings.ChimeraShrine.Donated));
            SacRaces(amount);
        });
        div.appendChild(Race)
        Condiv.appendChild(div);
    }
    SacFrag.appendChild(Condiv);
    SacMenu.appendChild(SacFrag);

}