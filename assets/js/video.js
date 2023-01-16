
var videoPlayer = document.getElementById("videoPlayer")
var myVideo = document.getElementById("myVideo")

function stopVideo(){

  videoPlayer.style.display= "none";
  
}

  function playVideo (file){
    myVideo.src=file;
    videoPlayer.style.display="block";
  }

  const toTop = document.querySelector(".to-top");

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
      toTop.classList.add("active");
    } else {
      toTop.classList.remove("active");
    }
  })