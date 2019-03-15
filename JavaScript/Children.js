document.getElementById("Children").addEventListener("click", function () {
    DisplayNone();
    document.getElementById("ChildrenMenu").style.display = 'block';
    Childs();
});
document.getElementById("LeaveChildrenMenu").addEventListener("click", function () {
    DisplayNone();
    document.getElementById("DetailedInfo").style.display = 'block';
})

function Childs() {
    var Children = [];
    Children += "<div>By you<br>"
    for (var e = 0; e < player.Children.length; e++) {
        var age = Math.round(player.Children[e].AgeCounter / 365);
        if (age < 1) {
            age = Math.round(player.Children[e].AgeCounter / 30) + " months";
        } else {
            age += " years"
        }
        var Child = "<button type=\"button\">Child " + (e + 1) + "<br>Father: " + player.Children[e].Father +
            "<br>" + age + " old</button>"
        Children += Child;
    }
    Children += "</div>"
    if (House.Dormmates.length > 0) {
        for (var e of House.Dormmates) {
            if (e.Children.length > 0) {
                Children += "<div>" + e.FirstName + " " + e.LastName + "<br>"
                for (var i = 0; i < e.Children.length; i++) {
                    var age = Math.round(e.Children[i].AgeCounter / 365);
                    if (age < 1) {
                        age = Math.round(e.Children[i].AgeCounter / 30) + " months";
                    } else {
                        age += " years"
                    }
                    Child = "<button type=\"button\">Child " + (i + 1) + "<br>" + age + " old </button>"
                    Children += Child;
                }
                Children += "</div>"
            }
        }
    }
    console.log(player.Children)
    document.getElementById("ChildCorner").innerHTML = Children;
}