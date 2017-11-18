var countDown = new Date("Jan 8, 2018 12:00:00").getTime();

var x = setInterval(function() {
    
    var now = new Date().getTime();
    
    var distance = countDown - now;
    
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    document.getElementById("time").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s  until the CFB Playoffs!";
    
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("time").innerHTML = "EXPIRED";
    }
}, 1000);