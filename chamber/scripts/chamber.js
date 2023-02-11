document.querySelector("#last-modified").textContent = `Last Modification: ${document.lastModified}`;
const lastModifiedDate = new Date(document.lastModified);
    document.getElementById('last-modified').innerHTML ="Last Modified:"+lastModifiedDate.getMonth()+"-"+lastModifiedDate.getDate()+"-"+lastModifiedDate.getFullYear()+" "+lastModifiedDate.getHours()+":"+lastModifiedDate.getMinutes()+":"+lastModifiedDate.getSeconds();


const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

function toggleMenu(){
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}

//header date
const currentDate = new Date();
 const month = currentDate.toLocaleString('default', { month: 'long' });
    document.getElementById("currentdate").innerHTML =month+" "+currentDate.getDate()+", "+currentDate.getFullYear();

//display banner mon tues

let bannerMessage; 
const bannerDay  = new Date().getDay();        // current date/time
            
switch(bannerDay) {
    case 0://sunday
        bannerMessage = '';
        break;
    case 1:
        bannerMessage = '🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m';
        break;
    case 2://tuesday
        bannerMessage = '🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m';
        break;
    case 3://wed
        bannerMessage = '🤝🏼 Come join us for the chamber';
        break;
    case 4:
        bannerMessage = '';
        break;
    case 5:
        bannerMessage = '';
        break;
    case 6:
        bannerMessage = '';
        break;
        }
document.getElementById("banner").innerHTML = bannerMessage;



