DocId("EssenceOptions").addEventListener("click", function () {
    const {
        MaxBoobs,
        MaxVaginas,
        MaxDicks,
        MaxBalls
    } = Settings.MaxLimbs
    DisplayNone();
    DocId("EssenceOptionsMenu").style.display = 'block';
    DocId("MaxMenu").style.display = 'none';
    DocId("EssenceAuto").innerHTML = Settings.EssenceAuto ? "Essence Auto" : "Essence Manual";
    DocId("ManualGrowth").style.display = 'block';
    DocId("BoobsLess").innerHTML = `Boobs ${MaxBoobs}--`;
    DocId("BoobsMore").innerHTML = `Boobs ${MaxBoobs}++`;
    DocId("VaginasLess").innerHTML = `Pussies ${MaxVaginas}--`;
    DocId("VaginasMore").innerHTML = `Pussies ${MaxVaginas}++`;
    DocId("DicksLess").innerHTML = `Dicks ${MaxDicks}--`;
    DocId("DicksMore").innerHTML = `Dicks ${MaxDicks}++`;
    DocId("BallsLess").innerHTML = `Balls ${MaxBalls}--`;
    DocId("BallsMore").innerHTML = `Balls ${MaxBalls}++`;
});

DocId("BoobsLess").addEventListener("click", function () {
    if (Settings.MaxLimbs.MaxBoobs > 1) {
        Settings.MaxLimbs.MaxBoobs--;
    }
    DocId("BoobsLess").innerHTML = "Boobs " + Settings.MaxLimbs.MaxBoobs + "--";
    DocId("BoobsMore").innerHTML = "Boobs " + Settings.MaxLimbs.MaxBoobs + "++";
});
DocId("BoobsMore").addEventListener("click", function () {
    Settings.MaxLimbs.MaxBoobs++;
    DocId("BoobsLess").innerHTML = "Boobs " + Settings.MaxLimbs.MaxBoobs + "--";
    DocId("BoobsMore").innerHTML = "Boobs " + Settings.MaxLimbs.MaxBoobs + "++";
});
DocId("VaginasLess").addEventListener("click", function () {
    if (Settings.MaxLimbs.MaxVaginas > 0) {
        Settings.MaxLimbs.MaxVaginas--;
    }
    DocId("VaginasLess").innerHTML = "Pussies " + Settings.MaxLimbs.MaxVaginas + "--";
    DocId("VaginasMore").innerHTML = "Pussies " + Settings.MaxLimbs.MaxVaginas + "++";
});
DocId("VaginasMore").addEventListener("click", function () {
    Settings.MaxLimbs.MaxVaginas++;
    DocId("VaginasLess").innerHTML = "Pussies " + Settings.MaxLimbs.MaxVaginas + "--";
    DocId("VaginasMore").innerHTML = "Pussies " + Settings.MaxLimbs.MaxVaginas + "++";
});
DocId("DicksLess").addEventListener("click", function () {
    if (Settings.MaxLimbs.MaxDicks > 0) {
        Settings.MaxLimbs.MaxDicks--;
    }
    DocId("DicksLess").innerHTML = "Dicks " + Settings.MaxLimbs.MaxDicks + "--";
    DocId("DicksMore").innerHTML = "Dicks " + Settings.MaxLimbs.MaxDicks + "++";
});
DocId("DicksMore").addEventListener("click", function () {
    Settings.MaxLimbs.MaxDicks++;
    DocId("DicksLess").innerHTML = "Dicks " + Settings.MaxLimbs.MaxDicks + "--";
    DocId("DicksMore").innerHTML = "Dicks " + Settings.MaxLimbs.MaxDicks + "++";
});
DocId("BallsLess").addEventListener("click", function () {
    if (Settings.MaxLimbs.MaxBalls > 0) {
        Settings.MaxLimbs.MaxBalls--;
    }
    DocId("BallsLess").innerHTML = "Balls " + Settings.MaxLimbs.MaxBalls + "--";
    DocId("BallsMore").innerHTML = "Balls " + Settings.MaxLimbs.MaxBalls + "++";
});
DocId("BallsMore").addEventListener("click", function () {
    Settings.MaxLimbs.MaxBalls++;
    DocId("BallsLess").innerHTML = "Balls " + Settings.MaxLimbs.MaxBalls + "--";
    DocId("BallsMore").innerHTML = "Balls " + Settings.MaxLimbs.MaxBalls + "++";
});


DocId("NoExtra").addEventListener("click", function () {
    if (DocId("MaxMenu").style.display == 'none') {
        DocId("MaxMenu").style.display = 'block';
        DocId("NoExtra").innerHTML = "Hide";
    } else {
        DocId("MaxMenu").style.display = 'none';
        DocId("NoExtra").innerHTML = "Max boobs/dicks etc";
    }
});