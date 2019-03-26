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
            (e.hasOwnProperty("LastName") ? e.FirstName + " " + e.LastName : e.FirstName) :
            (e.hasOwnProperty("LastName") ? e.LastName : "");
        dormmate.style.backgroundColor = Color(e);
        dormmate.innerHTML = `${DormName}<br>${e.Name} ${e.Race}`;
        dormmate.addEventListener("click", function () {
            MateDiv(e);
        });
        ButtonMates.appendChild(dormmate);
    }
    dorm.appendChild(ButtonMates);

    if (House.Dormmates.length > 0 && player.Balls.length > 0) {
        const ImpregOrgy = InputButton("Impregnate servants",
            "Spend the day fucking you servants, until your balls are completely emptied.")
        dorm.appendChild(ImpregOrgy);
    }
    const GetImpregOrgy = InputButton("Get impregnated",
        "Spend the day getting fucked by your virile servants, till all of their balls content have been emptied into your orifices.")
    dorm.appendChild(GetImpregOrgy);

    const LeaveDorm = InputButton("Leave dorm");
    LeaveDorm.addEventListener("click", function () {
        DocId("HomeStart").style.display = 'block';
        DocId("TheDorm").style.display = 'none';
    });
    dorm.appendChild(LeaveDorm);
}

DocId("Dorm").addEventListener("click", function () {
    DormFunc();
    DocId("HomeStart").style.display = 'none';
    DocId("TheDorm").style.display = 'block';
});

function MateDiv(e) {
    // MateIndex = e;
    const rm = e,
        RoomMate = document.createElement("div"),
        RoomMateInner = document.createElement("div"),
        StatsDiv = document.createElement("div"),
        InputCon = document.createElement("div"),
        InnerDorm = document.createElement("div"),
        dorm = DocId("TheDorm");

    while (dorm.hasChildNodes()) {
        dorm.removeChild(dorm.firstChild)
    };

    RoomMate.classList.add("DivMates");
    StatsDiv.classList.add("DivMatesInner");
    InnerDorm.classList.add("DivMatesCon");

    let PregnantStatus = "";
    if (rm.hasOwnProperty("Pregnant")) {
        if (rm.Pregnant.Status) {
            const age = Math.round(rm.Pregnant.Babies[0].BabyAge / 30);
            PregnantStatus = (age < 1) ? "<br>Impregnated" : "<br>" + age + " months pregnant";
        }
    }

    const DormName = rm.FirstName + " " + rm.LastName;;

    const stats = ["Str", "Charm", "End", "Int", "SexSkill", "Will"].forEach((src) => {
        StatsDiv.innerHTML += `<br>${src}: ${rm[src]}`;
    });
    RoomMateInner.innerHTML = DormName + "<br>" + rm.Name + " " + rm.Race + "<br>" + Pronoun(CheckGender(rm)) +
        "<br><br>Height: " + CmToInch(Math.round(rm.Height)) + "<br>Weight: " + KgToPound(rm.Weight) + "<br>Muscle: " + KgToPound(rm.Muscle) + "<br>Fat: " + KgToPound(rm.Fat) +
        "<br>" + PregnantStatus + "<br><br>" + BoobLook(rm) + DickLook(rm) + BallLook(rm) + PussyLook(rm);
    RoomMateInner.appendChild(StatsDiv);
    RoomMate.appendChild(RoomMateInner);
    InnerDorm.appendChild(RoomMate);

    const Fuck = InputButton("Fuck");
    Fuck.addEventListener("click", function () {
        MateIndex = rm;
        DocId("Home").style.display = 'none';
        DocId("FuckDorm").style.display = 'grid';
        DocId("status").style.display = 'none';
        DocId("EmptyButtons").style.display = 'none';
        DocId("EventLog").style.display = 'none';
        DormSex(rm);
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
        Firstlabel.setAttribute("for", "ajog94");

        Lastinput.setAttribute("id", "asegk3");
        Lastinput.setAttribute("type", "text");
        Lastlabel.setAttribute("for", "asegk3");
        InnerRenameDorm.appendChild(Firstlabel);
        InnerRenameDorm.appendChild(Firstinput);
        InnerRenameDorm.appendChild(Lastlabel);
        InnerRenameDorm.appendChild(Lastinput);

        if (rm.hasOwnProperty("FirstName")) {
            Firstinput.value = rm.FirstName;
        };
        if (rm.hasOwnProperty("LastName")) {
            Lastinput.value = e.LastName;
        };

        Accept.addEventListener("click", function () {
            rm.FirstName = Firstinput.value;
            rm.LastName = Lastinput.value;
            MateDiv(rm);
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
            MateDiv(rm);
        })
        kickoutdiv.appendChild(Yes);
        kickoutdiv.appendChild(No);
        dorm.appendChild(kickoutdiv);
    }
};

function DormSex(rm) {
    const e = rm;
    EssenceCheck(e);
    if (Settings.EssenceAuto) {
        EssenceCheck(player);
    }
    DocId("DormPName").innerHTML = player.Name + " " + player.LastName;
    DocId("DormEName").innerHTML = e.Name + "<br>" + e.Race + " " + Pronoun(CheckGender(e));
    DocId("DormMascu").innerHTML = Math.round(player.Masc);
    DocId("DormFemin").innerHTML = Math.round(player.Femi);
    DocId("DormEMascu").innerHTML = Math.round(e.Masc);
    DocId("DormEFemin").innerHTML = Math.round(e.Femi);
    DocId("DormPlayerLooks").innerHTML = BoobLook(player) + DickLook(player) + BallLook(player) + PussyLook(player);
    DocId("DormEnemyLooks").innerHTML = BoobLook(e) + DickLook(e) + BallLook(e) + PussyLook(e);
    SexColor(player, "PlayerDorm");
    SexColor(e, "EnemyDorm");
    if (e.Pregnant.Status || player.Balls.length == 0) {
        DocId("Impregnate").style.display = 'none';
    } else {
        DocId("Impregnate").style.display = 'inline-block';
    }
    if (player.Pregnant.Status) {
        DocId("GetImpregnated").style.display = 'none';
        const age = Math.round(player.Pregnant.Babies[0].BabyAge / 30);
        DocId("DormPlayerLooks").innerHTML += (age < 1) ?
            "<br>Impregnated" : "<br>" + age + " months pregnant";
    } else {
        if (e.Balls.length < 1) {
            DocId("GetImpregnated").style.display = 'none';
        } else {
            DocId("GetImpregnated").style.display = 'inline-block';
        }
    }

    if (e.hasOwnProperty("Pregnant")) {
        if (e.Pregnant.Status) {
            const age = Math.round(e.Pregnant.Babies[0].BabyAge / 30);
            DocId("DormEnemyLooks").innerHTML += (age < 1) ?
                "<br>Impregnated" : "<br>" + age + " months pregnant";
        }
    }
    const DelatMed =
        (player.Masc >= e.Masc && player.Masc >= e.Femi && player.Masc >= player.Femi) ? 100 / player.Masc :
        (player.Femi >= e.Masc && player.Femi >= e.Femi && player.Femi >= player.Masc) ? 100 / player.Femi :
        (e.Masc >= player.Masc && e.Masc >= e.Femi && e.Masc >= player.Femi) ? 100 / e.Masc : 100 / e.Femi;

    DocId("DormMascu").style.width = player.Masc * DelatMed + "%";
    DocId("DormFemin").style.width = player.Femi * DelatMed + "%";
    DocId("DormEMascu").style.width = e.Masc * DelatMed + "%";
    DocId("DormEFemin").style.width = e.Femi * DelatMed + "%";
    return;
};
DocId("DormDrainMasc").addEventListener("click", function () {
    const e = MateIndex,
        Ess = Math.min(e.Masc, player.EssenceDrain);

    player.Masc += Ess;
    e.Masc -= Ess;
    EssenceCheck(e);
    if (Settings.EssenceAuto) {
        EssenceCheck(player);
    }
    DormSex(e);
    DocId("DormSexText").innerHTML = "Siphon masc";
});
DocId("DormDrainFemi").addEventListener("click", function () {
    const e = MateIndex,
        Ess = Math.min(e.Femi, player.EssenceDrain);
    player.Femi += Ess;
    e.Femi -= Ess;
    EssenceCheck(e);
    if (Settings.EssenceAuto) {
        EssenceCheck(player);
    }
    DormSex(e);
    DocId("DormSexText").innerHTML = "Siphon femi";
    return;
});
DocId("DormInjMasc").addEventListener("click", function () {
    const e = MateIndex;
    if (player.Masc > 0) {
        e.Masc += Math.min(100, player.Masc);
        player.Masc -= Math.min(100, player.Masc);
        EssenceCheck(e);
        if (Settings.EssenceAuto) {
            EssenceCheck(player);
        }
        DormSex(e);
        DocId("DormSexText").innerHTML = "Inject masc";
        return;
    }
});
DocId("DormInjFemi").addEventListener("click", function () {
    const e = MateIndex;
    if (player.Femi > 0) {
        e.Femi += Math.min(100, player.Femi);
        player.Femi -= Math.min(100, player.Femi);
        EssenceCheck(e);
        if (Settings.EssenceAuto) {
            EssenceCheck(player);
        }
        DormSex(e);
        DocId("DormSexText").innerHTML = "Inject femi";
        return;
    }
});
DocId("Impregnate").addEventListener("click", function () {
    DocId("DormSexText").innerHTML = "You fuck your servant hoping to impregnate them, but you fail."
    var e = House.Dormmates[MateIndex];
    if (e.Pussies.length > 0) {
        var pussypicker = RandomInt(0, e.Pussies.length - 1)
        if (e.Pussies[pussypicker].Virgin) {
            e.Pussies[pussypicker].Virgin = false;
        }
    }
    if (e.hasOwnProperty("Pregnant")) {
        if (e.Pregnant.Status) {
            DocId("DormSexText").innerHTML = "You have already impregnated her!"
            DormSex(e);
            return;
        }
    } else {
        e.Pregnant = {};
        e.Pregnant.Status = false;
        e.Pregnant.Baby = 0;
    }
    for (var b = 0; b < player.Balls.length; b++) {
        if (player.Balls[b].Cum > 50) {
            Impregnate(e, player, "A", "Dorm");
            player.Balls[b].Cum -= 50;
        } else {
            DocId("DormSexText").innerHTML = "You try but there is to little cum in your balls."
        }

    }
    DormSex(e);
});
var Setup = true;
DocId("GetImpregnated").addEventListener("click", function () {
    const e = MateIndex;
    if (Setup) {
        DocId("DormSexText").innerHTML = `Desiring to get pregnant you call ${e.FirstName} ${e.LastName} a 
        servant whom you feel are worthy fathering you child. Firmly pushing them down on the bed you 
        get on top them straddling their face grinding your pussy against their mouth, once you feel ready 
        you shift focus to their groin removing their clothes and free their ${CmToInch(e.Dicks[0].Size)} 
        ${e.Dicks[0].Type} dick. Positions your pussy on top of their glans letting it slowly enter, 
        once accustomed speeding up.`
    } else {
        DocId("DormSexText").innerHTML = `Not giving up you continue riding them.`;
    }
    if (player.Pregnant.Status) {
        DocId("DormSexText").innerHTML = "You are already pregnant.";
        DormSex(e);
        return;
    } else if (e.Balls.length > 0) {
        Setup = false;
        for (var b = 0; b < e.Balls.length; b++) {
            if (e.Balls[b].Cum >= 10) {
                Impregnate(player, e, "B", "Dorm");
                e.Balls[b].Cum -= 10;
                if (!player.Pregnant.Status) {
                    DocId("DormSexText").innerHTML += "<br><br>They failed to impregnate you";
                }
                break;
            } else {
                DocId("DormSexText").innerHTML += "<br><br>Their balls are dry, you have to let them recover.(10ml needed  )";
            }
        }
    }
    var pussypicker = RandomInt(0, player.Pussies.length - 1)
    if (player.Pussies[pussypicker].Virgin) {
        player.Pussies[pussypicker].Virgin = false;
    }
    DormSex(e);
});
DocId("LeaveDormSex").addEventListener("click", function () {
    DocId("Home").style.display = 'block';
    DocId("FuckDorm").style.display = 'none';
    DocId("status").style.display = 'block';
    DocId("EmptyButtons").style.display = 'block';
    DocId("DormSexText").innerHTML = " "
    MateDiv(MateIndex);
    Setup = true;
});