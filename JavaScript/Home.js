    // Home
    document.getElementById("Sleep").addEventListener("click", function () {
        if (player.Health < player.MaxHealth + House.BedLevel * 5) {
            player.Health = player.MaxHealth + House.BedLevel * 5;
        }
        if (player.WillHealth < player.MaxWillHealth + House.BedLevel * 5) {
            player.WillHealth = player.MaxWillHealth + House.BedLevel * 5;
        }
        Flags.Date.Day++;
        document.getElementById("CurrentDate").innerHTML = Flags.Date.Day + "/" + Flags.Date.Month + "/" + Flags.Date.Year;
        document.getElementById("HomeText").innerHTML = "You sleept.";
    });
    document.getElementById("UpgradeHome").addEventListener("click", function () {
        document.getElementById("HomeStart").style.display = 'none';
        document.getElementById("Upgrades").style.display = 'block';
        document.getElementById("HomeText").innerHTML = "";
        if (House.hasOwnProperty("Portal")) {
            document.getElementById("BuildPortal").style.display = 'none';
        }
        var BedCost = Math.round(50 * Math.pow(1.2, House.BedLevel));
        document.getElementById("UpgradeBed").value = "Upgrade bedroom " + BedCost + "g";
        var DormCost = Math.round(250 * Math.pow(1.2, House.Dorm));
        document.getElementById("BuildDorm").value = "Build dorm " + DormCost + "g";
        var Gymcost = Math.round(200 * Math.pow(1.2, House.Gym));
        document.getElementById("BuildGym").value = "Build gym " + Gymcost + "g";
        var Kitchencost = Math.round(200 * Math.pow(1.2, House.Kitchen));
        document.getElementById("BuildKitchen").value = "Build kitchen " + Kitchencost + "g";
        var Brothelcost = Math.round(500 * Math.pow(1.2, House.Brothel));
        document.getElementById("BuildBrothel").value = "Build brothel " + Brothelcost + "g";
    });
    document.getElementById("UpgradeBed").addEventListener("click", function () {
        var BedCost = Math.round(50 * Math.pow(1.2, House.BedLevel));
        if (player.Gold > BedCost) {
            House.BedLevel++;
            player.Gold -= BedCost;
            var BedCost = Math.round(50 * Math.pow(1.2, House.BedLevel));
            if (House.BedLevel < 5) {
                document.getElementById("HomeText").innerHTML = "You have built a bedroom. The bedroom will allow you to wake up with extra health and will."
            } else {
                document.getElementById("HomeText").innerHTML = "You upgrade your bedroom.";
            }
        } else {
            document.getElementById("HomeText").innerHTML = "You can't afford to upgrade your bedroom.";
        }
        document.getElementById("UpgradeBed").value = "Upgrade bedroom " + BedCost + "g";
    });
    document.getElementById("UpgradeBed").addEventListener("mouseover", function (e) {
        document.getElementById("HomeText").innerHTML = e.target.title;
    });
    document.getElementById("BuildDorm").addEventListener("click", function () {
        var DormCost = Math.round(250 * Math.pow(1.2, House.Dorm));
        if (player.Gold > DormCost) {
            House.Dorm++;
            player.Gold -= DormCost;
            if (House.Dorm < 2) {
                document.getElementById("Dorm").style.display = "inline-block";
                document.getElementById("HomeText").innerHTML = "Hiring construction workers you give orders to build a dorm to house servants. <br><br>" +
                    "Wow that's fast looking outside you see the newly built dorm. You can now take home opponent you have made orgasm five times."

            } else {
                document.getElementById("HomeText").innerHTML = "You expand your dorm to house three more servants.(" + House.Dorm * 3 + ")";
            }
        }
        var DormCost = Math.round(250 * Math.pow(1.2, House.Dorm));
        document.getElementById("BuildDorm").value = "Build dorm " + DormCost + "g";
    });

    document.getElementById("BuildDorm").addEventListener("mouseover", function (e) {
        document.getElementById("HomeText").innerHTML = e.target.title;
    });

    document.getElementById("BuildGym").addEventListener("click", function () {
        var Gymcost = Math.round(200 * Math.pow(1.2, House.Gym));
        if (player.Gold > Gymcost) {
            if (House.Gym < 1) {
                document.getElementById("HomeText").innerHTML = "You built a gym for your servants, they can now go there in order to burn fat and build muscle.";
            } else {
                document.getElementById("HomeText").innerHTML = "You upgrade your gym so your servants can gain more muscle."
            }
            House.Gym++;
            player.Gold -= Gymcost;
            Gymcost = Math.round(200 * Math.pow(1.2, House.Gym));
            document.getElementById("BuildGym").value = "Build gym " + Gymcost + "g";
        }
    });
    document.getElementById("BuildGym").addEventListener("mouseover", function (e) {
        document.getElementById("HomeText").innerHTML = e.target.title;
    });
    document.getElementById("BuildKitchen").addEventListener("click", function () {
        var Kitchencost = Math.round(200 * Math.pow(1.2, House.Kitchen));
        if (player.Gold > Kitchencost) {
            if (House.Kitchen < 1) {
                document.getElementById("HomeText").innerHTML = "You have built a kitchen where your servant can go and eat. Be aware that if you don't build a gym they will get fat, unless that's what you are into to."
            } else {
                document.getElementById("HomeText").innerHTML = "You upgrade your kitchen servants can now gain more fat.";
            }
            House.Kitchen++;
            player.Gold -= Kitchencost;
        }
        var Kitchencost = Math.round(200 * Math.pow(1.2, House.Kitchen));
        document.getElementById("BuildKitchen").value = "Build kitchen " + Kitchencost + "g";
    });
    document.getElementById("BuildKitchen").addEventListener("mouseover", function (e) {
        document.getElementById("HomeText").innerHTML = e.target.title;
    });
    document.getElementById("BuildPortal").addEventListener("click", function () {
        if (player.Gold > 1000 && !House.hasOwnProperty("Portal")) {
            player.Gold -= 1000;
            House.Portal = true;
            document.getElementById("HomeText").innerHTML = "Congratulations you now own a personal portal, a true sign of wealth for peasants to envy!"
            document.getElementById("BuildPortal").style.display = 'none';
            document.getElementById("Portal").style.display = 'inline-block';
        } else {
            document.getElementById("HomeText").innerHTML = "You are to poor to buy a portal you peasant!"
        }
    });
    document.getElementById("BuildPortal").addEventListener("mouseover", function (e) {
        document.getElementById("HomeText").innerHTML = e.target.title;
    });
    document.getElementById("BuildBrothel").addEventListener("click", function () {
        var Brothelcost = Math.round(500 * Math.pow(1.2, House.Brothel))
        if (player.Gold > Brothelcost) {
            player.Gold -= Brothelcost;
            if (House.Brothel < 1) {
                document.getElementById("HomeText").innerHTML = "You have built a brothel where your servants will whore themself out, allowing you to gain extra income."
            } else {
                document.getElementById("HomeText").innerHTML = "You upgrade your brothel for extra income.";
            }
            House.Brothel++;
            document.getElementById("Brothel").style.display = 'inline-block';
        }
        Brothelcost = Math.round(500 * Math.pow(1.2, House.Brothel));
        document.getElementById("BuildBrothel").value = "Upgrade brothel " + Brothelcost + "g";
    });
    document.getElementById("BuildBrothel").addEventListener("mouseover", function (e) {
        document.getElementById("HomeText").innerHTML = e.target.title;
    });
    document.getElementById("LeaveUpgradeHome").addEventListener("click", function () {
        document.getElementById("Upgrades").style.display = 'none';
        document.getElementById("HomeStart").style.display = 'block';
    });
    document.getElementById("Dorm").addEventListener("click", function () {
        document.getElementById("HomeStart").style.display = 'none';
        document.getElementById("TheDorm").style.display = 'block';
        document.getElementById("ButtonMates").style.display = 'grid';
        document.getElementById("DivMates").style.display = 'none';
        document.getElementById("LeaveDorm").style.display = 'inline-block'
        document.getElementById("flex").style.display = 'none';
        ButtonMates();
    });

    function ButtonMates() {
        var Inputs = [];
        for (var e = 0; e < House.Dormmates.length; e++) {
            var color;
            switch (CheckGender(House.Dormmates[e])) {
                case "female":
                    color = "Pink";
                    break;
                case "male":
                    color = "Blue";
                    break;
                case "hermaphrodite":
                    color = "Purple";
                    break;
                case "doll":
                    color = "Beige";
                    break;
            }
            var DormName = "";
            if (House.Dormmates[e].hasOwnProperty("FirstName")) {
                DormName += House.Dormmates[e].FirstName;
            };
            if (House.Dormmates[e].hasOwnProperty("LastName")) {
                DormName += " " + House.Dormmates[e].LastName;
            };
            var Input = "<button type=\"button\" class=\"" + color + "\" onclick=\"MateDiv(" + e + ")\">" + DormName + "<br>" +
                House.Dormmates[e].Name + " " + House.Dormmates[e].Race + "</button  >"
            Inputs += Input;
        }
        document.getElementById("ButtonMates").innerHTML = Inputs;
    }

    var MateIndex;

    function MateDiv(e) {
        MateIndex = e;
        var rm = House.Dormmates[e];
        document.getElementById("ButtonMates").style.display = 'none';
        document.getElementById("DivMates").style.display = 'flex';
        document.getElementById("flex").style.display = 'grid';
        var RoomMate = "<div id=\"" + e + "\"></div>"
        document.getElementById("DivMates").innerHTML = RoomMate;
        var PregnantStatus = "";
        if (rm.hasOwnProperty("Pregnant")) {
            if (rm.Pregnant.Status) {
                var age = Math.round(rm.Pregnant.Baby / 10000);
                if (age < 1) {
                    PregnantStatus = "<br>Impregnated";
                } else {
                    PregnantStatus = "<br>" + age + " months pregnant";
                }
            }
        }
        var DormName = "";
        if (rm.hasOwnProperty("FirstName")) {
            DormName += rm.FirstName;
        };
        if (rm.hasOwnProperty("LastName")) {
            DormName += " " + rm.LastName;
        };
        document.getElementById(e).innerHTML = "<div>" + DormName + "<br>" + rm.Name + " " + rm.Race + "<br>" + Pronun(CheckGender(rm)) +
            "<br><br>Height: " + Math.round(rm.Height) + "cm<br>Weight: " + Math.round(rm.Weight) + "kg<br>Muscle: " + Math.round(rm.Muscle) + "kg<br>Fat: " + Math.round(rm.Fat) +
            "kg<br>" + PregnantStatus + "<br><br>" + BoobLook(rm) + DickLook(rm) + PussyLook(rm) + "</div>" + "<div> Strength: " + rm.Str +
            "<br>Charm: " + rm.Charm + "<br>Endurance: " + rm.End + "<br>Int: " + rm.Int + "<br>Sexskill: " + rm.SexSkill +
            "<br> Willpower: " + rm.Willpower + "</div>"
        document.getElementById(e).style.display = 'block'
        document.getElementById("LeaveRoom").style.display = 'block';
        document.getElementById("LeaveDorm").style.display = 'none';
        document.getElementById("KickOut").style.display = 'block';
        document.getElementById("Fuck").style.display = 'block';
        document.getElementById("Rename").style.display = 'block';
    }
    document.getElementById("KickYes").addEventListener("click", function () {
        document.getElementById("flex").style.display = 'grid';
        document.getElementById("KickYesNo").style.display = 'none';
        document.getElementById("HomeStart").style.display = 'block';
        document.getElementById("TheDorm").style.display = 'none';
        House.Dormmates.splice(MateIndex, 1);
        return;
    });
    document.getElementById("KickNo").addEventListener("click", function () {
        document.getElementById("flex").style.display = 'grid';
        document.getElementById("KickYesNo").style.display = 'none';
    });
    document.getElementById("Fuck").addEventListener("click", function () {
        document.getElementById("Home").style.display = 'none';
        document.getElementById("FuckDorm").style.display = 'grid';
        document.getElementById("status").style.display = 'none';
        document.getElementById("EmptyButtons").style.display = 'none';
        document.getElementById("EventLog").style.display = 'none';
        DormSex();
    });
    document.getElementById("Rename").addEventListener("click", function () {
        var e = House.Dormmates[MateIndex];
        if (e.hasOwnProperty("FirstName")) {
            document.getElementById("DormFirstName").value = e.FirstName;
        }
        if (e.hasOwnProperty("LastName")) {
            document.getElementById("DormLastName").value = e.LastName
        }
        document.getElementById("DormNameChangeForm").style.display = 'block';
        document.getElementById(MateIndex).style.display = 'none';
        document.getElementById("flex").style.display = 'none';
    });
    document.getElementById("AcceptDormName").addEventListener("click", function () {
        var e = House.Dormmates[MateIndex];
        e.FirstName = document.getElementById("DormFirstName").value;
        e.LastName = document.getElementById("DormLastName").value;
        document.getElementById("DormNameChangeForm").style.display = 'none';
        MateDiv(MateIndex);
    });

    function DormSex() {
        var e = House.Dormmates[MateIndex];
        document.getElementById("DormPName").innerHTML = player.Name + " " + player.Lastname;
        document.getElementById("DormEName").innerHTML = e.Name + "<br>" + e.Race + " " + Pronun(CheckGender(e));
        document.getElementById("DormMascu").innerHTML = player.Masc;
        document.getElementById("DormFemin").innerHTML = player.Femi;
        document.getElementById("DormEMascu").innerHTML = Math.round(e.Masc);
        document.getElementById("DormEFemin").innerHTML = Math.round(e.Femi);
        document.getElementById("DormPlayerLooks").innerHTML = BoobLook(player) + DickLook(player) + PussyLook(player);
        document.getElementById("DormEnemyLooks").innerHTML = BoobLook(e) + DickLook(e) + PussyLook(e);
        if (e.Pregnant.Status || player.Dicks.length == 0) {
            document.getElementById("Impregnate").style.display = 'none';
            console.log(e.Pregnant)
            console.log(player.Dicks.length == 0)
        } else {
            document.getElementById("Impregnate").style.display = 'inline-block';
        }

        if (e.hasOwnProperty("Pregnant")) {
            if (e.Pregnant.Status) {
                var age = Math.round(e.Pregnant.Baby / 10000);
                if (age < 1) {
                    document.getElementById("DormEnemyLooks").innerHTML += "<br>Impregnated";
                } else {
                    document.getElementById("DormEnemyLooks").innerHTML += "<br>" + age + " months pregnant";
                }
            }
        }
        var DelatMed = 2;
        if (player.Masc >= e.Masc && player.Masc >= e.Femi && player.Masc >= player.Femi) {
            DelatMed = 100 / player.Masc;
        } else if (player.Femi >= e.Masc && player.Femi >= e.Femi && player.Femi >= player.Masc) {
            DelatMed = 100 / player.Femi;
        } else if (e.Masc >= player.Masc && e.Masc >= e.Femi && e.Masc >= player.Femi) {
            DelatMed = 100 / e.Masc;
        } else {
            DelatMed = 100 / e.Femi;
        }

        document.getElementById("DormMascu").style.width = player.Masc * DelatMed + "%";
        document.getElementById("DormFemin").style.width = player.Femi * DelatMed + "%";
        document.getElementById("DormEMascu").style.width = e.Masc * DelatMed + "%";
        document.getElementById("DormEFemin").style.width = e.Femi * DelatMed + "%";
        return;
    };
    document.getElementById("DormDrainMasc").addEventListener("click", function () {
        var e = House.Dormmates[MateIndex];
        if (player.EssenceDrain >= e.Masc && e.Masc > 0) {
            player.Masc += e.Masc;
            e.Masc = 0;
            EssenceCheck(e);
            if (Settings.EssenceAuto) {
                EssenceCheck(player);
            }
            DormSex();
            document.getElementById("DormSexText").innerHTML = "Siphon masc";
            return;
        } else if (player.EssenceDrain < e.Masc) {
            player.Masc += player.EssenceDrain;
            e.Masc -= player.EssenceDrain;
            EssenceCheck(e);
            if (Settings.EssenceAuto) {
                EssenceCheck(player);
            }
            DormSex();
            document.getElementById("DormSexText").innerHTML = "Siphon masc";
            return;
        } else {
            return;
        }
    });
    document.getElementById("DormDrainFemi").addEventListener("click", function () {
        var e = House.Dormmates[MateIndex];
        if (player.EssenceDrain >= e.Femi && e.Femi > 0) {
            player.Femi += e.Femi;
            e.Femi = 0;
            EssenceCheck(e);
            if (Settings.EssenceAuto) {
                EssenceCheck(player);
            }
            DormSex();
            document.getElementById("DormSexText").innerHTML = "Siphon femi";
            return;
        } else if (player.EssenceDrain < e.Femi) {
            player.Femi += player.EssenceDrain;
            e.Femi -= player.EssenceDrain;
            EssenceCheck(e);
            if (Settings.EssenceAuto) {
                EssenceCheck(player);
            }
            DormSex();
            document.getElementById("DormSexText").innerHTML = "Siphon femi";
            return;
        } else {
            return;
        }
    });
    document.getElementById("DormInjMasc").addEventListener("click", function () {
        var e = House.Dormmates[MateIndex];
        if (player.Masc > 0) {
            e.Masc += Math.min(100, player.Masc);
            player.Masc -= Math.min(100, player.Masc);
            EssenceCheck(e);
            if (Settings.EssenceAuto) {
                EssenceCheck(player);
            }
            DormSex();
            document.getElementById("DormSexText").innerHTML = "Inject masc";
            return;
        }
    });
    document.getElementById("DormInjFemi").addEventListener("click", function () {
        var e = House.Dormmates[MateIndex];
        if (player.Femi > 0) {
            e.Femi += Math.min(100, player.Femi);
            player.Femi -= Math.min(100, player.Femi);
            EssenceCheck(e);
            if (Settings.EssenceAuto) {
                EssenceCheck(player);
            }
            DormSex();
            document.getElementById("DormSexText").innerHTML = "Inject femi";
            return;
        }
    });
    document.getElementById("Impregnate").addEventListener("click", function () {
        document.getElementById("DormSexText").innerHTML = "You fuck your servant hoping to impregnate them, but you fail."
        var e = House.Dormmates[MateIndex];
        if (e.hasOwnProperty("Pregnant")) {
            if (e.Pregnant.Status) {
                document.getElementById("DormSexText").innerHTML = "You have already impregnated her!"
                DormSex();
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
                break;
            } else {
                document.getElementById("DormSexText").innerHTML = "You try but there is to little cum in your balls."
            }

        }
        DormSex();
    });
    document.getElementById("LeaveDormSex").addEventListener("click", function () {
        document.getElementById("Home").style.display = 'block';
        document.getElementById("FuckDorm").style.display = 'none';
        document.getElementById("status").style.display = 'block';
        document.getElementById("EmptyButtons").style.display = 'block';
        document.getElementById("DormSexText").innerHTML = " "
        MateDiv(MateIndex);
    });
    document.getElementById("LeaveRoom").addEventListener("click", function () {
        document.getElementById("DivMates").style.display = 'none';
        document.getElementById("ButtonMates").style.display = 'grid';
        document.getElementById("LeaveRoom").style.display = 'none';
        document.getElementById("LeaveDorm").style.display = 'inline-block'
        document.getElementById("KickOut").style.display = 'none';
        document.getElementById("Fuck").style.display = 'none';
        document.getElementById("Rename").style.display = 'none';
        document.getElementById("DormChildren").style.display = 'none';
        ButtonMates();
        return;
    });
    document.getElementById("KickOut").addEventListener("click", function () {
        document.getElementById("flex").style.display = 'none';
        document.getElementById("KickYesNo").style.display = 'block';
    });
    document.getElementById("LeaveDorm").addEventListener("click", function () {
        document.getElementById("HomeStart").style.display = 'block';
        document.getElementById("TheDorm").style.display = 'none';
        return;
    });
    // Portal
    document.getElementById("Portal").addEventListener("click", function () {
        document.getElementById("HomeStart").style.display = 'none';
        document.getElementById("PortalMenu").style.display = 'block';
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
            if (Chosen == "TempLand") {
                player.Area = "TempLand";
                player.Map = "TempCity";
                LeaveHome();
            }
        }
    });

    document.getElementById("Brothel").addEventListener("click", function () {
        document.getElementById("TheBrothel").style.display = 'block';
        document.getElementById("HomeStart").style.display = 'none';
    });
    document.getElementById("ServeMasc").addEventListener("click", function () {
        Settings.Brothel.ServeMasc = !Settings.Brothel.ServeMasc;
        document.getElementById("ServeMasc").value = "Masculin customers? " + Settings.Brothel.ServeMasc;
    });
    document.getElementById("ServeFemi").addEventListener("click", function () {
        Settings.Brothel.ServeFemi = !Settings.Brothel.ServeFemi;
        document.getElementById("ServeFemi").value = "Feminin customers? " + Settings.Brothel.ServeFemi;
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
        battle = false;
        document.getElementById("Home").style.display = 'none';
        document.getElementById("map").style.display = 'block';
        document.getElementById("status").style.display = 'block';
        document.getElementById("EmptyButtons").style.display = 'none';
        document.getElementById("buttons").style.display = 'block';
        document.getElementById("EventLog").style.display = 'block';
    }
    // End home