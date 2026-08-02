
// Animación de aparición al hacer scroll

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



elementos.forEach((elemento)=>{


    elemento.classList.add("oculto");


    observador.observe(elemento);


});







// Scroll suave del menú


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








// Efecto de escritura en el título


const titulo = document.querySelector(".hero h1");


if(titulo){


    const textoOriginal = titulo.innerHTML;


    titulo.innerHTML = "";


    let contador = 0;



    function escribir(){


        if(contador < textoOriginal.length){


            titulo.innerHTML += textoOriginal.charAt(contador);


            contador++;


            setTimeout(escribir,70);


        }


    }



    escribir();


}








// Efecto de año automático en el footer


const footer = document.querySelector("#contact p:last-child");


if(footer){


    const año = new Date().getFullYear();


    footer.innerHTML = "© " + año + " iQuickDrop_";


}
