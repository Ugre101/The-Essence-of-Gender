function DateTracker() {
    Flags.Date.Hour++;
    HouseEngine();
    if (Flags.Date.Hour % 6 === 0) {
        DocId("CurrentDate").innerHTML = `${Flags.Date.Day}/${Flags.Date.Month}/${Flags.Date.Year} 
        ${Flags.Date.Hour < 10 ? `0${Flags.Date.Hour}:00` : `${Flags.Date.Hour}:00`}`;
    }
    if (Flags.Date.Hour > 23) {
        Flags.Date.Day++;
        Flags.Date.Hour = 0;
        if (Flags.Date.Day > 30) {
            Flags.Date.Day = 1;
            Flags.Date.Month++;
            if (Flags.Date.Month > 12) {
                Flags.Date.Month = 1;
                Flags.Date.Year++;
                player.Age++;
            }
        }
        PregnanyEngine();
    }
    // health/will && fat burn
    if (!battle) {
        FoodEngine();
        FluidsEngine();
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
            if (player.Vore.VorePerks.hasOwnProperty("PredatorsMeta") ? player.Vore.VorePerks.PredatorsMeta.Count > 0 : false) {
                const RestRate = player.Vore.VorePerks.PredatorsMeta.Count * 2;
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
                if ((player.Fat / player.Weight) * 100 > 18) {
                    player.Fat -= player.Fat / 100 * player.Vore.VorePerks.PredatorsMeta.Count;
                }
            }
        }
    }
};