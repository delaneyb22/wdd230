document.querySelector("#lastModified").textContent = `Last Modification: ${document.lastModified}`;
const date = new Date(document.lastModified);
    document.getElementById('last-modified').innerHTML ="Last Modified:"+date.getDate()+"-"+date.getMonth()+"-"+date.getFullYear()+" "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();


function toggleMenu(){
    document.getElementById("navigation").classList.toggle("open");
}
const x= document.getElementById("hamburger-button");
x.onclick = toggleMenu;