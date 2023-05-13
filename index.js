setInterval(() => {
    let day = new Date()
    let hours = document.querySelector("#hours");
    let minutes = document.querySelector("#minutes");
    let seconds = document.querySelector("#seconds");
    let meridian = document.querySelector("#meridian");

    let  hr = new Date().getHours();
    let mins = new Date().getMinutes();
    let secs = new Date().getSeconds();
    let am = hr >= 12 ? "PM" : "AM";
    
    if(hr > 12) {
        hr= hr - 12
    }
    
    hr = (hr < 10) ? "0" + hr : hr
    mins = (mins < 10) ? "0" + mins :mins
    secs = (secs < 10) ? "0" + secs : secs

        
    hours.innerHTML = hr;
    minutes.innerHTML = mins;
    seconds.innerHTML = secs;
    meridian.innerHTML = am;

});
