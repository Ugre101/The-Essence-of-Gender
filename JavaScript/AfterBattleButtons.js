function AfterBattleButtons() {
    if (enemies[EnemyIndex].Orgasm > 4 && House.Dormmates.length < (House.Dorm * 3)) {
        document.getElementById("CaptureOpponent").style.display = "block"
    } else {
        document.getElementById("CaptureOpponent").style.display = "none"
    }

    switch (CheckGender(enemies[EnemyIndex])) {
        case "female":
            document.getElementById("GiveCunnilingus").style.display = 'block';
            document.getElementById("GiveBlowjob").style.display = 'none';
            if (player.Dicks.length > 0) {
                document.getElementById("PlayerDick").style.display = 'block';
                document.getElementById("Missionary").style.display = 'block';
                document.getElementById("DoggyStyle").style.display = 'block';
                document.getElementById("DoggyStyleAnal").style.display = 'block';
                document.getElementById("GetBlowjob").style.display = 'block';
            } else {
                document.getElementById("PlayerDick").style.display = 'none';
            }

            if (player.Pussies.length > 0) {
                document.getElementById("PlayerVagina").style.display = 'block';
                document.getElementById("Scissoring").style.display = 'block';
                document.getElementById("GetCunnilingus").style.display = 'block';
                document.getElementById("RideCowgirl").style.display = 'none';
            } else {
                document.getElementById("PlayerVagina").style.display = 'none';
            }
            break;
        case "hermaphrodite":
            document.getElementById("GiveCunnilingus").style.display = 'block';
            document.getElementById("GiveBlowjob").style.display = 'block';
            if (player.Dicks.length > 0) {
                document.getElementById("PlayerDick").style.display = 'block';
                document.getElementById("Missionary").style.display = 'block';
                document.getElementById("DoggyStyle").style.display = 'block';
                document.getElementById("DoggyStyleAnal").style.display = 'block';
                document.getElementById("GetBlowjob").style.display = 'block';
            } else {
                document.getElementById("PlayerDick").style.display = 'none';
            }

            if (player.Pussies.length > 0) {
                document.getElementById("PlayerVagina").style.display = 'block';
                document.getElementById("Scissoring").style.display = 'block';
                document.getElementById("GetCunnilingus").style.display = 'block';
                document.getElementById("RideCowgirl").style.display = 'block';
            } else {
                document.getElementById("PlayerVagina").style.display = 'none';
            }
            break;
        case "male":
            console.log(true)
            document.getElementById("GiveBlowjob").style.display = 'block';
            document.getElementById("GiveCunnilingus").style.display = 'none';
            if (player.Dicks.length > 0) {
                document.getElementById("PlayerDick").style.display = 'block';
                document.getElementById("Missionary").style.display = 'none';
                document.getElementById("DoggyStyle").style.display = 'none';
                document.getElementById("DoggyStyleAnal").style.display = 'block';
                document.getElementById("GetBlowjob").style.display = 'block';
            } else {
                document.getElementById("PlayerDick").style.display = 'none';
            }

            if (player.Pussies.length > 0) {
                document.getElementById("PlayerVagina").style.display = 'block';
                document.getElementById("Scissoring").style.display = 'none';
                document.getElementById("GetCunnilingus").style.display = 'block';
                document.getElementById("RideCowgirl").style.display = 'block';
            } else {
                document.getElementById("PlayerVagina").style.display = 'none';
            }
            break;
        case "doll":
            document.getElementById("GiveCunnilingus").style.display = 'none';
            document.getElementById("GiveBlowjob").style.display = 'none';
            if (player.Dicks.length > 0) {
                document.getElementById("PlayerDick").style.display = 'block';
                document.getElementById("Missionary").style.display = 'none';
                document.getElementById("DoggyStyle").style.display = 'none';
                document.getElementById("DoggyStyleAnal").style.display = 'block';
                document.getElementById("GetBlowjob").style.display = 'block';
            } else {
                document.getElementById("PlayerDick").style.display = 'none';
            }
            if (player.Pussies.length > 0) {
                document.getElementById("PlayerVagina").style.display = 'block';
                document.getElementById("Scissoring").style.display = 'none';
                document.getElementById("GetCunnilingus").style.display = 'block';
                document.getElementById("RideCowgirl").style.display = 'none';
            } else {
                document.getElementById("PlayerVagina").style.display = 'none';
            }
    }

    document.getElementById("GetRimjob").style.display = 'block';
    document.getElementById("GiveRimjob").style.display = 'block';

    if (enemies[EnemyIndex].Height * 9 < player.Height) {
        document.getElementById("Insertion").style.display = 'block';
    } else {
        document.getElementById("Insertion").style.display = 'none';
    }

    var Milktotal = 0;
    for (var b = 0; b < player.Boobies.length; b++) {
        Milktotal += player.Boobies[b].Milk;
    }
    if (Milktotal > 100) {
        document.getElementById("BreastFeed").style.display = 'block';
    } else {
        document.getElementById("BreastFeed").style.display = 'none';
    }

    if (Settings.Vore) {
        if (StomachCapacity() > enemies[EnemyIndex].Weight) {
            document.getElementById("OralVore").style.display = 'block';
        } else {
            document.getElementById("OralVore").style.display = 'none';
        }
        if (VaginaCapacity() > enemies[EnemyIndex].Weight) {
            document.getElementById("Unbirth").style.display = 'block';
        } else {
            document.getElementById("Unbirth").style.display = 'none';
        }
        if (BallsCapacity() > enemies[EnemyIndex].Weight) {
            document.getElementById("CockVore").style.display = 'block';
        } else {
            document.getElementById("CockVore").style.display = 'none';
        }
        if (BreastCapacity() > enemies[EnemyIndex].Weight) {
            document.getElementById("BreastVore").style.display = 'block';
        } else {
            document.getElementById("BreastVore").style.display = 'none'
        }
        if (AnalCapacity() > enemies[EnemyIndex].Weight) {
            document.getElementById("AnalVore").style.display = 'block';
        } else {
            document.getElementById("AnalVore").style.display = 'none';
        }
    } else {
        document.getElementById("OralVore").style.display = 'none';
        document.getElementById("Unbirth").style.display = 'none';
        document.getElementById("CockVore").style.display = 'none';
        document.getElementById("BreastVore").style.display = 'none'
        document.getElementById("AnalVore").style.display = 'none';
    }


}