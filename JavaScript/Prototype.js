// Capitalize first letter of a string
String.prototype.Capitalize = function () {
    return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
}

/* Checks if a array has duplicate value and if it does output a array without duplicate value
 to console so I can paste new array into code */
Array.prototype.RemoveDup = function () {
    this.sort();
    var removed = [];
    for (var e = 0; e < this.length; e++) {
        if (this[e] == this[e + 1]) {
            console.log("Array contains duplicates");
            removed.push(this.splice(e, 1));
            this.splice(e, 1);
        }
    }
    if (removed.length > 0) {
        console.log(this)
        console.log("Duplicates: " + removed);
    }
}

function InputButton(Value, Title = "") { // Save space and stop repeating same lines
    var button = document.createElement("input");
    button.setAttribute("type", "button");
    button.setAttribute("value", Value);
    button.setAttribute("title", Title);
    return button;
}

function ButtonButton(Title = "") { // Same as above but for <button>
    var button = document.createElement("button");
    button.setAttribute("type", "button");
    button.setAttribute("title", Title);
    return button;
}

function LeaveBuilding() {
    var Leave = document.createElement("input");
    Leave.setAttribute("type", "button");
    Leave.setAttribute("value", "Leave");
    Leave.addEventListener("click", function () {
        battle = false;
        document.getElementById("map").style.display = 'block';
        document.getElementById("buttons").style.display = 'block';
        document.getElementById("EmptyButtons").style.display = 'none';
        document.getElementById("status").style.display = 'block';
        Buildings.style.display = 'none';
        while (Buildings.hasChildNodes()) {
            Buildings.removeChild(Buildings.firstChild);
        }
        return;
    });
    return Leave
}