	    // Event log
	    var LogArray = [];

	    function EventLog(LogText) {
	    	var newText = LogText + "<br>";
	    	LogArray.unshift(newText);
	    	while (LogArray.length > Settings.LogLength) {
	    		LogArray.pop();
	    	}
	    	var LogHistory = "";
	    	for (var e = 0; e < LogArray.length; e++) {
	    		LogHistory += LogArray[e] + "<br>";
	    	}
	    	//LogHistory = newText + LogHistory;
	    	document.getElementById("EventText").innerHTML = LogHistory;
	    }
	    document.getElementById("HideEventLog").addEventListener("click", function () {
	    	if (document.getElementById("EventLogPart").style.display == 'none') {
				document.getElementById("EventLogPart").style.display = 'block';
				document.getElementById("EventLogH2").style.display = 'inline-block';
	    		document.getElementById("HideEventLog").value = "Hide";
	    	} else {
	    		document.getElementById("EventLogPart").style.display = 'none';
				document.getElementById("HideEventLog").value = "Show E";
				document.getElementById("EventLogH2").style.display = 'none';
	    	}
	    });
	    document.getElementById("HideFluids").addEventListener("click", function () {
	    	if (document.getElementById("FluidPart").style.display == 'none') {
				document.getElementById("FluidPart").style.display = 'block';
				document.getElementById("EventFluidsH2").style.display = 'inline-block';
				document.getElementById("FluidsMode").style.display = 'inline-block';
	    		document.getElementById("HideFluids").value = "Hide";
	    	} else {
				document.getElementById("FluidPart").style.display = 'none';
				document.getElementById("EventFluidsH2").style.display = 'none';
				document.getElementById("FluidsMode").style.display = 'none';
	    		document.getElementById("HideFluids").value = 'Show F';
	    	}
	    });
	    document.getElementById("FluidsMode").addEventListener("click", function () {
	    	var menu = document.getElementById("FluidContainer");
	    	var Fluid = document.getElementById("FluidsMode");
	    	switch (Fluid.value) {
	    		case "1":
	    			menu.setAttribute("class", "TwoColumn");
	    			Fluid.value = 2;
	    			break;
	    		case "2":
	    			menu.setAttribute("class", "ThreeColumn");
	    			Fluid.value = 3;
	    			break;
	    		case "3":
	    			menu.setAttribute("class", "AutoColumn");
	    			Fluid.value = "A";
	    			break;
	    		case "A":
	    			menu.setAttribute("class", "OneColumn");
	    			Fluid.value = 1;
	    			break;
	    	}
	    });
	    var EventMax = false;
	    document.getElementById("EventLogPart").addEventListener("click", function () {
	    	if (EventMax) {
	    		document.getElementById("EventLog").style.width = 20 + "vw";
	    		document.getElementById("EventLog").style.maxHeight = 50 + "vh";
	    		EventMax = false;
	    	} else {
	    		document.getElementById("EventLog").style.width = 80 + "vw";
	    		document.getElementById("EventLog").style.maxHeight = 80 + "vh";
	    		EventMax = true;
	    	}
	    	console.log("Clicks")
	    });