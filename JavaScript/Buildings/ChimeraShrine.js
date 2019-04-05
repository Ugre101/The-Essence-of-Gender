document.getElementById("SacRaceEss").addEventListener("click", function () {
    const SacMenu = document.getElementById("SacRaceEssMenu");
    if (SacMenu.style.display === 'grid') {
        SacMenu.style.display = 'none';
    } else {
        SacMenu.style.display = 'grid';
        SacRaces();
    }
});

function SacRaces(amount = 50) {
    const SacMenu = document.getElementById("SacRaceEssMenu"),
        SacFrag = document.createDocumentFragment();
    while (SacMenu.hasChildNodes()) {
        SacMenu.removeChild(SacMenu.firstChild);
    }

    const Sliderdiv = document.createElement("DIV"),
        SliderOut = document.createElement("P");
    SliderOut.innerHTML = "Donate: " + amount;
    Sliderdiv.appendChild(SliderOut);

    const Slider = document.createElement("input");
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

    const Condiv = document.createElement("DIV");
    Condiv.setAttribute("class", "TwoColumn");
    const RaceEss = player.RaceEssence,
        {
            ChimeraShrine
        } = player.Blessings;
    for (let e = 0; e < player.RaceEssence.length; e++) {
        const div = document.createElement("DIV"),
            Race = InputButton(RaceEss[e].Race + " " + RaceEss[e].amount);
        Race.addEventListener("click", function () {
            if (amount > RaceEss[e].amount) {
                ChimeraShrine.Donated += RaceEss[e].amount;
                RaceEss.splice(e, 1);
            } else {
                ChimeraShrine.Donated += amount;
                RaceEss[e].amount -= amount;
            }
            ChimeraShrine.Points = Math.floor(Math.sqrt(ChimeraShrine.Donated));
            SacRaces(amount);
        });
        div.appendChild(Race)
        Condiv.appendChild(div);
    }
    SacFrag.appendChild(Condiv);
    SacMenu.appendChild(SacFrag);
};