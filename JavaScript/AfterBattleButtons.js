function AfterBattleButtons(Sex = true) {
    document.getElementById("EnemyVagina").style.display = 'none';
    document.getElementById("EnemyDick").style.display = 'none';
    document.getElementById("PlayerVagina").style.display = 'none';
    document.getElementById("PlayerDick").style.display = 'none';
    document.getElementById("Anal").style.display = 'none';
    document.getElementById("Breast").style.display = 'none';
    document.getElementById("CaptureOpponent").style.display = 'none';
    document.getElementById("DungeonCaptureOpponent").style.display = 'none';
    document.getElementById("DungeonStop").style.display = 'none';
    document.getElementById("GiveCunnilingus").style.display = 'block';
    document.getElementById("GiveBlowjob").style.display = 'block';
    document.getElementById("DualPen").style.display = 'none'
    document.getElementById("DualPen").style.display = 'none';
    document.getElementById("MultiPen").style.display = 'none';

    if(window.innerHeight > 800) {
        document.getElementById("DickAction").style.display = 'none'
        document.getElementById("DickOne").style.display = 'block'
        document.getElementById("DickTwo").style.display = 'block'
    } else  {
        document.getElementById("DickAction").style.display = 'block'
    }
    if (Sex) {
        if (enemies[EnemyIndex].Orgasm > 4 && House.Dormmates.length < (House.Dorm * 3)) {
            if (Dungeon) {
                document.getElementById("DungeonCaptureOpponent").style.display = 'block'
            } else {
                document.getElementById("CaptureOpponent").style.display = 'block'
            }
        }
        if (Dungeon) {
            document.getElementById("DungeonStop").style.display = 'block';
            document.getElementById("StopSex").style.display = 'none';
        } else {
            document.getElementById("StopSex").style.display = 'block';
        }

        document.getElementById("Anal").style.display = 'block';
        document.getElementById("Breast").style.display = 'block';
        switch (CheckGender(enemies[EnemyIndex])) {
            case "cuntboy":
            case "female":
                document.getElementById("EnemyVagina").style.display = 'block';
                if (player.Dicks.length > 0) {
                    AllDick();
                }
                if (player.Pussies.length > 0) {
                    document.getElementById("PlayerVagina").style.display = 'block';
                    document.getElementById("Scissoring").style.display = 'block';
                    document.getElementById("GetCunnilingus").style.display = 'block';
                    document.getElementById("RideCowgirl").style.display = 'none';
                }
                break;
            case "hermaphrodite":
                document.getElementById("EnemyVagina").style.display = 'block';
                document.getElementById("EnemyDick").style.display = 'block';
                if (player.Dicks.length > 0) {
                    AllDick();
                }
                if (player.Pussies.length > 0) {
                    AllPussy()
                }
                break;
            case "dickgirl":
            case "male":
                document.getElementById("EnemyDick").style.display = 'block';
                if (player.Dicks.length > 0) {
                    document.getElementById("PlayerDick").style.display = 'block';
                    document.getElementById("Missionary").style.display = 'none';
                    document.getElementById("DoggyStyle").style.display = 'none';
                    document.getElementById("DoggyStyleAnal").style.display = 'block';
                    document.getElementById("GetBlowjob").style.display = 'block';
                }
                if (player.Pussies.length > 0) {
                    AllPussy();
                }
                break;
            case "doll":
                if (player.Dicks.length > 0) {
                    document.getElementById("PlayerDick").style.display = 'block';
                    document.getElementById("Missionary").style.display = 'none';
                    document.getElementById("DoggyStyle").style.display = 'none';
                    document.getElementById("DoggyStyleAnal").style.display = 'block';
                    document.getElementById("GetBlowjob").style.display = 'block';
                }
                if (player.Pussies.length > 0) {
                    document.getElementById("PlayerVagina").style.display = 'block';
                    document.getElementById("Scissoring").style.display = 'none';
                    document.getElementById("GetCunnilingus").style.display = 'block';
                    document.getElementById("RideCowgirl").style.display = 'none';
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
    } else {
        // Maybe pet the feral to get their race essence? As a way to get furry tf.
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
        }
    }

    function AllDick() {
        document.getElementById("PlayerDick").style.display = 'block';
        document.getElementById("Missionary").style.display = 'block';
        document.getElementById("DoggyStyle").style.display = 'block';
        document.getElementById("DoggyStyleAnal").style.display = 'block';
        document.getElementById("GetBlowjob").style.display = 'block';
        if (player.Dicks.length > 1) {
            document.getElementById("DualPen").style.display = 'block'
        } else {
            document.getElementById("DualPen").style.display = 'none'
        }
        if (player.Dicks.length > 2 && enemies[EnemyIndex].Pussies.length > 1) {
            document.getElementById("MultiPen").style.display = 'block';
        } else {
            document.getElementById("MultiPen").style.display = 'none';
        }
    }
}

function AllPussy() {
    document.getElementById("PlayerVagina").style.display = 'block';
    document.getElementById("Scissoring").style.display = 'block';
    document.getElementById("GetCunnilingus").style.display = 'block';
    document.getElementById("RideCowgirl").style.display = 'block';
    if (enemies[EnemyIndex].Dicks.length > 1) {
        document.getElementById("GetDualPen").style.display = 'block';
    } else {
        document.getElementById("GetDualPen").style.display = 'none';
    }
}