function auth() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if(screen.width <= 640 || email== "admin@gmail.com" && password=="admin123" 
    || email== "enrique.monje1994@yahoo.com" && password=="goldnboy26"){
        window.location.href = 'https://goldnboy26.github.io/EMFITNESS/gallery.html'
        alert("login Successfully");
    }

    if (email== "admin@gmail.com" && password=="admin123" 
    || email== "enrique.monje1994@yahoo.com" && password=="goldnboy26"){
        window.location.href= 'https://goldnboy26.github.io/EMFITNESS/gallery.html'
        alert("login Successfully");
    }

    else{
        alert("Invalid Information")
        return;
    }
}
  
