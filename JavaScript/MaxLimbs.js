document.getElementById("EssenceOptions").addEventListener("click", function () {
    DisplayNone();
    document.getElementById("EssenceOptionsMenu").style.display = 'block';
    document.getElementById("MaxMenu").style.display = 'none';
    if (Settings.EssenceAuto) {
        document.getElementById("EssenceAuto").value = "Essence Auto";
        document.getElementById("ManualGrowth").style.display = 'none';
    } else {
        document.getElementById("EssenceAuto").value = "Essence Manual";
        document.getElementById("ManualGrowth").style.display = 'block';
    }
    document.getElementById("BoobsLess").value = "Boobs " + Settings.MaxLimbs.MaxBoobs + "--";
    document.getElementById("BoobsMore").value = "Boobs " + Settings.MaxLimbs.MaxBoobs + "++";
    document.getElementById("VaginasLess").value = "Pussies " + Settings.MaxLimbs.MaxVaginas + "--";
    document.getElementById("VaginasMore").value = "Pussies " + Settings.MaxLimbs.MaxVaginas + "++";
    document.getElementById("DicksLess").value = "Dicks " + Settings.MaxLimbs.MaxDicks + "--";
    document.getElementById("DicksMore").value = "Dicks " + Settings.MaxLimbs.MaxDicks + "++";
    document.getElementById("BallsLess").value = "Balls " + Settings.MaxLimbs.MaxBalls + "--";
    document.getElementById("BallsMore").value = "Balls " + Settings.MaxLimbs.MaxBalls + "++";
});

document.getElementById("BoobsLess").addEventListener("click", function () {
    if (Settings.MaxLimbs.MaxBoobs > 0) {
        Settings.MaxLimbs.MaxBoobs--;
    }
    document.getElementById("BoobsLess").value = "Boobs " + Settings.MaxLimbs.MaxBoobs + "--";
    document.getElementById("BoobsMore").value = "Boobs " + Settings.MaxLimbs.MaxBoobs + "++";
});
document.getElementById("BoobsMore").addEventListener("click", function () {
    Settings.MaxLimbs.MaxBoobs++;
    document.getElementById("BoobsLess").value = "Boobs " + Settings.MaxLimbs.MaxBoobs + "--";
    document.getElementById("BoobsMore").value = "Boobs " + Settings.MaxLimbs.MaxBoobs + "++";
});
document.getElementById("VaginasLess").addEventListener("click", function () {
    if (Settings.MaxLimbs.MaxVaginas > 0) {
        Settings.MaxLimbs.MaxVaginas--;
    }
    document.getElementById("VaginasLess").value = "Pussies " + Settings.MaxLimbs.MaxVaginas + "--";
    document.getElementById("VaginasMore").value = "Pussies " + Settings.MaxLimbs.MaxVaginas + "++";
});
document.getElementById("VaginasMore").addEventListener("click", function () {
    Settings.MaxLimbs.MaxVaginas++;
    document.getElementById("VaginasLess").value = "Pussies " + Settings.MaxLimbs.MaxVaginas + "--";
    document.getElementById("VaginasMore").value = "Pussies " + Settings.MaxLimbs.MaxVaginas + "++";
});
document.getElementById("DicksLess").addEventListener("click", function () {
    if (Settings.MaxLimbs.MaxDicks > 0) {
        Settings.MaxLimbs.MaxDicks--;
    }
    document.getElementById("DicksLess").value = "Dicks " + Settings.MaxLimbs.MaxDicks + "--";
    document.getElementById("DicksMore").value = "Dicks " + Settings.MaxLimbs.MaxDicks + "++";
});
document.getElementById("DicksMore").addEventListener("click", function () {
    Settings.MaxLimbs.MaxDicks++;
    document.getElementById("DicksLess").value = "Dicks " + Settings.MaxLimbs.MaxDicks + "--";
    document.getElementById("DicksMore").value = "Dicks " + Settings.MaxLimbs.MaxDicks + "++";
});
document.getElementById("BallsLess").addEventListener("click", function () {
    if (Settings.MaxLimbs.MaxBalls > 0) {
        Settings.MaxLimbs.MaxBalls--;
    }
    document.getElementById("BallsLess").value = "Balls " + Settings.MaxLimbs.MaxBalls + "--";
    document.getElementById("BallsMore").value = "Balls " + Settings.MaxLimbs.MaxBalls + "++";
});
document.getElementById("BallsMore").addEventListener("click", function () {
    Settings.MaxLimbs.MaxBalls++;
    document.getElementById("BallsLess").value = "Balls " + Settings.MaxLimbs.MaxBalls + "--";
    document.getElementById("BallsMore").value = "Balls " + Settings.MaxLimbs.MaxBalls + "++";
});


document.getElementById("NoExtra").addEventListener("click", function () {
    if (document.getElementById("MaxMenu").style.display == 'none') {
        document.getElementById("MaxMenu").style.display = 'block';
        document.getElementById("NoExtra").value = "Hide";
    } else {
        document.getElementById("MaxMenu").style.display = 'none';
        document.getElementById("NoExtra").value = "Max boobs/dicks etc";
    }
});