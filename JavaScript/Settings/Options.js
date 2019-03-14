document.getElementById("Options").addEventListener("click", function () {
    DisplayNone();
    document.getElementById("optionpage").style.display = 'block';
    document.getElementById("ImgPack").value = "Img pack: " + Settings.ImgPack;
    document.getElementById("LogLength").innerHTML = Settings.LogLength;
    document.getElementById("FontSize").innerHTML = Math.round(Settings.FontSize * 100) / 100 + "em"
    document.getElementById("Inch").value = "Inch " + Settings.Inch;
    document.getElementById("HighLightDoors").value = "Highlight doors " + Settings.HighLightDoors;
});

document.getElementById("FontSmaller").addEventListener("click", function () {
    Settings.FontSize -= 0.05;
    document.body.style.fontSize = Settings.FontSize + "em";
    document.getElementById("FontSize").innerHTML = Math.round(Settings.FontSize * 100) / 100 + "em"
});

document.getElementById("FontBigger").addEventListener("click", function () {
    Settings.FontSize += 0.05;
    document.body.style.fontSize = Settings.FontSize + "em";
    document.getElementById("FontSize").innerHTML = Math.round(Settings.FontSize * 100) / 100 + "em"
});

document.getElementById("SetPronoun").addEventListener("click", function () {
    DisplayNone();
    document.getElementById("PronounForm").style.display = 'block'
});

document.getElementById("Log+10").addEventListener("click", function () {
    Settings.LogLength += 10;
    document.getElementById("LogLength").innerHTML = Settings.LogLength;
});

document.getElementById("Log-10").addEventListener("click", function () {
    Settings.LogLength -= 10;
    document.getElementById("LogLength").innerHTML = Settings.LogLength;
});

document.getElementById("AcceptPronoun").addEventListener("click", function () {
    DisplayNone();
    document.getElementById("optionpage").style.display = 'block';
    Settings.Pronoun = {
        Herm: document.getElementById("Herm").value,
        Male: document.getElementById("Male").value,
        Female: document.getElementById("Female").value,
        Doll: document.getElementById("Doll").value,
        DickGirl: document.getElementById("DickGirl").value,
        CuntBoy: document.getElementById("CuntBoy").value,
        Status: true
    };
});
document.getElementById("DisablePronoun").addEventListener("click", function () {
    DisplayNone();
    document.getElementById("optionpage").style.display = 'block';
    Settings.Pronoun.Status = false;
});

document.getElementById("Inch").addEventListener("click", function () {
    Settings.Inch = Settings.Inch ? false : true;
    document.getElementById("Inch").value = "Inch " + Settings.Inch;
});

document.getElementById("FullScreen").addEventListener("click", function () {
    const elem = document.body,
        button = document.getElementById("FullScreen");
    if (document.fullscreenElement === null) {
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) {
            /* Firefox */
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) {
            /* Chrome, Safari and Opera */
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) {
            /* IE/Edge */
            elem.msRequestFullscreen();
        }
        button.value = "W";
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
            /* Firefox */
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            /* Chrome, Safari and Opera */
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            /* IE/Edge */
            document.msExitFullscreen();
        }
        button.value = "F"
    }
});

// Save options
document.getElementById("saveoptions").addEventListener("click", function () {
    document.getElementById("optionpage").style.display = 'none';
    DisplayGame();

    document.body.style.backgroundColor = document.getElementById("backcolor").value;
    MapColor = document.getElementById("MapColor").value;
    document.body.style.color = document.getElementById("textcolor").value;
    document.body.style.fontFamily = document.getElementById("textfont").value;

    document.getElementById("status").style.backgroundColor = document.getElementById("SideBarColor").value;
    document.getElementById("buttons").style.backgroundColor = document.getElementById("SideBarColor").value

    Settings.MapPercent = document.getElementById("MapScale").value;
    Settings.BackColor = document.getElementById("backcolor").value;
    Settings.MapColor = document.getElementById("MapColor").value;
    Settings.TextColor = document.getElementById("textcolor").value;
    Settings.TextFont = document.getElementById("textfont").value;
    Settings.BorderColor = document.getElementById("BorderColor").value;

    HemScale();
});

document.getElementById("PerkOptions").addEventListener("click", function () {
    DisplayNone();
    document.getElementById("PerkOptionsMenu").style.display = 'block';
    document.getElementById("Skip").value = "Skip " + Settings.Skip;
    document.getElementById("Vore").value = "Vore " + Settings.Vore;
});

document.getElementById("Skip").addEventListener("click", function () {
    Settings.Skip = Settings.Skip ? false : true;
    document.getElementById("Skip").value = "Skip " + Settings.Skip;
});

document.getElementById("OptionGiveEssence").addEventListener("click", function () {
    switch (Settings.GiveEssence) {
        case "Both":
            Settings.GiveEssence = "Femininity";
            break;
        case "Femininity":
            Settings.GiveEssence = "Masculinity";
            break;
        case "Masculinity":
            Settings.GiveEssence = "None";
            break;
        default:
            Settings.GiveEssence = "Both";
            break;
    }
    document.getElementById("OptionGiveEssence").value = Settings.GiveEssence;
});

document.getElementById("PerkOptionsLeave").addEventListener("click", function () {
    document.getElementById("PerkOptionsMenu").style.display = 'none';
    DisplayGame();
});

document.getElementById("HighLightDoors").addEventListener("click", function () {
    Settings.HighLightDoors = Settings.HighLightDoors ? false : true;
    document.getElementById("HighLightDoors").value = "Highlight doors " + Settings.HighLightDoors;
});