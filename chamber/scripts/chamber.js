document.querySelector("#lastModified").textContent = `Last Modification: ${document.lastModified}`;
const date = new Date(document.lastModified);
    document.getElementById('last-modified').innerHTML ="Last Modified:"+date.getDate()+"-"+date.getMonth()+"-"+date.getFullYear()+" "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();


const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

function toggleMenu(){
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}