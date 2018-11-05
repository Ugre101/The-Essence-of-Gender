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
    Children += "<div>Birthed by you<br>"
    for (var e = 0; e < player.Children.length; e++) {
        var Child = "<button type=\"button\">Child " + (e + 1) + "<br>Father: " + player.Children[e].Father + "</button>"
        Children += Child;
    }
    Children += "</div>"
    if (House.Dormmates.length > 0) {
        for (var e = 0; e < House.Dormmates.length; e++) {
            if (House.Dormmates[e].Children.length > 0) {
                Children += "<div>" + House.Dormmates[e].FirstName + " " + House.Dormmates[e].LastName + "<br>"
                for (var i = 0; i < House.Dormmates[e].Children.length; i++) {
                    Child = "<button type=\"button\">Child" + (e + 1) + "</button>"
                    Children += Child;
                }
                Children += "</div>"
            }
        }
    }
    console.log(player.Children)
    document.getElementById("ChildCorner").innerHTML = Children;
}