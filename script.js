function toggle(button) {
    if (button.classList.contains("is-active")) {
        button.classList.remove("is-active")
    } else{
        button.classList.add("is-active")
    }

}