function DormFunc() {
    const dorm = DocId("TheDorm");
    while (dorm.hasChildNodes()) {
        dorm.removeChild(dorm.firstChild)
    }

    const h2 = document.createElement("h2"),
        h2text = document.createTextNode("Dorms");
    h2.appendChild(h2text);
    dorm.appendChild(h2);

    const ButtonMates = document.createElement("div");
    ButtonMates.classList.add("ButtonMates");
    ButtonMates.style.display = 'grid';

    function Color(e) {
        switch (CheckGender(e)) {
            case "female":
                return "Pink";
            case "male":
                return "Blue";
            case "hermaphrodite":
                return "Purple";
            case "doll":
            default:
                return "Beige";
        }
    }
    for (let e of House.Dormmates) {
        const dormmate = ButtonButton(),
            DormName = e.hasOwnProperty("FirstName") ?
            (e.hasOwnProperty("LastName") ? `${e.FirstName} ${e.LastName}` : e.FirstName) :
            (e.hasOwnProperty("LastName") ? e.LastName : ``);
        dormmate.style.backgroundColor = Color(e);
        dormmate.innerHTML = `${DormName}<br>${e.Name} ${e.Race}`;
        dormmate.addEventListener("click", function () {
            MateDiv(e);
        });
        ButtonMates.appendChild(dormmate);
    }
    dorm.appendChild(ButtonMates);

    const Rules = InputButton("Rules(placeholder)");
    Rules.addEventListener("click", function () {
        // #TODO add rules for dormates,
        DormRulesFunc();
    });
    dorm.appendChild(Rules);

    if (House.Dormmates.length > 0 && player.Balls.length > 0) {
        const ImpregOrgy = InputButton("Impregnate servants",
            `Spend the day fucking you servants, until your balls are completely emptied.`)
        ImpregOrgy.addEventListener("click", ImpregOrgyFunc)
        dorm.appendChild(ImpregOrgy);
    }
    if (House.Dormmates.length > 0) {
        const GetImpregOrgy = InputButton("Get impregnated", `Spend the day getting fucked by your virile servants, 
        till all of their balls content have been emptied into your orifices.`)
        GetImpregOrgy.addEventListener("click", GetImpregOrgyFunc);
        dorm.appendChild(GetImpregOrgy);
    }
    const LeaveDorm = InputButton("Leave dorm");
    LeaveDorm.addEventListener("click", function () {
        DocId("HomeStart").style.display = 'block';
        DocId("TheDorm").style.display = 'none';
    });
    dorm.appendChild(LeaveDorm);
}

function DormRulesFunc() {
    const dorm = DocId("TheDorm");
    while (dorm.hasChildNodes()) {
        dorm.removeChild(dorm.firstChild)
    }

    const h2 = document.createElement("h2"),
        h2text = document.createTextNode("Rules");
    h2.appendChild(h2text);
    dorm.appendChild(h2);

    const ButtonMates = document.createElement("div");
    ButtonMates.classList.add("ButtonMates");
    ButtonMates.style.display = 'grid';

    const rule1 = ButtonButton("Impregnate each other: true/false");
    rule1.addEventListener("click", function () {

    });
    ButtonMates.appendChild(rule1);
    const rule2 = ButtonButton("");
    rule2.addEventListener("click", function () {

    });
    ButtonMates.appendChild(rule2);
    dorm.appendChild(ButtonMates);

    const back = InputButton("Back");
    back.addEventListener("click", function () {
        DormFunc();
    });
    dorm.appendChild(back);
}

DocId("Dorm").addEventListener("click", function () {
    DormFunc();
    DocId("HomeStart").style.display = 'none';
    DocId("TheDorm").style.display = 'block';
});

function MateDiv(e) {
    MateIndex = e;
    const RoomMate = document.createElement("div"),
        RoomMateInner = document.createElement("div"),
        StatsDiv = document.createElement("div"),
        InputCon = document.createElement("div"),
        InnerDorm = document.createElement("div"),
        dorm = DocId("TheDorm"),
        {
            FirstName,
            LastName,
            Name,
            Race,
            Height,
            Weight,
            Muscle,
            Fat
        } = e;

    while (dorm.hasChildNodes()) {
        dorm.removeChild(dorm.firstChild)
    };

    RoomMate.classList.add("DivMates");
    StatsDiv.classList.add("DivMatesInner");
    InnerDorm.classList.add("DivMatesCon");

    const PregnantStatus = () => {
        if (e.hasOwnProperty("Pregnant") ? e.Pregnant.Status : false) {
            const age = Math.round(e.Pregnant.Babies[0].BabyAge / 30);
            return age < 1 ? "<br>Impregnated" : `<br>${age} months pregnant`;
        } else {
            return ``;
        }
    }

    const DormName = `${FirstName} ${LastName}`;

    const stats = ["Str", "Charm", "End", "Int", "SexSkill", "Will"].forEach((src) => {
        StatsDiv.innerHTML += `<br>${src}: ${e[src]}`;
    });
    RoomMateInner.innerHTML = DormName + `<br>${Name} ${Race}<br>${Pronoun(CheckGender(e))}<br><br>Height: 
    ${CmToInch(Height)}<br>Weight: ${KgToPound(Weight)}<br>Muscle: ${KgToPound(Muscle)}<br>Fat: 
    ${KgToPound(Fat)}<br>${PregnantStatus()}<br><br>${AllSexualOrgans(e)}`;
    RoomMateInner.appendChild(StatsDiv);
    RoomMate.appendChild(RoomMateInner);
    InnerDorm.appendChild(RoomMate);

    const Fuck = InputButton("Fuck");
    Fuck.addEventListener("click", function () {
        const None = ["Home", "status", "EmptyButtons", "EventLog"].forEach((src) => {
            DocId(src).style.display = 'none';
        });
        DocId("FuckDorm").style.display = 'grid';
        DormSex(e);
    });
    InputCon.appendChild(Fuck);

    const LeaveRoom = InputButton("Leave room");
    LeaveRoom.addEventListener("click", function () {
        DormFunc();
    });
    InputCon.appendChild(LeaveRoom);

    const DormChildren = InputButton("DormChildren");

    const Rename = InputButton("Rename");
    Rename.addEventListener("click", function () {
        DormRename();
    });
    InputCon.appendChild(Rename);

    const KickOut = InputButton("KickOut");
    KickOut.addEventListener("click", function () {
        DormKickOut();
    });
    InputCon.appendChild(KickOut);
    InnerDorm.appendChild(InputCon);
    dorm.appendChild(InnerDorm);

    function DormRename() {
        while (dorm.hasChildNodes()) {
            dorm.removeChild(dorm.firstChild)
        };
        const InnerRenameDorm = document.createElement("div"),
            Firstlabel = document.createElement("label"),
            Firstinput = document.createElement("input"),
            Lastlabel = document.createElement("label"),
            Lastinput = document.createElement("input"),
            Accept = InputButton("Accept");

        Firstinput.setAttribute("id", "ajog94");
        Firstinput.setAttribute("type", "text");
        Firstlabel.innerHTML = "First name"
        Firstlabel.htmlFor = "ajog94";

        Lastinput.setAttribute("id", "asegk3");
        Lastinput.setAttribute("type", "text");
        Lastlabel.innerHTML = "Last name"
        Lastlabel.htmlFor = "asegk3";

        InnerRenameDorm.appendChild(Firstlabel);
        InnerRenameDorm.appendChild(Firstinput);
        InnerRenameDorm.appendChild(Lastlabel);
        InnerRenameDorm.appendChild(Lastinput);

        if (e.hasOwnProperty("FirstName")) {
            Firstinput.value = e.FirstName;
        };
        if (e.hasOwnProperty("LastName")) {
            Lastinput.value = e.LastName;
        };

        Accept.addEventListener("click", function () {
            e.FirstName = Firstinput.value;
            e.LastName = Lastinput.value;
            MateDiv(e);
        });
        InnerRenameDorm.appendChild(Accept);
        dorm.appendChild(InnerRenameDorm);
    };

    function DormKickOut() {
        while (dorm.hasChildNodes()) {
            dorm.removeChild(dorm.firstChild)
        };

        const index = House.Dormmates.findIndex(i => i === e),
            who = House.Dormmates[index];
        DocId("HomeText").innerHTML = `Are you sure you want to kick out ${who.FirstName} ${who.LastName}?`;

        const kickoutdiv = document.createElement("div"),
            Yes = InputButton("Yes"),
            No = InputButton("No");
        Yes.addEventListener("click", function () {
            House.Dormmates.splice(index, 1);
            DormFunc();
        });
        No.addEventListener("click", function () {
            MateDiv(e);
        })
        kickoutdiv.appendChild(Yes);
        kickoutdiv.appendChild(No);
        dorm.appendChild(kickoutdiv);
    }
};

function DormSex(e) {
    EssenceCheck(e);
    if (Settings.EssenceAuto) {
        EssenceCheck(player);
    }
    DocId("DormPName").innerHTML = `${player.Name} ${player.LastName}`;
    DocId("DormEName").innerHTML = `${e.Name}<br>${e.Race} ${Pronoun(CheckGender(e))}`;
    DocId("DormMascu").innerHTML = Math.round(player.Masc);
    DocId("DormFemin").innerHTML = Math.round(player.Femi);
    DocId("DormEMascu").innerHTML = Math.round(e.Masc);
    DocId("DormEFemin").innerHTML = Math.round(e.Femi);
    DocId("DormPlayerLooks").innerHTML = AllSexualOrgans(player);
    DocId("DormEnemyLooks").innerHTML = AllSexualOrgans(e);
    SexColor(player, "PlayerDorm");
    SexColor(e, "EnemyDorm");

    if (player.Pregnant.Status) {
        DocId("GetImpregnated").style.display = 'none';
        const age = Math.round(player.Pregnant.Babies[0].BabyAge / 30);
        DocId("DormPlayerLooks").innerHTML += (age < 1) ?
            "<br>Impregnated" : `<br>${age} months pregnant`;
    } else {
        DocId("GetImpregnated").style.display = e.Balls.length > 0 ? "inline-block" : "none";
    }
    DocId("Impregnate").style.display = 'none';
    if (e.hasOwnProperty("Pregnant")) {
        if (e.Pregnant.Status) {
            const age = Math.round(e.Pregnant.Babies[0].BabyAge / 30);
            DocId("DormEnemyLooks").innerHTML += (age < 1) ?
                `<br>Impregnated` : `<br>${age} months pregnant`;
        } else if ((player.Balls.length > 0 && player.Dicks.length > 0)) {
            DocId("Impregnate").style.display = 'inline-block';
        }
    } else if (player.Balls.length > 0 && player.Dicks.length > 0) {
        DocId("Impregnate").style.display = 'inline-block';
    }

    const DelatMed =
        (player.Masc >= e.Masc && player.Masc >= e.Femi && player.Masc >= player.Femi) ? 100 / player.Masc :
        (player.Femi >= e.Masc && player.Femi >= e.Femi && player.Femi >= player.Masc) ? 100 / player.Femi :
        (e.Masc >= player.Masc && e.Masc >= e.Femi && e.Masc >= player.Femi) ? 100 / e.Masc : 100 / e.Femi;
    const EW = (ess) => {
        return `${ess * DelatMed}%`
    }
    DocId("DormMascu").style.width = EW(player.Masc);
    DocId("DormFemin").style.width = EW(player.Femi);
    DocId("DormEMascu").style.width = EW(e.Masc);
    DocId("DormEFemin").style.width = EW(e.Femi);
    return;
};
DocId("LeaveDormSex").addEventListener("click", function () {
    DocId("Home").style.display = 'block';
    DocId("FuckDorm").style.display = 'none';
    DocId("status").style.display = 'block';
    DocId("EmptyButtons").style.display = 'block';
    DocId("DormSexText").innerHTML = ``
    Setup = true;
});