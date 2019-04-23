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
	    		if (window.innerHeight > 600) {
	    			DocId("EventLogH2").style.display = 'inline-block';
	    		}
	    		DocId("HideEventLog").innerHTML = "H";
	    	} else {
	    		DocId("EventLogPart").style.display = 'none';
	    		DocId("HideEventLog").innerHTML = "S";
	    		DocId("EventLogH2").style.display = 'none';
	    	}
	    });
	    DocId("HideFluids").addEventListener("click", function () {
	    	if (DocId("FluidPart").style.display === 'none') {
	    		DocId("FluidPart").style.display = 'block';
	    		if (window.innerHeight > 600) {
	    			DocId("EventFluidsH2").style.display = 'inline-block';
	    		}
	    		DocId("FluidsMode").style.display = 'inline-block';
	    		DocId("HideFluids").innerHTML = "H";
	    	} else {
	    		DocId("FluidPart").style.display = 'none';
	    		DocId("EventFluidsH2").style.display = 'none';
	    		DocId("FluidsMode").style.display = 'none';
	    		DocId("HideFluids").innerHTML = 'S';
	    	}
	    });
	    DocId("FluidsMode").addEventListener("click", function () {
	    	const menu = DocId("FluidContainer"),
	    		Fluid = DocId("FluidsMode");
	    	switch (Fluid.innerHTML) {
	    		case "1":
	    			menu.setAttribute("class", "TwoColumn");
	    			Fluid.innerHTML = 2;
	    			break;
	    		case "2":
	    			menu.setAttribute("class", "ThreeColumn");
	    			Fluid.innerHTML = 3;
	    			break;
	    		case "3":
	    			menu.setAttribute("class", "AutoColumn");
	    			Fluid.innerHTML = "A";
	    			break;
	    		case "A":
	    			menu.setAttribute("class", "OneColumn");
	    			Fluid.innerHTML = 1;
	    			break;
	    	}
	    });
	    DocId("EventLogPart").addEventListener("click", function () {
	    	const EventLog = DocId("EventLog");
	    	if (EventLog.style.width > 20 + "vw") {
	    		EventLog.style.width = 20 + "vw";
	    		EventLog.style.maxHeight = 50 + "vh";
	    		DocId("FluidPart").style.display = 'block';
	    		if (window.innerHeight > 600) {
	    			DocId("EventFluidsH2").style.display = 'inline-block';
	    		}
	    		DocId("FluidsMode").style.display = 'inline-block';
	    		DocId("HideFluids").style.display = 'inline-block';
	    	} else {
	    		EventLog.style.width = 80 + "vw";
	    		EventLog.style.maxHeight = 80 + "vh";
	    		DocId("FluidPart").style.display = 'none';
	    		DocId("EventFluidsH2").style.display = 'none';
	    		DocId("FluidsMode").style.display = 'none';
	    		DocId("HideFluids").style.display = 'none';
	    	}
	    });