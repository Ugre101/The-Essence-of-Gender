function ChimeraShrineFunc() {
    const Buildings = document.getElementById("Buildings")
    CleanBuildings(); // Empties div
    const div = document.createElement("div");

    if (window.innerHeight > 600) { // No title on small screen
        div.appendChild(TitleText("Chimera shrine"));
    }

    const p = TextBox();
    div.appendChild(p);

    const input1 = ButtonButton("Sacrifice race essence")
    input1.addEventListener("click", function () {
        SacRaces();
    });
    input1.addEventListener("mouseover", function () {

    });
    div.appendChild(input1);

    const input2 = ButtonButton("Placeholder")
    input2.addEventListener("click", function () {

    });
    input2.addEventListener("mouseover", function () {

    });
    div.appendChild(input2);

    div.appendChild(LeaveBuilding());
    Buildings.appendChild(div);
    document.getElementById("Buildings").style.display = 'block';

    function SacRaces(parAmount = 50) {
        const MaxValue = player.RaceEssence.length > 0 ? player.RaceEssence.map(ess => ess.amount).reduce((a, b) => Math.max(a, b)) : 0;
        var DonateAmount = parAmount > MaxValue ? Math.round(MaxValue) : parAmount;
        const SacMenu = Buildings,
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
        Condiv.setAttribute("class", "AutoColumn");
        const {
            ChimeraShrine
        } = player.Blessings;
        if (player.RaceEssence.length > 0) {
            player.RaceEssence.forEach((ess, i) => {
                Sacdiv = document.createElement("div"),
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
                Sacdiv.appendChild(RaceButton)
                Condiv.appendChild(Sacdiv);
            })
        }
        SacFrag.appendChild(Condiv);
        SacMenu.appendChild(SacFrag);
        SacMenu.appendChild(LeaveBuilding());
    };
};