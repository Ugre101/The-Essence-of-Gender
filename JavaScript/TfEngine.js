var TF = {
    Status: false,
    Counter: 0,
    To: "human"
}

function TfEngine(Tf_to) {
    if (!TF.Status) {
        TF.Status = true;
        TF.To = Tf_to;
        TF.Counter = 0;
    } else {
        TF.Counter++;
        switch (TF.To) {
            case "elf":
                if (player.SecondRace != "elf") {
                    if (TF.Counter > 1000) {
                        player.SecondRace = "elf";
                        EventLog("Completing the transfomation you are now half elf, half " + player.Race);
                        player.Race = "elf";
                        TF.Status = false;
                        TF.Counter = 0;
                        GenitalChange("elf");
                    } else if (TF.Counter == 500) {
                        EventLog("Your skin feels smooth as silk.")
                    }
                } else {
                    if (TF.Counter > 1000) {
                        EventLog("You are now an elf!");
                        player.Race = "elf";
                        TF.Status = false;
                        TF.Counter = 0;
                    } else if (TF.Counter == 500) {
                        EventLog("Your ears grow to a pointy shape.");
                    }
                }
                break;
            case "human":
                if (player.SecondRace != "human") {
                    if (TF.Counter > 1000) {
                        EventLog("You are now a human!");
                        player.SecondRace = "human";
                        TF.Status = false;
                        TF.Counter = 0;
                        GenitalChange("human");
                    } else if (TF.Counter == 500) {
                        EventLog("Your body starts to feel familiar...");
                    }
                } else {
                    if (TF.Counter > 1000) {
                        EventLog("You are now a human!");
                        player.Race = "human";
                        TF.Status = false;
                        TF.Counter = 0;
                    } else if (TF.Counter == 500) {
                        EventLog("Your body starts to feel familiar...");
                    }
                }
                break;
            case "equine taur":
                if (player.SecondRace != "equine taur") {
                    if (TF.Counter > 1000) {
                        EventLog("Completing the transformation, you are now a centaur with a horse's lower body and a " + player.Race + "'s upper body.");
                        player.SecondRace = "equine taur";
                        TF.Status = false;
                        TF.Counter = 0;
                        GenitalChange("equine");
                    } else if (TF.Counter == 300) {
                        EventLog("The changes to your lower body is so dramatic that you fall to the ground. Trying to get back up, you see your torso split, bending in half, then stretching back.")
                    } else if (TF.Counter == 400) {
                        EventLog("Where your torso split you grow a second set of legs, and watch as all four legs transform to those of a horse.");
					}	else if (TF.Counter == 600) {
                        EventLog("You feel your lower torso growing wider, soon resembling a horse's torso.");
                    }
                    } else if (TF.Counter == 800) {
                        EventLog("Your genitals shift around as they transform into their equine equivalent.");
                    }
                }
                break;
            case "equine":
                if (player.SecondRace != "equine") {
                    if (TF.Counter > 1000) {
                        EventLog("Completing the transformation, you are now a satyr with an equine lower body and a " + player.Race + " upperbody.");
                        player.SecondRace = "equine";
                        TF.Status = false;
                        TF.Counter = 0;
                        GenitalChange("equine");
                    } else if (TF.Counter == 300) {
                        EventLog("The skin on your legs thicken and grow a thin layer of fur. Your toes fuse together, transforming into hooves.")
                    } else if (TF.Counter == 600) {
                        EventLog("Your genitals transform into their equine equivalent.")
                    }
                } else {
                    if (TF.Counter > 1000) {
                        EventLog("Completing the transformation you are now a anthropomorphic equine.");
                        PlayerDay.Race = "equine";
                        TF.Status = false;
                        TF.Counter = 0;
                        GenitalChange("equine");
                    } else if (TF.Counter == 300) {
                        EventLog("The fur that covered your legs continues to spread upwards, soon covering your entire torso.");
                    }else if (TF.Counter == 600) {
                        EventLog("You see your face stretch out, shifting into a horse's muzzle.");
                }
        }
    }
}