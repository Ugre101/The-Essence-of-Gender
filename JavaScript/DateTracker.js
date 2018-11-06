function DateTracker() {
    if (!battle) {
        Flags.Date.Hour++;
        HouseEngine();
        FluidsEngine();
        if (Flags.Date.Hour > 24) {
            Flags.Date.Day++;
            Flags.Date.Hour = 0;
            PlayerDay++;
            if (Flags.Date.Day > 30) {
                Flags.Date.Day = 1;
                Flags.Date.Month++;
                if (Flags.Date.Month > 12) {
                    Flags.Date.Month = 1;
                    Flags.Date.Year++;
                    player.Age++;
                }
            }
            document.getElementById("CurrentDate").innerHTML = Flags.Date.Day + "/" + Flags.Date.Month + "/" + Flags.Date.Year;
            PregnanyEngine();
        }
        FoodEngine();
        // health/will && fat burn
        player.RestRate = 1 + player.Perks.FasterRest.Count * 1;
        if (player.Health < player.MaxHealth && player.Fat >= player.Height / 100) {
            if ((player.Health + player.RestRate) > player.MaxHealth) {
                player.Health = player.MaxHealth;
            } else {
                player.Health += player.RestRate;
            }
        }
        if (player.WillHealth < player.MaxWillHealth && player.Fat >= player.Height / 100) {
            if ((player.WillHealth + player.RestRate) > player.MaxWillHealth) {
                player.WillHealth = player.MaxWillHealth;
            } else {
                player.WillHealth += player.RestRate;
            }
        }
        if (player.Fat <= player.Height / 100) {
            player.Health -= 1;
            player.WillHealth -= 1;
        }
        if (Settings.Vore) {
            if (player.Vore.VorePerks.hasOwnProperty("PredatorsMeta")) {
                var RestRate = player.Vore.VorePerks.PredatorsMeta.Count * 2;
                if (player.Health < player.MaxHealth && player.Fat >= player.Height / 100) {
                    if ((player.Health + RestRate) > player.MaxHealth) {
                        player.Health = player.MaxHealth;
                    } else {
                        player.Health += RestRate;
                    }
                }
                if (player.WillHealth < player.MaxWillHealth && player.Fat >= player.Height / 100) {
                    if ((player.WillHealth + RestRate) > player.MaxWillHealth) {
                        player.WillHealth = player.MaxWillHealth;
                    } else {
                        player.WillHealth += RestRate;
                    }
                }
                player.Fat -= RestRate/20;
            }
        }
    }
}