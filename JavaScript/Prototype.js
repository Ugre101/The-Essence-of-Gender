// Capitalize first letter of a string
String.prototype.Capitalize = function () {
    return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
}

/* Checks if a array has duplicate value and if it does output a array without duplicate value
 to console so I can paste new array into code */
Array.prototype.RemoveDup = function () {
    this.sort();
    for (var e = 0; e < this.length; e++) {
        if (this[e] == this[e + 1]) {
            console.log(true);
            this.splice(e, 1);
            console.log(this)
        }
    }
}