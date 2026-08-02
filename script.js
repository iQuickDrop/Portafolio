
// ANIMACIÓN AL HACER SCROLL

const elementos = document.querySelectorAll(
    ".animar"
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


    elemento.style.transitionDelay = `${index * 0.08}s`;

    observador.observe(elemento);


});








// SCROLL SUAVE DEL MENÚ


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








// EFECTO DE ESCRITURA EN EL TÍTULO


const titulo = document.querySelector(".hero h1");


if(titulo){


    const textoOriginal = titulo.innerHTML;


    titulo.innerHTML = "";


    let contador = 0;



    function escribir(){


        if(contador < textoOriginal.length){


            titulo.innerHTML += textoOriginal.charAt(contador);


            contador++;


            setTimeout(escribir,60);


        }


    }



    escribir();


}








// CURSOR GLOW


const glow = document.querySelector(".cursor-glow");


document.addEventListener("mousemove",(e)=>{


    if(glow){


        glow.style.left = e.clientX - 150 + "px";

        glow.style.top = e.clientY - 150 + "px";


    }


});








// EFECTO 3D EN CARDS


const cards = document.querySelectorAll(".card");


cards.forEach((card)=>{


    card.addEventListener("mousemove",(e)=>{


        const rect = card.getBoundingClientRect();


        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;



        const rotX =

        ((y - rect.height / 2) / rect.height) * 10;



        const rotY =

        ((x - rect.width / 2) / rect.width) * 10;



        card.style.transform = `

        perspective(600px)

        rotateX(${-rotX}deg)

        rotateY(${rotY}deg)

        translateY(-10px)

        `;


    });



    card.addEventListener("mouseleave",()=>{


        card.style.transform = "";


    });


});








// AÑO AUTOMÁTICO


const footer = document.querySelector(
    "#contact p:last-child"
);



if(footer){


    const año = new Date().getFullYear();


    footer.innerHTML =
    "© " + año + " iQuickDrop_";


}








// NAVBAR ACTIVA


const secciones = document.querySelectorAll("section");

const enlaces = document.querySelectorAll("nav a");



window.addEventListener("scroll",()=>{


    let actual = "";



    secciones.forEach((seccion)=>{


        const posicion =
        seccion.offsetTop - 200;



        if(scrollY >= posicion){


            actual = seccion.id;


        }


    });



    enlaces.forEach((link)=>{


        link.style.color="#ddd";



        if(link.getAttribute("href") === "#" + actual){


            link.style.color="#8b5cf6";


        }


    });


});
