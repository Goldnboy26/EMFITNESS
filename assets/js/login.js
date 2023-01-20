const ua = detect.parse(navigator.userAgent)
const button = document.querySelector('login')

if (ua.device !==null){
if(ua.device.family=== 'iPhone'){
    button.textContent= 'login'
    button.href = 'https://goldnboy26.github.io/EMFITNESS/gallery.html'
  }
}
