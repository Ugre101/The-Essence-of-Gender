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
	    	DocId("EventText").innerHTML = LogHistory;
	    }
	    DocId("HideEventLog").addEventListener("click", function () {
	    	if (DocId("EventLogPart").style.display === 'none') {
	    		DocId("EventLogPart").style.display = 'block';
	    		DocId("EventLogH2").style.display = 'inline-block';
	    		DocId("HideEventLog").value = "Hide";
	    	} else {
	    		DocId("EventLogPart").style.display = 'none';
	    		DocId("HideEventLog").value = "Show E";
	    		DocId("EventLogH2").style.display = 'none';
	    	}
	    });
	    DocId("HideFluids").addEventListener("click", function () {
	    	if (DocId("FluidPart").style.display === 'none') {
	    		DocId("FluidPart").style.display = 'block';
	    		DocId("EventFluidsH2").style.display = 'inline-block';
	    		DocId("FluidsMode").style.display = 'inline-block';
	    		DocId("HideFluids").value = "Hide";
	    	} else {
	    		DocId("FluidPart").style.display = 'none';
	    		DocId("EventFluidsH2").style.display = 'none';
	    		DocId("FluidsMode").style.display = 'none';
	    		DocId("HideFluids").value = 'Show F';
	    	}
	    });
	    DocId("FluidsMode").addEventListener("click", function () {
	    	const menu = DocId("FluidContainer"),
	    		Fluid = DocId("FluidsMode");
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
	    DocId("EventLogPart").addEventListener("click", function () {
	    	const EventLog = DocId("EventLog");
	    	if (EventLog.style.width > 20 + "vw") {
	    		EventLog.style.width = 20 + "vw";
	    		EventLog.style.maxHeight = 50 + "vh";
	    	} else {
	    		EventLog.style.width = 80 + "vw";
	    		EventLog.style.maxHeight = 80 + "vh";
	    	}
	    });