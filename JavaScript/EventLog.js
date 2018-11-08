	    // Event log
	    var LogArray = [];
	    var LogHistory = "";

	    function EventLog(LogText) {
	        var newText = LogText + "<br>";
	        LogArray.unshift(newText);
	        while (LogArray.length > Settings.LogLength) {
	            LogArray.pop();
	        }
	        LogHistory = "";
	        for (var e = 0; e < LogArray.length; e++) {
	            LogHistory += LogArray[e];
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