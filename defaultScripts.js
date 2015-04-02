// JavaScript source code

//icon 1
var icon1 = "<img width=\"50\" alt=\"big-ideas-on=hover\" src=\"Images/icons/big-idea-onHover.png\">";
var icon1OnHover = "<img width=\"50\" height=\"50\" alt=\"big-ideas\" src=\"Images/icons/big-idea.png\">";
//icon 2
var icon2 = "<img width=\"50\" height=\"50\" style=\"margin-left: 20%\" alt=\"team\" src=\"Images/icons/team-onHover.png\">";
var icon2OnHover = "<img width=\"50\" height=\"50\" style=\"margin-left: 20%\" alt=\"team\" src=\"Images/icons/team.png\">";
//icon 3
var icon3 = "<img width=\"50\" height=\"50\" style=\"margin-left: 21%\" alt=\"development\" src=\"Images/icons/development-onHover.png\">";
var icon3OnHover = "<img width=\"50\" height=\"50\" style=\"margin-left: 21%\" alt=\"development\" src=\"Images/icons/development.png\">";
//icon 4
var icon4 = "<img width=\"50\" height=\"50\" style=\"margin-left: 20%\" alt=\"development\" src=\"Images/icons/gamepad-onHover.png\">";
var icon4OnHover = "<img width=\"50\" height=\"50\" style=\"margin-left: 20%\" alt=\"development\" src=\"Images/icons/gamepad.png\">";

var isHover = false;

function onHoverHandler(index, hoverIcon, isHover) {
    changeBottomBorder(index, isHover);
    var rowOfIcons = document.getElementById('iconRow');
    var iconInFocus = rowOfIcons.children[index];
    $(iconInFocus).replaceWith(hoverIcon);
}

function changeBottomBorder(index, isHover) {
    if (isHover) {
        var imgPlaceholder = document.getElementById('imageRow');
        placeholderBorder = imgPlaceholder.children[index];
        imgPlaceholder.children[index].style.cursor = "pointer";    //change cursor style to pointer
        $(placeholderBorder).css({ "border-bottom": "2px solid #efedde" });
    }
    else if (!isHover) {
        $(placeholderBorder).css({ "border-bottom": "1px solid #efedde" });
    }
}

$("#imgPlaceholder4").hover(function () {
    isHover = true;
    onHoverHandler(0, icon1, isHover);
}, function () {
    isHover = false;
    onHoverHandler(0, icon1OnHover, isHover);
}).style;

$("#imgPlaceholder5").hover(function () {
    isHover = true;
    onHoverHandler(1, icon2, isHover);
}, function () {
    isHover = false;
    onHoverHandler(1, icon2OnHover, isHover);
});

$("#imgPlaceholder6").hover(function () {
    isHover = true;
    onHoverHandler(2, icon3, isHover);
}, function () {
    isHover = false;
    onHoverHandler(2, icon3OnHover, isHover);
});

$("#imgPlaceholder7").hover(function () {
    isHover = true;
    onHoverHandler(3, icon4, isHover);
}, function () {
    isHover = false;
    onHoverHandler(3, icon4OnHover, isHover);
});
