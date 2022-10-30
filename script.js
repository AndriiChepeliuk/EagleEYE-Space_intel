const body = document.querySelector("body"),
    sidebar = body.querySelector(".sidebar"),
    toggle = body.querySelector(".toggle"),
    seachBtn = body.querySelector(".search-box"),
    modeSwitch = body.querySelector(".mode"),
    modeText = body.querySelector(".mode-text");

    modeSwitch.addEventListener("click", () =>{
        body.classList.toggle("dark");
    });