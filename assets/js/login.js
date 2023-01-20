$('#detect-button').click(function(){
            
    var detector = new MobileDetect(window.navigator.userAgent)

    console.log( "Mobile: " + detector.mobile());
    console.log( "Phone: " + detector.phone());
    console.log( "Tablet: " + detector.tablet());
    console.log( "OS: " + detector.os());
    console.log( "userAgent: " + detector.userAgent());

    if (email== "enrique.monje1994@yahoo.com" && password=="goldnboy26"){
        window.location.href= 'https://goldnboy26.github.io/EMFITNESS/gallery.html'
        alert("login Successfully");
    }

    else{
        alert("Invalid Information")
        return;
    }
    
  });