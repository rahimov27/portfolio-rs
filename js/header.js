const headerBtn = document.getElementById("header-btn");
const bgMusic = document.getElementById("bg-music");
const headerBtnText = document.getElementById("header-btn-text");

let isMusicPlay = false;

headerBtn.addEventListener("click", ()=>{
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




// headerBtnText.addEventListener("click",()=>{
//     headerBtnText.textContent = "Stop music";
//     bgMusic
// })