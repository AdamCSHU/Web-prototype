function clock_active() {
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    var session = " am";
    
    if(hour ==0){
        hour = 12;
    }
    else if (hour > 12){
        hour = hour - 12;
        session = " pm";
    }
    hour = (hour < 10) ? "0" + hour : hour;
    minute = (minute < 10) ? "0" + minute : minute;
    second = (second < 10) ? "0" + second : second;


    var time = hour + ":" + minute + ":" + second + session;
    document.getElementById("clock").innerText = time;
    document.getElementById("clock").textContent = time;

    setTimeout(clock_active, 1000);
}

clock_active();