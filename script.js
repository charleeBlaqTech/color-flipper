const colors=["red", "blue", "green", "pink","yellow","grey","purple","orangered", "orange","orchid", "olivedrab"]
const button=document.getElementById("btn");
const body=document.querySelector('body');
const color=document.querySelector(".color");

button.addEventListener('click', function(){
    let randomeNumber=(Math.floor(Math.random()*colors.length))
    for(let i=0; i<randomeNumber; i++){
        body.style.background=colors[i];
        color.innerHTML=colors[i];
    }
})


const hamburger=document.getElementById('hamburg')
const unoder=document.getElementById('unoder1')
hamburger.addEventListener("click", function(){
    document.querySelector('.hamburger').classList.toggle("active");
    document.querySelector('.nav-links').classList.toggle("active");
})


