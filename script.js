// ANIMACIONES AL HACER SCROLL

const elementos = document.querySelectorAll(
    ".card, .box, .skills span"
);


const observador = new IntersectionObserver((entradas)=>{

    entradas.forEach((entrada)=>{

        if(entrada.isIntersecting){

            entrada.target.classList.add("visible");

        }

    });

},{
    threshold:0.15
});



elementos.forEach((elemento,index)=>{

    elemento.classList.add("oculto");

    elemento.style.transitionDelay = `${index * 0.1}s`;

    observador.observe(elemento);

});




// SCROLL SUAVE

document.querySelectorAll("nav a").forEach((link)=>{

    link.addEventListener("click",(e)=>{

        e.preventDefault();

        const destino = document.querySelector(
            link.getAttribute("href")
        );

        destino.scrollIntoView({
            behavior:"smooth"
        });

    });

});




// EFECTO ESCRITURA

const titulo = document.querySelector(".hero h1");


if(titulo){

    const texto = titulo.innerHTML;

    titulo.innerHTML="";

    let i=0;


    function escribir(){

        if(i < texto.length){

            titulo.innerHTML += texto.charAt(i);

            i++;

            setTimeout(escribir,60);

        }

    }


    escribir();

}




// AÑO AUTOMÁTICO

const footer = document.querySelector("#contact p:last-child");


if(footer){

    footer.innerHTML =
    "© " + new Date().getFullYear() + " iQuickDrop_";

}
