let menuIcon = document.querySelector("div.header > img.menu-icon");
let menuDiv = document.querySelector("div.menu");
let closeMenuIcon = document.querySelector("div.menu > img.close-menu-icon");

menuIcon.onclick = function () {
    document.body.style.backgroundColor = "#aaa";
    menuDiv.classList.add("show");
};

closeMenuIcon.onclick = function () {
    document.body.style.backgroundColor = "var(--off-white)";
    menuDiv.classList.remove("show");
};

document.onkeyup = function (e) {
    if (e.key === "Escape") {
        document.body.style.backgroundColor = "var(--off-white)";
        menuDiv.classList.remove("show");
    };
};