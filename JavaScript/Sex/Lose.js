DocId("EnemyLoseSex").addEventListener("click", function () {
	if (DocId("LoseEnemyKinda").style.display === 'none') {
		DocId("LoseSexStats").innerHTML = " ";
		DocId("LoseEnemyKinda").style.display = 'block';
		DocId("LoseEnemyExact").style.display = 'none';
		DocId("LoseEnemyExact").innerHTML = "";
	} else {
		const ee = enemies[EnemyIndex];
		DocId("LoseSexStats").innerHTML = `Looking at them you estimate that they are about ${CmToInch(ee.Height)} tall and look to weigh around ${KgToPound(ee.Weight)}`;
		DocId("LoseEnemyKinda").style.display = 'none';
		DocId("LoseEnemyExact").style.display = 'block';
		DocId("LoseEnemyExact").innerHTML = `<p>${ExactBoobLook(ee) + ExactPussyLook(ee) + ExactDickLook(ee) + ExactBallLook(ee)}</p>`;
	}
});
DocId("PlayerLoseSex").addEventListener("click", function () {
	if (DocId("LoseplayerKinda").style.display === 'none') {
		DocId("LoseplayerKinda").style.display = 'block';
		DocId("LoseplayerExact").style.display = 'none';
		DocId("LoseplayerExact").innerHTML = "";
	} else {
		DocId("LoseplayerKinda").style.display = 'none';
		DocId("LoseplayerExact").style.display = 'block';
		DocId("LoseplayerExact").innerHTML = `<p>${ExactBoobLook(player) + ExactPussyLook(player) + ExactDickLook(player) + ExactBallLook(player)}</p>`;
	}
});

function Lose(sex = true) {
	const ee = enemies[EnemyIndex],
		LPL = DocId("LosePlayerLooks"),
		LoseText = DocId("LoseSexStats");

	LPL.innerHTML = ""; // BoobLook(player) + PussyLook(player) + DickLook(player) + BallLook(player);
	if (player.Pregnant.Babies.length > 0) {
		const age = Math.round(player.Pregnant.Babies[0].BabyAge / 30);
		LPL.innerHTML += "<br>" + (age < 1) ? "Impregnated" : age + " months pregnant";
	}
	DocId("LoseEnemyLooks").innerHTML = ""; //BoobLook(ee) + PussyLook(ee) + DickLook(ee) + BallLook(ee);
	if (ee.hasOwnProperty("Pregnant")) {
		if (ee.Pregnant.Status) {
			DocId("LoseEnemyLooks").innerHTML += "<br>Pregnant";
		}
	}
	Winner = false;
	DocId("LosePName").innerHTML = player.Name + " " + player.LastName;
	DocId("LoseEName").innerHTML = ee.Name + "<br>" + ee.Race + " " + Pronoun(CheckGender(ee));
	DocId("LoseMascu").innerHTML = Math.round(player.Masc);
	DocId("LoseFemin").innerHTML = Math.round(player.Femi);
	DocId("LoseEMascu").innerHTML = Math.round(ee.Masc);
	DocId("LoseEFemin").innerHTML = Math.round(ee.Femi);
	SexColor(player, "PlayerLose");
	SexColor(ee, "EnemyLose");
	const DelatMed = (player.Masc >= ee.Masc && player.Masc >= ee.Femi && player.Masc >= player.Femi) ? 100 / player.Masc :
		(player.Femi >= ee.Masc && player.Femi >= ee.Femi && player.Femi >= player.Masc) ? 100 / player.Femi :
		(ee.Masc >= player.Masc && ee.Masc >= ee.Femi && ee.Masc >= player.Femi) ? 100 / ee.Masc :
		100 / ee.Femi;

	DocId("LoseMascu").style.width = player.Masc * DelatMed + "%";
	DocId("LoseFemin").style.width = player.Femi * DelatMed + "%";
	DocId("LoseEMascu").style.width = ee.Masc * DelatMed + "%";
	DocId("LoseEFemin").style.width = ee.Femi * DelatMed + "%";

	DocId("Encounter").style.display = 'none';
	DocId("Lose").style.display = 'grid';
	DocId("LeaveLose").style.display = 'none';
	DocId("DungeonLose").style.display = 'none';
	if (sex) {
		if (LoseText.style.display = 'none') {
			LoseText.style.display = 'block';
		}
		LoseText.innerHTML = `You lost to a ${Pronoun(CheckGender(ee))} ${ee.Race} ${ee.Name}`;
		NameConq(ee);
	} else {
		LoseText.style.display = 'none';
		DocId("LoseStruggle").style.display = 'none';
		DocId("LoseSubmit").style.display = 'none';
		if (Dungeon) {
			DocId("DungeonLose").style.display = 'inline-block';
		} else {
			DocId("LeaveLose").style.display = 'inline-block';
		}
	}
	return;

	function NameConq() { // Name/title/type e.g. witch, maiden
		const Name = ee.Name.toLowerCase(),
			LoseText = DocId("LoseSexStats");
		switch (Name) {
			case "wizard":
				const Organs = ["Dicks", "Balls", "Boobies", "Pussies"],
					a = RandomString(Organs);
				if (player[a].length > 0) {
					for (let e of player[a]) {
						if (e.Size > 0) {
							e.Size--;
						}
					}
					LoseText.innerHTML = "Something doesn't feel right..."; // 
				} else {
					LoseText.innerHTML = ""; // He failed
				}
			case "witch":
				PotionDrunk("Amphibian", RandomInt(1, 5));
				RaceConq();
				break;
			case "maiden":
				Lose(false); // "No sex"
				LoseText.innerHTML = "Your defeat proves you unworthy to father her children, " +
					"she walks away avoiding wasting more time on you."
				break;
			default:
				RaceConq(); // Some enemies don't trigger race conq like e.g. maiden.
				break;
		}
	};

	function RaceConq() {
		const race = ee.Race.toLowerCase(),
			enemy = ee,
			LoseText = DocId("LoseSexText");
		switch (race) {
			case "human":
				const steal = Math.min(RandomInt(25, 200), player.Gold)
				player.Gold -= steal; // Robbed, why not. #Nerfed
				LoseText.innerHTML += "They steal " + steal + " gold from you.";
				break;
			case "orc":
				player.Femi += 30;
				DrainMascFromPlayer(30);
				// player.Mind.Sub++
				if (enemy.Balls.length > 0) {
					let i = 0;
					while (i < 3 && !player.Pregnant.Status) { // try more than once
						Impregnate(player, enemy, "B");
					}
				}
				// LoseText.innerHTML = "Following their natrual instincts the orc try to breed you, " +
				// "while also transforminng you to better suit their preference."
				break;
			case "fairy":
				if (player.Height > 10) {
					player.Height -= Math.min(player.Height / RandomInt(5, 10), 50);
				}
				PotionDrunk("Fairy", RandomInt(10, 20));
				LoseText.innerHTML += "Attempting to transform you into a fairy they shrunk you"
				break;
			case "elf":
				break;
			case "dark elf":
				break;
			case "amazon":
				break;
			case "goblin":
				if (player.Balls.length > 0) {
					Impregnate(player, enemy, "B"); // Breeding stereotype
					// = "Stradling you they ride you, drain your balls trying to impregnate themself."
					if (enemy.Balls.length > 0) {
						Impregnate(enemy, player);
						// = " Once satisfied they move on to fucking with "
					}
				} else if (enemy.Balls.length > 0) {
					Impregnate(enemy, player);
					// = "They "
				}
				break;
			case "incubus":
				DrainMascFromPlayer(400);
				Impregnate(player, enemy, "B");
				// "drainging your masculinity "
				break;
			case "succubus":
				DrainFemiFromPlayer(400);
				Impregnate(enemy, player);
				// "draining your feminity"
				break;
			case "dragon":
				if (player.RaceEssence.some(e => e.Race == "Dragon")) { // Dragon doesn't like weaklings being dragons. 
					const b = player.RaceEssence.findIndex(e => e.Race == "Dragon");
					player.RaceEssence[b].amount -= Math.min(RandomInt(1, 25), player.RaceEssence[b].amount)
				}
				break;
			case "demon":
				// player.Mind.Corruption++;
			default:
				break;
		}
	};
}
DocId("LoseSubmit").addEventListener("click", function () {
	const ee = enemies[EnemyIndex],
		takeM = Math.round(ee.SexSkill * RandomInt(3, 5)),
		takeF = Math.round(ee.SexSkill * RandomInt(3, 5)),
		selectScene = SnowScenes(),
		a = ["forcedBJ", "getBJ", "getRidden", "getRiddenAnal"],
		b = ["forcedCunn", "getCunn", "getFucked", "getFuckedAnal"]
	DocId("LosePlayerOrgasm").innerHTML = loseScene(false, selectScene);
	if (a.indexOf(selectScene) > -1) {
		DrainMascFromPlayer(takeM);
	} else if (b.indexOf(selectScene) > -1) {
		DrainFemiFromPlayer(takeF);
	} else {
		DrainMascFromPlayer(takeM / 2);
		DrainFemiFromPlayer(takeF / 2);
	}
	Lose(false);
});
DocId("LoseStruggle").addEventListener("click", function () {
	const takeM = Math.min(Math.round(enemies[EnemyIndex].SexSkill * RandomInt(1, 7)), player.Masc),
		takeF = Math.min(Math.round(enemies[EnemyIndex].SexSkill * RandomInt(1, 7)), player.Femi),
		selectScene = SnowScenes();
	DocId("LosePlayerOrgasm").innerHTML = loseScene(true, selectScene);
	if (selectScene === "forcedBJ" || selectScene === "getBJ" || selectScene === "getRidden" || selectScene === "getRiddenAnal") {
		DrainMascFromPlayer(takeM);
	} else if (selectScene === "forcedCunn" || selectScene === "getCunn" || selectScene === "getFucked" || selectScene === "getFuckedAnal") {
		DrainFemiFromPlayer(takeF);

	} else if (selectScene === "forcedRim" || selectScene === "getRim") {
		DrainMascFromPlayer(takeM / 2);
		DrainFemiFromPlayer(takeF / 2);
	} else {
		const shift = player.height / 2;
		player.height -= shift;
		enemies[EnemyIndex].height += shift;
	}
	Lose(false);
});
DocId("LeaveLose").addEventListener("click", function () {
	DisplayGame();
	DocId("Lose").style.display = 'none';
	DocId("LoseStruggle").style.display = 'inline-block';
	DocId("LoseSubmit").style.display = 'inline-block';
	DocId("LosePlayerOrgasm").innerHTML = " ";
	LastPressed = " ";
});

//Testing all scenes
/*DocId("Cycle").addEventListener("click", function () {
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

function loseScene(struggle, selectScene) {
	const Player = player,
		Enemy = enemies[EnemyIndex],
		{
			FirstName
		} = enemies[EnemyIndex]; // bad fix for now wanting to rename all Player to player
	function DrainBalls() {
		if (player.Balls.length > 0) {
			player.Balls.forEach((b) => {
				b.Cum = 0;
			})
		}
	}
	// Shrunk the for loops into map && reduce consts, also made them a function so they only run if needed
	const enemyCum = () => Enemy.hasOwnProperty("Balls") ? Enemy.Balls.length > 0 ? `${LToGal(Enemy.Balls.map(b => b.Size/4).reduce((acc,cur) => acc + cur))} down your throat.` : `.` : `.`;
	const playerCum = () => player.hasOwnProperty("Balls") ? player.Balls.length > 0 ? LToGal(player.Balls.map(b => b.Cum).reduce((acc, cur) => acc + cur)) : 0 : 0;

	// Tested replacing returnText with a return plus some ?'s but readablity suffered a lot 
	var returnText;
	if (struggle) {
		switch (selectScene) {
			case "forcedBJ":
				return `${FirstName} forces your head to their crotch, and starts thrusting their ${CmToInch(Enemy.Dicks[0].Size)} dick into your mouth. Despite your intentions, your body betrays you and orgasms as they cum ${enemyCum()}`;
			case "forcedCunn":
				returnText = `${FirstName} forces your head to their crotch, forcing you to start eating them out. `
				if (Enemy.Balls.length > 0) {
					returnText += `Their ${CmToInch(Enemy.Balls[0].Size)} balls cover your face, forcing their musky scent into your nose. `
				}
				returnText += `Despite your intentions, your body betrays you and orgasms as they cover your face in girlcum.`
				if (CheckGender(Enemy) === "hermaphrodite") {
					returnText += `<br>You feel their balls twitch on your face, shooting cum over your back, eventually dripping into your hair.`
				}
				break;
			case "forcedRim":
				if (CheckGender(Enemy) != "doll") {
					returnText = `Despite having more sensitive erogenous zones, ${FirstName} wants to maximize your humiliation by forcing you to eat their ass out. 
					They force you to the ground and sit on your face, giving you no other option than to eat their ass out for their pleasure.`
				} else if (CheckGender(Enemy) === "doll" && player.Dicks.length <= 0) {
					returnText = "With no other way to get pleasure, " + FirstName + " forces you to the ground and sit on your face, giving you no other option than to eat their ass out for pleasure. "
				} else {
					returnText = `Rather that let you use your dick on their only hole, ${FirstName} decides to force you to use your tongue. 
					They force you to the ground and sit on your face, giving you no other option than to eat their ass out for their pleasure.`
				}
				returnText += "<br>Despite your humiliating position, you find your body responding, reaching orgasm as you feel them shudder above you."
				break;
			case "getBJ":
				returnText = "Forcing you onto your back, " + FirstName + " expertly massages your cock and balls, quickly bringing you erect. "
				if (player.Pussies.length > 0) {
					returnText += "They even tease your pussy a bit, all to make you cum quicker. "
				}
				returnText += "<br>Unable to put up more than a feeble struggle, you find yourself cumming " + playerCum() + " down their throat seconds after their lips meet your dick's head.";
				DrainBalls()
				break;
			case "getCunn":
				returnText = "Forcing you onto your back, " + FirstName + " expertly fingers your pussy, quickly making you wet. "
				if (player.Balls.length > 0) {
					returnText += "They even tease your balls a bit, all to make you cum quicker. "
				}
				returnText += "<br>Unable to put up more than a feeble struggle, you find yourself cumming around their tongue seconds after it penetrates your lower lips."
				break;
			case "getRim":
				if (CheckGender(Player) === "doll" && enemies[EnemyIndex].Dicks.length > 0) {
					returnText = "Rather than use their penis on your ass, they'd rather find a pussy instead. "
				} else if (CheckGender(Player) != "doll") {
					returnText = "Rather than pleasuring your more sensitive organs, they've decided to humiliate you instead. "
				}
				returnText += "<br>Forcing you onto your stomach, your enemy repeatedly smacks your ass, bringing a blush to both sets of cheeks. Despite your humiliation (and your ass getting sore), you soon orgasm"
				if (CheckGender(Player) === "hermaphrodite") {
					returnText += ", spurting cum from your dick onto your belly and soaking your thighs."
				} else if (player.Dicks.length > 0) {
					returnText += ", spurting cum from your dick onto your belly."
				} else if (player.Pussies.length > 0) {
					returnText += ",  soaking your thighs."
				} else {
					returnText += ", shuddering in unwanted pleasure."
				}
				break;
			case "getFucked":
				returnText = "Forcing you on your back, your enemy fondles your clit just enough for your body to betray you and your pussy to get wet. "
				if (CheckGender(Player) === "hermaphrodite") {
					returnText += "Moving your balls to the side, they thrust in to you."
				} else {
					returnText += "Spreading your lips with one hand, they thrust into you."
				}
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
				if (CheckGender(Player) === "hermaphrodite") {
					returnText += "With every thrust, you feel their balls tapping into yours, sending little bursts of unintended pleasure through your dick. "
				}
				returnText += "<br>It doesn't take long for you to cum, your pussy's walls quivering around their dick. "
				if (CheckGender(Player) === "hermaphrodite") {
					returnText += "Your balls refuse to be left out, and unload themselves onto your stomach and the ground. "
				}
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
				if (player.Pussies.length > 0) {
					returnText += "Your body, however, has other plans, and you feel your pussy start to drip. Even with such a clear signal, though, your enemy positions themselves a little higher. "
				}
				returnText += "Having gotten into position, your enemy spreads your ass cheeks, and slowly works their dick into your bowels. Unable to respond, you feel your ass getting stretched. "
				if (CheckGender(Player) === "hermaphrodite") {
					returnText += "With every thrust, you feel their balls tapping your balls and clit, sending little bursts of unintended pleasure through your organs.<br>It doesn't take long for you to orgasm, your pussy's walls quivering, milking a nonexistent dick. Your balls refuse to be left out, and unload themselves onto your stomach and the ground. "
				} else if (player.Pussies.length > 0) {
					returnText += "With every thrust, you feel their balls tapping your clit, sending little bursts of unintended pleasure through your pussy.<br>It doesn't take long for you to orgasm, your pussy's walls quivering, milking a nonexistent dick. "
				} else if (player.Balls.length > 0) {
					returnText += "With every thrust, you feel their balls tapping yours, sending little bursts of unintended pleasure through your dick.<br>It doesn't take long for you to orgasm, your balls unloading themselves onto your stomach and the ground. "
				} else {
					returnText += "<br>It doesn't take long for you to orgasm, a pleasurable heat spreading from your ass. "
				}
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
				if (player.Boobies.length > 0 ? player.Boobies[0].size > 3 : false && enemies.Boobies.length > 0 ? enemies[EnemyIndex].Boobies[0].size > 3 : false) {
					returnText += "As they bounce up and down on your rod, they hug you close, mashing your nipples and theirs together, sending shivers of pleasure through your chest. "
				}
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
				if (player.Boobies.length > 0 ? player.Boobies[0].size > 3 : false && enemies.Boobies.length > 0 ? enemies[EnemyIndex].Boobies[0].size > 3 : false) {
					returnText += "As they bounce up and down on your rod, they hug you close, mashing your nipples and theirs together, sending shivers of pleasure through your chest. "
				}
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
				return `They force your head to their crotch, and start thrusting their dick into you. You eagerly give them head, orgasming as they cum down your throat.`
			case "forcedCunn":
				returnText = "They force your head to their crotch and you dive in, eagerly eating them out. "
				if (CheckGender(Enemy) === "hermaphrodite") {
					returnText += "Their balls cover your nose, forcing their musky scent into your nose. "
				}
				returnText += "As they cover your face in girlcum, your body orgasms, proud of its job. "
				if (CheckGender(Enemy) === "hermaphrodite") {
					returnText += "<br>As they cover your face, you feel their balls twitch, shooting cum over your back. As they wind down, their cum drips into your hair, arousing you further."
				}
				break;
			case "forcedRim":
				if (CheckGender(Enemy).toLowerCase() != "doll") {
					returnText = "Despite having more sensitive erogenous zones, they want to maximize your humiliation by forcing you to eat their ass out. They force you to the ground and sit on your face, giving you no other option than to eat their ass out for their pleasure. "
				} else if (CheckGender(Enemy).toLowerCase() === "doll" && player.Dicks.length <= 0) {
					returnText = "With no other way to get pleasure, they force you to the ground and sit on your face, giving you no other option than to eat their ass out. "
				} else {
					returnText = "Rather that let you use your dick on their only hole, they decide to force you to use your tongue. They force you to the ground and sit on your face, giving you no other option than to eat their ass out for their pleasure. "
				}
				returnText += "<br>You find your body responding well to the harsh treatment, reaching orgasm as you feel them shudder above you."
				break;
			case "getBJ":
				returnText = "Motioning you to lie down on your back, they expertly massage your cock and balls, quickly bringing you erect. "
				if (CheckGender(Player).toLowerCase() === "hermaphrodite") {
					returnText += "They even tease your pussy a bit, adding to your growing pleasure. "
				}
				returnText += "<br>Eagerly responding to their actions, you find yourself cumming before they start blowing you, coating your stomach with your seed. Before you can go soft, though, they wrap their lips around your dick, giving you immense pleasure. Seconds later, you cum again, this time down their throat."
				break;
			case "getCunn":
				returnText = "Motioning you to lie down on your back, they expertly finger your pussy, quickly making you wet. "
				if (CheckGender(Player).toLowerCase() === "hermaphrodite") {
					returnText += "They even tease your balls a bit, adding to your growing pleasure. "
				}
				returnText += "<br>Eagerly responding to their actions, you find yourself cumming as their tongue approachess your cunt. "
				if (CheckGender(Player).toLowerCase() === "hermaphrodite") {
					returnText += "<br>Your dick, refusing to be left out, coats your stomach with your seed. "
				}
				returnText += "Before you can recover, though, they start eating you out, quickly driving you to several more orgasms."
				break;
			case "getRim":
				returnText = "<br>Motioning you onto your stomach, your enemy massages your butt cheeks, bringing you a surprising amount of pleasure. As they stick a finger up your ass, you orgasm"
				if (CheckGender(Player).toLowerCase() === "hermaphrodite") {
					returnText += ", spurting cum from your dick onto your belly and soaking your thighs."
				} else if (player.Dicks.length > 0) {
					returnText += ", spurting cum from your dick onto your belly."
				} else if (player.Pussies.length > 0) {
					returnText += ", soaking your thighs."
				} else {
					returnText += ", shuddering in pleasure."
				}
				break;
			case "getFucked":
				returnText = "Motioning you onto your back, your enemy fondles your clit and lower lips, giving you a mini-orgasm. Appreciating your lack of resistance, they tenderly move above you. "
				if (CheckGender(Player).toLowerCase() === "hermaphrodite") {
					returnText += "Shifting your balls to the side, they gently ease in to you."
				} else {
					returnText += "Spreading your lips with one hand, they gently ease in to you."
				}
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
				if (CheckGender(Player) === "hermaphrodite") {
					returnText += "With every thrust, you feel their balls tapping into yours, sending little bursts of unintended pleasure through your dick. "
				}
				if (player.Boobies[0].size > 3) {
					returnText += "Bending over your back, they reach down and fondle your nipples, not stopping their thrusts. You let out a low moan, your pleasure mounting ever higher. "
				}
				returnText += "<br>It doesn't take long for you to cum, your pussy's walls quivering around their dick. "
				if (CheckGender(Player) === "hermaphrodite")
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
				if (CheckGender(Player) === "hermaphrodite")
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
				if (player.Boobies.length > 0 ? player.Boobies[0].size > 3 : false && enemies.Boobies.length > 0 ? enemies[EnemyIndex].Boobies[0].size > 3 : false) {
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
				}
			case "getRiddenAnal":
				returnText = "Telling you to sit down, your enemy kisses you deeply as they fondle your balls, quickly giving you an erection. Hugging your shoulders, they ease their asshole onto your dick, causing both of you to moan out loud. "
				if (player.Boobies.length > 0 ? player.Boobies[0].size > 3 : false && enemies.Boobies.length > 0 ? enemies[EnemyIndex].Boobies[0].size > 3 : false) {
					returnText += "As they bounce up and down on your rod, they hug you close, mashing your nipples and theirs together, sending shivers of pleasure through your chest. "
				}
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
				return `Grabbing your arms, they try to shove you down their throat, then realize they aren't stretching enough. Maybe in a later update...`
			case "getVoreBalls":
				return `Grabbing your arms, they try to shove you down their dick, then realize they aren't stretching enough. Maybe in a later update...`
			case "getVoreBoobs":
				return `Grabbing your arms, they try to shove you into their tits, then realize they aren't stretching enough. Maybe in a later update...`
			case "getVoreVagina":
				return `Grabbing your arms, they try to shove you into their vagina, then realize they aren't stretching enough. Maybe in a later update...`
			case "getVoreAnal":
				return `Grabbing your arms, they try to shove you into their ass, then realize they aren't stretching enough. Maybe in a later update...`
			default:
				return `This shouldn't be here - send snowspider a message, saying \"Loss:${struggle}, ${selectScene}"`
		}
	}
	return returnText;
}

function SnowScenes() {
	const ee = enemies[EnemyIndex],
		sceneList = ["forcedRim", "getRim", ];
	//Which scenes are possible? 
	// Need settings options if Player prey is enabled.
	if (Settings.Vore && false) {
		sceneList.getVoreAnal = true;
		sceneList.getVoreStomach = true;
		if (enemies[EnemyIndex].Dicks.length > 0 && enemies[EnemyIndex].Balls.length > 0)
			sceneList.getVoreBalls = true;
		if (enemies[EnemyIndex].Boobies.length > 0)
			sceneList.getVoreBoobs = true;
		if (enemies[EnemyIndex].Pussies.length > 0)
			sceneList.getVoreVagina = true;
	}
	if (ee.Dicks.length > 0) {
		sceneList.push("forcedBJ", "getFuckedAnal");
	}
	if (ee.Pussies.length > 0) {
		sceneList.push("forcedCunn");
	}
	if (player.Dicks.length > 0) {
		sceneList.push("getRiddenAnal", "getBJ");
		if (ee.Pussies.length > 0) {
			sceneList.push("getRidden");
		}
	}
	if (player.Pussies.length > 0) {
		sceneList.push("getCunn");
		if (ee.Dicks.length > 0) {
			sceneList.push("getFucked");
		}
	}
	return RandomString(sceneList);
}

function DrainMascFromPlayer(amount) {
	const old = JSON.parse(JSON.stringify(player)),
		eold = JSON.parse(JSON.stringify(enemies[EnemyIndex])),
		ee = enemies[EnemyIndex];
	//player.ForcedMale ? (player.Masc += ee.Femi) : (player.Femi += ee.Femi);
	const Need = amount;
	let Have = player.Masc;
	player.Masc = Math.max(0, player.Masc - Need);
	while (Have < Need && (player.Dicks.length > 0 || player.Balls.length > 0)) {
		if (player.Dicks.length > 0) {
			const dick = Last(player.Dicks);
			dick.Size--;
			Have += EssenceCost(dick);
			if (dick.Size <= 1) {
				player.Dicks.pop();
			};
		};
		if (player.Balls.length > 0) {
			const balls = Last(player.Balls);
			balls.Size--;
			Have += EssenceCost(balls);
			if (balls.Size <= 1) {
				player.balls.pop();
			};
		};
	};
	const Got = Math.min(Need, Have),
		left = Math.max(0, Have - Need);
	ee.Masc += Got;
	player.Masc = left;
	EssenceCheck(ee);
	if (Settings.EssenceAuto) {
		EssenceCheck(player);
	}
	return;
};

function DrainFemiFromPlayer(amount) {
	const old = JSON.parse(JSON.stringify(player)),
		eold = JSON.parse(JSON.stringify(enemies[EnemyIndex])),
		ee = enemies[EnemyIndex];
	//player.ForcedMale ? (player.Masc += ee.Femi) : (player.Femi += ee.Femi);
	const Need = amount;
	let Have = player.Femi;
	player.Femi = Math.max(0, player.Femi - Need);
	while (Have < Need && (player.Pussies.length > 0 || player.Boobies.length > 0)) {
		if (player.Pussies.length > 0) {
			const pussy = Last(player.Pussies);
			pussy.Size--;
			Have += EssenceCost(pussy);
			if (pussy.Size <= 1) {
				player.Pussies.pop();
			};
		};
		if (player.Boobies.length > 0 ? player.Boobies[0].Size > 0 : false) {
			const boobs = Last(player.Boobies);
			boobs.Size--;
			Have += EssenceCost(boobs);

			if (boobs.Size <= 1 && player.Boobies.length > 1) {
				player.Boobies.pop();
			};
		};
	};
	const Got = Math.min(Need, Have),
		left = Math.max(0, Have - Need);
	ee.Femi += Got;
	player.Femi = left;
	EssenceCheck(ee);
	if (Settings.EssenceAuto) {
		EssenceCheck(player);
	}
	return;
}