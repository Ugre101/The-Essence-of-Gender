document.getElementById("SacRaceEss").addEventListener("click", function () {
    const SacMenu = document.getElementById("SacRaceEssMenu");
    if (SacMenu.style.display === 'grid') {
        SacMenu.style.display = 'none';
    } else {
        SacMenu.style.display = 'grid';
        SacRaces();
    }
});

function SacRaces(parAmount = 50) {
    const MaxValue = player.RaceEssence.length > 0 ? player.RaceEssence.map(ess => ess.amount).reduce((a,b) => Math.max(a,b)) : 0;
    var DonateAmount = parAmount > MaxValue ? Math.round(MaxValue) : parAmount;
    const SacMenu = document.getElementById("SacRaceEssMenu"),
        SacFrag = document.createDocumentFragment();
    while (SacMenu.hasChildNodes()) {
        SacMenu.removeChild(SacMenu.firstChild);
    }
    const Sliderdiv = document.createElement("DIV"),
        SliderOut = document.createElement("P");
    SliderOut.innerHTML = `Donate: ${DonateAmount}`;
    Sliderdiv.appendChild(SliderOut);
    const Slider = MakeSlider(DonateAmount, MaxValue);
    Slider.oninput = function () {
        DonateAmount = this.value;
        SliderOut.innerHTML = `Donate: ${this.value}`;
    }
    Sliderdiv.appendChild(Slider);
    SacFrag.appendChild(Sliderdiv);

    const Condiv = document.createElement("DIV");
    Condiv.setAttribute("class", "TwoColumn");
    const {
        ChimeraShrine
    } = player.Blessings;
    if (player.RaceEssence.length > 0) {
        player.RaceEssence.forEach((ess, i) => {
            div = document.createElement("DIV"),
                RaceButton = ButtonButton(`${ess.Race} ${Math.round(ess.amount)}`);
            RaceButton.addEventListener("click", function () {
                if (DonateAmount > ess.amount) {
                    ChimeraShrine.Donated += ess.amount;
                    player.RaceEssence.splice(i, 1);
                } else {
                    ChimeraShrine.Donated += DonateAmount;
                    ess.amount -= DonateAmount;
                }
                ChimeraShrine.Points = Math.floor(Math.sqrt(ChimeraShrine.Donated));
                SacRaces(DonateAmount);
            });
            div.appendChild(RaceButton)
            Condiv.appendChild(div);
        })
    }
    SacFrag.appendChild(Condiv);
    SacMenu.appendChild(SacFrag);
};