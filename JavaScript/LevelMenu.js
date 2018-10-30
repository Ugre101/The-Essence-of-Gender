    // Level Menu
    document.getElementById("LevelButton").addEventListener("click", function () {
        DisplayNone();
        document.getElementById("LevelMenu").style.display = 'block';

        document.getElementById("SkillPointsLeft").innerHTML = "You have " + player.SkillPoints + " skill points left.";
        document.getElementById("GainStr").value = "Strength " + player.Str;
        document.getElementById("GainCha").value = "Charm: " + player.Charm;
        document.getElementById("GainEnd").value = "Endurance: " + player.End;
        document.getElementById("GainInt").value = "Intelegence: " + player.Int;
        document.getElementById("GainWill").value = "Willpower: " + player.Will;
        document.getElementById("GainSex").value = "Sex Skill: " + player.SexSkill;
    });
    // Incraese stats
    document.getElementById("GainStr").addEventListener("click", function () {
        if (player.SkillPoints > 0) {
            player.Str++;
            player.SkillPoints--;
            document.getElementById("GainStr").value = "Strength: " + player.Str;
            document.getElementById("SkillPointsLeft").innerHTML = "You have " + player.SkillPoints + " skill points left.";
        } else {
            return;
        }
    });
    document.getElementById("GainStr").addEventListener("mouseover", function (e) {
        document.getElementById("LevelMenuText").innerHTML = e.target.title;
    });
    document.getElementById("GainCha").addEventListener("click", function () {
        if (player.SkillPoints > 0) {
            player.Charm++;
            player.SkillPoints--;
            document.getElementById("GainCha").value = "Charm: " + player.Charm;
            document.getElementById("SkillPointsLeft").innerHTML = "You have " + player.SkillPoints + " skill points left.";
        } else {
            return;
        }
    });
    document.getElementById("GainCha").addEventListener("mouseover", function (e) {
        document.getElementById("LevelMenuText").innerHTML = e.target.title;
    });
    document.getElementById("GainEnd").addEventListener("click", function () {
        if (player.SkillPoints > 0) {
            player.End++;
            player.SkillPoints--;
            player.MaxHealth += 5;
            document.getElementById("GainEnd").value = "Endurance: " + player.End;
            document.getElementById("SkillPointsLeft").innerHTML = "You have " + player.SkillPoints + " skill points left.";
        } else {
            return;
        }
    });
    document.getElementById("GainEnd").addEventListener("mouseover", function (e) {
        document.getElementById("LevelMenuText").innerHTML = e.target.title;
    });
    document.getElementById("GainInt").addEventListener("click", function () {
        if (player.SkillPoints > 0) {
            player.Int++;
            player.SkillPoints--;
            document.getElementById("GainInt").value = "Intelegence: " + player.Int;
            document.getElementById("SkillPointsLeft").innerHTML = "You have " + player.SkillPoints + " skill points left.";
        } else {
            return;
        }
    });
    document.getElementById("GainInt").addEventListener("mouseover", function (e) {
        document.getElementById("LevelMenuText").innerHTML = e.target.title;
    });
    document.getElementById("GainWill").addEventListener("click", function () {
        if (player.SkillPoints > 0) {
            player.Will++;
            player.MaxWillHealth += 5;
            player.SkillPoints--;
            document.getElementById("GainWill").value = "Willpower: " + player.Will;
            document.getElementById("SkillPointsLeft").innerHTML = "You have " + player.SkillPoints + " skill points left.";
        } else {
            return;
        }
    });
    document.getElementById("GainWill").addEventListener("mouseover", function (e) {
        document.getElementById("LevelMenuText").innerHTML = e.target.title;
    });
    document.getElementById("GainSex").addEventListener("click", function () {
        if (player.SkillPoints > 0) {
            player.SexSkill++;
            player.SkillPoints--;
            document.getElementById("GainSex").value = "Sex Skill: " + player.SexSkill;
            document.getElementById("SkillPointsLeft").innerHTML = "You have " + player.SkillPoints + " skill points left.";
        } else {
            return;
        }
    });
    document.getElementById("GainSex").addEventListener("mouseover", function (e) {
        document.getElementById("LevelMenuText").innerHTML = e.target.title;
    });
    // level menu return
    document.getElementById("No").addEventListener("click", function () {
        battle = false;
        document.getElementById("LevelMenu").style.display = 'none';
        document.getElementById("map").style.display = 'block';
    });