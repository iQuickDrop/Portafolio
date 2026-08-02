// ===============================
// PARTICULAS ROJAS
// ===============================


const canvas = document.getElementById("particles");

const ctx = canvas.getContext("2d");


canvas.width = window.innerWidth;

canvas.height = window.innerHeight;



let particulas = [];



class Particula{


    constructor(){


        this.x = Math.random() * canvas.width;

        this.y = Math.random() * canvas.height;


        this.size = Math.random() * 3 + 1;


        this.speedY = Math.random() * 0.8 + 0.2;


        this.opacity = Math.random();



    }



    update(){


        this.y -= this.speedY;



        if(this.y < -10){

            this.y = canvas.height + 10;

            this.x = Math.random() * canvas.width;

        }


    }



    draw(){


        ctx.beginPath();


        ctx.arc(
            this.x,
            this.y,
            this.size,
            0,
            Math.PI * 2
        );


        ctx.fillStyle =
        `rgba(255,0,0,${this.opacity})`;


        ctx.shadowBlur = 15;

        ctx.shadowColor = "#ff0000";


        ctx.fill();


    }


}





for(let i = 0; i < 80; i++){


    particulas.push(new Particula());


}





function animarParticulas(){


    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );



    particulas.forEach(p=>{


        p.update();


        p.draw();



    });



    requestAnimationFrame(animarParticulas);



}



animarParticulas();







window.addEventListener("resize",()=>{


    canvas.width = window.innerWidth;

    canvas.height = window.innerHeight;



});









// ===============================
// ANIMACIONES SCROLL
// ===============================



const elementos = document.querySelectorAll(
    ".card, .box, .skills span"
);



const observador = new IntersectionObserver(
(entradas)=>{


    entradas.forEach(entrada=>{


        if(entrada.isIntersecting){


            entrada.target.classList.add(
                "visible"
            );


        }



    });



},
{

    threshold:.15

});





elementos.forEach((elemento,index)=>{


    elemento.style.transitionDelay =
    `${index * .08}s`;



    observador.observe(elemento);



});








// ===============================
// SCROLL SUAVE
// ===============================



document.querySelectorAll("nav a")
.forEach(link=>{


    link.addEventListener(
    "click",
    e=>{


        e.preventDefault();


        document
        .querySelector(
            link.getAttribute("href")
        )
        .scrollIntoView({

            behavior:"smooth"

        });



    });



});








// ===============================
// EFECTO ESCRITURA
// ===============================



const titulo =
document.querySelector(".hero h1");



if(titulo){



    const contenido =
    titulo.innerHTML;



    titulo.innerHTML="";



    let i=0;



    function escribir(){



        if(i < contenido.length){



            titulo.innerHTML +=
            contenido.charAt(i);



            i++;



            setTimeout(
                escribir,
                60
            );



        }



    }



    escribir();



}









// ===============================
// CURSOR GLOW ROJO
// ===============================



const glow =
document.querySelector(
    ".cursor-glow"
);



document.addEventListener(
"mousemove",
(e)=>{


    if(glow){


        glow.style.left =
        e.clientX - 150 + "px";


        glow.style.top =
        e.clientY - 150 + "px";



    }



});









// ===============================
// EFECTO 3D CARDS
// ===============================



document.querySelectorAll(".card")
.forEach(card=>{


    card.addEventListener(
    "mousemove",
    e=>{


        const rect =
        card.getBoundingClientRect();



        const x =
        e.clientX - rect.left;



        const y =
        e.clientY - rect.top;



        const rotX =
        ((y - rect.height/2)
        / rect.height) * 10;



        const rotY =
        ((x - rect.width/2)
        / rect.width) * 10;




        card.style.transform =
        `perspective(700px)
        rotateX(${-rotX}deg)
        rotateY(${rotY}deg)
        translateY(-10px)`;



    });



    card.addEventListener(
    "mouseleave",
    ()=>{


        card.style.transform="";


    });



});








// ===============================
// AÑO AUTOMATICO
// ===============================



const footer =
document.querySelector(
"#contact p:last-child"
);



if(footer){


    footer.innerHTML =
    "© " +
    new Date().getFullYear() +
    " iQuickDrop_";


}
