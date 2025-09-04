function updateClock (){
    let clockDiv = document.querySelector('.showclock')
    const now = new Date();
    let  hours = now.getHours();
    let minutes = now.getMinutes();
    let  seconds = now.getSeconds();
    if (minutes<10){
    minutes = "0" + now.getMinutes()
    }
    if(hours<10){
    hours = "0"+now.getHours()
    }
    if (seconds<10){
    seconds = "0"+ now.getSeconds()
    }
    clockDiv.textContent = hours + " : " + minutes + " : " + seconds
}
setInterval(updateClock, 1000);
