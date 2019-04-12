function DormEngine() {
    // connect this engine to date tracker
    for (let e of House.Dormmates) {
        // happiness
        if (!e.hasOwnProperty("Happy")) {
            e.Happy = 50;
        };
        // obedience
        if (!e.hasOwnProperty("Obe")) {
            e.Obe = 50;
        }
        // if dorm has thing to that

        // if dorm has rule === a do a stuff

        // Relationships between dormmates.
        if (House.Dormmates.length > 1) {
            // if same race
            // if attraced to
            // etc
        };
        

        // Escape system
        if (!e.hasOwnProperty("Escape")) {
            e.Escape = 0;
        }
        if (e.Obe < 30 && e.Happy < 30) {
            // Escape counter
            e.Escape++;

            // After being unhappy for 120 hours try to flee?
            if (e.Escape > 120) {
                // Count stuff that helps dorm mate to escape
                // Count those who love you very much and will tell you if somebody tries to flee
                // Count those who are super obedient 
                // Count other stuff that helps or hinder flee chance
                const FleeBoost = e.Str + e.Int,
                    SupperHappy = House.Dormmates.some(e => e.Happy > 100) ? House.Dormmates : 0,
                    SupperObe = House.Dormmates.some(e => e.Obe > 200) ? House.Dormmates : 0;

                const FleeChance = Math.random() * FleeBoost, // plus otherstuff
                    ToBeat = SupperHappy + SupperObe; // plus otherstuff
                if (ToBeat < FleeChance) {
                    // they ecaped
                    // splice
                    EventLog(`${e.FirstName} has escaped!`);
                } else {
                    EventLog(`${e.FirstName} tried to escape and has been caught.`);
                };
            };
        } else if (e.Escape > 0) {
            // Maybe insted of 0 have e.escape > value dependent on happy so that those who have been
            // very happy doesn't flee as fast as others.
            // Count down if they are out of escape values
            e.Escape--;
        };
    };
};