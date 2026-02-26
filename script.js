let cls = "is-active";
let burgerId = "burger-menu";
let burgerHide = "burger-menu-hide";

function toggle(button) {
    button.classList.contains(cls) ? removeClasses(button) : addClasses(button);
}

function removeClasses(button) {
    button.classList.remove(cls)
    document.getElementById(burgerId).classList.add(burgerHide);

    document.documentElement.style.margin = "initial";
    document.documentElement.style.height = "initial";
    document.documentElement.style.overflow = "initial";

    document.body.style.margin = "initial";
    document.body.style.height = "initial";
    document.body.style.overflow = "initial";
}

function addClasses(button) {
    button.classList.add(cls)
    document.getElementById(burgerId).classList.remove(burgerHide);
    document.documentElement.style.margin = "0";
    document.documentElement.style.height = "100%";
    document.documentElement.style.overflow = "hidden";

    document.body.style.margin = "0";
    document.body.style.height = "100%";
    document.body.style.overflow = "hidden";
}