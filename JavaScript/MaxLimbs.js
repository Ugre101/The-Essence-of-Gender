DocId("EssenceOptions").addEventListener("click", function () {
    DisplayNone();
    DocId("EssenceOptionsMenu").style.display = 'block';
    DocId("MaxMenu").style.display = 'none';
    if (Settings.EssenceAuto) {
        DocId("EssenceAuto").value = "Essence Auto";
        DocId("ManualGrowth").style.display = 'none';
    } else {
        DocId("EssenceAuto").value = "Essence Manual";
        DocId("ManualGrowth").style.display = 'block';
    }
    DocId("BoobsLess").value = "Boobs " + Settings.MaxLimbs.MaxBoobs + "--";
    DocId("BoobsMore").value = "Boobs " + Settings.MaxLimbs.MaxBoobs + "++";
    DocId("VaginasLess").value = "Pussies " + Settings.MaxLimbs.MaxVaginas + "--";
    DocId("VaginasMore").value = "Pussies " + Settings.MaxLimbs.MaxVaginas + "++";
    DocId("DicksLess").value = "Dicks " + Settings.MaxLimbs.MaxDicks + "--";
    DocId("DicksMore").value = "Dicks " + Settings.MaxLimbs.MaxDicks + "++";
    DocId("BallsLess").value = "Balls " + Settings.MaxLimbs.MaxBalls + "--";
    DocId("BallsMore").value = "Balls " + Settings.MaxLimbs.MaxBalls + "++";
});

DocId("BoobsLess").addEventListener("click", function () {
    if (Settings.MaxLimbs.MaxBoobs > 0) {
        Settings.MaxLimbs.MaxBoobs--;
    }
    DocId("BoobsLess").value = "Boobs " + Settings.MaxLimbs.MaxBoobs + "--";
    DocId("BoobsMore").value = "Boobs " + Settings.MaxLimbs.MaxBoobs + "++";
});
DocId("BoobsMore").addEventListener("click", function () {
    Settings.MaxLimbs.MaxBoobs++;
    DocId("BoobsLess").value = "Boobs " + Settings.MaxLimbs.MaxBoobs + "--";
    DocId("BoobsMore").value = "Boobs " + Settings.MaxLimbs.MaxBoobs + "++";
});
DocId("VaginasLess").addEventListener("click", function () {
    if (Settings.MaxLimbs.MaxVaginas > 0) {
        Settings.MaxLimbs.MaxVaginas--;
    }
    DocId("VaginasLess").value = "Pussies " + Settings.MaxLimbs.MaxVaginas + "--";
    DocId("VaginasMore").value = "Pussies " + Settings.MaxLimbs.MaxVaginas + "++";
});
DocId("VaginasMore").addEventListener("click", function () {
    Settings.MaxLimbs.MaxVaginas++;
    DocId("VaginasLess").value = "Pussies " + Settings.MaxLimbs.MaxVaginas + "--";
    DocId("VaginasMore").value = "Pussies " + Settings.MaxLimbs.MaxVaginas + "++";
});
DocId("DicksLess").addEventListener("click", function () {
    if (Settings.MaxLimbs.MaxDicks > 0) {
        Settings.MaxLimbs.MaxDicks--;
    }
    DocId("DicksLess").value = "Dicks " + Settings.MaxLimbs.MaxDicks + "--";
    DocId("DicksMore").value = "Dicks " + Settings.MaxLimbs.MaxDicks + "++";
});
DocId("DicksMore").addEventListener("click", function () {
    Settings.MaxLimbs.MaxDicks++;
    DocId("DicksLess").value = "Dicks " + Settings.MaxLimbs.MaxDicks + "--";
    DocId("DicksMore").value = "Dicks " + Settings.MaxLimbs.MaxDicks + "++";
});
DocId("BallsLess").addEventListener("click", function () {
    if (Settings.MaxLimbs.MaxBalls > 0) {
        Settings.MaxLimbs.MaxBalls--;
    }
    DocId("BallsLess").value = "Balls " + Settings.MaxLimbs.MaxBalls + "--";
    DocId("BallsMore").value = "Balls " + Settings.MaxLimbs.MaxBalls + "++";
});
DocId("BallsMore").addEventListener("click", function () {
    Settings.MaxLimbs.MaxBalls++;
    DocId("BallsLess").value = "Balls " + Settings.MaxLimbs.MaxBalls + "--";
    DocId("BallsMore").value = "Balls " + Settings.MaxLimbs.MaxBalls + "++";
});


DocId("NoExtra").addEventListener("click", function () {
    if (DocId("MaxMenu").style.display == 'none') {
        DocId("MaxMenu").style.display = 'block';
        DocId("NoExtra").value = "Hide";
    } else {
        DocId("MaxMenu").style.display = 'none';
        DocId("NoExtra").value = "Max boobs/dicks etc";
    }
});