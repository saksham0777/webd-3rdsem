function toggleBulb(){
let on=true;
let bulb=document.getElementById("bulb");

if(on){
    document.getElementById("bulb").src="bulb-on.png";
    on=false;
}
else{
    document.getElementById("bulb").src="bulb-off.png";
    on=true;
    }
}