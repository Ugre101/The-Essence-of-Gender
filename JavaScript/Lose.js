document.getElementById("EnemyLoseSex").addEventListener("click", function () {
	if (document.getElementById("LoseEnemyKinda").style.display === 'none') {
		document.getElementById("LoseSexStats").innerHTML = " ";
		document.getElementById("LoseEnemyKinda").style.display = 'block';
		document.getElementById("LoseEnemyExact").style.display = 'none';
		document.getElementById("LoseEnemyExact").innerHTML = "";
	} else {
		var ee = enemies[EnemyIndex];
		document.getElementById("LoseSexStats").innerHTML = "Looking at them you estimate that they are about " + CmToInch(ee.Height) + " tall and look to weigh around " + KgToPound(ee.Weight);
		document.getElementById("LoseEnemyKinda").style.display = 'none';
		document.getElementById("LoseEnemyExact").style.display = 'block';
		document.getElementById("LoseEnemyExact").innerHTML = "<p>" + ExactBoobLook(ee) + ExactPussyLook(ee) + ExactDickLook(ee) + ExactBallLook(ee) +
			"</p>";
	}
});
document.getElementById("PlayerLoseSex").addEventListener("click", function () {
	if (document.getElementById("LoseplayerKinda").style.display === 'none') {
		document.getElementById("LoseplayerKinda").style.display = 'block';
		document.getElementById("LoseplayerExact").style.display = 'none';
		document.getElementById("LoseplayerExact").innerHTML = "";
	} else {
		document.getElementById("LoseplayerKinda").style.display = 'none';
		document.getElementById("LoseplayerExact").style.display = 'block';
		document.getElementById("LoseplayerExact").innerHTML = "<p>" + ExactBoobLook(player) + ExactPussyLook(player) + ExactDickLook(player) + ExactBallLook(player) +
			"</p>";
	}
});

function Lose(q) {
	var ee = enemies[EnemyIndex]
	document.getElementById("LosePlayerLooks").innerHTML = "" // BoobLook(player) + PussyLook(player) + DickLook(player) + BallLook(player);
	if (player.Pregnant.Babies.length > 0) {
		var age = Math.round(player.Pregnant.Babies[0].BabyAge / 30);
		if (age < 1) {
			age = "Impregnated";
		} else {
			age = age + " months pregnant";
		}
		document.getElementById("LosePlayerLooks").innerHTML += "<br>" + age;
	}
	document.getElementById("LoseEnemyLooks").innerHTML = "" //BoobLook(ee) + PussyLook(ee) + DickLook(ee) + BallLook(ee);
	if (ee.hasOwnProperty("Pregnant")) {
		if (ee.Pregnant.Status) {
			document.getElementById("LoseEnemyLooks").innerHTML += "<br>Pregnant";
		}
	}
	Winner = false;
	document.getElementById("LosePName").innerHTML = player.Name + " " + player.Lastname;
	document.getElementById("LoseEName").innerHTML = ee.Name + "<br>" + ee.Race + " " + Pronun(CheckGender(ee));
	document.getElementById("LoseMascu").innerHTML = Math.round(player.Masc);
	document.getElementById("LoseFemin").innerHTML = Math.round(player.Femi);
	document.getElementById("LoseEMascu").innerHTML = Math.round(ee.Masc);
	document.getElementById("LoseEFemin").innerHTML = Math.round(ee.Femi);
	SexColor(player, "PlayerLose");
	SexColor(ee, "EnemyLose");
	var DelatMed = 2;
	if (player.Masc >= ee.Masc && player.Masc >= ee.Femi && player.Masc >= player.Femi) {
		DelatMed = 100 / player.Masc;
	} else if (player.Femi >= ee.Masc && player.Femi >= ee.Femi && player.Femi >= player.Masc) {
		DelatMed = 100 / player.Femi;
	} else if (ee.Masc >= player.Masc && ee.Masc >= ee.Femi && ee.Masc >= player.Femi) {
		DelatMed = 100 / ee.Masc;
	} else {
		DelatMed = 100 / ee.Femi;
	}

	document.getElementById("LoseMascu").style.width = player.Masc * DelatMed + "%";
	document.getElementById("LoseFemin").style.width = player.Femi * DelatMed + "%";
	document.getElementById("LoseEMascu").style.width = ee.Masc * DelatMed + "%";
	document.getElementById("LoseEFemin").style.width = ee.Femi * DelatMed + "%";

	document.getElementById("Encounter").style.display = 'none';
	document.getElementById("Lose").style.display = 'grid';
	document.getElementById("LeaveLose").style.display = 'none';
	document.getElementById("DungeonLose").style.display = 'none';
	if (q === undefined) {
		if (document.getElementById("LoseSexText").style.display = 'none')
			document.getElementById("LoseSexText").style.display = 'block'
		document.getElementById("LoseSexText").innerHTML = "You lost to a " + Pronun(CheckGender(ee)) + " " + ee.Race + " " + ee.Name;
	} else
		document.getElementById("LoseSexText").style.display = 'none';
	return;
}
document.getElementById("LoseSubmit").addEventListener("click", function () {
	var take = Math.round(enemies[EnemyIndex].SexSkill * RandomInt(3, 5));
	var selectScene = SnowScenes();
	document.getElementById("LosePlayerOrgasm").innerHTML = loseScene(false, selectScene, CheckGender(enemies[EnemyIndex]), CheckGender(player));
	if (selectScene === "forcedBJ" || selectScene === "getBJ" || selectScene === "getRidden" || selectScene === "getRiddenAnal") {
		take = Math.min(take, player.Masc);
		player.Masc -= take;
		enemies[EnemyIndex].Masc += take;
	} else if (selectScene === "forcedCunn" || selectScene === "getCunn" || selectScene === "getFucked" || selectScene === "getFuckedAnal") {
		take = Math.min(take, player.Femi);
		player.Femi -= take;
		enemies[EnemyIndex].Femi += take;
	} else {
		var takeM = Math.min(take, player.Masc) / 2;
		take = Math.min(take, player.Femi) / 2;
		player.Masc -= takeM;
		player.Femi -= take;
		enemies[EnemyIndex].Masc += takeM;
		enemies[EnemyIndex].Femi += take;
	}
	Lose(a);
	document.getElementById("LoseStruggle").style.display = 'none';
	document.getElementById("LoseSubmit").style.display = 'none';
	if (Dungeon) {
		document.getElementById("DungeonLose").style.display = 'inline-block';
	} else {
		document.getElementById("LeaveLose").style.display = 'inline-block';
	}
});
document.getElementById("LoseStruggle").addEventListener("click", function () {
	var take = Math.round(enemies[EnemyIndex].SexSkill * RandomInt(1, 7));
	var selectScene = SnowScenes();
	document.getElementById("LosePlayerOrgasm").innerHTML = loseScene(true, selectScene, enemies[EnemyIndex], player);
	if (selectScene === "forcedBJ" || selectScene === "getBJ" || selectScene === "getRidden" || selectScene === "getRiddenAnal") {
		take = Math.min(take, player.Masc);
		player.Masc -= take;
		enemies[EnemyIndex].Masc += take;
	} else if (selectScene === "forcedCunn" || selectScene === "getCunn" || selectScene === "getFucked" || selectScene === "getFuckedAnal") {
		take = Math.min(take, player.Femi);
		player.Femi -= take;
		enemies[EnemyIndex].Femi += take;
	} else if (selectScene === "forcedRim" || selectScene === "getRim") {
		var takeM = Math.min(take, player.Masc) / 2;
		take = Math.min(take, player.Femi) / 2;
		player.Masc -= takeM;
		player.Femi -= take;
		enemies[EnemyIndex].Masc += takeM;
		enemies[EnemyIndex].Femi += take;
	} else {
		var shift = player.height / 2;
		player.height -= shift;
		enemies[EnemyIndex].height += shift;
		for (var i = 0; i < player.Boobies.length; i++) {
			shift = player.Boobies[i].Milk;
			player.Boobies[i].Milk = 0;
			enemies[EnemyIndex].Boobies[0].Milk = Math.min(enemies[EnemyIndex].Boobies[0].MilkMax, enemies[EnemyIndex].Boobies[0].Milk + shift);
		}
		for (var i = 0; i < player.Balls.length; i++) {
			shift = player.Balls[i].Cum;
			player.Balls[i].Cum = 0;
			enemies[EnemyIndex].Balls[0].Cum = Math.min(enemies[EnemyIndex].Balls[0].CumMax, enemies[EnemyIndex].Balls[0].Cum + shift);
		}
		shift = player.Gold / 2;
		enemies[EnemyIndex].Gold += shift;
		player.Gold /= 2;
	}
	Lose(a);
	document.getElementById("LoseStruggle").style.display = 'none';
	document.getElementById("LoseSubmit").style.display = 'none';
	if (Dungeon) {
		document.getElementById("DungeonLose").style.display = 'inline-block';
	} else {
		document.getElementById("LeaveLose").style.display = 'inline-block';
	}
});
document.getElementById("LeaveLose").addEventListener("click", function () {
	battle = false;
	document.getElementById("Lose").style.display = 'none';
	document.getElementById("map").style.display = 'block';
	document.getElementById("status").style.display = 'block';
	document.getElementById("buttons").style.display = 'block';
	document.getElementById("LoseStruggle").style.display = 'inline-block';
	document.getElementById("LoseSubmit").style.display = 'inline-block';
	document.getElementById("LosePlayerOrgasm").innerHTML = " ";
	document.getElementById("EventLog").style.display = 'block';
	LastPressed = " ";
});

//Testing all scenes
/*document.getElementById("Cycle").addEventListener("click", function () {
	var sub = [true, false];
	var action = ["forcedBJ", "forcedCunn", "forcedRim", "getBJ", "getCunn", "getRim", "getFucked", "getFuckedAnal", "getRidden", "getRiddenAnal", "getVoreStomach", "getVoreBalls", "getVoreBoobs", "getVoreVagina", "getVoreAnal"];
	var gender = ["hermaphrodite", "cuntboy", "male", "female", "dickgirl", "doll"]
	console.log("Let's do this.");
    for(var a = 0; a < sub.length; a++)
	{
		for(var b = 0; b < action.length; b++)
		{
			for(var c = 0; c < gender.length; c++)
			{
				for(var d = 0; d < gender.length; d++)
				{
				try{
					console.log(loseScene(sub[a], action[b], gender[c], gender[d]));
				}
				catch {
					console.log("Error at "+sub[a]+ action[b]+ gender[c]+ gender[d]);
				}
				}
			}
		}
	}
});*/

//If you lose, and your opponent drains you. Set up for other uses, and milk if it gets implemented.
function fluid(who, what){
	var part;
	if(what === "Cum")
		part = "Balls";
	else if(what === "Milk")
		part = "Breasts";
	else {
		console.log("Fluid drain error! "+what);
		return;
	}
	for(var i = 0; i < who.part.length; i++)
		who.part[i].what = 0;
}

function loseScene(struggle, selectScene, Enemy, Player)
{
	var enemyCum = 0;
	var playerCum = 0;
	if(Enemy.hasOwnProperty("Balls"))
	{
		for(var i = 0; i < Enemy.Balls.length; i++)
			enemyCum += Enemy.Balls[i].Size / 4;
		enemyCum = LToGal(enemyCum) + " down your throat.";
	} else enemyCum = ".";
	
	if(Player.hasOwnProperty("Balls"))
	{
		for(var i = 0; i < Player.Balls.length; i++)
			playerCum += Player.Balls[0].Cum;
		playerCum = LToGal(playerCum);
	}
	
	var returnText;
	if (struggle) {
		switch (selectScene) {
			case "forcedBJ":
				returnText = Enemy.FirstName +" forces your head to their crotch, and starts thrusting their "+ CmToInch(Enemy.Dicks[0].Size) +" dick into your mouth. Despite your intentions, your body betrays you and orgasms as they cum"+ enemyCum;
				break;
			case "forcedCunn":
				returnText = Enemy.FirstName +" forces your head to their crotch, forcing you to start eating them out. "
				if(CheckGender(Enemy) === "hermaphrodite")
					returnText += "Their "+Enemy.Balls[0].Size+"cm balls cover your face, forcing their musky scent into your nose. "
				returnText += "Despite your intentions, your body betrays you and orgasms as they cover your face in girlcum."
				if(CheckGender(Enemy) === "hermaphrodite")
					returnText += "<br>You feel their balls twitch on your face, shooting cum over your back, eventually dripping into your hair."
				break;
			case "forcedRim":
				if(CheckGender(Enemy) != "doll")
					returnText = "Despite having more sensitive erogenous zones, "+Enemy.FirstName +" wants to maximize your humiliation by forcing you to eat their ass out. They force you to the ground and sit on your face, giving you no other option than to eat their ass out for their pleasure. "
				else if(CheckGender(Enemy) === "doll" && player.Dicks.length <= 0)
					returnText = "With no other way to get pleasure, "+Enemy.FirstName +" forces you to the ground and sit on your face, giving you no other option than to eat their ass out for pleasure. "
				else 
					returnText = "Rather that let you use your dick on their only hole, "+Enemy.FirstName +" decides to force you to use your tongue. They force you to the ground and sit on your face, giving you no other option than to eat their ass out for their pleasure. "
				returnText += "<br>Despite your humiliating position, you find your body responding, reaching orgasm as you feel them shudder above you."
				break;
			case "getBJ":
				returnText = "Forcing you onto your back, "+Enemy.FirstName+" expertly massages your cock and balls, quickly bringing you erect. "
				if(player.Pussies.length > 0)
					returnText += "They even tease your pussy a bit, all to make you cum quicker. "
				returnText += "<br>Unable to put up more than a feeble struggle, you find yourself cumming "+playerCum+" down their throat seconds after their lips meet your dick's head.";
				fluid(player,Cum);
				break;
			case "getCunn":
				returnText = "Forcing you onto your back, "+Enemy.FirstName+" expertly fingers your pussy, quickly making you wet. "
				if(player.Balls.length > 0)
					returnText += "They even tease your balls a bit, all to make you cum quicker. "
				returnText += "<br>Unable to put up more than a feeble struggle, you find yourself cumming around their tongue seconds after it penetrates your lower lips."
				break;
			case "getRim":
				if (CheckGender(Player) === "doll" && enemies[EnemyIndex].Dicks.length > 0)
					returnText = "Rather than use their penis on your ass, they'd rather find a pussy instead. "
				else if (CheckGender(Player) != "doll")
					returnText = "Rather than pleasuring your more sensitive organs, they've decided to humiliate you instead. "
				returnText += "<br>Forcing you onto your stomach, your enemy repeatedly smacks your ass, bringing a blush to both sets of cheeks. Despite your humiliation (and your ass getting sore), you soon orgasm"
				if(CheckGender(Player) === "hermaphrodite")
					returnText += ", spurting cum from your dick onto your belly and soaking your thighs."
				else if(player.Dicks.length > 0)
					returnText += ", spurting cum from your dick onto your belly."
				else if(player.Pussies.length > 0)
					returnText +=",  soaking your thighs."
				else
					returnText +=", shuddering in unwanted pleasure."
				break;
			case "getFucked":
				returnText = "Forcing you on your back, your enemy fondles your clit just enough for your body to betray you and your pussy to get wet. "
				if(CheckGender(Player) === "hermaphrodite")
					returnText += "Moving your balls to the side, they thrust in to you."
				else
					returnText += "Spreading your lips with one hand, they thrust into you."
				returnText += "<br>Knowing how to handle someone with as little experience as you, they pin your arms above your head and quickly bring you to orgasm, your shuddering walls causing them to cum inside you. "
				/*if(player.Pregnant.Babies.length > 0)
					returnText += "Fortunately, you're alredy pregnant, and won't have to carry their child."
				else {
					Impregnate(player, enemies[EnemyIndex], "B", "");
						if(player.Pregnant.Babies.length > 0 && Flags.Pregnations == 1)
							returnText += "You feel an odd filling sensation in your belly... They couldn't have gotten you pregnant, could they?"
						else if (player.Pregnant.Babies.length > 0)
							returnText += "Well, looks like you've been knocked up again. You wish you could've chosen a better partner..."
						else
							returnText += "At least you weren't impregnated..."
				}*/
				break;
			case "getFuckedDoggy":
				returnText = "Your enemy forces your beaten body to its hands and knees; you can't even muster the energy to collapse. Your body, however, has other plans, and you feel your pussy start to drip. Your opponent wastes little time, and quickly gets into position, soon thrusting deeply into you. "
				if(CheckGender(Player) === "hermaphrodite")
					returnText += "With every thrust, you feel their balls tapping into yours, sending little bursts of unintended pleasure through your dick. "
				returnText += "<br>It doesn't take long for you to cum, your pussy's walls quivering around their dick. "
				if(CheckGender(Player) === "hermaphrodite")
					returnText += "Your balls refuse to be left out, and unload themselves onto your stomach and the ground. "
				returnText += "Your enemy cums soon after, quickly filling your pussy and collapses onto your back, spent. "
				/*if(player.Pregnant.Babies.length > 0)
					returnText += "Fortunately, you're alredy pregnant, and won't have to carry their child."
				else {
					Impregnate(player, enemies[EnemyIndex], "B", "");
						if(player.Pregnant.Babies.length > 0 && Flags.Pregnations == 1)
							returnText += "You feel an odd filling sensation in your belly... They couldn't have gotten you pregnant, could they?"
						else if (player.Pregnant.Babies.length > 0)
							returnText += "Well, looks like you've been knocked up again. You wish you could've chosen a better partner..."
						else
							returnText += "At least you weren't impregnated..."
				}*/
				break;
			case "getFuckedAnal":
				returnText = "Your enemy forces your beaten body to its hands and knees; you can't even muster the energy to collapse. "
				if (player.Pussies.length > 0)
					returnText += "Your body, however, has other plans, and you feel your pussy start to drip. Even with such a clear signal, though, your enemy positions themselves a little higher. "
				returnText += "Having gotten into position, your enemy spreads your ass cheeks, and slowly works their dick into your bowels. Unable to respond, you feel your ass getting stretched. "
				if(CheckGender(Player) === "hermaphrodite")
					returnText += "With every thrust, you feel their balls tapping your balls and clit, sending little bursts of unintended pleasure through your organs.<br>It doesn't take long for you to orgasm, your pussy's walls quivering, milking a nonexistent dick. Your balls refuse to be left out, and unload themselves onto your stomach and the ground. "
				else if (player.Pussies.length > 0)
					returnText += "With every thrust, you feel their balls tapping your clit, sending little bursts of unintended pleasure through your pussy.<br>It doesn't take long for you to orgasm, your pussy's walls quivering, milking a nonexistent dick. "
				else if (player.Balls.length > 0)
					returnText += "With every thrust, you feel their balls tapping yours, sending little bursts of unintended pleasure through your dick.<br>It doesn't take long for you to orgasm, your balls unloading themselves onto your stomach and the ground. "
				else
					returnText += "<br>It doesn't take long for you to orgasm, a pleasurable heat spreading from your ass. "
				returnText += "Your enemy cums soon after, quickly filling your ass and collapses onto your back, spent. "
				/*if(player.Pregnant.Babies.length <= 0) {
					Impregnate(player, enemies[EnemyIndex], "B", "");
					if(player.Pussies.length > 0) {
						if(player.Pregnant.Babies.length > 0 && Flags.Pregnations == 1)
							returnText += "You feel an odd filling sensation in your belly... They couldn't have gotten you pregnant, could they?"
						else if (player.Pregnant.Babies.length > 0)
							returnText += "Well, looks like you've been knocked up again. You wish you could've chosen a better partner..."
					}
					else {
						if(player.Pregnant.Babies.length > 0 && Flags.Pregnations == 1)
							returnText += "You feel an odd filling sensation in your belly... But you couldn't be pregnant - you don't have a pussy!"
						else if (player.Pregnant.Babies.length > 0)
							returnText += "Well, looks like you've been knocked up again. You wish you could've chosen a better partner..."

					}
				}*/
				break;
			case "getRidden":
				returnText = "Pushing you over, your enemy fondles your balls, quickly giving you an erection. Straddling your groin, they quickly thrust down, riding your dick. "
				if (player.Boobies[0].size > 3 && enemies[EnemyIndex].Boobies[0].size > 3)
					returnText += "As they bounce up and down on your rod, they hug you close, mashing your nipples and theirs together, sending shivers of pleasure through your chest. "
				returnText = "<br>It doesn't take long before you cum, emptying your balls into their pussy. They're not satisfied yet, though, and continue to ride you for several orgasms. "
				/*if(enemies[EnemyIndex].hasOwnProperty(Pregnant)) {
				} else {
					Impregnate(enemies[EnemyIndex], player, "A", "");
					if(enemies[EnemyIndex].hasOwnProperty(Pregnant) && Flags.Impregnations == 1)
						returnText += "You see them rubbing their belly, looking content... They couldn't have gotten pregnant, could they?"
					else if (enemies[EnemyIndex].hasOwnProperty(Pregnant))
						returnText += "Well, looks like you've knocked someone up again. You wish you could've chosen your partner..."
				}*/
				break;
			case "getRiddenAnal":
				returnText = "Pushing you over, your enemy fondles your balls, quickly giving you an erection. Straddling your groin, they quickly thrust down, riding your dick. "
				if (player.Boobies[0].size > 3 && enemies[EnemyIndex].Boobies[0].size > 3)
					returnText += "As they bounce up and down on your rod, they hug you close, mashing your nipples and theirs together, sending shivers of pleasure through your chest. "
				returnText = "<br>It doesn't take long before you cum, emptying your balls into their ass. They're not satisfied yet, though, and continue to ride you for several orgasms. "
				/*if(!enemies[EnemyIndex].hasOwnProperty(Pregnant)) {
					Impregnate(enemies[EnemyIndex], player, "A", "");
					if(enemies[EnemyIndex].hasOwnProperty(Pregnant) && Flags.Impregnations == 1)
							returnText += "You see them rubbing their belly, looking content... They couldn't have gotten pregnant, could they?"
					else if (enemies[EnemyIndex].hasOwnProperty(Pregnant))
						returnText += "Well, looks like you've knocked someone up again. You wish you could've chosen your partner..."
				}*/
				break;
			case "getVoreStomach":
				returnText = "Grabbing your arms, they try to shove you down their throat, then realize they aren't stretching enough. Maybe in a later update..."
				break;
			case "getVoreBalls":
				returnText = "Grabbing your arms, they try to shove you down their dick, then realize they aren't stretching enough. Maybe in a later update..."
				break;
			case "getVoreBoobs":
				returnText = "Grabbing your arms, they try to shove you into their tits, then realize they aren't stretching enough. Maybe in a later update..."
				break;
			case "getVoreVagina":
				returnText = "Grabbing your arms, they try to shove you into their vagina, then realize they aren't stretching enough. Maybe in a later update..."
				break;
			case "getVoreAnal":
				returnText = "Grabbing your arms, they try to shove you into their ass, then realize they aren't stretching enough. Maybe in a later update..."
				break;
			default:
				returnText = "This shouldn't be here - send snowspider a message, saying \"Loss: " + struggle + ", " + selectScene + "\""
				break;
		}
	} else {
		switch (selectScene) {
			case "forcedBJ":
				returnText = "They force your head to their crotch, and start thrusting their dick into you. You eagerly give them head, orgasming as they cum down your throat."
				break;
			case "forcedCunn":
				returnText = "They force your head to their crotch and you dive in, eagerly eating them out. "
				if(CheckGender(Enemy) === "hermaphrodite")
					returnText += "Their balls cover your nose, forcing their musky scent into your nose. "
				returnText += "As they cover your face in girlcum, your body orgasms, proud of its job. "
				if(CheckGender(Enemy) === "hermaphrodite")
					returnText += "<br>As they cover your face, you feel their balls twitch, shooting cum over your back. As they wind down, their cum drips into your hair, arousing you further."
				break;
			case "forcedRim":
				if(CheckGender(Enemy) != "doll")
					returnText = "Despite having more sensitive erogenous zones, they want to maximize your humiliation by forcing you to eat their ass out. They force you to the ground and sit on your face, giving you no other option than to eat their ass out for their pleasure. "
				else if(CheckGender(Enemy) === "doll" && player.Dicks.length <= 0)
					returnText = "With no other way to get pleasure, they force you to the ground and sit on your face, giving you no other option than to eat their ass out. "
				else
					returnText = "Rather that let you use your dick on their only hole, they decide to force you to use your tongue. They force you to the ground and sit on your face, giving you no other option than to eat their ass out for their pleasure. "
				returnText += "<br>You find your body responding well to the harsh treatment, reaching orgasm as you feel them shudder above you."
				break;
			case "getBJ":
				returnText = "Motioning you to lie down on your back, they expertly massage your cock and balls, quickly bringing you erect. "
				if(CheckGender(Player) === "hermaphrodite")
					returnText += "They even tease your pussy a bit, adding to your growing pleasure. "
				returnText += "<br>Eagerly responding to their actions, you find yourself cumming before they start blowing you, coating your stomach with your seed. Before you can go soft, though, they wrap their lips around your dick, giving you immense pleasure. Seconds later, you cum again, this time down their throat."
				break;
			case "getCunn":
				returnText = "Motioning you to lie down on your back, they expertly finger your pussy, quickly making you wet. "
				if(CheckGender(Player) === "hermaphrodite")
					returnText += "They even tease your balls a bit, adding to your growing pleasure. "
				returnText += "<br>Eagerly responding to their actions, you find yourself cumming as their tongue approachess your cunt. "
				if(CheckGender(Player) === "hermaphrodite")
					returnText += "<br>Your dick, refusing to be left out, coats your stomach with your seed. "
				returnText += "Before you can recover, though, they start eating you out, quickly driving you to several more orgasms."
				break;
			case "getRim":
				returnText = "<br>Motioning you onto your stomach, your enemy massages your butt cheeks, bringing you a surprising amount of pleasure. As they stick a finger up your ass, you orgasm"
				if(CheckGender(Player) === "hermaphrodite")
					returnText += ", spurting cum from your dick onto your belly and soaking your thighs."
				else if (player.Dicks.length > 0)
					returnText += ", spurting cum from your dick onto your belly."
				else if (player.Pussies.length > 0)
					returnText += ", soaking your thighs."
				else
					returnText += ", shuddering in pleasure."
				break;
			case "getFucked":
				returnText = "Motioning you onto your back, your enemy fondles your clit and lower lips, giving you a mini-orgasm. Appreciating your lack of resistance, they tenderly move above you. "
				if(CheckGender(Player) === "hermaphrodite")
					returnText += "Shifting your balls to the side, they gently ease in to you."
				else
					returnText += "Spreading your lips with one hand, they gently ease in to you."
				returnText += "<br>Tenderly fucking your pussy, you're brought into a world of pleasure. Pinching your clit, you cum hard, soaking their crotch with your juices. Your quivering lips stimulate their dick, making them cum into you."
				/*if(player.Pregnant.Babies.length > 0)
					returnText += "You're alredy pregnant, and feel a twinge of regret that you won't carry their child."
				if(player.Pregnant.Babies.length <= 0) {
					Impregnate(player, enemies[EnemyIndex], "B", "");
						if(player.Pregnant.Babies.length > 0 && Flags.Pregnations == 1)
							returnText += "You feel an odd filling sensation in your belly... They couldn't have gotten you pregnant, could they?"
						else if (player.Pregnant.Babies.length > 0)
							returnText += "Well, looks like you've been knocked up again. You're surprisingly fine with this..."
						else
							returnText += "You weren't impregnated, and you find yourself disappointed..."
				}*/
				break;
			case "getFuckedDoggy":
				returnText = "Your enemy eases your beaten body to its hands and knees, making sure you can keep your balance. Your body instincively responds to the position, and you feel your pussy start to drip. Your opponent teases your cunt, causing your body to shudder, before getting into position and thrusting deeply into you. "
				if(CheckGender(Player) === "hermaphrodite")
					returnText += "With every thrust, you feel their balls tapping into yours, sending little bursts of unintended pleasure through your dick. "
				if (player.Boobies[0].size > 3)
					returnText += "Bending over your back, they reach down and fondle your nipples, not stopping their thrusts. You let out a low moan, your pleasure mounting ever higher. "
				returnText += "<br>It doesn't take long for you to cum, your pussy's walls quivering around their dick. "
				if(CheckGender(Player) === "hermaphrodite")
					returnText += "Your balls refuse to be left out, and unload themselves onto your stomach and the ground. "
				returnText += "Your enemy cums soon after, quickly filling your pussy and collapses onto your back, spent. "
				/*if(player.Pregnant.Babies.length > 0)
					returnText += "You're alredy pregnant, and feel a twinge of regret that you won't carry their child."
				else if(player.Pregnant.Babies.length <= 0) {
					Impregnate(player, enemies[EnemyIndex], "B", "");
						if(player.Pregnant.Babies.length > 0 && Flags.Pregnations == 1)
							returnText += "You feel an odd filling sensation in your belly... They couldn't have gotten you pregnant, could they?"
						else if (player.Pregnant.Babies.length > 0)
							returnText += "Well, looks like you've been knocked up again. You're surprisingly fine with this..."
						else
							returnText += "You weren't impregnated, and you find yourself disappointed..."
				}*/
				break;
			case "getFuckedAnal":
				returnText = "Your enemy eases your beaten body to its hands and knees, making sure you can keep your balance. "
				if (player.Pussies.length > 0)
					returnText += "Your body instincively responds to the position, and you feel your pussy start to drip. Your opponent teases your cunt, causing your body to shudder. Even with such a clear signal, though, your enemy positions themselves a little higher. "
				else
					"They massage your cheeks, causing your body to shudder, as your enemy positions their dick at your ass. "
				returnText += "Easing forwards, your enemy spreads your ass cheeks, and slowly works their dick into your bowels. Letting out a moan, you feel your ass getting stretched. "
				if (player.Boobies[0].size > 3)
					returnText += "Bending over your back, they reach down and fondle your nipples, not stopping their thrusts. You let out a low moan, your pleasure mounting ever higher. "
				if(CheckGender(Player) === "hermaphrodite")
					returnText += "With every thrust, you feel their balls tapping your balls and clit, sending little bursts of delicious pleasure through your organs.<br>It doesn't take long for you to orgasm, your pussy's walls quivering, milking a nonexistent dick. Your balls refuse to be left out, and unload themselves onto your stomach and the ground. "
				else if (player.Pussies.length > 0)
					returnText += "With every thrust, you feel their balls tapping your clit, sending little bursts of delicious pleasure through your pussy.<br>It doesn't take long for you to orgasm, your pussy's walls quivering, milking a nonexistent dick. "
				else if (player.Balls.length > 0)
					returnText += "With every thrust, you feel their balls tapping yours, sending little bursts of delicious pleasure through your dick.<br>It doesn't take long for you to orgasm, your balls unloading themselves onto your stomach and the ground. "
				else
					returnText += "<br>It doesn't take long for you to orgasm, a pleasurable heat spreading from your ass. "
				returnText += "Your enemy cums soon after, quickly filling your ass and collapses onto your back, spent. "
				/*if(player.Pregnant.Babies.length <= 0) {
					Impregnate(player, enemies[EnemyIndex], "B", "");
					if(player.Pussies.length > 0) {
						if(player.Pregnant.Babies.length > 0 && Flags.Pregnations == 1)
							returnText += "You feel an odd filling sensation in your belly... They couldn't have gotten you pregnant, could they?"
						else if (player.Pregnant.Babies.length > 0)
							returnText += "Well, looks like you've been knocked up again. You're surprisingly fine with this..."
					} else {
						if(player.Pregnant.Babies.length > 0 && Flags.Pregnations == 1)
							returnText += "You feel an odd filling sensation in your belly... But you couldn't be pregnant - you don't have a pussy!"
						else if (player.Pregnant.Babies.length > 0)
							returnText += "Well, looks like you've been knocked up again. You're surprisingly fine with this..."
					}
				}*/
				break;
			case "getRidden":
				returnText = "Telling you to sit down, your enemy kisses you deeply as they fondle your balls, quickly giving you an erection. Hugging your shoulders, they ease their pussy onto your dick, causing both of you to moan out loud. "
				if (player.Boobies[0].size > 3 && enemies[EnemyIndex].Boobies[0].size > 3)
					returnText += "As they bounce up and down on your rod, they hug you close, mashing your nipples and theirs together, sending shivers of pleasure through your chest. "
				returnText = "<br>It doesn't take long before you cum, emptying your balls into their pussy. They're not satisfied yet, though, and give you a few seconds to recover, before continuing to ride you for several orgasms. "
				/*if(!enemies[EnemyIndex].hasOwnProperty(Pregnant)) {
					Impregnate(enemies[EnemyIndex], player, "A", "");
					if(enemies[EnemyIndex].hasOwnProperty(Pregnant) && Flags.Impregnations == 1)
							returnText += "You see them rubbing their belly, looking content... They couldn't have gotten pregnant, could they?"
					else if (enemies[EnemyIndex].hasOwnProperty(Pregnant))
						returnText += "Well, looks like you've knocked someone up again. You hope they're alright with you being the father..."
				}*/
				break;
			case "getRiddenAnal":
				returnText = "Telling you to sit down, your enemy kisses you deeply as they fondle your balls, quickly giving you an erection. Hugging your shoulders, they ease their asshole onto your dick, causing both of you to moan out loud. "
				if (player.Boobies[0].size > 3 && enemies[EnemyIndex].Boobies[0].size > 3)
					returnText += "As they bounce up and down on your rod, they hug you close, mashing your nipples and theirs together, sending shivers of pleasure through your chest. "
				returnText = "<br>It doesn't take long before you cum, emptying your balls into their ass. They're not satisfied yet, though, and give you a few seconds to recover, before continuing to ride you for several orgasms. "
				/*if(!enemies[EnemyIndex].hasOwnProperty(Pregnant)) {
					Impregnate(enemies[EnemyIndex], player, "A", "");
					if(enemies[EnemyIndex].hasOwnProperty(Pregnant) && Flags.Impregnations == 1)
							returnText += "You see them rubbing their belly, looking content... They couldn't have gotten pregnant, could they?"
					else if (enemies[EnemyIndex].hasOwnProperty(Pregnant))
						returnText += "Well, looks like you've knocked someone up again. You hope they're alright with you being the father..."
				}*/
				break;
			case "getVoreStomach":
				returnText = "Grabbing your arms, they try to shove you down their throat, then realize they aren't stretching enough. Maybe in a later update..."
				break;
			case "getVoreBalls":
				returnText = "Grabbing your arms, they try to shove you down their dick, then realize they aren't stretching enough. Maybe in a later update..."
				break;
			case "getVoreBoobs":
				returnText = "Grabbing your arms, they try to shove you into their tits, then realize they aren't stretching enough. Maybe in a later update..."
				break;
			case "getVoreVagina":
				returnText = "Grabbing your arms, they try to shove you into their vagina, then realize they aren't stretching enough. Maybe in a later update..."
				break;
			case "getVoreAnal":
				returnText = "Grabbing your arms, they try to shove you into their ass, then realize they aren't stretching enough. Maybe in a later update..."
				break;
			default:
				returnText = "This shouldn't be here - send snowspider a message, saying \"Loss: " + struggle + ", " + selectScene + "\""
				break;
		}
	}
	return returnText;
}

function SnowScenes() {
	var eLoss = enemies[EnemyIndex];
	var sceneList = {
		forcedBJ: false,
		forcedCunn: false,
		forcedRim: true,
		getBJ: false,
		getCunn: false,
		getRim: true,
		getFucked: false,
		getFuckedAnal: false,
		getRidden: false,
		getRiddenAnal: false,
		getVoreStomach: false,
		getVoreBalls: false,
		getVoreBoobs: false,
		getVoreVagina: false,
		getVoreAnal: false
	} 
	{ //Which scenes are possible?
		if (Settings.Vore) {
			sceneList.getVoreAnal = true;
			sceneList.getVoreStomach = true;
			if (enemies[EnemyIndex].Dicks.length > 0 && enemies[EnemyIndex].Balls.length > 0)
				sceneList.getVoreBalls = true;
			if (enemies[EnemyIndex].Boobies.length > 0)
				sceneList.getVoreBoobs = true;
			if (enemies[EnemyIndex].Pussies.length > 0)
				sceneList.getVoreVagina = true;
		}
		if (enemies[EnemyIndex].Dicks.length > 0) {
			sceneList.forcedBJ = true;
			sceneList.getFuckedAnal = true;
		}
		if (enemies[EnemyIndex].Pussies.length > 0) {
			sceneList.forcedCunn = true;
		}
		if (player.Dicks.length > 0) {
			sceneList.getRiddenAnal = true;
			sceneList.getBJ = true;
			if (enemies[EnemyIndex].Pussies.length > 0)
				sceneList.getRidden = true;
		}
		if (player.Pussies.length > 0) {
			sceneList.getCunn = true;
			if (enemies[EnemyIndex].Dicks.length > 0)
				sceneList.getFucked = true;
		}
	}
	var scenePoss = [];
	console.log("Length " + Object.keys(sceneList).length);
	for (var i = 0; i < Object.keys(sceneList).length; i++) {
		if (sceneList[Object.keys(sceneList)[i]]) {
			scenePoss[scenePoss.length] = Object.keys(sceneList)[i];
			console.log("Object " + i + " " + Object.keys(sceneList)[i]);
			console.log(scenePoss[scenePoss.length - 1]);
		}
	}
	var selectScene = scenePoss[Math.floor(Math.random() * scenePoss.length)];
	console.log("Selected: " + selectScene);
	return selectScene;
}

function RaceConq(enemy) {
	switch (enemy.Race) {
		case "human":
			player.Gold -= RandomInt(25, player.Gold/2); // Robbed, why not.
			break;
		case "orc":
			player.Femi += 30;
			Impregnate(player, enemy, "B");
			break;
		case "fairy":
			if (player.Height > 30) {
				player.Height -= RandomInt(10, player.Height/10);
			}
			break;
		case "witch":
			// Could be funny with a frogman tf?
			// Isn't this considered a name?
			break;
		case "goblin":
			Impregnate(player, enemy, "B"); // Breeding stereotype
			Impregnate(enemy, player);
			break;
		case "incubus":
			if (player.Masc > 0) {
				var take = player.Masc * Math.min(0.75, Math.random); // Up to 75%
				player.Masc -= take;
				enemy.Masc += take;
			}
			Impregnate(player, enemy, "B");
			break;
		case "succubus":
			if (player.Femi > 0) {
				var take = player.Femi * Math.min(0.75, Math.random); // Up to 75%
				player.Femi -= take;
				enemy.Femi += take;
			}
			Impregnate(enemy, player);
			break;
	}
}