var PRL;
var RL;
var LastPressed;
// Mouth
function SexActGiveBlowjob() {
    if (Settings.ImgPack) {
        ImgChose(player, "GiveBlowjob", enemies[EnemyIndex]);
    }
    enemies[EnemyIndex].Arousal += SexAttack / 2
    player.Arousal += ESexAttack / 3;
    if (LastPressed === "GiveBlowjob") {
        document.getElementById("SexText").innerHTML = "Your head continues to bob on their length as your tongue plays with their tip, electing soft moans from your opponent. As " + enemies[EnemyIndex].FirstName + " begins to softly hump into your throat, you meet each thrust by pushing your head down as far as you can. You emphasize their thrusts by sucking hard on their throbbing length. You feel their hand being placed on your head, pushing you deeper into their crotch."
        if (enemies[EnemyIndex].Balls.length > 0) {
            document.getElementById("SexText").innerHTML += " Your lips meet their crotch as their " + CmToInch(enemies[EnemyIndex].Balls[0].Size) + " nuts start to bump into your chin with each hump."
        }
        document.getElementById("SexText").innerHTML += " Their breathing becomes deep and labored as you milk their cock for all it’s worth."
    } else {
        RL = RandomInt(0, enemies[EnemyIndex].Dicks.length - 1);
        document.getElementById("SexText").innerHTML = "Your foe lays on their back, chest heaving with exhaustion from the recent fight. You make your way up to " + enemies[EnemyIndex].FirstName + "'s body and crouch between their legs, spreading them apart. In-between lies their " + CmToInch(enemies[EnemyIndex].Dicks[RL].Size) + " " + enemies[EnemyIndex].Dicks[RL].Type + " cock lewdly pulsing as it bobs side-to-side with each breath of your foe." +
            " You lick your lips in anticipation as you lower your head to your prize, wrapping your lips around the head of their dick and start sucking." // They still lies on their stomach still spent from the battle. You grab their torso and flip them on their back for your viewing pleasure. Their dick lays flat against their stomach twitching almost expectantly. You lower your head between their legs and just before the they has time to protest you begin tending to their cock causing them to gasp."
    }
    CheckArousal();
    LastPressed = "GiveBlowjob";
    return;
}

function SexActGiveCunnilingus() {
    if (Settings.ImgPack) {
        ImgChose(player, "GiveCunnilingus", enemies[EnemyIndex]);
    }
    enemies[EnemyIndex].Arousal += SexAttack / 2;
    player.Arousal += ESexAttack / 3;
    if (LastPressed === "GiveCunnilingus") {
        document.getElementById("SexText").innerHTML = "Keeping them in place, you continue your tongue-lashing, electing soft moans from your opponent. Barely able to move, all " + enemies[EnemyIndex].FirstName + "can do is rest their hand on your head. You reach one hand to their clit and gently pinch it, sending a fresh wave of pleasure through their body.";
    } else {
        RL = RandomInt(0, enemies[EnemyIndex].Pussies.length - 1);
        document.getElementById("SexText").innerHTML = "Your foe lays on their back, chest heaving with exhaustion from the recent fight. You make your way up to " + enemies[EnemyIndex].FirstName + "'s body and crouch between their legs, spreading them apart. In-between lies their " + enemies[EnemyIndex].Pussies[RL].type + " pussy, engorged and dripping slightly, their clit twitching lewdly with each breath of your foe." +
            " You lick your lips in anticipation as you lower your head to your prize, spreading their lower lips with your fingers, and start eating them out.";
    }
    CheckArousal();
    LastPressed = "GiveCunnilingus";
    return;
};

function SexActGiveRimjob() {
    if (Settings.ImgPack) {
        ImgChose(player, "GiveRimjob", enemies[EnemyIndex]);
    }
    enemies[EnemyIndex].Arousal += SexAttack / 2;
    player.Arousal += ESexAttack / 3;
    if (LastPressed === "GiveRimjob") {
        document.getElementById("SexText").innerHTML = "You continue eating their ass out.";
    } else {
        document.getElementById("SexText").innerHTML = "You eat their ass out.";
    }
    CheckArousal();
    LastPressed = "GiveRimjob";
    return;
};
// Vagina
function SexActScissoring() {
    if (Settings.ImgPack) {
        ImgChose(player, "Scissoring", enemies[EnemyIndex]);
    }
    enemies[EnemyIndex].Arousal += SexAttack;
    player.Arousal += ESexAttack;
    if (LastPressed === "Scissoring") {
        document.getElementById("SexText").innerHTML = "As you continue to grind your pussy against " + HisHer(enemies[EnemyIndex]) + " " + enemies[EnemyIndex].Pussies[0].Type + " pussy, you reach down and toy with their clit, bringing more pleasure-filled moans to your ears.";
    } else {
        document.getElementById("SexText").innerHTML = "Looking down at " + enemies[EnemyIndex].FirstName + ", you feel a twinge of arousal pulse through your crotch. Straddling your opponent's thigh, you lift their other leg and bring your crotches together, grinding your pussy against theirs. Not leaving it at that, you bring their hand to your clit, and moan as they start playing with it.";
    }
    CheckArousal();
    LastPressed = "Scissoring";
    return;
};

function SexActGetCunnilingus() {
    if (Settings.ImgPack) {
        ImgChose(player, "GetCunnilingus", enemies[EnemyIndex]);
    }
    enemies[EnemyIndex].Arousal += SexAttack / 3;
    player.Arousal += ESexAttack / 2;
    if (LastPressed === "GetCunnilingus") {
        document.getElementById("SexText").innerHTML = "Keeping them in place, you force them to continue eating you out, electing soft moans from your throat. Barely able to move, all " + enemies[EnemyIndex].FirstName + "can do is continue eating you out. You reach one hand to their head and gently pet it, telling them they're doing a good job.";
    } else {
        RL = RandomInt(0, player.Pussies.length - 1);
        document.getElementById("SexText").innerHTML = "Your foe lays on their back, chest heaving with exhaustion from the recent fight. You make your way up " + enemies[EnemyIndex].FirstName + "'s body, licking your lips in anticipation. Squatting above their head, you line your crotch up with their mouth. Grabbing their head, you grind their face against your " + player.Pussies[RL].Type + " pussy, until they " +
            "start eating you out with " + HisHer(enemies[EnemyIndex]) + " " + enemies[EnemyIndex].Race + " tounge.";
    }
    CheckArousal();
    LastPressed = "GetCunnilingus";
    return;
};

function SexActRideCowgirl() {
    if (Settings.ImgPack) {
        ImgChose(player, "RideCowgirl", enemies[EnemyIndex]);
    }
    enemies[EnemyIndex].Arousal += SexAttack;
    player.Arousal += ESexAttack;
    if (LastPressed === "RideCowgirl") {
        document.getElementById("SexText").innerHTML = "Planting one hand on their chest, you continue riding " + HisHer(enemies[EnemyIndex]) + " " + CmToInch(enemies[EnemyIndex].Dicks[RL].Size) + " " + enemies[EnemyIndex].Dicks[RL].Type + " dick at an erratic pace, enjoying their groans of pleasure with each thrust."
        if (enemies[EnemyIndex].Balls.length > 0) {
            document.getElementById("SexText").innerHTML += " Every time your crotch meets theirs, you can feel their balls twitch, getting ready to cum."
        }
    } else {
        RL = RandomInt(0, enemies[EnemyIndex].Dicks.length - 1);
        PRL = RandomInt(0, player.Pussies.length - 1);
        document.getElementById("SexText").innerHTML = "Looking down at your defeated opponent, lying on " + HisHer(enemies[EnemyIndex]) + " back, you position yourself above their crotch. Spreading your lower lips with one hand and positioning " + HisHer(enemies[EnemyIndex]) + " " + CmToInch(enemies[EnemyIndex].Dicks[RL].Size) + " " + enemies[EnemyIndex].Dicks[RL].Type + " dick with your other, you wrap your " + player.Pussies[PRL].Type + " pussy around them.<br>Their dick " + Tightness(enemies[EnemyIndex], player, "B") + " your pussy.";
    }
    if (player.Pussies[PRL].Virgin) {
        player.Pussies[PRL].Virgin = false;
        document.getElementById("SexText").innerHTML += "<br>You have lost your virginity!"
    }
    CheckArousal();
    LastPressed = "RideCowgirl";
    return;
};

function SexActInsertion() {
    if (Settings.ImgPack) {
        ImgChose(player, "Insertion", enemies[EnemyIndex]);
    }
    enemies[EnemyIndex].Arousal += SexAttack;
    player.Arousal += ESexAttack;
    if (LastPressed === "Insertion") {
        document.getElementById("SexText").innerHTML = "Allowing them only short breaks, you continue masturbating with your living dildo. Judging from their cute squeaks of pleasure, you're not the only one enjoying this.";
    } else {
        RL = RandomInt(0, enemies[EnemyIndex].Dicks.length - 1);
        PRL = RandomInt(0, player.Pussies.length - 1);

        document.getElementById("SexText").innerHTML = "Due to their small size, conventional sex would be difficult; looking closer at their small form, however, you realize they are about the size of a dildo. to your much larger body. " +
            "Grabbing them you bring them to your " + CmToInch(player.Pussies[PRL].Size) + " deep " + player.Pussies[PRL].Type + " vagina, telling them look closely at the wet folds they are about to be better acquainted with. Feet first, you gently insert them into your pussy with a soft moan of pleasure. Once you're sure they can survive it, you pick up the pace."
    }
    if (player.Pussies[PRL].Virgin) {
        player.Pussies[PRL].Virgin = false;
        document.getElementById("SexText").innerHTML += "<br>You have lost your virginity to your little dildo!"
    }
    CheckArousal();
    LastPressed = "Insertion";
    return;
};
// Dick
function SexActMissionary() {
    if (Settings.ImgPack) {
        ImgChose(player, "Missionary", enemies[EnemyIndex]);
    }
    enemies[EnemyIndex].Arousal += SexAttack;
    player.Arousal += ESexAttack;
    if (LastPressed === "Missionary") {
        document.getElementById("SexText").innerHTML = "You continue fucking " + HisHer(enemies[EnemyIndex]) + " " + enemies[EnemyIndex].Pussies[0].Type + " pussy with your " + CmToInch(player.Dicks[PRL].Size) + " " + player.Dicks[PRL].Type + " dick.";
    } else {
        PRL = RandomInt(0, player.Dicks.length - 1);
        document.getElementById("SexText").innerHTML = "Positioning your opponent on " + HisHer(enemies[EnemyIndex]) + " back you fuck " + HisHer(enemies[EnemyIndex]) + " " + enemies[EnemyIndex].Pussies[0].Type + " pussy with your " + CmToInch(player.Dicks[PRL].Size) + " " + player.Dicks[PRL].Type + " dick.<br>Their pussy " + Tightness(player, enemies[EnemyIndex], "A") + " to you.";
    }
    if (player.Dicks[PRL].Virgin) {
        player.Dicks[PRL].Virgin = false;
        document.getElementById("SexText").innerHTML += "<br>Your dick is no longer virgin!"
    }

    CheckArousal();
    LastPressed = "Missionary";
    return;
};

function SexActDualPen() {
    enemies[EnemyIndex].Arousal += 2 * SexAttack;
    player.Arousal += 3 * ESexAttack;
    if (Settings.ImgPack) { //Going to need to split this, unless it's only for multiple orifices
        ImgChose(player, "DualPen", enemies[EnemyIndex]);
    }
    if (enemies[EnemyIndex].Pussies.length > 0) {
        if (LastPressed === "DualPen") {
            document.getElementById("SexText").innerHTML = "You continue fucking " + HisHer(enemies[EnemyIndex]) + " " + enemies[EnemyIndex].Pussies[0].Type + " pussy and ass with your " + player.Dicks[PRL].Type + " dicks, enjoying the contrast between their ass and pussy's tightness and flexibility, and your rods separated by a thin wall of their flesh.";
            //Text 2: document.getElementById("SexText").innerHTML = "You pull your dicks out of " + HisHer(enemies[EnemyIndex]) + " holes slowly, enjoying the feeling of their pussy and ass trying to pull you back in. Without warning, you thrust forward suddenly, bottoming out again in an instant and forcing a shout of pleasure from their throat. You resume thrusting, a pleasured look on both of your faces."
        } else {
            document.getElementById("SexText").innerHTML = "Looking down at " + HisHer(enemies[EnemyIndex]) + " crotch, you smile to yourself; they've got enough holes to use more than one dick. Spreading their legs, you line up your " + player.Dicks[0].Type + " with their " + enemies[EnemyIndex].Pussies[0].Type + " pussy and ass, and press in slowly. As they adapt to your dicks, you start picking up speed, thrusting at an irregular pace due to all of the pleasure.<br>Their pussy " + Tightness(player, enemies[EnemyIndex], "A") + " to you.";
        }
    } else {
        if (LastPressed === "DualPen") {
            document.getElementById("SexText").innerHTML = "You continue fucking " + HisHer(enemies[EnemyIndex]) + " " + enemies[EnemyIndex].Pussies[0].Type + " pussy with your " + CmToInch(player.Dicks[PRL].Size) + " " + player.Dicks[PRL].Type + " dick.<br>Their pussy " + Tightness(player, enemies[EnemyIndex], "A") + " to you.";
        } else {
            document.getElementById("SexText").innerHTML = "Looking down at " + HisHer(enemies[EnemyIndex]) + " crotch, you notice a lack of vagina. Not willing to give one dick priority over the other, you spread their legs and line up your " + player.Dicks[0].Type + " dicks with their ass, and press in slowly. To your surprise, they stretch around your dicks with only mild (vocalized) discomfort. As they adapt to your dicks, you start picking up speed, thrusting at an irregular pace due to all of the pleasure.";
        }
    }
    if (player.Dicks[0].Virgin || player.Dicks[1].Virgin) {
        player.Dicks[0].Virgin = false;
        player.Dicks[1].Virgin = false;
        document.getElementById("SexText").innerHTML += "<br>Your dicks are no longer virgin!"
    }

    CheckArousal();
    LastPressed = "DualPen";
    return;
};

function SexActMultiPen() {
    if (enemies[EnemyIndex].Pussies.length * SexAttack > 200) {
        enemies[EnemyIndex].Arousal = 100;
        enemies[EnemyIndex].Orgasm += Math.floor(enemies[EnemyIndex].Pussies.length * SexAttack) - 1;
    } else
        enemies[EnemyIndex].Arousal += enemies[EnemyIndex].Pussies.length * SexAttack;
    if (player.Dicks.length * 2 * ESexAttack > 200) {
        player.Arousal = 100;
        player.Orgasm += Math.floor(enemies[EnemyIndex].Pussies.length * SexAttack) - 1;
    } else
        player.Arousal += player.Dicks.length * 2 * ESexAttack;
    if (Settings.ImgPack) { //Going to need to split this, surprise surprise.
        ImgChose(player, "MultiPen", enemies[EnemyIndex]);
    }
    if (LastPressed === "MultiPen") {
        document.getElementById("SexText").innerHTML = "Your mind's unable to handle the insane amount of pleasure, and you thrust wildly. Your entire world is focused on the pleasure your dicks are experiencing, fucking " + HisHer(enemies[EnemyIndex]) + " " + enemies[EnemyIndex].Pussies[0].Type + " holes with your many dicks. Had you more awareness, you would've seen " + enemies[EnemyIndex].FirstName + "'s face in a state of ecstasy, unable to make a sound.";
    } else if (player.Dicks.length > enemies[EnemyIndex].Pussies.length + 1) //1st case: more dicks than all holes 
    {
        document.getElementById("SexText").innerHTML = "Looking down at " + HisHer(enemies[EnemyIndex]) + " crotch, you are disheartened to see them lack enough holes for your arsenal of penises. Resolved to make the best of it, you pair them up and shove them into any orifice they can reach. Pressing in slowly, you're amazed at how much they stretch around your dicks, and how good it feels. Unable to control your body any longer, your mind takes a back seat as your hips thrust at a manic pace, drowning you in pleasure.";
    } else { //if(player.Dicks.length == enemies[EnemyIndex].Pussies.length + 1) {//2nd case: enough dicks for all holes
        document.getElementById("SexText").innerHTML = "Looking down at " + HisHer(enemies[EnemyIndex]) + " crotch, you're ecstatic to see enough holes for your arsenal of penises. Resolved to make this an unforgettable experience, you line up your dicks and slowly ease in. Amazed at how much they stretch around your dicks, and how good it feels, your mind barely registers their hips meeting yours. Unable to control your body any longer, your conscious thoughts takes a back seat as your hips thrust at a manic pace, drowning you in pleasure.";
    }
    /*else {//3rd case: They've got enough pussies for your dicks 
    	if (LastPressed === "MultiPen") {
    		document.getElementById("SexText").innerHTML = "You continue fucking " + HisHer(enemies[EnemyIndex]) + " " + enemies[EnemyIndex].Pussies[0].Type + " pussy with your " + CmToInch(player.Dicks[PRL].Size) + " " + player.Dicks[PRL].Type + " dick.<br>Their pussy " + Tightness(player, enemies[EnemyIndex], "A") + " to you.";
    	} else {
    		document.getElementById("SexText").innerHTML = "Looking down at " + HisHer(enemies[EnemyIndex]) + " crotch, you notice a lack of vagina. Not willing to give one dick priority over the other, you spread their legs and line up your " + player.Dicks[0].Type" dicks with their ass, and press in slowly. To your surprise, they stretch around your dicks with only mild (vocalized) discomfort. As they adapt to your dicks, you start picking up speed, thrusting at an irregular pace due to all of the pleasure.";
    	}
    }*/
    var v = false;
    for (var i = 0; i < player.Dicks.length; i++) {
        if (player.Dicks[i].Virgin) {
            player.Dicks[i].Virgin = false;
            v = true;
        }
    }
    CheckArousal();
    LastPressed = "DualPen";
    return;
};

function SexActDoggyStyle() {
    if (Settings.ImgPack) {
        ImgChose(player, "DoggyStyle", enemies[EnemyIndex]);
    }
    enemies[EnemyIndex].Arousal += SexAttack;
    player.Arousal += ESexAttack;
    if (LastPressed === "DoggyStyle") {
        document.getElementById("SexText").innerHTML = "You continue fucking them from behind.<br>Their " + enemies[EnemyIndex].Pussies[0].Type + " pussy " + Tightness(player, enemies[EnemyIndex], "A") + " to your " + CmToInch(player.Dicks[PRL].Size) + " " + player.Dicks[PRL].Type + " dick.";
    } else {
        PRL = RandomInt(0, player.Dicks.length - 1);
        document.getElementById("SexText").innerHTML = "Commanding " + HisHer(enemies[EnemyIndex]) + " to get down on their all fours you fuck " + HisHer(enemies[EnemyIndex]) + " from behind.<br> Their " + enemies[EnemyIndex].Pussies[0].Type + " pussy " + Tightness(player, enemies[EnemyIndex], "A") + " to your " + CmToInch(player.Dicks[PRL].Size) + " " + player.Dicks[PRL].Type + " dick.";
    }
    if (player.Dicks[PRL].Virgin) {
        player.Dicks[PRL].Virgin = false;
        document.getElementById("SexText").innerHTML += "<br>Your dick is no longer virgin!"
    }

    CheckArousal();
    LastPressed = "DoggyStyle";
    return;
};

function SexActGetBlowjob() {
    if (Settings.ImgPack) {
        ImgChose(player, "GetBlowjob", enemies[EnemyIndex]);
    }
    enemies[EnemyIndex].Arousal += SexAttack / 3;
    player.Arousal += ESexAttack / 2;
    if (LastPressed === "GetBlowjob") {
        // document.getElementById("SexText").innerHTML = "You continue humping your new toy at a constant pace. Your rhythm doesn’t falter as you use your muscles to the best of their ability. You lean back as you hilt into the back of their throat, eliciting a moan from you as you start breeding deep."
        if (player.Balls.length > 0) {
            document.getElementById("SexText").innerHTML = "Continuing to thrust, your " + CmToInch(player.Balls[0].Size) + " balls slap repeatedly against your foe, causing them to grunt in annoyance." +
                "Your thrusting continues as you make proper use of your opponent’ s mouth. You grab your foe 's forearm and guide it to your sac, grunting in demand as they start to fondle you.<br><br>"
        }
        document.getElementById("SexText").innerHTML = "Your thrusting continues as you make proper use of your opponent’s mouth. Your pounding of their throat continues even as your abdomen starts bumping into their nose with each thrust. Muffled groans escape from your mouth as " + enemies[EnemyIndex].FirstName + "’s mouth is pumped by your throbbing cock." //They moan as your cock snakes its way through their mouth greedily humps their throat."
    } else {
        document.getElementById("SexText").innerHTML = "You walk up to your defeated adversary as they attempt to get back on their feet. You stop them by catching their head and tilting it up to your face. You look back down at your crotch and nod to your " + CmToInch(player.Dicks[0].Size) + " cock expectantly." +
            " Just as your prize gets the idea and moves closer you eagerly thrust your hips into their mouth. You hold their head close starting a steady rhythm as you use their hole."
        // "Your last blow sends your foe recoiling back losing their footing and crashing to the floor. You make your way up to them until you cast a shadow of their body. Your adversary groans as they start to rise, only to be met with the sight of your (insert player dick size. small, average, hefty, enormous) member. Stunned by the position they are in you grab the back of their head and guide their mouth to its rightful place and begin to enjoy your prize"

    }
    CheckArousal();
    LastPressed = "GetBlowjob";
    return;
};
// Anal
function SexActDoggyStyleAnal() {
    if (Settings.ImgPack) {
        ImgChose(player, "DoggyStyleAnal", enemies[EnemyIndex]);
    }
    enemies[EnemyIndex].Arousal += SexAttack;
    player.Arousal += ESexAttack;
    if (LastPressed === "DoggyStyleAnal") {
        document.getElementById("SexText").innerHTML = "You keep " + HisHer(enemies[EnemyIndex]) + " head down and fuck " + HisHer(enemies[EnemyIndex]) + " ass with your " + CmToInch(player.Dicks[PRL].Size) + " " + player.Dicks[PRL].Type + " dick.";
    } else {
        PRL = RandomInt(0, player.Dicks.length - 1);
        document.getElementById("SexText").innerHTML = "You order you opponent down on " + HisHer(enemies[EnemyIndex]) + " knees, and position yourself behind them. Pushing " + HisHer(enemies[EnemyIndex]) + " head down, you start fucking " + HisHer(enemies[EnemyIndex]) + " ass with your " + CmToInch(player.Dicks[PRL].Size) + " " + player.Dicks[PRL].Type + " dick.";
    }
    if (player.Dicks[PRL].Virgin) {
        player.Dicks[PRL].Virgin = false;
        document.getElementById("SexText").innerHTML += "<br>Your dick is no longer virgin!"
    }

    CheckArousal();
    LastPressed = "DoggyStyleAnal";
    return;
};

function SexActDualPen() {
    enemies[EnemyIndex].Arousal += SexAttack * 2;
    player.Arousal += ESexAttack * 2;
    if (LastPressed === "DualPen") {
        document.getElementById("SexText").innerHTML = "You keep " + HisHer(enemies[EnemyIndex]) + " head down and fuck " + HisHer(enemies[EnemyIndex]) + " ass with your " + CmToInch(player.Dicks[0].Size) + " " + player.Dicks[0].Type + " dick.";
    } else {
        document.getElementById("SexText").innerHTML = "You order you opponent down on " + HisHer(enemies[EnemyIndex]) + " knees, and position yourself behind them. Pushing " + HisHer(enemies[EnemyIndex]) + " head down, you start fucking " + HisHer(enemies[EnemyIndex]) + " ass with your " + CmToInch(player.Dicks[0].Size) + " " + player.Dicks[0].Type + " dick.";
    }
    if (player.Dicks[0].Virgin) {
        player.Dicks[0].Virgin = false;
        document.getElementById("SexText").innerHTML += "<br>Your first dick is no longer virgin!"
    }
    if (player.Dicks[1].Virgin) {
        player.Dicks[1].Virgin = false;
        document.getElementById("SexText").innerHTML += "<br>Your second dick is no longer virgin!"
    }

    CheckArousal();
    LastPressed = "DoggyStyleAnal";
    return;
};

function SexActMultiPen() {

};

function SexActGetRimjob() {
    if (Settings.ImgPack) {
        ImgChose(player, "GetRimjob", enemies[EnemyIndex]);
    }
    enemies[EnemyIndex].Arousal += SexAttack / 3;
    player.Arousal += ESexAttack / 2;
    if (LastPressed === "GetRimjob") {
        document.getElementById("SexText").innerHTML = "You force your opponent to continue eating out your ass.";
    } else {
        document.getElementById("SexText").innerHTML = "You command your opponent to eat out your ass.";
    }
    CheckArousal();
    LastPressed = "GetRimjob";
    return;
};

function SexActBreastFeed() {
    if (Settings.ImgPack) {
        ImgChose(player, "BreastFeed", enemies[EnemyIndex]);
    }
    enemies[EnemyIndex].Arousal += SexAttack * 1.2;
    player.Arousal += ESexAttack;
    for (var b = 0; b < player.Boobies.length; b++) {
        player.Boobies[b].Milk -= 100 / player.Boobies.length;
    }
    if (LastPressed === "BreastFeed") {
        document.getElementById("SexText").innerHTML = "You continue feeding them your milk, releiving the pressure in your chest.";
    } else {
        document.getElementById("SexText").innerHTML = "The urge to nurture is strong due the hormones released from your lactating breasts. Wanting release, you take them into your lap and guide " + HisHer(enemies[EnemyIndex]) + " head to your fullest breast. " +
            "At first they assumed you wanted them you suck on your nipples for pleasure, but once their mouth was full they had no choice but to swallow. As they quickly fell in love with the taste, you remove your hand from their head unnoticed, they don't think about stopping their feeding."
    }
    CheckArousal();
    LastPressed = "BreastFeed";
    return;
};

function StopSexButton() {
    battle = false;
    player.Orgasm = 0;
    player.cumGround = 0;
    document.getElementById("map").style.display = 'block';
    document.getElementById("status").style.display = 'block';
    document.getElementById("buttons").style.display = 'block';
    document.getElementById("EventLog").style.display = 'block';
    document.getElementById("AfterBattle").style.display = 'none';
    LastPressed = " ";
    // Trying to have ferals disappear after combat	
    /*	console.log(enemies[EnemyIndex].FirstName);
    	if(enemies[EnemyIndex].FirstName === "Feral")
    	{
    		console.log("Removed");
    		enemies.splice(EnemyIndex, 1);
    	}*/
    return;
};

function SexActCapture() {
    House.Dormmates.push(enemies[EnemyIndex]);
    enemies.splice(EnemyIndex, 1);
    battle = false;
    player.Orgasm = 0;
    player.cumGround = 0;
    document.getElementById("AfterBattle").style.display = 'none';
    document.getElementById("map").style.display = 'block';
    document.getElementById("status").style.display = 'block';
    document.getElementById("buttons").style.display = 'block';
    document.getElementById("EventLog").style.display = 'block';
    LastPressed = " ";
    return;
}

function Tightness(pipe, hole, mode) {
    if (mode == "A") {
        if (pipe.Dicks[0].Size > hole.Pussies[0].Size + 1) {
            if (pipe.Dicks[0].Size > hole.Pussies[0].Size * 2) {
                return "feels extremly tight";
            } else {
                return "feels tight";
            }
        } else if (pipe.Dicks[0].Size < hole.Pussies[0].Size - 1) {
            if (pipe.Dicks[0].Size * 2 < hole.Pussies[0].Size) {
                return "feels very loose"
            } else {
                return "feels loose";
            }
        } else {
            return "feels like a perfect fit";

        }
    } else if (mode == "B") {
        if (pipe.Dicks[0].Size > hole.Pussies[0].Size - 1) {
            return "feels big in";
        } else if (pipe.Dicks[0].Size < hole.Pussies[0].Size + 1) {
            return "feels small in";
        } else {
            return "feels like a perfect fit to";
        }
    }
}

function HisHer(Gender) {
    switch (CheckGender(Gender)) {
        case "male":
            return "his";
        case "female":
            return "her";
        case "hermaphrodite":
            return "their";
        default:
            return "their";
    }
}