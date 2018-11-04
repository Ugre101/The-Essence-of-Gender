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
    for (var e = 0; e < player.Children.length; e++) {
        var Child = "<button type=\"button\">Child" + (e+1) + "<br>Mother: "+player.Children[e].Mother+"</button>"
        Children += Child;
    }
    console.log(player.Children)
    document.getElementById("ChildCorner").innerHTML = Children;
}