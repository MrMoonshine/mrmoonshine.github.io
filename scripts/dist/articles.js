function setArticles() {
    var inputs = document.getElementsByName("articleinput");
    var articles = document.
        getElementById("articlespace").
        getElementsByTagName("article");
    if (inputs.length != articles.length) {
        console.log("Wrong Number Of Articles");
        return;
    }
    var myTopic;
    //Read Inputs
    for (var a = 0; a < inputs.length; a++) {
        if (inputs[a].checked) {
            //set Article Name
            myTopic = inputs[a].value;
        }
    }
    for (var _i = 0, articles_1 = articles; _i < articles_1.length; _i++) {
        var a_1 = articles_1[_i];
        a_1.style.display = "none";
    }
    if (document.getElementsByName(myTopic)[0] == null) {
        alert("This article doesn't exist");
        return;
    }
    document.getElementsByName(myTopic)[0].style.display = "block";
}
function infoupt(si) {
    if (si === void 0) { si = "mrmoonshine.github.io"; }
    document.getElementById("infobox").innerHTML = si;
}
function loader() {
    setArticles();
    infoupt();
    for (var a = 0; a < document.getElementsByName("articleinput").length; a++) {
        document.getElementsByName("articleinput")[a].
            addEventListener("change", setArticles);
    }
    var _loop_1 = function (lab) {
        lab.addEventListener("mouseover", function () {
            infoupt(lab.getElementsByTagName("i")[0].innerHTML);
        });
        lab.addEventListener("mouseout", function () {
            infoupt();
        });
    };
    for (var _i = 0, _a = document.getElementsByTagName("label"); _i < _a.length; _i++) {
        var lab = _a[_i];
        _loop_1(lab);
    }
}
window.onload = loader;
