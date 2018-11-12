 function GrowthScale(who) {
    return (who.Height / 160)
 } // I put this a function to make it easier to trial different formulas.
 
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
	//Every 1000 gets you an extra dick
     var dicktotal = Math.floor(who.Masc / 1000 + 1); 	 
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
     } else if (dicktotal > 1) {
         for (var e = 0; e < dicktotal; e++) {
				if(e > who.Dicks.length) { //Need more dicks?
					var Dick = {
						 Size: 5,
						 Type: who.Race,
						 Virgin: true
					 }
					 who.Dicks.push(Dick);
             }
		 }
		 while(dicktotal < who.Dicks.length) //Got too many dicks?
			 who.Dicks.pop();
		 for (var e = 0; e < who.Dicks.length; e++) {
             who.Dicks[e].Type = who.Race;
             who.Dicks[e].Size = Math.max(5,Math.min(who.Height / 3, Math.max(who.Masc / 30 * GrowthScale(who) / dicktotal, who.Height * 0.03)));
         }
     }

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
     } else if (who.Masc >= 1500) {
         var balltotal = Math.floor(who.Masc / 1500 + 1); //Every 1500 gets you more balls
         for (var e = 0; e < balltotal; e++) {
				if(e > who.Balls.length) { //Need more balls?
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
		 }
		 while(balltotal < who.Balls.length) //Got too many balls?
			 who.Balls.pop();
		 for (var e = 0; e < who.Balls.length; e++) {
             who.Balls[e].Type = who.Race;
             who.Balls[e].Size = Math.max(2,Math.min(who.Height / 3, who.Masc / 50 / balltotal));
         }
	 }

	 var pussytotal = Math.floor(who.Femi / 1500 + 1); //Every 1500 gets you more pussies
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
		 console.log("Push 1");
		 //Start of balancing organs
		 while(pussytotal < who.Pussies.length) {//Got too many pussies?
			 who.Pussies.pop();
			 console.log("Pop 1");
		 }
     } else if (who.Femi >= 1500) {
         for (var e = 0; e < pussytotal; e++) {
				if(e > who.Pussies.length) { //Need more pussies?
					var Pussy = {
						 Size: 5,
						 Type: who.Race,
						 Virgin: true
					 }
					 who.Pussies.push(Pussy);
					 console.log("Push 2");
             }
		 }
		 while(pussytotal < who.Pussies.length) {//Got too many pussies?
			 who.Pussies.pop();
			 console.log("Pop 1");
		 }
		 for (var e = 0; e < who.Pussies.length; e++) {
             who.Pussies[e].Type = who.Race;
             who.Pussies[e].Size = Math.max(5,Math.min(who.Height / 3, who.Femi / 50 / pussytotal));
         }
	 }

     var boobtotal = 0;
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
     } else if (who.Femi >= 1000) {
         var boobtotal = Math.floor(who.Femi / 1000 + 1); //Every 1000 gets you more boobs
         for (var e = 0; e <= boobtotal; e++) {
			if(e > who.Boobies.length) { //Need more boobs?
				var Boob = {
					 Size: 0,
					 Type: who.Race
				 }
				 who.Boobies.push(Boob);
			}
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
 }