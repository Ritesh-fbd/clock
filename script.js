let is24hour=true;
function updatedclock(){
    let now= new Date();
    let hours=now.getHours();
    let minutes=now.getMinutes();
    let seconds=now.getSeconds();
    if(!is24hour){
        let suffix=hours>=12?"PM":"AM";
        hours=hours%12;
        document.getElementById("clock").innerText
        =`${pod(hours)}:${pod(minutes)}:${pod(seconds)} ${suffix}`;}
    else{
        document.getElementById("clock").innerText
        =`${pod(hours)}:${pod(minutes)}:${pod(seconds)}`;}
}
function pod(unit){
    return unit<10?"0"+unit:unit;}
setInterval(updatedclock,1000);
updatedclock();
document.getElementById("toggleFormat").addEventListener("click",()=>{
    is24hour=!is24hour;
    document.getElementById("toggleFormat").innerText=
    is24hour?"Switch to 12-hour":"Switch to 24-hour";
    updatedclock();
});