
var videoPlayer = document.getElementById("videoPlayer")
var myVideo = document.getElementById("myVideo")

function stopVideo(){

  videoPlayer.style.display= "none";
  
}

  function playVideo (file){
    myVideo.src=file;
    videoPlayer.style.display="block";
  }

  const header = document.querySelector("[data-header]");
  const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});