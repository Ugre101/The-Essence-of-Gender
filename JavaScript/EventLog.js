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
	    		document.getElementById("HideEventLog").value = "Hide";
	    	} else {
	    		document.getElementById("EventLogPart").style.display = 'none';
	    		document.getElementById("HideEventLog").value = "Show";
	    	}
	    });
	    document.getElementById("HideFluids").addEventListener("click", function () {
	    	if (document.getElementById("FluidPart").style.display == 'none') {
	    		document.getElementById("FluidPart").style.display = 'block';
	    		document.getElementById("HideFluids").value = "Hide";
	    	} else {
	    		document.getElementById("FluidPart").style.display = 'none';
	    		document.getElementById("HideFluids").value = 'Show';
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