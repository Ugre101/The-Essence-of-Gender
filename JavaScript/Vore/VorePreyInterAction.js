DocId("VoreLooks").addEventListener("click", function () {
    DisplayNone();
    DocId("ShowVore").style.display = 'grid';
    DocId("VorePerkMenu").style.display = 'none';
    DocId("AbsorbEssenceSetting").innerHTML = `Absorb Essence ${Settings.VoreSettings.AbsorbEssence}`;
    VoreButtonsFunc();
});

function VoreButtonsFunc() {
    const con = DocId("VoreButtons");
    while (con.hasChildNodes()) {
        con.removeChild(con.lastChild);
    };
    // Local functions for repeting actions
    const Back = () => {
        const temp = ButtonButton("Back");
        temp.addEventListener("click", function () {
            VoreButtonsFunc();
        });
        return temp;
    };
    const innerConFunc = () => {
        const temp = document.createElement("div");
        temp.classList.add("VoreButtons");
        return temp;
    };
    const Preys = (arr) => {
        const Frag = document.createDocumentFragment();
        for (let e of arr) {
            EssenceCheck(e);
            Frag.appendChild(PreyButton(e, arr));
        };
        return Frag
    }
    const Capacity = (cap, maxcap) => {
        return `${KgToPound(maxcap - cap)} prey<br>${KgToPound(maxcap)} Max`
    }
    const {
        VoreSettings
    } = Settings, {
        Vore
    } = player;

    const innerCon = innerConFunc(),
        ShowStomach = ButtonButton(`Stomach<br>${Capacity(StomachCapacity(),MaxStomachCapacity())}`),
        ShowVagina = ButtonButton(`Pussy<br>${Capacity(VaginaCapacity(), MaxVaginaCapacity())}`),
        ShowBreast = ButtonButton(`Breast<br>${Capacity(BreastCapacity(), MaxBreastCapacity())}`),
        ShowBalls = ButtonButton(`Balls<br>${Capacity(BallsCapacity(), MaxBallsCapacity())}`),
        ShowAnal = ButtonButton(`Anal<br>${Capacity(AnalCapacity(), MaxAnalCapacity())}`),
        VorePerks = ButtonButton(`Vore perks<br>(${Vore.VorePoints}p)`);

    ShowStomach.addEventListener("click", function () {
        while (con.hasChildNodes()) {
            con.removeChild(con.lastChild);
        };
        const innerCon = innerConFunc();
        innerCon.appendChild(Preys(Vore.Stomach));
        con.appendChild(innerCon);
        con.appendChild(document.createElement("br"));
        const StomachDigestion = ButtonButton(`Stomach digestion ${VoreSettings.StomachDigestion}`);
        StomachDigestion.addEventListener("click", function () {
            VoreSettings.StomachDigestion = VoreSettings.StomachDigestion ? false : true;
            StomachDigestion.setAttribute("value", `Stomach digestion ${VoreSettings.StomachDigestion}`);
        });
        con.appendChild(StomachDigestion);
        con.appendChild(Back());
    });

    ShowVagina.addEventListener("click", function () {
        while (con.hasChildNodes()) {
            con.removeChild(con.lastChild);
        };
        const innerCon = innerConFunc();
        innerCon.appendChild(Preys(Vore.Vagina));
        con.appendChild(innerCon);
        con.appendChild(document.createElement("br"));
        const ChildTF = ButtonButton(`Child tf/Age reduc ${VoreSettings.ChildTF}`);
        ChildTF.addEventListener("click", function () {
            VoreSettings.ChildTF = VoreSettings.ChildTF ? false : true;
            VoreSettings.VCumDigestion = false;
            VCumDigestion.setAttribute("value", `Digestion ${VoreSettings.VCumDigestion}`);
            ChildTF.setAttribute("value", `Child tf/Age reduc ${VoreSettings.ChildTF}`);
        });
        con.appendChild(ChildTF);
        const VCumDigestion = ButtonButton(`Digestion ${VoreSettings.VCumDigestion}`);
        VCumDigestion.addEventListener("click", function () {
            VoreSettings.VCumDigestion = VoreSettings.VCumDigestion ? false : true;
            VoreSettings.ChildTF = false;
            VCumDigestion.setAttribute("value", `Digestion ${VoreSettings.VCumDigestion}`);
            ChildTF.setAttribute("value", `Child tf/Age reduc ${VoreSettings.ChildTF}`);
        });
        con.appendChild(VCumDigestion);
        con.appendChild(Back());
    });

    ShowBreast.addEventListener("click", function () {
        while (con.hasChildNodes()) {
            con.removeChild(con.lastChild);
        };
        const innerCon = innerConFunc();
        innerCon.appendChild(Preys(Vore.Breast));
        con.appendChild(innerCon);
        con.appendChild(document.createElement("br"));
        const MilkTF = ButtonButton(`Milk transformation ${VoreSettings.MilkTF}`);
        MilkTF.addEventListener("click", function () {
            VoreSettings.MilkTF = VoreSettings.MilkTF ? false : true;
            MilkTF.setAttribute("value", `Milk transformation ${VoreSettings.MilkTF}`);
        });
        con.appendChild(MilkTF);
        con.appendChild(Back());
    });

    ShowBalls.addEventListener("click", function () {
        while (con.hasChildNodes()) {
            con.removeChild(con.lastChild);
        };
        const innerCon = innerConFunc();
        innerCon.appendChild(Preys(Vore.Balls));
        con.appendChild(innerCon);
        con.appendChild(document.createElement("br"));
        const CumDigestion = ButtonButton(`Cum transformation ${VoreSettings.CumTF}`);
        CumDigestion.addEventListener("click", function () {
            VoreSettings.CumTF = VoreSettings.CumTF ? false : true;
            CumDigestion.setAttribute("value", `Cum transformation ${VoreSettings.CumTF}`);
        });
        con.appendChild(CumDigestion);
        con.appendChild(Back());
    });

    ShowAnal.addEventListener("click", function () {
        while (con.hasChildNodes()) {
            con.removeChild(con.lastChild);
        };
        const innerCon = innerConFunc();
        innerCon.appendChild(Preys(Vore.Anal));
        con.appendChild(innerCon);
        con.appendChild(document.createElement("br"));
        const CumDigestion = ButtonButton(`Anal Digestion ${VoreSettings.AnalDigestion}`);
        CumDigestion.addEventListener("click", function () {
            VoreSettings.AnalDigestion = VoreSettings.AnalDigestion ? false : true;
            CumDigestion.setAttribute("value", `Anal Digestion ${VoreSettings.AnalDigestion}`);
        });
        con.appendChild(CumDigestion);
        con.appendChild(Back());
    });

    VorePerks.addEventListener("click", function () {
        VorePerkFunc();
    });

    [ShowStomach, ShowVagina, ShowBreast, ShowBalls, ShowAnal, VorePerks].forEach((button) => {
        if (button instanceof HTMLElement) {
            innerCon.appendChild(button);
        };
    });
    con.appendChild(innerCon);
    console.log(con)
    con.style.display = 'block';
}

function PreyButton(e, arr) {
    const color = () => {
        switch (CheckGender(e)) {
            case "female":
                return "Pink";
            case "male":
                return "Blue";
            case "hermaphrodite":
                return "Purple";
            case "doll":
                return "Beige";
        }
    };
    const prey = ButtonButton(`${e.Name} ${e.Race}<br>${Pronoun(CheckGender(e))}<br>
    <br>Height:${CmToInch(e.Height)}<br>Weight:${KgToPound(e.Weight)}`);
    prey.addEventListener("click", function () {
        //ThePrey(e);
        console.log(arr.findIndex(i => i === e));
        const con = DocId("VoreButtons");
        while (con.hasChildNodes()) {
            con.removeChild(con.lastChild);
        };
        const h3 = document.createElement("h3"),
            h3Text = document.createTextNode(`${e.Name} ${e.Race}`);
        h3.appendChild(h3Text);
        con.appendChild(h3);
        const regulate = ButtonButton("Regurgitate");
        regulate.addEventListener("click", function () {
            console.log(arr.findIndex(i => i === e));
            // Check so that prey haven't already been digested.
            if (arr.findIndex(i => i === e) > -1) {
                arr.splice(arr.findIndex(i => i === e), 1);
            }
            VoreButtonsFunc();
        });
        con.appendChild(regulate)
        const back = ButtonButton("Back");
        back.addEventListener("click", function () {
            VoreButtonsFunc();
        });
        con.appendChild(back);
    });
    prey.style.backgroundColor = color();
    if (e.hasOwnProperty("StartWeight")) {
        prey.style.opacity = 0.5 + (0.5 * (e.Weight / e.StartWeight));
    }
    return prey
};

var PreyIndex;