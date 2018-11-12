 function GrowthScale(who) {
    return (who.Height / 160)
 } // I put this a function to make it easier to trial different formulas.
 
 //For how much essence you need to have multiples of each genital set
 var StepPussy = 1500;
 var StepBoobs = 1000;
 var StepPenis = 1000;
 var StepBalls = 1500;
 
 function BalanceEssenceCheck(who) {
     if (!who.hasOwnProperty("Dicks")) {
         who.Dicks = [];
     }
     if (!who.hasOwnProperty("Balls")) {
         who.Balls = [];
     }
     if (!who.hasOwnProperty("Pussies")) {
         who.Pussies = [];
     }
     if (!who.hasOwnProperty("Boobies")) {
         who.Boobies = [];
         var Boob = {
             Size: 0,
             Type: who.Race
         }
         who.Boobies.push(Boob);
     }
     if (!who.hasOwnProperty("Anal")) {
         who.Anal = []
         var Anal = {
             Size: 0,
             Type: who.Race,
             Virgin: true,
             stretch: 1,
         }
         who.Anal.push(Anal);
     }
	 {//Dicks
	//Every 1000 gets you an extra dick
     var dicktotal = Math.min(Math.floor(who.Masc / StepPenis + 1),Settings.MaxLimbs.MaxDicks); 	 
     if (who.Masc < 30 && who.Dicks.length > 0) {
         who.Dicks.pop();
     } else if (who.Masc >= 30 && who.Dicks.length == 0) {
         var Dick = {
             Size: 5,
             Type: who.Race,
             Virgin: true
         }
         who.Dicks.push(Dick);
		 //Start of balancing organs
     } if (who.Masc >= StepPenis) {
         while (who.Dicks.length < dicktotal) {
					var Dick = {
						 Size: 5,
						 Type: who.Race,
						 Virgin: true
					 }
					 who.Dicks.push(Dick);
		 }
		 while(dicktotal < who.Dicks.length) //Got too many dicks?
			 who.Dicks.pop();
		 for (var e = 0; e < who.Dicks.length; e++) {
             who.Dicks[e].Type = who.Race;
             who.Dicks[e].Size = Math.max(5,Math.min(who.Height / 3, Math.max(who.Masc / 30 * GrowthScale(who) / dicktotal, who.Height * 0.03)));
         }
     }
	 }
     {//Balls
	 var balltotal = Math.min(Math.floor(who.Masc / StepBalls + 1),Settings.MaxLimbs.MaxBalls); //Every 1500 gets you more balls
	 if (who.Masc < 50 && who.Balls.length > 0) {
         who.Balls.pop();
     } else if (who.Masc >= 50 && who.Balls.length == 0) {
         var Ball = {
             Size: who.Masc/50 * GrowthScale(who),
             Type: who.Race,
             CumMax: who.Masc/50*400,
             Cum: who.Masc/50*350,
             CumRate: 0,
             CumBaseRate: 0.5
         }
         who.Balls.push(Ball);
		 //Start of balancing organs
     } else if (who.Masc >= StepBalls) {         
         while (balltotal > who.Balls.length) { //Need more balls?
					var Ball = {
                     Size: 2,
                     Type: who.Race,
                     CumMax: 2,
                     Cum: 0,
                     CumRate: 0,
                     CumBaseRate: 0.5
					}
					 who.Balls.push(Ball);
		 }
		 while(balltotal < who.Balls.length) //Got too many balls?
			 who.Balls.pop();
		 for (var e = 0; e < who.Balls.length; e++) {
             who.Balls[e].Type = who.Race;
             who.Balls[e].Size = Math.min(who.Height / 3, who.Masc / 50 / balltotal);
         }
	 }
	 }
	 {//Pussies
	 var pussytotal = Math.min(Math.floor(who.Femi / StepPussy + 1),Settings.MaxLimbs.MaxVaginas); //Every 1500 gets you more pussies
     if (who.Femi < 30 && who.Pussies.length > 0) {
         who.Pussies.pop();
         who.Boobies[0].Size = 0;
     } else if (who.Femi >= 30 && who.Pussies.length == 0) {
         var Pussy = {
             Size: Math.max(who.Height * 0.03, who.Femi / 25 * GrowthScale(who)),
             Type: who.Race,
             Virgin: true
         }
         who.Pussies.push(Pussy);
		 
		 while(pussytotal < who.Pussies.length) {//Got too many pussies?
			 who.Pussies.pop();
			 
		 }
		 //Start of balancing organs
     } if (who.Femi >= StepPussy) {
         while (pussytotal < who.Pussies.length) { //Need more pussies?
			var Pussy = {
				 Size: 5,
				 Type: who.Race,
				 Virgin: true
			 }
			 who.Pussies.push(Pussy);
		 }
		 while(pussytotal < who.Pussies.length) {//Got too many pussies?
			 who.Pussies.pop();
			 
		 }
		 for (var e = 0; e < who.Pussies.length; e++) {
             who.Pussies[e].Type = who.Race;
             who.Pussies[e].Size = Math.max(5,Math.min(who.Height / 3, who.Femi / 50 / pussytotal));
         }
	 }
	 }
     {//Boobs
	 var boobtotal = Math.min(Math.floor(who.Femi / StepBoobs + 1),Settings.MaxLimbs.MaxBoobs); //Every 1000 gets you more boobs
     for (var e = 0; e < who.Boobies.length; e++) {
         who.Boobies[e].Type = who.Race;
         who.Boobies[e].Size = Math.min(who.Height / 3, Math.max(who.Femi / 60 * GrowthScale(who) - boobtotal, 0));
         if (e == who.Boobies.length - 1 && who.Femi / 60 - boobtotal > who.Height / 3 && Settings.MaxLimbs.MaxBoobies > e) {
             var Boob = {
                 Size: 0,
                 Type: who.Race
             }
             who.Boobies.push(Boob);
		 //Start of balancing organs
     } else if (who.Femi >= StepBoobs) {
         while (boobtotal > who.Boobies.length) { //Need more boobs?
			var Boob = {
				 Size: 0,
				 Type: who.Race
			 }
			 who.Boobies.push(Boob);
		 } while(boobtotal < who.Boobies.length) //Got too many boobs?
				who.Boobies.pop();
		 for (var e = 0; e < who.Boobies.length; e++) {
             who.Boobies[e].Type = who.Race;
             who.Boobies[e].Size = Math.min(who.Height / 3, who.Femi / 30 / boobtotal);
         }
	   }
	 } 
	 
	 if (who.Anal.length == 0) {
         var Anal = {
             Size: 0,
             Type: who.Race,
             Virgin: true,
             stretch: 1,
         }
         who.Anal.push(Anal);
     } else {
         who.Anal[0].Size = who.Height / 12;
     }
     return;
 }}