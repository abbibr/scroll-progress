const scrollProgress = document.getElementById("scrollbarProgress");

window.addEventListener("scroll",function(){

    const heightDoc = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;
    const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    scrollProgress.style.width = `${(scrollTop / heightDoc)*100}%`;
    
    if(scrolled === heightDoc){
        alert("Progress yakunlandi!");
    }

});