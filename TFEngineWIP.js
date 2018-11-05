/*Blank Template
var species + TF{
	TF1 : { //set main species
		End: 1000, //# that the TF ends at, currently 1000 default
		EndTF: "human", //sets player.race
		500: "commentary", //when the counter hits this #, print this to event log
		10 : repeat, // trying to setup a repeat function
		10r : addMilk(0.05), //Every 10 increments to the counter will do this
		//Any other attribute should be able to be added here
	}
		TF2 : { //set sub species
		End: 1000, //# that the TF ends at, currently 1000 default
		EndTF: "human", //sets player.race
		GenChange: 500, //# where player's genitals change
		Genitals: "human", //genitals change to this type
		500: "commentary" //when the counter hits this #, print this to event log
	}
}
*/
player = {Race : ""}
var TF = {
    Status: false,
    Counter: 0,
    To: "human",
	SnowCheck : "humanTF",
	Part: "TF1"
}

var humanTF = {
	TF1 : {
		End: 1000, 
		EndTF: "human", 
		500: "Your body starts to feel familiar...",
		1000: "You are now a human!"
	},
	TF2 : {
		End: 1000, 
		EndTF: "human", 
		GenChange: 500, 
		Genitals: "human", 
		500: "Your body starts to feel familiar...",
		1000: "You are now a human!"
	}
}

var elfTF = {
	TF1 : {
		End: 1000, 
		EndTF: "elf", 
		500: "Your ears grow to a pointy shape.",
		1000: "You are now an elf!"
	},
	TF2 : {
		End: 1000, 
		EndTF: "human", 
		GenChange: 500, 
		Genitals: "human", 
		500: "Your skin feels smooth as silk.",
		1000: "Completing the transfomation you are now half elf, half " + player.Race
	}
}

var centaurTF = {
	TF2 : {
		End: 1000, 
		EndTF: "centaur", 
		GenChange: 800, 
		Genitals: "equine", 
		300 : "The changes to your torso is so dramatic you fall to the ground. While trying to regain your balance, you see your torso split into two, the lower one parallel to the ground.",
        600 : "Your legs transform to those of horse and where the split between the old and new torso is you grow a second set of horse legs.",
        800 : "You genitals shifts position and transform into their equine equivalent.",
		1000: "Completing the transformation you are now a centaur with a horse's lower body and a " + player.Race + " upper body."
	}
}

var equineTF = {
	TF2 : {
		End: 1000,
		EndTF: "equine",
		GenChange : 600,
		Genitals : "equine",
        300 : "The skin on your legs thickens and grows a thin layer of fur. Your toes fuse together transforming into hooves.",
		600 : "Your genitals transform into their equine equivalent.",
		1000 : "Completing the transformation you are now a satyr with equine lower body and a " + player.Race + " upper body."
        },
    TF1 : {
		End : 1000,
		EndTF : "equine",
		1000 : "Completing the transformation you are now an anthropomorphic equine.",
        500 : "You watch the fur rising up your body, soon covering the rest of your skin."
	}
}

function TfEngine(Tf_to) {
	if (!TF.Status) {
        TF.Status = true;
        TF.To = Tf_to;
		SnowCheck = Tf_to + "TF";
		if(player.SecondRace == TF.To)
			TF.Part = "TF1";
		else
			TF.Part = "TF2";
        TF.Counter = 0;
		console.log(TF.To);
		if(player.SecondRace === TF.To && player.Race === TF.To)
		{
			TF.Status = false;
			return;
		}
    } else {
		var w = TF.Part;
        TF.Counter++;
		var x = TF.Counter;
		console.log("Test: "+this[SnowCheck.w]);
        if(eval(SnowCheck.w.hasOwnProperty(x)))
		{
			EventLog(SnowCheck.w[x]);
		}
		if(eval(SnowCheck.w.hasOwnProperty(GenChange)))
		{
			if(SnowCheck.w.GenChange == x)
				GenitalChange(SnowCheck.w.Genitals);
		}
		if(SnowCheck.w.hasOwnProperty(Repeat))
		{
			for(var q = 0; q < SnowCheck.w.Repeat.length; q++)
			{
				var s = Object.keys(SnowCheck.w.Repeat)[q];
				if(TF.Counter % s == 0)
					SnowCheck.w.Repeat[s];
			}
		}
		if(SnowCheck.w.End == TF.Counter)
		{
			TF.Status = false;
			TF.Counter = 0;
		}
    }
}