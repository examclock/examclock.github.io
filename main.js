function setTime() {
    let date = new Date();
    let time = date.toLocaleTimeString();
    document.getElementById("time").innerHTML = time;

    let text = date.toDateString();
    document.getElementById("date").innerHTML = text;
}

setInterval(setTime, 0);