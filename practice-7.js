var objet = document.getElementById("objet");
var item = document.getElementById("item");
var counter = 0;
document.addEventListener('click',function jump(){
    if(objet.classList == "animate"){return}
    objet.classList.add("animate");
    setTimeout(function(){
        objet.classList.remove("animate");
    },1500)
});
var checkDead = setInterval(function() {
    let characterTop = parseInt(window.getComputedStyle(objet).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(item).getPropertyValue("left"));
    if(blockLeft<20 && blockLeft>-20 && characterTop>=130){
        item.style.animation = "none";
        alert("Game Over. score: "+Math.floor(counter/100));
        counter=0;
        item.style.animation = "item 3s infinite linear";
    }else{
        counter++;
        document.getElementById("score").innerHTML = Math.floor(counter/100);
    }
}, 10);