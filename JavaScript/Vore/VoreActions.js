 function VoreActionsOralVore() {
     if (enemies[EnemyIndex].Weight < StomachCapacity()) {
         if (Settings.ImgPack) {
             ImgChose("OralVore", enemies[EnemyIndex], "Vore");
         }
         enemies[EnemyIndex].StartWeight = enemies[EnemyIndex].Weight;
         player.Vore.Stomach.push(enemies[EnemyIndex]);
         enemies.splice(EnemyIndex, 1);
         DocId("SexText").innerHTML = "You walk up to your foe with a primal hunger in your abdomen. Your foe is still groggy from the beating you gave them, will fulfill your stomach's desire." +
             " You swiftly grab their head with your hands and bring their face to yours. They grunt, expecting a make-out session, only for their eyes to widen as your mouth does the same. You take in their head in one motion and " +
             "pin their arms to their waist, holding them in place. You lick their face, enjoying their taste, as you lean forward, pushing their head and neck into your greedy throat.<br><br> Loud gulping noises can be heard as you stretch your mouth even further " +
             "and take in their shoulders. Your muscles strain and bulge as you lift your meal off the ground, suspending them in the air, allowing their torso to slide down into your stomach, leaving only their weakly-flailing legs outside." +
             " Your stomach bulges as they enter your guts, which give a rumble of approval and anticipation for the rest of its meal. Your hands make their way up to their calves as you grip tightly and give a hard shove, pushing them in to their ankles." +
             "<br><br>You open wide and let their feet slide in, your jaws snapping shut as your food is forced to accept its fate. Your filled stomach stretches and heaves as your prey struggles and pushes in futile attempts to free itself.";
         if (StomachCapacity() / MaxStomachCapacity() > 0.5) {
             DocId("SexText").innerHTML += " You struggle to get back to your feet, your distended stomach sagging heavily with its weight. You wince in discomfort, walking bow-legged for a little to handle its weight.";
         }
         HideVore();
     } else {
         DocId("SexText").innerHTML = "You cannot fit more into your stomach!";
     }
     return;
 };

 function VoreActionsUnbirth() {
     if (enemies[EnemyIndex].Weight < VaginaCapacity()) {
         if (Settings.ImgPack) {
             ImgChose("Unbirth", enemies[EnemyIndex], "Vore");
         }
         enemies[EnemyIndex].StartWeight = enemies[EnemyIndex].Weight;
         player.Vore.Vagina.push(enemies[EnemyIndex]);
         enemies.splice(EnemyIndex, 1);
         DocId("SexText").innerHTML = "Grabbing your opponent, you shove into your pussy!";
         HideVore();
     } else {
         DocId("SexText").innerHTML = "You cannot fit more into your vagina!";
     }
     return;
 };

 function VoreActionsCockVore() {
     if (enemies[EnemyIndex].Weight < BallsCapacity()) {
         if (Settings.ImgPack) {
             ImgChose("CockVore", enemies[EnemyIndex], "Vore");
         }
         enemies[EnemyIndex].StartWeight = enemies[EnemyIndex].Weight;
         player.Vore.Balls.push(enemies[EnemyIndex]);
         enemies.splice(EnemyIndex, 1);
         if (player.SecondRace !== "centaur") { // Isn't it !=
             DocId("SexText").innerHTML = "Your confidently stride up to your opponent, looking at your next meal's form as your reach for your waist. They bend their head forward, and aren't surprised when they are greeted with your erect cock." +
                 " They open their mouth to start sucking, only for your dick to stretch wide as well. Before they have time to react, you thrust forward, quickly enveloping their head within your dick. You use your hands to squeeze the newest bulge in your member as you eagerly thrust around your foe, slowly forcing them deeper with each hump." +
                 " <br><br>Your breathing deepens as their shoulders begin their journey to your sac, stretching your dick wide to accommodate its food. Both of your hands reach around your massively-distended dick as you rub over the bulge its food is making." +
                 " Your sac churns audibly with hunger for its meal, salivating precum to speed up your foe's descent. Your massaging actions causes squelching sounds as your now-massive member greedily sucks in their waist." +
                 " Having recovered slightly from their initial shock they frantically wiggle, causing their body to twist and squirm within your member, their struggles bringing you waves of pleasure as you shiver from their protests. <br><br>You lift your cock with both hands, giving it long, slow strokes to speed up its meal." + // Both hands; your enemy's too heavy for one arm still
                 " You sigh, giving soft humps as all that remains of your foe is a bulge in your shaft, sliding down. Loud sloshing sounds can be heard as your cock's recent meal ends its journey and is deposited in your sac. Your nuts heave and drag against the floor as you haul your soon-to-be load off with you.";
         } else {
             DocId("SexText").innerHTML = "Seeing your opponent lying there defeated gives you an idea; your cock stiffening in anticipation as you make your way to your soon-to-be prey. Your foe looks up from their position and jumps from your large equine form blocking out the sun." +
                 " Standing over your foe you convey your desires as your cock makes a loud 'thwap' against your stomach. Your opponent gets the idea, slowly approaching your shaft(s) and hesitantly stretching their hands forward." +
                 "<br><br> Sensing their hesitation, you made a deafening stomp with your hooves, causing your foe to quickly stroke your dick. You pull your hips back away from your foe, confusing their expectations - they thought you wanted a simple blowjob." +
                 " An excited whip of your tail and a small grunt of dominance are the only signs your prey receive - you make a single thrust at your opponent’s head, your equine shaft hungrily grabbing them up to their chest." +
                 " You instinctively snort as you claim your foe with your cock, its muscles sucking on their form, as if tasting them. Desperate for more, you flex your groin with immense strength and pull your prey in up to their crotch." +
                 "<br><br> Gasps of nerve-wracking pleasure escape you as your prey begins its fruitless struggles inside your monstrous shaft. Not wanting to risk an early orgasm (and releasing them), you repeatedly flex your cock, causing it to beat your meal into submission against your stomach." +
                 " Pleased with your display of power over your meal, you pull in their legs with little effort and seal your cock head around their feet. You sigh in relief as you feel the rest of your prey deposited in your sac. Feeling sated, you make your way back to the road, your nuts sagging heavily between your legs."
         }
         HideVore();
     } else {
         DocId("SexText").innerHTML = "You can't fit any more into your balls!";
     }
     return;
 };

 function VoreActionsBreastVore() {
     if (enemies[EnemyIndex].Weight < BreastCapacity()) {
         if (Settings.ImgPack) {
             ImgChose("BreastVore", enemies[EnemyIndex], "Vore");
         }
         enemies[EnemyIndex].StartWeight = enemies[EnemyIndex].Weight;
         player.Vore.Breast.push(enemies[EnemyIndex]);
         enemies.splice(EnemyIndex, 1);
         var i = "left";
         if (Math.random() > 0.5)
             i = "right";
         DocId("SexText").innerHTML = "Grabbing your opponent, you shove them into your " + i + " nipple.";
         HideVore();
     } else {
         DocId("SexText").innerHTML = "You cannot fit them into your breasts!";
     }
     return;
 };

 function VoreActionsAnalVore() {
     if (enemies[EnemyIndex].Weight < AnalCapacity() + 100) {
         if (Settings.ImgPack) {
             ImgChose("AnalVore", enemies[EnemyIndex], "Vore");
         }
         enemies[EnemyIndex].StartWeight = enemies[EnemyIndex].Weight;
         player.Vore.Anal.push(enemies[EnemyIndex]);
         enemies.splice(EnemyIndex, 1);
         if (player.SecondRace !== "centaur") {
             DocId("SexText").innerHTML = "Seeing your foe fall, you eagerly make your way up to them as you unbutton your pants and undergarments. Your foe sighs as they imagine what you’re going to do next. " +
                 "You turn your body around and lower your ass cheeks to their face. They grab your ass with their hands and bring their mouth to your hole, seeing no other option. Your alternative plan starts as you push your ass forcefully against their face." +
                 " Your foe gasps in surprise as your hole touches their nose and stretches, enveloping their head.<br><br> Muffled protests come from your waist as they instinctively push against your cheeks, attempting to free themselves." +
                 " You squat down and grunt as your rectum pulls hard, forcing your meal up to their chest. As their shoulders get pulled in, their arms can't push against your ass, making it easier to pull them in." +
                 " Your wince as your food makes its way through your gut, stretching it as you pull them in.<br><br> You notice that only their legs are left; you grin and straighten your back, using their limbs as a pseudo-chair." +
                 " You bounce your hips, hammering them further into your bowels. Your cheeks make contact with the ground as they hungrily shove the last of your foe into your depths." +
                 " Rough shoves and struggles in your gut are all that is left of them as your gut conforms and kneads its meal.";
         } else {
             DocId("SexText").innerHTML = "As your foe crumbles from your back hooves' last kick, you decide to keep your back turned and slowly back into them." +
                 " Rubbing their head from the final blow, your opponent has only a second to notice your large equine rear descending on them, trapping them in darkness. Rough grunting and the sounds of squeezing accompany this surprise as you lift your foe up to their chest with your twisted strength." +
                 "<br><br> Your tail flicks upward sharply with each contraction of your anal muscles, your ass feasting upon the poor soul trapped inside. The impressive display of control you have over your rear continues as your prey suddenly disappears up to their waist into your bowels." +
                 " Pleasurable struggles are given to you from inside your equine half as your conquest twists and pushes your sensitive walls, encouraging you to finish your meal.<br><br> Not wanting to disappoint your gut, you make one last effort to envelop your foe with your rectum." +
                 " With immense force, their legs are pulled in, leaving their ankles and feet squeezed harshly by your ass. With a loud \"schluck\" their ankles are pulled in, their feet following close behind." +
                 " A satisfied sigh leaves your mouth, and your ass, as you wiggle your hips in victory over your foe. You head back on your journey, your intestines beginning their work on the fresh meat you've conquered."
         }
         HideVore();
     } else {
         DocId("SexText").innerHTML = "You cannot fit any more into your bowels!";
     }
     return;
 };

 function HideVore() {
     AfterBattleButtons(false, true)
 }