const hour = document.getElementById("hr");
const minute = document.getElementById("min");
const second = document.getElementById("sec");

setInterval(() => {
    date = new Date()
    // console.log(date);
    hr = date.getHours();
    min = date.getMinutes();
    sec = date.getSeconds();
    perHr = hr + (min/60);
    perMin = min + (sec/60);
    
    // hour.style.animation = "animation 1s infinite"
    hour.style.transform = `rotate(calc(30deg * ${perHr} )`
    minute.style.transform = `rotate(calc(6deg * ${perMin}))`
    second.style.transform = `rotate(calc(6deg * ${sec}))`
    
}, 1000);
