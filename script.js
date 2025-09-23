let is24hour = true;
let isDark = true;

function updatedclock(){
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    if(!is24hour){
        let suffix = hours >= 12 ? "PM" : "AM";
        hours = hours % 12;
        hours = hours ? hours : 12; // Fix 0 to 12
        document.getElementById("clock").innerText
            = `${pod(hours)}:${pod(minutes)}:${pod(seconds)} ${suffix}`;
    } else {
        document.getElementById("clock").innerText
            = `${pod(hours)}:${pod(minutes)}:${pod(seconds)}`;
    }
}

function pod(unit){
    return unit < 10 ? "0" + unit : unit;
}

setInterval(updatedclock, 1000);
updatedclock();

document.getElementById("toggleFormat").addEventListener("click", ()=>{
    is24hour = !is24hour;
    document.getElementById("toggleFormat").innerText =
        is24hour ? "Switch to 12-hour" : "Switch to 24-hour";
    updatedclock();
});

document.getElementById("togglemode").addEventListener("click", () => {
    isDark = !isDark;
    if(isDark){
        document.getElementById("togglemode").textContent="DarkMode";
    }
    else{
        document.getElementById("togglemode").textContent="LightMode";
    }
    document.body.style.background = isDark ? "#1e1e1e" : "white";
    document.body.style.color = isDark ? "white" : "black";
});
