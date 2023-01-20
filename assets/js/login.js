$('#detect-button').click(function(){
            
    var detector = new MobileDetect(window.navigator.userAgent)

    console.log( "Mobile: " + detector.mobile());
    console.log( "Phone: " + detector.phone());
    console.log( "Tablet: " + detector.tablet());
    console.log( "OS: " + detector.os());
    console.log( "userAgent: " + detector.userAgent());
    
  });