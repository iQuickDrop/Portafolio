// Animación al cargar

window.addEventListener("load",()=>{

    document.querySelector(".hero").style.opacity="1";

});


// Scroll suave

document.querySelectorAll("a").forEach(link=>{

    link.addEventListener("click",function(e){

        if(this.hash){

            e.preventDefault();

            document.querySelector(this.hash)
            .scrollIntoView({
                behavior:"smooth"
            });

        }

    });

});
