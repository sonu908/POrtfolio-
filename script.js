//Funcion to craeate a progress effect
function progresseffect(){
    var skills = document.getElementById("skills");
    var skills_distance = window.innerHeight - skills.getBoundingClientRect().top;
    if(skills_distance >= 300){
        let progresseffect = document.getElementsByClassName("progress");
        progresseffect[0].classList.add("html");
        progresseffect[1].classList.add("CSS");
        progresseffect[2].classList.add("JavaScript");
        progresseffect[3].classList.add("ANGULAR");
        progresseffect[4].classList.add("REACT");
        progresseffect[5].classList.add("NODE");
        // progresseffect[6].classList.add("TailWIND");
       
    }
}


window.onscroll = function(){
    progresseffect();
} 