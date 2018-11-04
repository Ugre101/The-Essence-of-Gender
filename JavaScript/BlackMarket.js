    // Black market code
    document.getElementById("SellLimbs").addEventListener("click", function () {
        document.getElementById("LimbSale").style.display = 'block';
        document.getElementById("SellLimbs").style.display = 'none';
        LimbSale();
    });

    function LimbSale() {
        var SellDicks = [];
        for (var e = 0; e < player.Dicks.length; e++) {
            var temp = "<button onclick=\"SellDicks(" + e + "); LimbSale()\">Dick: " + (e + 1) + ", " + player.Dicks[e].Size + "cm</button>";
            SellDicks += temp;
        }
        document.getElementById("SellDicks").innerHTML = SellDicks;
        var SellDickSize = [];
        for (var e = 0; e < player.Dicks.length; e++) {
            var temp = "<button onclick=\"SellDickSize(" + e + "); LimbSale()\">Dick: " + (e + 1) + ", " + player.Dicks[e].Size + "cm</button>";
            SellDickSize += temp;
        }
        document.getElementById("SellDickSize").innerHTML = SellDickSize;

        var SellBalls = [];
        for (var e = 0; e < player.Balls.length; e++) {
            var temp = "<button onclick=\"SellBalls(" + e + "); LimbSale()\">Ball: " + (e + 1) + ", " + player.Balls[e].Size + "cm</button>";
            SellBalls += temp;
        }
        document.getElementById("SellBalls").innerHTML = SellBalls;
        var SellBallSize = [];
        for (var e = 0; e < player.Balls.length; e++) {
            var temp = "<button onclick=\"SellBallSize(" + e + "); LimbSale()\">Ball: " + (e + 1) + ", " + player.Balls[e].Size + "cm</button>";
            SellBallSize += temp;
        }
        document.getElementById("SellBallSize").innerHTML = SellBallSize;

        var SellBreasts = [];
        for (var e = 1; e < player.Boobies.length; e++) {
            var temp = "<button onclick=\"SellBreasts(" + e + "); LimbSale()\">Boobs: " + (e + 1) + ", " + player.Boobies[e].Size + "cm</button>";
            SellBreasts += temp;
        }
        document.getElementById("SellBreasts").innerHTML = SellBreasts;
        var SellBreastSize = [];
        for (var e = 0; e < player.Boobies.length; e++) {
            var temp = "<button onclick=\"SellBreastSize(" + e + "); LimbSale()\">Boobs: " + (e + 1) + ", " + player.Boobies[e].Size + "cm</button>";
            SellBreastSize += temp;
        }
        document.getElementById("SellBreastSize").innerHTML = SellBreastSize;

        var SellVaginas = [];
        for (var e = 0; e < player.Pussies.length; e++) {
            var temp = "<button onclick=\"SellVaginas(" + e + "); LimbSale()\">Pussy: " + (e + 1) + ", " + player.Pussies[e].Size + "cm</button>";
            SellVaginas += temp;
        }
        document.getElementById("SellVaginas").innerHTML = SellVaginas;
        var SellVaignaSize = [];
        for (var e = 0; e < player.Pussies.length; e++) {
            var temp = "<button onclick=\"SellVaignaSize(" + e + "); LimbSale()\">Pussy: " + (e + 1) + ", " + player.Pussies[e].Size + "cm</button>";
            SellVaignaSize += temp;
        }
        document.getElementById("SellVaignaSize").innerHTML = SellVaignaSize;
    }

    function SellDicks(e) {
        player.Gold += player.Dicks[e].Size * 30;
        player.Dicks.splice(e, 1);
    }

    function SellDickSize(e) {
        player.Gold += 25;
        player.Dicks[e].Size--;
    }

    function SellBalls(e) {
        player.Gold += player.Balls[e].Size * 30;
        player.Balls.splice(e, 1);
    }

    function SellBallSize(e) {
        player.Gold += 25;
        player.Balls[e].Size--;
    }

    function SellBreasts(e) {
        player.Gold += player.Boobies[e].Size * 30;
        player.Boobies.splice(e, 1);
    }

    function SellBreastSize(e) {
        player.Gold += 25;
        player.Boobies[e].Size--;
    }

    function SellVaginas(e) {
        player.Gold += player.Pussies[e].Size * 30;
        player.Pussies.splice(e, 1);
    }

    function SellVaignaSize(e) {
        player.Gold += 25;
        player.Pussies[e].Size--;
    }
    document.getElementById("SellFemininity").addEventListener("click", function () {
        if (player.Femi >= 50) {
            player.Femi -= 50;
            player.Gold += 100;
        }
    });
    document.getElementById("SellMasculinity").addEventListener("click", function () {
        if (player.Masc >= 50) {
            player.Masc -= 50;
            player.Gold += 50;
        }
    });
    document.getElementById("BlackMarketWhy").addEventListener("mouseover", function (e) {
        document.getElementById("BlackMarketText").innerHTML = e.target.title;
    });
	
	var clearText = ["SellLimbs","LimbSale","SellDicks","SellDickSize","SellBalls","SellBallSize","SellBreasts","SellBreastSize","SellVaginas","SellVaignaSize","SellFemininity","SellMasculinity"];
	
	for (var q = 0; q < clearText.length; q++)
	{
		document.getElementById(clearText[q]).addEventListener("mouseover", function () {
			document.getElementById("BlackMarketText").innerHTML = "";
		}
	);}
			
	
    document.getElementById("BlackMarketWhy").addEventListener("click", function () {
        document.getElementById("BlackMarketText").innerHTML = "Yeah we are only buying essence here, you see we have a contract with guys in the capital where we can sell for a lot more to nobles.  Nobles you might ask aren’t they the ones who preach about how you should only have as much essence you can conquer!" +
            " The thing is though while they say trading essence are forbidden and for the weak, the rich don’t follow the rules they only pretend to in order to maintain their image. ";
    });
    document.getElementById("LeaveBlackMarket").addEventListener("click", function () {
        document.getElementById("LimbSale").style.display = 'none';
        document.getElementById("SellLimbs").style.display = 'inline-block';
    });
    // End Black market