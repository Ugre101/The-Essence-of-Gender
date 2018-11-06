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
        document.getElementById("HomeText").innerHTML = "You sleep well, restoring your health and willpower.";
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
    document.getElementById("Upgrades").addEventListener("mouseover", function (e) {
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
    document.getElementById("LeaveUpgradeHome").addEventListener("click", function () {
        document.getElementById("Upgrades").style.display = 'none';
        document.getElementById("HomeStart").style.display = 'block';
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
            } else if (Chosen == "Lumindera") {
                return;
                player.Area = "Lumindera";
                player.Map = "nice";
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