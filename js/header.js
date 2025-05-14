const headerBtn = document.getElementById("header-btn");
const bgMusic = document.getElementById("bg-music");
const headerBtnText = document.getElementById("header-btn-text");

let isMusicPlay = false;

headerBtn.addEventListener("click", function (e){
    if(isMusicPlay){
        bgMusic.pause();
        bgMusic.currentTime = 0;
        headerBtnText.textContent = "Play music";
    }else{
        bgMusic.play();
        headerBtnText.textContent = "Stop music";
    }

    isMusicPlay = !isMusicPlay;
})

// burger-menu

const burgerBtn = document.getElementById("burger-btn");
const burgerList = document.getElementById("burger-list");

burgerBtn.addEventListener("click", ()=>{
    burgerList.classList.toggle("active");
})





