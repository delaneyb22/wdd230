var temp= 57;
var windSpeed= 15;
var windChill= (35.74 + (0.6215 * temp))-(35.75 * Math.pow(windSpeed,0.16)) + (0.4275*temp*Math.pow(windSpeed,0.16));
if(temp<=50 && windSpeed>3){
var windChill= Math.round(windChill);
document.getElementById("windChill").innerHTML= windChill;}
else{document.getElementById("windChill").innerHTML="N/A"}
